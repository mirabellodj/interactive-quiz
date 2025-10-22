// Quiz data - embedded directly in the script
const countriesData = [
    {
        "nazione": "Francia",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/fr.png"
    },
    {
        "nazione": "Germania",
        "governo": "Repubblica parlamentare federale",
        "bandiera": "https://flagcdn.com/w320/de.png"
    },
    {
        "nazione": "Svizzera",
        "governo": "Repubblica federale collegiale",
        "bandiera": "https://flagcdn.com/w320/ch.png"
    },
    {
        "nazione": "Austria",
        "governo": "Repubblica parlamentare federale",
        "bandiera": "https://flagcdn.com/w320/at.png"
    },
    {
        "nazione": "Belgio",
        "governo": "Monarchia costituzionale parlamentare (Stato federale)",
        "bandiera": "https://flagcdn.com/w320/be.png"
    },
    {
        "nazione": "Paesi Bassi",
        "governo": "Monarchia costituzionale parlamentare",
        "bandiera": "https://flagcdn.com/w320/nl.png"
    },
    {
        "nazione": "Lussemburgo",
        "governo": "Monarchia costituzionale parlamentare",
        "bandiera": "https://flagcdn.com/w320/lu.png"
    },
    {
        "nazione": "Monaco",
        "governo": "Monarchia costituzionale",
        "bandiera": "https://flagcdn.com/w320/mc.png"
    },
    {
        "nazione": "Liechtenstein",
        "governo": "Monarchia costituzionale (principato)",
        "bandiera": "https://flagcdn.com/w320/li.png"
    },
    {
        "nazione": "Italia",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/it.png"
    },
    {
        "nazione": "Spagna",
        "governo": "Monarchia costituzionale parlamentare",
        "bandiera": "https://flagcdn.com/w320/es.png"
    },
    {
        "nazione": "Portogallo",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/pt.png"
    },
    {
        "nazione": "Andorra",
        "governo": "Diarchia parlamentare (coprincipato)",
        "bandiera": "https://flagcdn.com/w320/ad.png"
    },
    {
        "nazione": "San Marino",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/sm.png"
    },
    {
        "nazione": "Città del Vaticano",
        "governo": "Monarchia assoluta elettiva (teocrazia)",
        "bandiera": "https://flagcdn.com/w320/va.png"
    },
    {
        "nazione": "Malta",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/mt.png"
    },
    {
        "nazione": "Danimarca",
        "governo": "Monarchia costituzionale parlamentare",
        "bandiera": "https://flagcdn.com/w320/dk.png"
    },
    {
        "nazione": "Svezia",
        "governo": "Monarchia costituzionale parlamentare",
        "bandiera": "https://flagcdn.com/w320/se.png"
    },
    {
        "nazione": "Norvegia",
        "governo": "Monarchia costituzionale parlamentare",
        "bandiera": "https://flagcdn.com/w320/no.png"
    },
    {
        "nazione": "Finlandia",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/fi.png"
    },
    {
        "nazione": "Islanda",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/is.png"
    },
    {
        "nazione": "Irlanda",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/ie.png"
    },
    {
        "nazione": "Regno Unito",
        "governo": "Monarchia costituzionale parlamentare",
        "bandiera": "https://flagcdn.com/w320/gb.png"
    },
    {
        "nazione": "Polonia",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/pl.png"
    },
    {
        "nazione": "Cechia",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/cz.png"
    },
    {
        "nazione": "Slovacchia",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/sk.png"
    },
    {
        "nazione": "Ungheria",
        "governo": "Repubblica parlamentare (regime illiberale)",
        "bandiera": "https://flagcdn.com/w320/hu.png"
    },
    {
        "nazione": "Slovenia",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/si.png"
    },
    {
        "nazione": "Croazia",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/hr.png"
    },
    {
        "nazione": "Bosnia ed Erzegovina",
        "governo": "Repubblica parlamentare collegiale (Stato federale)",
        "bandiera": "https://flagcdn.com/w320/ba.png"
    },
    {
        "nazione": "Serbia",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/rs.png"
    },
    {
        "nazione": "Montenegro",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/me.png"
    },
    {
        "nazione": "Kosovo",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/xk.png"
    },
    {
        "nazione": "Albania",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/al.png"
    },
    {
        "nazione": "Macedonia del Nord",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/mk.png"
    },
    {
        "nazione": "Bulgaria",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/bg.png"
    },
    {
        "nazione": "Romania",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/ro.png"
    },
    {
        "nazione": "Moldavia",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/md.png"
    },
    {
        "nazione": "Ucraina",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/ua.png"
    },
    {
        "nazione": "Bielorussia",
        "governo": "Repubblica presidenziale autoritaria",
        "bandiera": "https://flagcdn.com/w320/by.png"
    },
    {
        "nazione": "Russia",
        "governo": "Repubblica federale presidenziale autoritaria",
        "bandiera": "https://flagcdn.com/w320/ru.png"
    },
    {
        "nazione": "Lituania",
        "governo": "Repubblica semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/lt.png"
    },
    {
        "nazione": "Lettonia",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/lv.png"
    },
    {
        "nazione": "Estonia",
        "governo": "Repubblica parlamentare",
        "bandiera": "https://flagcdn.com/w320/ee.png"
    }
];

