---
title: 我的mpv配置文件
date: 2023-02-06 00:38:32
categories:
  - life
  - video
tags:
    - mpv
---

主要来自`vcb`社区的推荐配置。

```
script-opts=ytdl_hook-ytdl_path=yt-dlp
script-opts-append=ytdl_hook-ytdl_path=yt-dlp

gpu-context=d3d11
hwdec=nvdec-copy
d3d11-adapter="NVIDIA GeForce RTX 2050"
idle=yes
#border=no

alang=jpn,zh,chs,zh-Hans
audio-file-auto=exact
volume-max=100
#audio-pitch-correction=no

osd-on-seek=msg-bar
osd-font="FZZhunYuan-M02"
osd-font-size=40
osd-playing-msg="${filename}"

profile=gpu-hq
icc-profile-auto=yes
blend-subtitles=video
scale=ewa_lanczossharp
video-sync=display-resample
interpolation=yes
tscale=oversample
#video-aspect=1.9

slang=chs,sc,zh,chi,zho,zh-Hans
sub-auto=fuzzy
sub-scale=0.8
sub-font="FZZhunYuan-M02"

```