---
title: 看V的人是这样的
date: 2023-06-15 00:27:31
tags:
---

# 如题

```python
#liver.py
import os
import time
from requests import get

Names = []
UIDs = []
liverc = os.environ['HOME']
url = "https://api.live.bilibili.com/room/v1/Room/get_status_info_by_uids"

with open(liverc + "/.liverc", 'r') as f:
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