let quizData = [];

// All possible government types for generating wrong options
const allGovernmentTypes = [
    "Repubblica semipresidenziale",
    "Repubblica parlamentare federale",
    "Repubblica federale collegiale",
    "Monarchia costituzionale parlamentare (Stato federale)",
    "Monarchia costituzionale parlamentare",
    "Monarchia costituzionale",
    "Monarchia costituzionale (principato)",
    "Repubblica parlamentare",
    "Diarchia parlamentare (coprincipato)",
    "Monarchia assoluta elettiva (teocrazia)",
    "Repubblica parlamentare (regime illiberale)",
    "Repubblica parlamentare collegiale (Stato federale)",
    "Repubblica presidenziale autoritaria",
    "Repubblica federale presidenziale autoritaria"
];

// Function to generate wrong options
function generateOptions(correctAnswer, allAnswers) {
    const options = [correctAnswer];
    const wrongOptions = allGovernmentTypes.filter(type => type !== correctAnswer);
    
    // Shuffle and pick 3 random wrong answers
    shuffleArray(wrongOptions);
    for (let i = 0; i < 3 && i < wrongOptions.length; i++) {
        options.push(wrongOptions[i]);
    }
    
    return options;
}

// Initialize quiz data
function initializeQuiz() {
    // Generate options for each question
    quizData = countriesData.map(item => ({
        country: item.nazione,
        correct: item.governo,
        flag: item.bandiera,
        options: generateOptions(item.governo, countriesData.map(d => d.governo))
    }));
    
    // Shuffle the quiz data
    shuffleArray(quizData);
    
    // Start the quiz
    loadQuestion();
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the quiz data
shuffleArray(quizData);

// DOM Elements
const countryElement = document.getElementById('country');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.querySelector('#score span');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

// Load question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Update country name and flag
    countryElement.innerHTML = `
        <img src="${currentQuestion.flag}" alt="${currentQuestion.country}" class="flag-image">
        <h2>${currentQuestion.country}</h2>
    `;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Shuffle options
    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    
    // Create option buttons
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-btn';
        button.addEventListener('click', selectOption);
        optionsContainer.appendChild(button);
    });
    
    // Reset UI
    resultElement.style.display = 'none';
    nextButton.style.display = 'none';
    
    // Enable all option buttons
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'wrong');
    });
}

// Handle option selection
function selectOption(e) {
    const selectedButton = e.target;
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Disable all option buttons
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Check if answer is correct
    const isCorrect = selectedButton.textContent === currentQuestion.correct;
    
    // Update score and UI
    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
        selectedButton.classList.add('correct');
        resultElement.textContent = 'Corretto!';
        resultElement.className = 'result correct';
    } else {
        selectedButton.classList.add('wrong');
        resultElement.textContent = `Sbagliato! La risposta corretta era: ${currentQuestion.correct}`;
        resultElement.className = 'result wrong';
        
        // Highlight the correct answer
        optionButtons.forEach(button => {
            if (button.textContent === currentQuestion.correct) {
                button.classList.add('correct');
            }
        });
    }
    
    // Show result and next button
    resultElement.style.display = 'block';
    nextButton.style.display = 'block';
}

// Handle next button click
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Quiz finished - show final results
        showFinalResults();
    }
}

// Show final results screen
function showFinalResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    
    // Determine message based on score
    let message = '';
    let emoji = '';
    if (percentage === 100) {
        message = 'Perfetto! Sei un esperto di governi mondiali!';
        emoji = '🏆';
    } else if (percentage >= 80) {
        message = 'Ottimo lavoro! Conosci molto bene i governi del mondo!';
        emoji = '🌟';
    } else if (percentage >= 60) {
        message = 'Buon risultato! Continua così!';
        emoji = '👍';
    } else if (percentage >= 40) {
        message = 'Non male! C\'è ancora margine di miglioramento.';
        emoji = '📚';
    } else {
        message = 'Continua a studiare! Riprova per migliorare!';
        emoji = '💪';
    }
    
    document.getElementById('question-container').innerHTML = `
        <div class="quiz-complete">
            <div class="final-emoji">${emoji}</div>
            <h2>Quiz Completato!</h2>
            <div class="final-score">
                <div class="score-number">${score}/${quizData.length}</div>
                <div class="score-percentage">${percentage}%</div>
            </div>
            <p class="final-message">${message}</p>
            <button onclick="restartQuiz()" class="restart-btn">🔄 Ricomincia il Quiz</button>
        </div>
    `;
    
    // Hide next button and result
    nextButton.style.display = 'none';
    resultElement.style.display = 'none';
}

// Restart quiz function
function restartQuiz() {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = '0';
    
    // Reinitialize quiz with new random order
    initializeQuiz();
}

// Event Listeners
nextButton.addEventListener('click', nextQuestion);

// Start the quiz
initializeQuiz();

