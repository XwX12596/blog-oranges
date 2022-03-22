---
title: Minecraft服务器(ListAndBak)
date: 2022-02-02 09:54:20
highlight_shrink: true
tags:
  - Games
  - Minecraft
top_img: https://s2.loli.net/2022/02/02/aog3ZnS5BT9U6ts.png
cover: https://s2.loli.net/2022/02/02/aog3ZnS5BT9U6ts.png
aside: false
# sticky: true
---

# minecraft 1.18.1 Fabric

> *已停运!*

下面是当时所用`docker-compose.yml`(需适当修改)

``` yaml
version: "3"

services:
  fabric:
    image: itzg/minecraft-server:latest
    ports:
      - 25565:25565
    volumes:
      - "/root/MC/fabric:/data"
      - "/root/fabric/world:/world"
    environment:
      EULA: "TRUE"
      VERSION: "1.18.1"
      TYPE: "FABRIC"
      MODS: "/mods"
      WORLD: "/world"
      DIFFICULTY: "hard"
      MAX_PLAYERS: "5"
      FORCE_GAMEMODE: "true"
      HARDCORE: "false"
      MODE: "survival"
      PVP: "true"
      ONLINE_MODE: "false"
      ALLOW_FLIGHT: "true"
      SERVER_NAME: "DD's Server"
      MOTD: "DD's Server"
      MEMORY: "6G"
      WHITELIST: ""
      OPS: "X_w_X"
      BROADCAST_CONSOLE_TO_OPS: "false"
      BROADCAST_RCON_TO_OPS: "false"
    restart: always
```



<!-- 

<script src="https://cdn.jsdelivr.net/gh/leonardosnt/mc-player-counter/dist/mc-player-counter.min.js"></script>

服务器地址：`mc.xwxstudio.xyz:11055`

游戏类型：原版

目前在线玩家： <span data-playercounter-ip="mc.xwxstudio.xyz:11055">0</span>  人。 

-->

> 服务器备份在[Github](https://github.com/XwX12596/Fabric118)
> 

#### 模组列表：
- **phosphor(可选)**
- **lithium(可选)**
