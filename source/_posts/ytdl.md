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

```bash
#!/bin/bash
if [ $# == 1 ]
then
        echo "No Record!"
        mpv --referrer='https://live.bilibili.com' --autofit=1280 --script-opts=osc-visibility=never --ytdl-raw-options=format='best[vcodec=avc]' https://live.bilibili.com/$1
elif [ $# == 2 ] && [ $1 == 'r' ]
then
	time=$(date "+%m%d%H%M%S")
        filename="/home/xwx/Media/Live/bili-"$2"-"${time}".flv"
        echo "Record in ~/Media/Live/"
        mpv --referrer='https://live.bilibili.com' --autofit=1280 --script-opts=osc-visibility=never --ytdl-raw-options=format='best[vcodec=avc]' https://live.bilibili.com/$2 --stream-record=${filename}
elif [ $# == 3 ] && [ $1 == 'rn' ]
then
	time=$(date "+%m%d%H%M%S")
        filename="/home/xwx/Media/Live/"${2}"-"$3"-"${time}".flv"
        echo "Record in ~/Media/Live/"
        mpv --referrer='https://live.bilibili.com' --autofit=1280 --script-opts=osc-visibility=never --ytdl-raw-options=format='best[vcodec=avc]' https://live.bilibili.com/$3 --stream-record=${filename}
elif [ $# == 2 ] && [ $1 == 'v' ]
then
        mpv --referrer='https://www.bilibili.com' https://www.bilibili.com/video/$2
elif [ $# == 3 ] && [ $1 == 'vp' ]
then
	prefix="https://www.bilibili.com/video/${2}/?p="
	num=$3
	sum=""
	for i in `seq 1 ${num}`
	do
		sum="${sum}${prefix}${i} "
	done	
        mpv --referrer='https://www.bilibili.com' ${sum}
else
        echo "Wrong Arg!"
fi
```
> 例子
> bili-live 593 # For Just Live
> bili-live r 196 # For 自溜
> bili-live rn Angel 255 # For Named 自溜 
> bili-live v BV1j4411W7F7 # For 别人的自溜
> bili-live vp BV1MX4y1o7gJ 10 # For Multiple Parts 别人的自溜

关注泠鸢yousa喵，关注泠鸢yousa谢谢喵！
