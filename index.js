function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM";
    if (hh>=12)
    {
        am_pm="pm";
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm} ${am_pm}`;
    document.getElementById("Time").innerHTML=fullTime;
    var moArray=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
  
    // var mo=8;
   // if (mo==0)
   // {
   //     mo="jan";
   // }
   // else if(mo==1)
   // {
   //     mo="feb"
   // }
   // else if(mo==2)
   // {
   //     mo="mar"
   // }
   // else if(mo==3)
   // {
   //     mo="apr"
   // }
   // else if(mo==4)
   // {
   //     mo="may"
   // }
   // else if(mo==5)
   // {
   //     mo="jun"
   // }
   // else if(mo==6)
   // {
   //     mo="jul"
   // }
   // else if(mo==7)
   // {
   //     mo="aug"
   // }
   // else if(mo==8)
   // {
   //     mo="sep"
   // }
   // else if(mo==9)
   // {
   //     mo="oct"
   // }
   // else if(mo==10)
   // {
   //     mo="nov"
   // }
   // else 
   // {
   //     mo="dec"
   // }
    var fulldate=`${dd}/${moArray[mo]}/${yy}`
    document.getElementById("Date").innerHTML=fulldate;

    var dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayImgArray=["sun.jpg","mon.jpg","tue.jpg","wed.jpg","thu.jpg","fri.jpg","sat.jpg"];
 
    // var day=0;

    // switch(day)
    // {
    //     case 0:
    //         day="sunday";
    //         document.body.style.backgroundImage="url(sun.jpg)";
    //         break;
    //     case 1:
    //         day="monday";
    //         document.body.style.backgroundImage="url(mon.jpg)";
    //         break;
    //     case 2:
    //         day="tuesday";
    //         document.body.style.backgroundImage="url(tue.jpg)";
    //         break;
    //     case 3:
    //         day="wednesday";
    //         document.body.style.backgroundImage="url(wed.jpg)";
    //         break;
    //     case 4:
    //         day="thursday";
    //         document.body.style.backgroundImage="url(thu.jpg)";
    //         break;
    //     case 5:
    //         day="friday";
    //         document.body.style.backgroundImage="url(fri.jpg)";
    //         break;
    //     case 6:
    //         day="saturday";
    //         document.body.style.backgroundImage="url(sat.jpg)";
    //         break;
    // }
    document.body.style.backgroundImage=`url(${dayImgArray[day]})`;
    document.getElementById("Day").innerHTML=`${dayArray[day]}`;
    document.getElementById("Sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000);
}
function greet()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6&&hh<=12)
    {
        document.getElementById("greetmessage").innerHTML="Good Morning";
        document.getElementById("bgvid").src="mornig.mp4"
    }
    else if(hh>12&&hh<=16)
    {
        document.getElementById("greetmessage").innerHTML="Good Afternoon";
        document.getElementById("bgvid").src="afternoon.mp4";
        document.getElementById("bgvid").style.width="100%";
        document.getElementById("bgvid").style.bottom="-100px";
    }
    else if (hh>16&&hh<=20)
    {
        document.getElementById("greetmessage").innerHTML="Good Evening";
        document.getElementById("bgvid").src="evening.mp4";
        document.getElementById("bgvid").style.width="100%";
        document.getElementById("bgvid").style.bottom="-100px";
    }
    else{
        document.getElementById("greetmessage").innerHTML="Good Night";
        document.getElementById("greetmessage").style.color="white";
        document.getElementById("bgvid").src="night.mp4";
        document.getElementById("bgvid").style.width="100%";
        document.getElementById("bgvid").style.bottom="-100px";
    }
}
greet()
function closeWind()
{
    document.getElementById("greet").style.display="none";
}
var a =setTimeout(closeWind,5000);