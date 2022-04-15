const quizData = [
    {
        question: "Who is the narrator of the story?",
        a: "Elsie",
        b: "Edna",
        c: "Chief Nanga",
        d: "Odili",
        correct: "d",
    },
    {
        question:"What is Odili's profession at the beginning of the story?",
        a:"Doctor",
        b:"Actor",
        c:"Teacher",
        d:"Saleman",
        correct: "c",
    } ,
    {
        question:"Where does Odili work ?",
        a:"Bori community college",
        b:"Anata grammar school",
        c:"Bori university",
        d:"Anata secondary school",
        correct: "b",
    },
    {
        question:"How do Odili and Chief Nanga know one another ?",
        a:"They went to university together",
        b:"They are counsins",
        c:"Odili was Chief Nanga's student",
        d:"They were neighbors",
        correct: "c",
    },
    {
        question:"what is Chief Nanga known as ?",
        a:"the best - dressed politician",
        b:"the most approachable politician",
        c:"the smartest politician",
        d:"the greediest politician",
        correct: "b",
    },
    {
        question:"What is Odili's goal at the beginning of the story?",
        a:"To continue his postgraduate studies in Europe",
        b:"To win the lottery",
        c:"To be Chief Nanga's assistant",
        d:"to get married",
        correct: "a",
    },
    {
        question:" What is the name of Odili's girlfriend at the beginning of the story?",
        a:"Rosa",
        b:"Edna",
        c:"Elsie",
        d:"Eunice",
        correct: "c",
    },
    {
        question:"Where does Elsie live ?",
        a:"Bori",
        b:"Tanzania",
        c:"Ghana",
        d:"Anata",
        correct: "a",
    },
    {
        question:"Where does Chief Nanga invite Odili ?",
        a:"His mom's house ",
        b:"On vacation with his family",
        c:"to his favourite restaurant",
        d:"His house in Bori",
        correct: "d",
    },   
    {
        question:"What is the name of Odili's home village?",
        a:"Lagos",
        b:"Urua",
        c:"Bori",
        d:"Anata",
        correct: "c",
    },   
    {
        question:"What is the long - kept secret in Odili's family?",
        a:"His dad went bankrupt",
        b:"His father had many affairs",
        c:"his mother died during his childbirth",
        d:"he was born out of wedlock",
        correct: "c",
    },   
    {
        question:"What was Odili's father's porfession?",
        a:"District interpreter",
        b:"Chief",
        c:"Teacher",
        d:"Professor",
        correct: "a",
    },   
    {
        question:"What does Odili read about in the newpaper while at Chief Nanga's house?",
        a:"Gossip about Chief Nanga",
        b:"Gossip about mrs.Nanga",
        c:"Elsie's infidelity",
        d:"Bori's excrement problem",
        correct: "d",
    },   
    {
        question:"What is the library comprised of?",
        a:"English books",
        b:"American books",
        c:"West African literature",
        d:"East African literature",
        correct: "b",
    },   
    {
        question:"What does Odili spend time observing in the Minister's  house?",
        a:"His video collection",
        b:"his record collection",
        c:"his bathroom",
        d:"his library",
        correct: "d",

    },   
    {
        question:"How is the coffee issue solved?",
        a:"All of the coffee beans are dumped into a river",
        b:"the Chef drinks it",
        c:"the Chef is fired",
        d:"Chief Nanga throws it away",
        correct: "b",
    },   
    {
        question:"Who is the author of the novel?",
        a:"Chinua Achebe",
        b:"Chimamanda Ngozi Adichie",
        c:"Chinua Ackuaye",
        d:"Bessie Head",
        correct: "a",
    },   
    {
      question:"Where is the author originally from?",
      a:"Nigeria",
      b:"Kenya",
      c:"Sudan",
      d:"Tanzania",
      correct: "a",
    },   
    {
        question:"Where is Mrs.Nanga travelling to?",
        a:"Anata",
        b:"Bori",
        c:"Lagos",
        d:"Urua",
        correct: "a",
    },   
    {
        question:"What is the main criticism Odili has of his father?",
        a:"His father has another son that he loves more",
        b:"his father is enfaithful",
        c:"his father wants to have more wives and children but can't support them",
        d:"His father won't support Odili",
        correct: "c",
    },   
    {
       question:"Odili's father is the local chairman of the?",
       a:"P.O.P.",
       b:"P.C.P.",
       c:"C.P.C.",
       d:"O.P.N.",
       correct: "a",
    },
];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `  
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
       <button onclick="history.go(0)">Play Again</button>  
     ` // location.reload() won't work in CodePen for security reasons;  
        }
    }
});  