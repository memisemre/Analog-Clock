setInterval(()=>{
    const newDate = new Date();
    document.querySelector(".hour-rod").style.transform = `rotate(${newDate.getHours()*30}deg)`;
    document.querySelector(".minute-rod").style.transform = `rotate(${newDate.getMinutes()*6}deg)`;
    document.querySelector(".second-rod").style.transform = `rotate(${newDate.getSeconds()*6}deg)`;
},1000);