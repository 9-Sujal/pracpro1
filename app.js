const questions = [
    {
        question: "what is your name?",
        choice:["gelcho", "madcho", "bencho"],
        correct: 2
    },
    {
        question: "what is your age?",
        choice:["40", "20", "10"],
        correct: 1
    },   {
        question: "what is your size?",
        choice:["10px", "20px", "30px"],
        correct: 0
    },
];
let currentQuestion = 0;
let correctAnswer = 0;


function showQuestion(){
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice,index)=>{
        choice.textContent = questions[currentQuestion].choice[index];
    });
    const feedback = document.getElementById("feedback");
    feedback.textContent = " ";

    

}
checkAnswer = (selected)=>{
    const feedback = document.getElementById("feedback");
    if(selected=== questions[currentQuestion].correct){
        feedback.textContent = "7 croreeeeee";
        correctAnswer++;

    }else{
        feedback.textContent = "ye glt uttar hai";

    }
    setTimeout(()=>{
        currentQuestion++;

        if(currentQuestion < questions.length){
            showQuestion();

        }else{
            const quizContainer = document.querySelector(".quizcontainer");
            quizContainer.innerHTML= `<p>teri ${correctAnswer} hi aukat hai ${questions.length} mai se `
        }

    }, 2000);

}
showQuestion();