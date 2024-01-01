---
title: sakana
date: 2022-09-01 10:30:00
type: "about"
---

<html>
<script src="/sakana/js/mycounter"></script>
<script src="/sakana/js/sakana"></script>
<script async onload="initSakanaWidget()"
    src="https://cdn.jsdelivr.net/npm/sakana-widget@2.2.1/lib/sakana.min.js"></script>

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
<h2 align=center>MC Monitor</h2>
<p style="margin-left:50px">
    MOTD: <b><span id = 'motd'>*</span></b>
    <br>
    Status: <b><span id = 'stat'>Requesting...</span></b>
    <br>
    Players: <b><span id = 'players'>*</span></b>
    <br>
    List: <b><span id = 'names'>*</span></b>
</p>

![DD's Server](https://mcapi.us/server/image?ip=150.158.33.213&title=NatualCreate)

<h2 align=center>SAKANA</h2>
<div class="row">
    <div id="sakana-widget1" class="elem" style = "align:left"></div>
    <div class="elem"></div>
    <div id="sakana-widget2" class="elem" style = "align:right"></div>
</div>


</html>
