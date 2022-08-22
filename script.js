const quizdata = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        a: "largest railway station",
        b: "highest railway station",
        c: "longest railway station",
        d: "None of the above",
        correct: "a"
    }, {
        question: "Entomology is the science that studies",
        a: "Behaviour of human beings",
        b: "Insects",
        c: "The origin and history of technical and scientific terms",
        d: "The formation of rocks",
        correct: "b"
    }, {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "Australia",
        correct: "b"
    }, {
        question: "Garampani sanctuary is located at",
        a: "Junagarh, Gujarat",
        b: "Diphu, Assam",
        c: "Kohima, Nagaland",
        d: "Gangtok, Sikkim",
        correct: "b"
    }, {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        a: "Physics and Chemistry",
        b: "Physiology or Medicine",
        c: "Literature, Peace and Economics",
        d: "All of the above",
        correct: "c"
    }, {
        question: "Hitler party which came into power in 1933 is known as",
        a: "Labour Party",
        b: "Nazi Party",
        c: "Ku-Klux-Khan",
        d: "Democratic Party",
        correct: "b"
    }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizdata[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizdata[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizdata.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h3>You answered correctly at ${score}/${quizdata.length} questions.</h3>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});