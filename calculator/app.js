

var inputfield = document.getElementById("inputfield")

function calc(value){
var inputfield = document.getElementById("inputfield")
inputfield.value += value

}
function addvalue(multi){
    inputfield.value = ''
}
function calDElvalue(){
 inputfield.value = inputfield.value.slice(0,-1)
}

function percenCALvalue(){
    inputfield.value = inputfield.value/100
}
function divideCALACvalue(){
    var answer = eval(inputfield.value)
    inputfield.value = answer
}



