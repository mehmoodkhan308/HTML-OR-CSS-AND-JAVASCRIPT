var  quizData = [
    {
        id: 1,
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Programming Language",
            "Hyper Text Styling Language",
            "Hyper Text Scripting Language"
        ],
        answer: "Hyper Text Markup Language"
    },
{
        id: 2,
        question: "CSS stands for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        id: 3,
        question: "Which language is used for web scripting?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP"
        ],
        answer: "JavaScript"
        
    },
    {
        id: 4,
        question: "Which tag is used to create a hyperlink?",
        options: [
            "a",
            "link",
            "href",
            "url"
        ],
        answer: "a"
    },
    {
        id: 5,
        question: "Which CSS property is used to change text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: "color"
    },
    {
        id: 6,
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "//",
            "<!-- -->",
            "/* */",
            "#"
        ],
        answer: "//"
    },
    {
        id: 7,
        question: "Which tag is used to display images in HTML?",
        options: [
            "image",
            "img",
            "pic",
            "src"
        ],
        answer: "img"
    },
    {
        id: 8,
        question: "Which input type is used for passwords?",
        options: [
            "text",
            "password",
            "secure",
            "hidden"
        ],
        answer: "password"
    },
    {
        id: 9,
        question: "Which function shows a popup message in JavaScript?",
        options: [
            "msg()",
            "popup()",
            "alert()",
            "show()"
        ],
        answer: "alert()"
    },
    {
        id: 10,
        question: "Which HTML tag is used for largest heading?",
        options: [
            "h6",
            "h4",
            "h2",
            "h1"
        ],
        answer: "h1"
    }
]

// var questionElement = document.getElementById("questionElement")
// var optionElement = document.getElementById("optionElement")
// var nextquestion = document.getElementById("nextquestion")
// var reportCard = document.getElementsByClassName("reportCard")
// var quizcontainer = document.getElementsByClassName("quizcontainer")
// var counter = 0
// var score = 0



// function startQuiz(){
   
// var question = quizData[counter].question
// var option = quizData[counter].options
//   questionElement.innerHTML = (counter + 1 + ".") + question
// optionElement.innerHTML = ""
// for( var i =0; i  < option.length ; i++){
//   var li = `<li onclick = "checkans(this)"> ${option[i]}</li>`
// optionElement.innerHTML+= li
//   }
// }

// function nextans(){
//  counter++
// var number = document.getElementById("number")
//  console.log("nextans");
//     if(counter< quizData.length){
//         startQuiz()
//   number.innerHTML = `${counter+1}/${ quizData.length}` 
        
//     }else{
//         console.log("katham tata");
//         quizcontainer[0].style.display = "none"
//         var correctPara = document.getElementById("correctPara")
//         correctPara.innerHTML = `correct answer:${score}`
        
//              console.log("correct:", score);
//                      var wrong = document.getElementById("wrong")
//                      wrong.innerHTML = `wrong answer:${quizData.length - score}`
//       console.log("wrong:",quizData.length - score );
      
//        reportCard[0].style.display = "block"
   
//  }
//      nextquestion.setAttribute("disabled", true)

     
     
    
// }

// function checkans(li){
// var correctans = quizData[counter].answer
//     var userAns = li.innerText  
//     var allist = optionElement.getElementsByTagName("li")
   
//     if(userAns===correctans){
//         li.style.background = 'green'
//         score++
//         // console.log("true answer")
  
//     }   else{
//         // console.log("galat jawab")
//          li.style.background = 'red'
// }

// // highlight correct answer
// for(var li of allist){
//     // console.log(userAns===correctans);
//    if(li.innerText===correctans){
//     li.style.background = 'green'
//    } 
//    break
// }

// for(var li of allist){
    
//    li.style.pointerEvents = "none"
// }


//   nextquestion.removeAttribute("disabled")
  
// }

var questionElement = document.getElementById("questionElement")
var optionElement = document.getElementById("optionElement")
var nextquestion = document.getElementById("nextquestion")
var quizprogress = document.getElementById("quizprogress")
var reportCard = document.getElementsByClassName("reportCard")
var quizcontainer = document.getElementsByClassName("quizcontainer")
var questioncounter = 0
var score = 0
     quizprogress.innerHTML = `${questioncounter + 1}/${quizData.length}`


function startQuiz(){
var question = quizData[questioncounter].question
var option = quizData[questioncounter].options
  questionElement.innerHTML = (questioncounter + 1 + ".")+question
optionElement.innerHTML = ""


for( var i =0; i  < option.length ; i++){
  var li = `<li onclick = "checkanswer(this)"> ${option[i]}</li>`
optionElement.innerHTML+= li
  }




}

function nextanswer(){
    questioncounter++
    if(questioncounter<quizData.length){
        startQuiz()
       
    }else{
        console.log("khatam tata");
        // console.log(quizcontainer);
         quizcontainer[0].style.display = "none"
        var correctPara = document.getElementById("correctPara")
         correctPara.innerHTML = `Correct answer: ${score}`
           var wrong = document.getElementById("wrong")
         wrong.innerHTML = `wrong answer: ${quizData.length - score}`
         var grade = document.getElementById("grade")
         
         if(score>=7){
           grade.innerHTML = "Grade:A+"
         }else{
               grade.innerHTML = "Grade:B" 
         }
         
        reportCard[0].style.display = "block"
        
    }
     quizprogress.innerHTML = `${questioncounter + 1}/${quizData.length}`
    nextquestion.setAttribute("disabled" , true)
  

}

function checkanswer(li){
    var correctanswer = quizData[ questioncounter].answer
    var useranswer = li.innerText
    var allist = optionElement.getElementsByTagName("li")
    if(useranswer=== correctanswer) {
        console.log("ture");
        li.style.background = "green"
        score++
        
    }else{
        console.log("wrong");
        
        li.style.background = "red"
        
    }
    
    // highlist correct answer
    for(var li of allist){
     if( li.innerText == correctanswer){
        li.style.background = "green"
        break
     }  
        
    }

    for(var li of allist){
        li.style.pointerEvents = "none"
    }
    nextquestion.removeAttribute("disabled", false)
}