---
title: 使用yt-dlp和mpv浏览B站直播
date: 2022-11-09 22:06:44
categories:
    - video
    - tech
tags:
    - bilibili
    - yt-dlp
    - mpv
    - shell
---
用了`yt-dlp`和`mpv`，摆烂 + 快乐摸鱼！

> bili-live
```bash
#!/bin/bash
if [ $# == 1 ]
then
        m --profile=bili-live \
            https://live.bilibili.com/"$1"
elif [ $# == 3 ] && [ "$2" == '-r' ]
then
        time=$(date "+%m%d%H%M%S")
        filename="/home/xwx/Media/Live/${3}-${time}.flv"
        echo "Record in ~/Media/Live/"
        m --profile=bili-live \
            --stream-record="${filename}" \
            https://live.bilibili.com/"$1"
elif [ $# > 2 ] && [ "$2" == '-a' ]
then
        m --profile=bili-live \
            https://live.bilibili.com/"$1" \
            "${*:3}"
else
        echo "bili-live:Wrong Arg!"
fi
```

> m
```bash
#!/bin/bash

cmd='mpv.exe'
opt=''

params=""
urls=""

for arg in "$@"; do
  if [[ $arg == http* ]]; then
    urls+=" $arg"
  elif [[ $arg == *=* ]]; then
    if [[ $arg != --* ]]; then
      arg="--$arg"
    fi
    params+=" $arg"
  else
    echo "Unknown Arg: $arg" >&2
    exit 1
  fi
done

echo "exec $cmd$params$urls" | bash
```

> 例子
> bili-live 593 # For Just Live
> bili-live r 196 # For 自溜
<!-- > bili-live v BV1j4411W7F7 # For 别人的自溜 -->
<!-- > bili-live vp BV1MX4y1o7gJ 10 # For Multiple Parts 别人的自溜 -->
<!-- > bili-live rn Angel 255 # For Named 自溜  -->

关注泠鸢yousa喵，关注泠鸢yousa谢谢喵！
