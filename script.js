setInterval(time, 1000);
function time(){
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let am_pm = document.getElementById("ap");
    
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = hour >= 12 ? "PM" : "AM";

    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let hour_dot = document.querySelector(".hour_dot");
    let min_dot = document.querySelector(".min_dot");
    let sec_dot = document.querySelector(".sec_dot");

    //convert 24 hrs clock to 12 hrs clock
    if(hour > 12){
        hour = hour - 12;
    }
    
    //addition of zero before single digit
    hour = (hour < 10) ? "0"+hour : hour;
    min = (min < 10) ? "0"+min : min;
    sec = (sec < 10) ? "0"+sec : sec;
    
    hours.innerHTML = hour + " hours";
    minutes.innerHTML = min +" minutes";
    seconds.innerHTML = sec +" seconds";
    am_pm.innerHTML = ampm;

    hh.style.strokeDashoffset = 440 - (440 * hour)/12; //12 hrs
    mm.style.strokeDashoffset = 440 - (440 * min)/60; //60 minutes
    ss.style.strokeDashoffset = 440 - (440 * sec)/60; //60 seconds

    hour_dot.style.transform = `rotate(${hour * 30}deg)`; //360 / 12
    min_dot.style.transform = `rotate(${min * 6}deg)`; //360 / 60
    sec_dot.style.transform = `rotate(${sec * 6}deg)`;
}
