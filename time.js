var getTime = function() {
    document.getElementById("time").innerHTML = new Date().toLocaleString("en-AU", {
        timeZone: 'Australia/Sydney',
        timeStyle: 'long',
        hourCycle: 'h24'
    })
};
getTime();
setInterval(getTime, 1000);