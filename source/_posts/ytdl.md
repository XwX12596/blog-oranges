---
title: 使用yt-dlp和mpv浏览B站
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
用了`yt-dlp`和`mpv`。

没活儿可以咬打火机！
```bash
#!/bin/bash
time=$(date "+%m%d%H%M%S")
if [ $# == 1 ]
then
        filename="/home/xwx/video/Live/bili"$1"-"${time}".flv"
        echo "No Record!"
        mpv --referrer='https://live.bilibili.com' --ytdl-raw-options=format='best[vcodec=avc]' https://live.bilibili.com/$1
elif [ $# == 2 ] && [ $2 == 'r' ]
then
        filename="/home/xwx/video/Live/bili-"$1"-"${time}".flv"
        echo "Record in ~/video/Live/"
        mpv --referrer='https://live.bilibili.com' --ytdl-raw-options=format='best[vcodec=avc]' https://live.bilibili.com/$1 --stream-record=${filename}
elif [ $# == 3 ] && [ $2 == 'rn' ]
then
        filename="/home/xwx/video/Live/"${3}"-"$1"-"${time}".flv"
        echo "Record in ~/video/Live/"
        mpv --referrer='https://live.bilibili.com' --ytdl-raw-options=format='best[vcodec=avc]' https://live.bilibili.com/$1 --stream-record=${filename}
else
        echo "Wrong Arg!"
fi
```
艹，走，忽略！