---
title: 记录利用docker开设Hexo框架简单博客
tags: ['Hexo','Docker','Blog']
date: 2022-02-01 22:00:00
categories:
  - tech
  - web
---
# 准备工作
## 云服务器
- 系统：**Ubuntu**
- 使用域名：**www.xwxstudio.com**

## Node.js
### 从[NodeSource](https://github.com/nodesource/distributions#debinstall)安装

``` bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```
或者`yay -Sy nodejs`

## Hexo

### 官方文档的npm安装。

``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
或者`yay -Sy npm`

### 在Node背景下的Hexo安装。

``` bash
npm install hexo-cli -g
#初始化文件夹
hexo init .
npm install
#在4000端口开放服务
hexo server
#指定端口使用参数 -p
```
## docker
### 使用官方安装脚本自动安装。
从阿里云用**cURL**安装：

``` bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

或者`yay -Sy docker docker-compose`

# Hexo配置

## 文件目录
```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```



> `_config.yml`：`Hexo`的配置文件
> `themes`：放主题文件的文件夹
> `source/_drafts`：放草稿的文件夹
> `source/_posts`：放帖子的文件夹



## 基本信息配置

详见[Hexo配置](https://hexo.io/zh-cn/docs/configuration)

# Docker配置

## Dockerfile

### hexo镜像

- 仅仅作Hexo模板的初始化

``` dockerfile
FROM node:latest

MAINTAINER XwX

WORKDIR /hexo

RUN npm install hexo-cli -g\
&& hexo init .\
&& npm install

EXPOSE 4000

CMD ["/bin/bash"]
```

- 运行`docker build -t 'hexo'`

### blog镜像

- 生成具体博客镜像

``` dockerfile
FROM hexo:latest

MAINTAINER name <mail>

WORKDIR /hexo

EXPOSE 4000

CMD ["/usr/bin/env","hexo","server"]
```

- 运行`docker build -t  'blog'  . `

## docker-compose.yml

- 在具体文件夹创建容器

``` yaml
version: '3'
services:
  blog:
    restart: always
    build:
      context: .
      dockerfile: Dockerfile
    image: 'blog'
    container_name: hexo-blog
    ports:
      - "80:4000"
      volumes:
        - $HOME/.ssh:/root/.ssh
        - .:/hexo
```



- 开启容器：`docker-compose up -d`

- 关闭容器：`docker-compose down`

# 写作

## 修改

- 直接对宿主机文件进行操作即可实现hexo博客的创建，配置与写作。已停运!

## 文件管理

- 直接使用`Git`对本地和云端的数据进行版本管理。
- 可以使用`VScode`进行`Git`的pull和push操作。
