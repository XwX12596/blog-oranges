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
IDs=($(echo $respond | jq '.["data"]| 'keys'' | sed -e 's/"//g' -e 's/,/ /g' -e 's/\[//g' -e 's/\]//g'))
printf "\e[35m%s\e[0m\n" "$greeting"

count=1
for ID in ${IDs[@]} ; do
        result=$(echo $respond | jq '.["data"] | .["'${ID}'"] | [.live_status, .title, .live_time, .room_id, .short_id]')
        title=$(echo $result | sed -e 's/.*"\(.*\)".*/\1/' -e 's/"//g' -e 's/"//g' -e 's/【/「/g' -e 's/】/」/g')
        result=$(echo $result | sed -e 's/".*", //g' -e 's/, / /g' -e "s/\[//g" -e 's/\]//g')
        IFS=' ' read live_status live_time room_id short_id<<< $result
        if [[ ${live_status} == 1 ]]; then
                if [[ ${short_id} !=  0 ]]; then
                        room_id=${short_id}
                fi
                live_time=$(date -d @$live_time +"%H:%M:%S")
                buffer+='printf "%d\t%s\t\e[90m%s\e[0m\t\e[32m%s\e[0m\t%s\n" "'$count'" "'${table["${ID}"]}'" "'${title}'" "'${live_time}'" "'${room_id}'";'
                room_ids+=($room_id)
                count=$((${count}+1))
        fi
done

if [[ $buffer != '' ]]
then
        buffer='printf "\e[34mNO\tNickname\tTitle\tStart\tRoom_ID\n\e[0m";'$buffer
        eval "$buffer" | column -t -s $'\t'
        if [[ ${#room_ids[@]} != 0 ]]; then
                let total=${#room_ids[@]}-1
                printf "\e[35m%s\e[0m\n" "choose..."
                read -a choices
                if [[ $(echo $choices | grep -E 'a|A') != '' ]]; then
                        choices=($(seq -s ' ' 0 $total))
                fi
                for choice in ${choices[@]}; do
                        let choice=$(($choice - 1))
                        if [[ $choice -lt $((${#room_ids[@]} + 1)) ]]; then
                                printf "\e[35m%s\e[0m\n" "bili-live ${room_ids[$(($choice))]}"
                                bili-live ${room_ids[$(($choice))]} &
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
