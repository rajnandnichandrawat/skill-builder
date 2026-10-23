//========= SMOOTH SCROLL EFFECT =========

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});

// ================= NAVBAR LINK ACTIVE EFFECT =================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(".feature-card, .skill-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});


// ================= DARK/LIGHT MODE =================

const themeToggle = document.querySelector(".theme-toggle");


if(themeToggle){
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // ICON CHANGE

    if(document.body.classList.contains("light-mode")){

        themeToggle.classList.remove("fa-moon");
        themeToggle.classList.add("fa-sun");

    }

    else{

        themeToggle.classList.remove("fa-sun");
        themeToggle.classList.add("fa-moon");

    }

});
}

// ================= SCROLL PROGRESS BAR =================

const scrollBar = document.querySelector(".scroll-bar");

window.addEventListener("scroll", () => {

    if(scrollBar){
    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrollPercentage =
    (scrollTop / scrollHeight) * 100;

    scrollBar.style.width = scrollPercentage + "%";
    }
});


// ================= SKILL CARD ANIMATION =================

const skillCards = document.querySelectorAll(".main-skill-card");

function showCards(){

    skillCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

}

window.addEventListener("scroll", showCards);

// PAGE LOAD PAR BHI CALL HOGA

showCards();

// ================= SEARCH FUNCTIONALITY =================

