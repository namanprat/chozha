var getTime = function() {
    document.getElementById("time").innerHTML = new Date().toLocaleString("en-AU", {
        timeZone: 'Australia/Brisbane',
        timeStyle: 'long',
        hourCycle: 'h24'
    })
};
getTime();
setInterval(getTime, 1000);