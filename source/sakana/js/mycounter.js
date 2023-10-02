var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            var names = ''
            var stat = myObj.online?'online':'error';
            var now = myObj.players.now;
            var max = myObj.players.max;
            var players = now + '/' + max
            for(var i = 0; i < now; i++){
                names += myObj.players.sample[i].name
                if(i < now - 1){
                    names += ', '
                }
            }
            document.getElementById("players").innerHTML = players;
            document.getElementById("stat").innerHTML =  stat;
            document.getElementById("names").innerHTML = names;
        }
    };
    xmlhttp.open("GET", "https://mcapi.us/server/status?ip=xwxstudio.com", true);
    xmlhttp.send();