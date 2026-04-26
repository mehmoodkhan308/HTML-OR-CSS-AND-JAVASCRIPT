var minheading = document.getElementById("minheading")
var secheading = document.getElementById("secheading")
var milliheading = document.getElementById("milliheading")
var butt1 = document.getElementsByClassName("butt1")
var min = 0
var sec = 0
var msec = 0
var interval;


function startButt(){
    interval = setInterval(timerwatch , 10)
    butt1.setArribute("disabled" ,ture)
    
}

function timerwatch(){
msec++
milliheading.innerHTML = msec
if(msec==100){
    msec=0
 
   sec++
      
   
   
}
secheading.innerHTML = sec
if(sec==60){
    sec=0
    min++
}
minheading.innerHTML= min


}

function stopButt(){
    clearInterval(interval)
}
function resetButt(){
    clearInterval(interval)
    min =0
    sec =0 
    msec =0
    milliheading.innerHTML ='00'
    secheading.innerHTML = '00'
    milliheading.innerHTML = '00'
 

}