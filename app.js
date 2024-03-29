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
function showQuestion(){
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice,index)=>{
        choice.textContent = questions[currentQuestion].choices[index];
    });
    const feedback = document.getElementById("feedback");
    feedback.textContent = " ";

    

}