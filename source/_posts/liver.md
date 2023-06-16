---
title: 看V的人是这样的
date: 2023-06-15 00:27:31
tags:
---

# 如题

```bash
#!/bin/bash
INFO=()
liverc=""$HOME"/.liverc"
url='https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids'
greeting='GET DA⭐ZE\n'
sorry='DAMEDAYO!'
out=''

while IFS=' ' read name ID; do
        INFO+=(["$ID"]="$name")
done < "$liverc"

echo 'Requesting...'
respond=$(curl -s \
        'https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids' \
        -H 'Content-Type: application/json' \
        -d '{"uids": ['$(IFS=,; echo "${!INFO[*]}")']}')
for ID in $(echo "${!INFO[*]}"); do
        live_status=$(echo $respond | jq '.["data"] | .["'${ID}'"] | .["live_status"] ')
        if [[ ${live_status} == 1 ]]; then
                output+="\t${INFO["${ID}"]}\n"
        fi
done

if [[ ${output} != '' ]]
then
        echo -e ${greeting}${output::-2}
else
        echo -e ${sorry}
fi
```

```python
#liver.py
import os
from requests import get

Names = []
UIDs = []
liverc = os.environ['HOME'] + "/.liverc"
url = "https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids"

with open(liverc, 'r') as f:
    for line in f.readlines():
        name, UID = line.strip('\n').split(' ')
        Names.append(name)
        UIDs.append(UID)

print("Please Wait...")
r = get(url, params={"uids[]":UIDs})
print("GET DA⭐ZE")
for index, UID in enumerate(UIDs):
    if r.json()["data"][UID]["live_status"] == 1:
        print('\t' + Names[index])
```

> ~/.liverc 如下

```
泠鸢yousa 282994
hanser 11073
小缘 5055
```

