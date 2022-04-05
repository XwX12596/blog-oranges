---
title: Hitokoto
date: 2022-04-05 13:00:13
type: about
---

<body>
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
        <a style="text-decoration: none;" href="#" id="hitokoto_from">:D 获取中...</a>
    </h5>
    
</body>