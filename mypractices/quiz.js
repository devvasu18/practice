const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    } 
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.options.map((option, index) => `
            <input type="radio" name="option" value="${option}" id="option${index}">
            <label for="option${index}">${option}</label><br>
        `).join('')}
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return false;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption.value === currentQuestion.answer) {
        score++;
    }
    return true;
}

loadQuestion();

nextBtn.addEventListener('click', () => {
    if (checkAnswer()) {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            questionContainer.style.display = 'none';
            nextBtn.style.display = 'none';
            scoreContainer.innerHTML = `Your score is: ${score} / ${quizData.length}`;
        }
    }
});
