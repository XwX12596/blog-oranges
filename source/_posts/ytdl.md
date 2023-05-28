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
用了`yt-dlp`和`mpv`。

没活儿可以咬打火机！
```bash
script-opts=ytdl_hook-ytdl_path=yt-dlp
script-opts-append=ytdl_hook-ytdl_path=yt-dlp

vo=gpu
gpu-context=auto
#hwdec=nvdec-copy

#d3d11-adapter="NVIDIA GeForce RTX 2050"

#vulkan-device="NVIDIA GeForce RTX 2050"

hr-seek-framedrop=no
autofit=1920
#border=no

alang=jp,jpn,zh,chs,zh-Hans
audio-file-auto=exact
#audio-exclusive=yes
volume-max=100
#audio-pitch-correction=noidle=yes

osd-on-seek=msg-bar
osd-font="FZZhunYuan-M02"
osd-font-size=40
osd-playing-msg="${filename}"

profile=gpu-hq
#icc-profile-auto=yes
icc-force-contrast=1000
blend-subtitles=video
scale=ewa_lanczossharp
video-sync=display-resample
#interpolation=yes
#tscale=oversample
#video-aspect=1.9

slang=chs,sc,zh,chi,zho,zh-Hans
sub-auto=fuzzy
sub-scale=0.8
sub-font="FZZhunYuan-M02"
```
艹，走，忽略！
