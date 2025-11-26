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
append_tip='Using Options:'

while IFS=' ' read name ID; do
        table+=(["$ID"]="$name")
done < "$liverc"

printf "\e[35m%s\e[0m\n" "Requesting..."
respond=$(curl -s4 \
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
        if [[ ${live_status} == 1 || $1 == '-p' ]]; then
                if [[ ${short_id} !=  0 ]]; then room_id=${short_id}; fi
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
        if [[ $1 != '' ]]; then
          if [[ $1 == '-p' ]]; then
            printf "\e[35m%s\e[0m\n" "$bye"
            exit 0
          elif [[ $1 == '-a' ]]; then
            my_opt="-a"" ""${*:2}"
            printf "\e[34m%s%s\e[0m\n" "$append_tip" "${*:2}"
          fi
        fi
        if [[ ${#room_ids[@]} != 0 ]]; then
          let total=${#room_ids[@]}
          printf "\e[35m%s\e[0m\n" "choose..."
          read -a choices
          if [[ $(echo $choices | grep -E 'a|A') != '' ]]; then
            choices="$(seq -s ' ' 0 $(($total - 1)))"
          fi
          for choice in ${choices[@]}; do
            if [[ $choice =~ ^[0-9]+$ ]] && [[ $choice -le ${#room_ids[@]} ]]; then
              run="${room_ids[$(($choice - 1))]}"" ""${my_opt}"
              printf "\e[35mbili-live %s\e[0m\n" "$run"
              exec bili-live ${run} &
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
011179号飞船 13397626
AkariCiel 3494356346472484
Liyuu 4549624
Niya阿布 188679
Rocklxd 100172
XeKr 5930630
Yue萱子 23080211
hanser 11073
七禾いえ 1802654492
东雪莲 1437582453
兔眠可可 1096034982
劉俊朗 28677456
卤蛋 11083481
咪茉Mimo_ 3546599177324843
哈娜hanna 630077416
妮莉安Lily 3493271057730096
姜太奶 204439804
姣玉Joya 3493111961487462
小小酥jewel 3546569649425106
小沈7A7 1640446181
小缘 5055
少年pi 13046
山中冷月微 517994498
帅比笙歌超可爱OvO 15641218
库莉姆Cream 1555453291
怜怜_Official 919906
恩骨 26413405
扇宝 698438232
无敌小约 3494350556236620
时倾Sera 3546884108978473
暖树树呀 2011749793
果宝Official 3546569288714792
柳桐非 1152878015
树礼Suki 3493277313534134
桃几OvO 1104048496
槙岛翊iki 3546656094030577
永雏塔菲 1265680561
汐尔Sier 498188835
法里达 23263470
泠鸢yousa 282994
灼灼Auburn 1132450186
燈燈star 314468905
甜夕sweet 526729810
祈inory 234782
第五灌灌 3493119043570098
纱依shayi 3461576189282324
络宝 3546646881241985
美少女晴晴晴子 1099371313
羲拉C3C 3461567555307880
翡柏Phober 3546850441300440
蒂莉雅 2126507529
薄荷Miint 3493076263766277
薇Steria 1112031857
说说Crystal 283886865
赤五教教主亮亮 1697848019
铃见Suzumi 3546757543758795
阿佩佩不想下饭 3546561942390928
阿梓从小就很可爱 7706705
雫るる 387636363
雾氧UO 3493078891497932
霧切澪 1648978526
顾子韵_w 18932485
黑泽诺亚NOIR 922573
```
