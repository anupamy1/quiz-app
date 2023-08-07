const questions =[
    {
        question: "What data structure is most suitable for implementing a LIFO (Last-In-First-Out) behavior?",
        answers: [
            { text: "Queue",correct: false},
            { text: "Stack",correct: true},
            { text: "Linked List",correct: false},
            { text: "Tree",correct: false},
        ]
    },
    {
        question: "Which sorting algorithm has the best average and worst-case time complexity of O(n log n)?",
        answers: [
            { text: "Bubble Sort",correct: false},
            { text: "Insertion Sort",correct: false},
            { text: "Quick Sort",correct: true},
            { text: "Selection Sort",correct: false},
        ]
    },
    {
        question: "In a binary search tree (BST), which traversal visits the nodes in ascending order?",
        answers: [
            { text: "Inorder",correct: true},
            { text: "Preorder",correct: false},
            { text: "Postorder",correct: false},
            { text: "Levelorder",correct: false},
        ]
    },
    {
        question: "What is the primary advantage of using a hash table for data storage?",
        answers: [
            { text: " Guaranteed sorted order of elements",correct: false},
            { text: " Efficient support for recursive algorithms",correct: false},
            { text: "Minimal memory consumption",correct: false},
            { text: "Constant-time insertion and deletion",correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;
function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const SelectedBtn =e.target;
    const isCorrect = SelectedBtn.dataset.correct==="true";
    if(isCorrect){
        SelectedBtn.classList.add("correct");
        score++;
    }
    else{
        SelectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Hey nice play you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();

