---
title: sakana
date: 2022-09-01 10:30:00
type: "about"
---

<br>
<div id="sakana-widget1" style = "float:left;"></div>
<div id="sakana-widget2" style = "float:right;"></div>
<script>
    function initSakanaWidget() {
        const takina = SakanaWidget.getCharacter('takina');
        SakanaWidget.registerCharacter('tkn', takina);
        new SakanaWidget({character : 'tkn'}).mount('#sakana-widget1');
        new SakanaWidget().mount('#sakana-widget2');
    }
</script>
<script async onload="initSakanaWidget()"
    src="https://cdn.jsdelivr.net/npm/sakana-widget@2.2.1/lib/sakana.min.js"></script>