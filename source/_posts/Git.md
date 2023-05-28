---
title: Git笔记
tags:
  - Git
  - Github
categories:
  - tech
date: 2022-02-09 21:37:07
---

## 安装Git
由于我用的是manjaro，所以就直接`yay`了。
``` bash
yay -Sy git
```
[其他系统下载](http://git-scm.com/downloads)

> 如果是`Win`系统可以安装后右键打开`Git GUI`（

## 基础配置

- 首先是报上名来。

``` bash
git config --global user.name "whoami"
git config --global user.email myemail@example.com
```
如果不放心是否成功可以查一下：

```bash
git config --list
```
- 接着就初始化本地仓库

``` bash
git init
git add --all
git commit -m 'init'
```

- 然后是加公钥

先是自己机子生成一下

``` bash
ssh-keygen -t rsa -C "myemail@example.com"
```

现在`～/.ssh/id_rsa.pub`里面已经出现了公钥，全部复制即可。

再是加入到Github上的设置里

```
个人主页>头像右边的小三角>Settings>SSH and GPG keys>New ssh key
```

## 开始使用

1. 添加远程仓库

``` bash
git remote add origin git@github.com:username/repo.git
```

2. 克隆仓库

``` bash
git clone git@github.com:username/repo.git
```

3. 从远程仓库获取分支

``` bash
git fetch origin
```

4. 合并分支

``` bash
git merge origin/master
```

5. 下载远程代码并合并

``` bash
git pull <远程主机名> <远程分支名>(:<本地分支名>)
```

6. 上传本地代码并合并

``` bash
git push <远程主机名> <本地分支名>(:<远程分支名>)
```

7. 分支管理

``` 
VSCode
```

