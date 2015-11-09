     window.onload = setInterval("GetTime()", 1000);

    function GetTime() {

        var timeDiv = document.getElementById("forumTime")
        var long = parseInt(timeDiv.getAttribute("time"));
        now = new Date(long);
        year = now.getFullYear();
        month = now.getMonth()+1;
        day = now.getDate();
        hour = now.getHours();
        min = now.getMinutes();
        sec = now.getSeconds();
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        document.getElementById("forumTime").innerHTML =
                "<nobr>" + year + "年" + month + "月" + day + "日, " + " " + hour
                        + ":" + min + ":" + sec + "</nobr>";

        timeDiv.setAttribute("time", long + parseInt(1000));

    }
