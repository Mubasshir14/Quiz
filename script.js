const questions = [
    {
        question: "When did the Bangladesh Liberation War begin?",
        answers: [
            { text: "1948", correct: false},
            { text: "1952", correct: false},
            { text: "1971", correct: true},
            { text: "1970", correct: false},
        ]
    },
    {
        question: "What event triggered the Bangladesh Liberation War?",
        answers: [
            { text: "Assassination of Sheikh Mujibur Rahman", correct: false},
            { text: "Bangladesh's declaration of independence", correct: false},
            { text: "PSigning of the Simla Agreements", correct: false},
            { text: "Pakistan's military operation in East Pakistan", correct: true},
        ]
    },
    {
        question: "Who was the founding leader of Bangladesh and the key figure in the independence movement?",
        answers: [
            { text: "Zulfikar Ali Bhutto", correct: false},
            { text: "Sheikh Mujibur Rahman", correct: true},
            { text: "Ayub Khan", correct: false},
            { text: "Yahya Khan", correct: false},
        ]
    },
    {
        question: "What is the nickname for the Bangladesh Liberation War?",
        answers: [
            { text: "The War of Independence", correct: true},
            { text: "The Six-Day War", correct: false},
            { text: "The War of 1971", correct: false},
            { text: "The Conflict of Nations", correct: false},
        ]
    },
    {
        question: "Which country supported Bangladesh during the liberation war?",
        answers: [
            { text: "India", correct: true},
            { text: "China", correct: false},
            { text: "United States", correct: false},
            { text: "United Kingdom", correct: false},
        ]
    },
    {
        question: "What was the name of the military operation launched by Pakistan in East Pakistan?",
        answers: [
            { text: "Operation Desert Storm", correct: false},
            { text: "Operation Black Thunder", correct: false},
            { text: "Operation Searchlight", correct: true},
            { text: "Operation Swift Retribution", correct: false},
        ]
    },
    {
        question: "Who served as the commander-in-chief of the Indian military during the Bangladesh Liberation War?",
        answers: [
            { text: "Indira Gandhi", correct: false},
            { text: "Field Marshal Sam Manekshaw", correct: true},
            { text: "General A. A. K. Niazi", correct: false},
            { text: "General Yahya Khan", correct: false},
        ]
    },
    {
        question: "What was the name of the declaration that marked the formal beginning of the Bangladesh Liberation War?",
        answers: [
            { text: "Lahore Resolution", correct: false},
            { text: "Dhaka Declaration", correct: true},
            { text: "Simla Agreement", correct: false},
            { text: "Six-Point Movement", correct: false},
        ]
    },
    {
        question: "What was the official name of Bangladesh before its independence in 1971?",
        answers: [
            { text: "East Pakistan", correct: true},
            { text: "West Bengal", correct: false},
            { text: "Assam", correct: false},
            { text: "Sindh", correct: false},
        ]
    },
    {
        question: "Which date is celebrated as Victory Day in Bangladesh to mark the end of the liberation war?",
        answers: [
            { text: "December 16", correct: true},
            { text: "March 26", correct: false},
            { text: "April 7", correct: false},
            { text: "January 3", correct: false},
        ]
    },
    {
        question: "Who was the first President of Bangladesh after independence?",
        answers: [
            { text: "Sheikh Mujibur Rahman", correct: false},
            { text: "Ziaur Rahman", correct: true},
            { text: "Kamal Hossain", correct: false},
            { text: "Sheikh Hasina", correct: false},
        ]
    },
    {
        question: "What was the role of Mukti Bahini in the Bangladesh Liberation War?",
        answers: [
            { text: "Pakistan's paramilitary force", correct: false},
            { text: "Indian special forces", correct: false},
            { text: "Bangladesh's guerrilla army", correct: true},
            { text: "United Nations peacekeeping troops", correct: false},
        ]
    },
    {
        question: "Who was the leader of the Pakistani military in East Pakistan during the war?",
        answers: [
            { text: "Zulfikar Ali Bhutto", correct: false},
            { text: "General A. A. K. Niazi", correct: false},
            { text: "General Tikka Khan", correct: true},
            { text: "General Yahya Khan", correct: false},
        ]
    },
    {
        question: "What was the outcome of the Instrument of Surrender signed on December 16, 1971?",
        answers: [
            { text: "Independence of Bangladesh", correct: true},
            { text: "Unification of Pakistan", correct: false},
            { text: "Truce between India and Pakistan", correct: false},
            { text: "Establishment of martial law", correct: false},
        ]
    },
    {
        question: "What was the primary role of the Indian Armed Forces during the liberation war?",
        answers: [
            { text: "Providing humanitarian aid", correct: false},
            { text: "Peacekeeping mission", correct: false},
            { text: "Direct military intervention", correct: true},
            { text: "Diplomatic negotiation", correct: false},
        ]
    },
    {
        question: "Which foreign country provided diplomatic support to Pakistan during the war?",
        answers: [
            { text: "United States", correct: false},
            { text: "China", correct: true},
            { text: "United Kingdom", correct: false},
            { text: "Russia", correct: false},
        ]
    },
    {
        question: "What was the name of the leader who took over as the President of Pakistan after Yahya Khan's resignation?",
        answers: [
            { text: "Zulfikar Ali Bhutto", correct: true},
            { text: "Ayub Khan", correct: false},
            { text: "Liaquat Ali Khan", correct: false},
            { text: "Iskander Mirza", correct: false},
        ]
    },
    {
        question: "What is the name of the memorial in Dhaka that honors the martyrs of the liberation war?",
        answers: [
            { text: "Lalbagh Fort", correct: false},
            { text: "Jatiya Sangsad Bhaban", correct: false},
            { text: "Shahid Minar", correct: true},
            { text: "Curzon Hall", correct: false},
        ]
    },
    {
        question: "Who was the Chief of Army Staff of India during the Bangladesh Liberation War?",
        answers: [
            { text: "Rajendra Singhji", correct: false},
            { text: "K. M. Cariappa", correct: false},
            { text: "Bipin Rawat", correct: false},
            { text: "Sam Manekshaw", correct: true},
        ]
    },
    {
        question: "What is the name of the Bangladesh Navy ship that played a significant role in the liberation war?",
        answers: [
            { text: "BNS Somudra Joy", correct: true},
            { text: "BNS Sylhet", correct: false},
            { text: "TBNS Padma", correct: false},
            { text: "TBNS Dhaka", correct: false},
        ]
    },
    {
        question: "Who was the first Prime Minister of Bangladesh after independence?",
        answers: [
            { text: "Ziaur Rahman", correct: false},
            { text: " Khondaker Mostaq Ahmad", correct: false},
            { text: "Sheikh Mujibur Rahman", correct: true},
            { text: "TTajuddin Ahmed", correct: false},
        ]
    },
    {
        question: "What was the name of the international organization that conducted humanitarian operations during the war?",
        answers: [
            { text: "United Nations", correct: false},
            { text: "Red Cross", correct: true},
            { text: "Doctors Without Borders", correct: false},
            { text: "UNICEF", correct: false},
        ]
    },
    {
        question: "Who was the leader of the Awami League and a key figure in the Bangladesh Liberation War?",
        answers: [
            { text: "Zulfikar Ali Bhutto", correct: false},
            { text: "Huseyn Shaheed Suhrawardy", correct: false},
            { text: "Sheikh Mujibur Rahman", correct: true},
            { text: "Nurul Amin", correct: false},
        ]
    },
    {
        question: "What was the name of the Indian army operation during the liberation war?",
        answers: [
            { text: "Operation Muktijuddho", correct: true},
            { text: "Operation Storm", correct: false},
            { text: "Operation Freedom", correct: false},
            { text: "Operation Thunderbolt", correct: false},
        ]
    },
    {
        question: "What was the official language of Pakistan before the independence of Bangladesh?",
        answers: [
            { text: "Punjabi", correct: false},
            { text: "Bengali", correct: false},
            { text: "Sindhi", correct: false},
            { text: "Urdu", correct: true},
        ]
    },
    {
        question: "Which international figure played a significant role in mediating the ceasefire between India and Pakistan?",
        answers: [
            { text: "Richard Nixon", correct: false},
            { text: "Henry Kissinger", correct: true},
            { text: "Nikita Khrushchev", correct: false},
            { text: "Winston Churchill", correct: false},
        ]
    },
    {
        question: "What role did the Bangladesh diaspora play in the liberation war?",
        answers: [
            { text: "Tundraising and awareness", correct: true},
            { text: "Military leadership", correct: false},
            { text: "Negotiating peace", correct: false},
            { text: "Cultural exchange", correct: false},
        ]
    },
    {
        question: "What was the name of the 1971 peace treaty between India and Pakistan that ended the war?",
        answers: [
            { text: "Shimla Agreement", correct: true},
            { text: "Tashkent Agreement", correct: false},
            { text: "Lahore Declaration", correct: false},
            { text: "Simla Accord", correct: false},
        ]
    },
    {
        question: "Who served as the first Chief of Staff of the Bangladesh Armed Forces after independence?",
        answers: [
            { text: "M. A. G. Osmani", correct: true},
            { text: "A. A. K. Niazi", correct: false},
            { text: "S. H. F. J. Manekshaw", correct: false},
            { text: "Ziaur Rahman", correct: false},
        ]
    },
    {
        question: "What was the role of the Indian Air Force during the Bangladesh Liberation War?",
        answers: [
            { text: "Transporting supplies", correct: false},
            { text: "Providing air support", correct: true},
            { text: "Peacekeeping", correct: false},
            { text: "Intelligence gathering", correct: false},
        ]
    }


];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectdBtn = e.target;
    const isCorrect = selectdBtn.dataset.correct === "true";
    if(isCorrect){
        selectdBtn.classList.add("correct");
        score++;
    }
    else{
        selectdBtn.classList.add("incorrect"); 
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} Out Of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
