---
title: hitokoto
date: 2022-03-24 09:43:38
type: about
---



<script>
    fetch('https://v1.hitokoto.cn/?c=a&c=b&c=d&c=k')
        .then(response => response.json())
        .then(data => {
            const hitokoto = document.getElementById('hitokoto_text')
            hitokoto.innerText = data.hitokoto
            const from = document.getElementById('hitokoto_from')
            from.href = 'https://hitokoto.cn/?uuid=' + data.uuid
            if(data.from_who == null){
                from.innerText = "————" + '「' + data.from + '」'
            }else{
                from.innerText = "————" + data.from_who + '「' + data.from + '」'
            }
        })
        .catch(console.error)
</script>
<h2 align="center">
    <p  id="hitokoto_text">:D 获取中...</p>
</h2>
<h5 align="right" >
    <a target="_blank" href="#" id="hitokoto_from">:D 获取中...</a>
</h5>
<h4>·下为自言自语· (需要科学上网</h4>
<body>
<script type="text/javascript" src="https://oss.xwxstudio.com/js/artitalk.js"></script>
    <div id="artitalk_main"></div>
    <script>
    new Artitalk({
        appId: 'YBH7dy8YlNz0JsvUT2vw1rVn-MdYXbMMI',
        appKey: 'Q7qAfgOW7OkXlWMWf62B4lb2',
        pageSize: 2,
        color1: '#eeeeee',
        color2: '#eeeeee',
        color3: '#000000'
    })
    </script>
</body>