const searchInput =
document.querySelector(".search-box input");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        let searchValue =
        searchInput.value.toLowerCase();

        skillCards.forEach(card => {

            let skillName =
            card.querySelector("h2")
            .innerText
            .toLowerCase();

            if(skillName.includes(searchValue)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

}

// ================= ROADMAP POPUP =================

const roadmapPopup =
document.querySelector(".roadmap-popup");

const roadmapTitle =
document.querySelector("#roadmap-title");

const roadmapList =
document.querySelector("#roadmap-list");

const startButtons =
document.querySelectorAll(".main-skill-card button[data-skill]");

const closePopup =
document.querySelector(".close-popup");

const goLearningBtn =
document.querySelector("#go-learning-btn");

let currentSkill = "";



// ================= ROADMAP DATA =================

const roadmapData = {

    java: [
        "Introduction to Java",
        "Variables & Data Types",
        "Operator",
        "Conditions & Loops",
        "functions",
        "Arrays",
        "OOPs Concepts",
        "Collections",
        "Mini Projects"
    ],

    python: [
        "Python Basics",
        "Functions",
        "Lists & Tuples",
        "Dictionaries",
        "File Handling",
        "Projects"
    ],

    web: [
        "HTML Basics",
        "CSS Styling",
        "Responsive Design",
        "JavaScript",
        "DOM Manipulation",
        "Projects"
    ],

    dsa: [
        "Arrays",
        "Strings",
        "Linked Lists",
        "Stacks",
        "Queues",
        "Trees"
    ]
};



// ================= BUTTON CLICK =================

startButtons.forEach(button => {

    button.addEventListener("click", () => {



        // CHECK LOGIN

        const isLoggedIn =
        localStorage.getItem("loggedIn");



        // IF NOT LOGGED IN

        if(!isLoggedIn){

            window.location.href =
            "login.html";

            return;
        }



        // GET SKILL

        const skill =
        button.getAttribute("data-skill");

        currentSkill = skill;



        // TITLE

        roadmapTitle.innerText =
        skill.toUpperCase() + " Roadmap";



        // CLEAR OLD DATA

        roadmapList.innerHTML = "";



        // LOAD ROADMAP

        roadmapData[skill].forEach(topic => {

            roadmapList.innerHTML +=
            `<li>${topic}</li>`;

        });



        // SHOW POPUP

        roadmapPopup.classList.add("active");

    });

});


// ================= CLOSE POPUP =================

if(closePopup){
closePopup.addEventListener("click", () => {

    roadmapPopup.classList.remove("active");

});
}


// ================= GO TO LEARNING PAGE =================

if(goLearningBtn){

    goLearningBtn.addEventListener("click", () => {

        if(currentSkill === "java"){

            window.location.href =
            "java-learning.html";

        }

        else if(currentSkill === "python"){

            window.location.href =
            "python-learning.html";

        }

        else if(currentSkill === "web"){

            window.location.href =
            "web-learning.html";

        }

        else if(currentSkill === "dsa"){

            window.location.href =
            "dsa-learning.html";

        }

    });

}



//java-learning page js->
// ================= COMPLETE BUTTON SYSTEM =================

const completeButtons =
document.querySelectorAll(".complete-btn");

const videoButtons =
document.querySelectorAll(".video-btn");


// FIRST VIDEO ONLY OPEN

videoButtons.forEach((video, index) => {

    if(index !== 0){

        video.style.pointerEvents = "none";
        video.style.opacity = "0.5";
    }

});



// PAGE LOAD PAR SAB DISABLE

completeButtons.forEach(button => {

    button.disabled = true;

    button.style.opacity = "0.5";

    button.style.cursor = "not-allowed";

});



// VIDEO CLICK

videoButtons.forEach((videoBtn, index) => {

    videoBtn.addEventListener("click", () => {

        // 5 SEC BAAD ENABLE

        setTimeout(() => {

            completeButtons[index].disabled = false;

            completeButtons[index].style.opacity = "1";

            completeButtons[index].style.cursor = "pointer";

        }, 5000);

    });

});



// COMPLETE BUTTON CLICK

completeButtons.forEach((button, index) => {

    button.addEventListener("click", function(){

        if(this.disabled) return;

        this.innerText = "Completed ✓";

        this.style.background = "#15803d";

        this.style.pointerEvents = "none";

        // NEXT VIDEO UNLOCK

        if(videoButtons[index + 1]){

            videoButtons[index + 1].style.pointerEvents = "auto";

            videoButtons[index + 1].style.opacity = "1";
        }

    });

});

// ================= COURSE PROGRESS =================

const progressFill =
document.querySelector(".progress-bar-fill");

const progressText =
document.querySelector("#progress-text");

let completedCount = 0;

const totalTopics =
completeButtons.length;



completeButtons.forEach(button => {

    button.addEventListener("click", function(){

        if(!this.classList.contains("done")){

            this.classList.add("done");

            completedCount++;

            // UPDATE TEXT

            progressText.innerText =
            `${completedCount} / ${totalTopics} Topics Completed`;



            // UPDATE BAR

            let progressPercent =
            (completedCount / totalTopics) * 100;

            progressFill.style.width =
            progressPercent + "%";

        }

    });

});













// ================= QUIZ DATA =================

const quizData = {

    java: [

        {
            question: "Java is a ____ language.",

            options: [
                "Programming",
                "Markup",
                "Styling",
                "Database"
            ],

            answer: "Programming"
        },

        {
            question: "Which keyword is used to create class in Java?",

            options: [
                "function",
                "class",
                "define",
                "new"
            ],

            answer: "class"
        },

        {
            question: "Which method is the entry point of Java program?",

            options: [
                "start()",
                "main()",
                "run()",
                "execute()"
            ],

            answer: "main()"
        },

        {
            question: "Java supports which programming concept?",

            options: [
                "OOP",
                "Painting",
                "Cooking",
                "Networking Cable"
            ],

            answer: "OOP"
        },

        {
            question: "Which symbol is used to end statement in Java?",

            options: [
                ":",
                ";",
                "#",
                "*"
            ],

            answer: ";"
        }

    ],



    python: [

        {
            question: "Python is famous for?",

            options: [
                "AI",
                "Painting",
                "Hardware",
                "Gaming Console"
            ],

            answer: "AI"
        },

        {
            question: "Which symbol is used for comments in Python?",

            options: [
                "//",
                "#",
                "/*",
                "$"
            ],

            answer: "#"
        },

        {
            question: "Which keyword is used to define function in Python?",

            options: [
                "func",
                "define",
                "def",
                "function"
            ],

            answer: "def"
        },

        {
            question: "Which data type stores multiple values in Python?",

            options: [
                "List",
                "Integer",
                "Float",
                "Character"
            ],

            answer: "List"
        },

        {
            question: "Python is an _____ language.",

            options: [
                "Interpreted",
                "Markup",
                "Database",
                "Hardware"
            ],

            answer: "Interpreted"
        }

    ],



    web: [

        {
            question: "HTML is used for?",

            options: [
                "Structure",
                "Styling",
                "Database",
                "Animation"
            ],

            answer: "Structure"
        },

        {
            question: "CSS is used for?",

            options: [
                "Programming",
                "Styling",
                "Database",
                "Server"
            ],

            answer: "Styling"
        },

        {
            question: "Which tag is used to create heading in HTML?",

            options: [
                "<head>",
                "<h1>",
                "<p>",
                "<title>"
            ],

            answer: "<h1>"
        },

        {
            question: "Which language is used for styling webpages?",

            options: [
                "HTML",
                "CSS",
                "Python",
                "Java"
            ],

            answer: "CSS"
        },

        {
            question: "JavaScript is used for?",

            options: [
                "Styling",
                "Interactivity",
                "Database",
                "Hosting"
            ],

            answer: "Interactivity"
        }

    ],



    dsa: [

        {
            question: "DSA stands for?",

            options: [
                "Data Structures & Algorithms",
                "Digital System Area",
                "Dynamic Style Application",
                "Data Server Access"
            ],

            answer:
            "Data Structures & Algorithms"
        },

        {
            question: "Stack follows?",

            options: [
                "FIFO",
                "LIFO",
                "Random",
                "Linear"
            ],

            answer: "LIFO"
        },

        {
            question: "Which data structure uses FIFO principle?",

            options: [
                "Stack",
                "Queue",
                "Tree",
                "Array"
            ],

            answer: "Queue"
        },

        {
            question: "Which data structure stores elements in linear order?",

            options: [
                "Array",
                "Graph",
                "Tree",
                "Heap"
            ],

            answer: "Array"
        },

        {
            question: "Which operation adds element into stack?",

            options: [
                "Pop",
                "Push",
                "Delete",
                "Insert"
            ],

            answer: "Push"
        }

    ]

};



// ================= QUIZ ELEMENTS =================

const question =
document.querySelector("#question");

const optionButtons =
document.querySelectorAll(".option-btn");

const nextBtn =
document.querySelector("#next-btn");

const quizTitle =
document.querySelector("#quiz-title");

const resultSection =
document.querySelector(".result-section");

const quizSection =
document.querySelector(".quiz-section");

const scoreText =
document.querySelector("#score-text");



// ================= GET SKILL =================

const params =
new URLSearchParams(window.location.search);

const skill =
params.get("skill");



// ================= QUIZ VARIABLES =================

let currentQuestion = 0;

let score = 0;



// ================= LOAD QUIZ =================

if(skill && quizData[skill]){

    quizTitle.innerText =
    skill.toUpperCase() + " Quiz";

    loadQuestion();

}



// ================= LOAD QUESTION =================

function loadQuestion(){

    const currentQuiz =
    quizData[skill][currentQuestion];



    question.innerText =
    currentQuiz.question;



    optionButtons.forEach((button, index) => {

        button.innerText =
        currentQuiz.options[index];

    });

}



// ================= CHECK ANSWER =================

if(optionButtons.length > 0){
optionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedAnswer =
        button.innerText;



        const correctAnswer =
        quizData[skill][currentQuestion].answer;



        // CHECK ANSWER

        if(selectedAnswer === correctAnswer){

            score++;

            button.style.background =
            "#22c55e";

        }

        else{

            button.style.background =
            "#ef4444";



            // SHOW CORRECT ANSWER

            optionButtons.forEach(btn => {

                if(btn.innerText === correctAnswer){

                    btn.style.background =
                    "#22c55e";

                }

            });

        }



        // DISABLE ALL BUTTONS

        optionButtons.forEach(btn => {

            btn.disabled = true;

        });

    });

});

}



// ================= NEXT QUESTION =================

if(nextBtn){
nextBtn.addEventListener("click", () => {

    currentQuestion++;



    if(currentQuestion <
    quizData[skill].length){

        loadQuestion();



        optionButtons.forEach(button => {

            button.disabled = false;

            button.style.background =
            "rgba(255,255,255,0.08)";

        });

    }

    else{

        showResult();

    }

});
}



// ================= SHOW RESULT =================

function showResult(){

    quizSection.style.display = "none";



    resultSection.style.display = "flex";



    scoreText.innerText =
    `Your Score: ${score} / ${quizData[skill].length}`;

}







// ================= LOGIN FORM =================

const loginForm =
document.querySelector("#login-form");

if(loginForm){

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();



        // SAVE LOGIN STATUS

        localStorage.setItem(
        "loggedIn",
        "true"
        );



        // REDIRECT

        window.location.href =
        "skills.html";

    });

}