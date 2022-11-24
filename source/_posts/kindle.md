---
title: Kindle配合Calibre的简单使用
tags:
  - Kindle
  - 电纸书
  - 阅读
categories:
  - life
  - read
top_img: 'https://s2.loli.net/2022/02/25/W1bGsRZ6jKXLxA2.jpg'
cover: 'https://s2.loli.net/2022/02/25/W1bGsRZ6jKXLxA2.jpg'
date: 2022-02-25 23:58:50
---



# Calibre安装
官网脚本自动安装

``` bash
sudo -v && wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin
```

## 插件安装

接着上[GitHub](https://github.com/apprenticeharper/DeDRM_tools)下载`DeDRM_plugin`，否则没法导出`kindle`商店买的电子书。

> 此时记得先解压一次。

在`Calibre`中，后面操作如下`首选项>插件>从文件加载插件`,选中`DeDRM_plugin.zip`,随后重启`Calibre`即可。

### 插件配置

接着需要将`Kindle`序列号输入插件的设置中,在`首选项>插件`界面下,选择`自定义该插件`,选择`eInk Kindle ebooks`,按下"+"号,输入序列号（不需要空格）。

其中`Kindle序列号`在`设置>设备信息`界面中可以找到。

# Kindle

> 版本为 Kindle Paperwhite（第十代）

# 从Kindle商店购买并加工为无加密的文件
搜索引擎搜索`Kindle商店`，在我的账户下拉菜单里找到`管理我的内容与设备`，在此页面可以下载加密后的文件。
下面看到`Calibre`，将文件添加书籍后，进行转换书籍至需要的格式，DeDRM便会自动运行，得到非加密的文件。

> 当然你也可以在类似[z-library](https://zh.z-lib.org/)之类的找到想要的文档。
> 当然现在想用 `z-library` 可以去了解一下 [Tor](https://www.torproject.org/)。

# 网络电子书传进Kindle
添加书籍，传输进去即可。