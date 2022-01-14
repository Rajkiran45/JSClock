setInterval( () => {
    t= new Date();
    htime = t.getHours();
    mtime = t.getMinutes();
    stime = t.getSeconds();

    
    hrotate = 30*htime + mtime/2 ;
    mrotate = 6*mtime + stime/10;
    srotate = 6*stime;
    hours.style.transform = ` rotate(${hrotate}deg)`;
    minutes.style.transform = `rotate(${mrotate}deg)`;
    seconds.style.transform = `rotate(${srotate}deg)`;
} , 1000);
