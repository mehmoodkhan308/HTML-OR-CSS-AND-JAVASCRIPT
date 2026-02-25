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
        answer: "<a>"
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
        answer: "<img>"
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
        answer: "<h1>"
    }
]

var questionElement = document.getElementById("questionElement")
var optionElement = document.getElementById("optionElement")
var counter = 0


function startQuiz(){
   
var question = quizData[counter].question
var option = quizData[counter].options
  questionElement.innerHTML = (counter + 1 + ".") + question
optionElement.innerHTML = ""



  for( var i =0; i  < option.length ; i++){
  var li = `<li onclick = "checkans(this)"> ${option[i]}</li>`
optionElement.innerHTML+= li
  }


}

function nextans(){
    counter++
    console.log("nextans");
    if(counter< quizData.length){
        startQuiz()
        
    }else{
        console.log("katham tata");
        
    }
    
}

function checkans(li){
var correctans = quizData[counter].answer
    var userAns = li.innerText  
    
    if(userAns===correctans){
        console.log("true answer")
    }   else{
        console.log("galat jawab")
}

}
