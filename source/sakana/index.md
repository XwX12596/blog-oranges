---
title: sakana
date: 2022-09-01 10:30:00
type: "about"
---

## MC Monitor
<html>
<style>
.row{
    width:100%;
    height:auto;
    display:flex;
}
.elem{
    flex:1;
}
</style>
<p>
    Status: <b><span id = 'stat'>Requesting...</span></b>
    <br>
    Players: <b><span id = 'players'>*</span></b>
    <br>
    List: <b><span id = 'names'>*</span></b>
    <br>
    MOTD: <b><span id = 'motd'>*</span></b>
</p>
<br>
<div class="row">
    <div id="sakana-widget1" class="elem" style = "align:left"></div>
    <div class="elem"></div>
    <div id="sakana-widget2" class="elem" style = "align:right"></div>
</div>

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

<script src="/sakana/js/mycounter.js"></script>
</html>
