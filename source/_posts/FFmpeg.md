---
title: FFmpeg
date: 2023-05-28 23:53:24
tags:
---

# FFmpeg

- `-i` 指定输入文件
- `-y` 忽略警告(覆盖已有文件)
- `-hwaccel cuda` 硬件加速
- `-b:v` 视频码率, 音频改为`-b:a`即可 
- `-r` fps
- `-vf scale=1080:-1` 保持原始比例缩放, 或者直接`-s`
- `-vf subtitle` 渲染硬字幕, 软字幕指定两个输入文件后用 `-c copy`
- `-ss xx:xx:xx -t 120` 剪出开始时间`xx:xx:xx`的后`120`秒, 到结尾用`-sseof`
- `-f concat -i list.txt` 连接视频, 必须用list文件指定输入

> 一些例子

```bash
ffmpeg -i test.mkv -vf subtitles=test.srt output.mp4
ffmpeg -i test.srt test.ass
ffmpeg -i test.mp4 -i test.srt -c copy output.mkv
ffmpeg -i img.jpg -q 75 out.jpg
ffmpeg -i organ.mp3 -ss 00:00:xx -t 120 output.mp3
ffmpeg -y -hwaccel cuda -i input.mp4 -c:a copy -c:v hevc_nvenc -b:v 5M output.mp4
ffmpeg -hwaccel cuda -i 2.mp4 -c:a copy -c:v hevc_nvenc -r 25 -vf scale=1600:-1 out2.mp4
ffmpeg -hwaccel cuda -i .\shana11.mkv -c:v mpeg4 -c:a aac -b:v 256k -b:a 64k -ar 44100 -vf scale=480x272,subtitles=shana11.ass -r 23.976 shana-psp-11.mp4 -y #PSP
ffmpeg -hwaccel cuda -f concat -i input.txt -c:v hevc out.mp4
```

