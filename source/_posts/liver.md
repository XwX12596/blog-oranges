---
title: 看V的人是这样的
date: 2023-06-15 00:27:31
tags:
---

# 如题

```bash
#!/bin/bash
liverc=""$HOME"/.liverc"
url='https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids'
greeting='GET DA⭐ZE'
bye='Enjoy Yourself!!'
sorry='DAMEDAYO!'
tip='Press Enter To Exit...'

while IFS=' ' read name ID; do
	table+=(["$ID"]="$name")
done < "$liverc"

printf "\e[35m%s\e[0m\n" "Requesting..."
respond=$(curl -s \
	'https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids' \
	-H 'Content-Type: application/json' \
	-d '{"uids": ['$(IFS=,; echo "${!table[*]}")']}')

IDs=($(echo $respond | jq '.["data"]| 'keys'' \
| sed -e 's/"//g' -e 's/,/ /g' -e 's/\[//g' -e 's/\]//g'))
count=1

for ID in ${IDs[@]} ; do
	result=$(echo $respond | jq '.["data"] | .["'${ID}'"] \
    | [.live_status, .title, .live_time, .room_id]')
	result=$(echo $result | sed -e 's/\[//g' -e 's/\]//g' -e  's/ //g' -e 's/,/ /g' )
	IFS=' ' read live_status title live_time room_id<<< $result
	live_time=$(date -d @$live_time +"%H:%M:%S")
	if [[ ${live_status} == 1 ]]; then
		title=$(echo ${title} | sed -e 's/"//g' -e 's/【/「/g' -e 's/】/」/g')
		buffer+='printf "%d\t%s\t\e[90m%s\e[0m\t\e[32m%s\e[0m\n"\
         "'$count'" "'${table["${ID}"]}'" "'${title}'" "'${live_time}'" ;'
		room_ids+=($room_id)
		count=$((${count}+1))
	fi
done

if [[ $buffer != '' ]]
then
	printf "\e[35m%s\e[0m\n" "$greeting"
	buffer='printf "\e[34mNO\tID\tTitle\tStart\n\e[0m";'$buffer
	eval "$buffer" | column -t
	if [[ ${#room_ids[@]} != 0 ]]; then
		let total=${#room_ids[@]}-1
		printf "\e[35m%s\e[0m\n" "choose..."
		read -a choices
		if [[ $(echo $choices | grep -E 'a|A') != '' ]]; then
			choices=($(seq -s ' ' 0 $total))
		fi
		for choice in ${choices[@]}; do
			if [[ $choice -lt ${#room_ids[@]} ]]; then
				bili-live ${room_ids[$(($choice - 1))]} &
			fi
		done	
	printf "\e[35m%s\e[0m\n" "$bye"
	fi
else
	printf "\e[35m%s\e[0m\n" "$sorry"
	printf "\e[35m%s\e[0m\n" "$tip"
fi
read
```

> ~/.liverc实例如下

```
泠鸢yousa 282994
hanser 11073
小缘 5055
ninnikuu 11431931
纱依shayi 3461576189282324
```
