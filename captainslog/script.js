var dayRay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthRay = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct", "Nov", "Dec"];

function getDate()
{
        var dateObj = new Date();        
        var date = "";
        date += dayRay[dateObj.getDay()] + " ";
        date += monthRay[dateObj.getMonth()] + " ";
        date += dateObj.getDate() + " ";
        var h = dateObj.getHours();
        h     = (h>10 ? "" : s==0 ? "00" : "0") + h;
        var m = dateObj.getMinutes();
        m     = (m>10 ? "" : s==0 ? "00" : "0") + m;
        var s = dateObj.getSeconds();
        s     = (s>10 ? "" : s==0 ? "00" : "0") + s;
        date += h + ":" + m + ":" + s + " ";
        date += dateObj.getFullYear() + " - ";
        return date;
}

function store(date) {
        var val = $('#msg').val();
        var idx = localStorage.length > 0 ? localStorage.length : 0;
        localStorage.setItem(idx, date + val);
}

function load()
{
        txt = "";
        for (idx = localStorage.length; idx >= 0; idx--) {
                if (localStorage.getItem(idx))
                        txt += localStorage.getItem(idx) + "</br>";
        }
        document.getElementById("log").innerHTML = txt;
}

$( document ).ready(function() {
                $('#msg').on('keypress', function (event) {
                                if(event.which === 13) {
                                        store(getDate());
                                        load();
                                }
                })
})