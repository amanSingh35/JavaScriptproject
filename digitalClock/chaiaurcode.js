const clock=document.getElementById('clock');

let date= new Date();//this is a date object in javascript objects in javascript. If some time or date 
//or date is passed in the argument then that data will go to date object.while if nothing is passed is to 
//as argument then the current time or date is get stored in the date object.
//console.log(date.toLocaleTimeString());//the time and date stored in the date object is being extracted from
//the date object using toLocaleTimeString() object.
let date1=date.toLocaleTimeString();
clock.innerHTML=date1;

//now everytime this page will get refreshed then we will get an updated time 
//and date so we need to make a function which refreshes the page every second which will give us the 
//every time.

setInterval(function(){//setinterval is used to perform a function again and again after every time interval
    let date= new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)



