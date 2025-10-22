// Quiz data - embedded directly in the script
const countriesData = [
    {
        "nazione": "Stati Uniti",
        "governo": "Repubblica Presidenziale Federale",
        "bandiera": "https://flagcdn.com/w320/us.png"
    },
    {
        "nazione": "Regno Unito",
        "governo": "Monarchia Costituzionale Parlamentare",
        "bandiera": "https://flagcdn.com/w320/gb.png"
    },
    {
        "nazione": "Francia",
        "governo": "Repubblica Semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/fr.png"
    },
    {
        "nazione": "Germania",
        "governo": "Repubblica Parlamentare Federale",
        "bandiera": "https://flagcdn.com/w320/de.png"
    },
    {
        "nazione": "Italia",
        "governo": "Repubblica Parlamentare",
        "bandiera": "https://flagcdn.com/w320/it.png"
    },
    {
        "nazione": "Cina",
        "governo": "Repubblica Popolare Socialista a Partito Unico",
        "bandiera": "https://flagcdn.com/w320/cn.png"
    },
    {
        "nazione": "Russia",
        "governo": "Repubblica Federale Semipresidenziale",
        "bandiera": "https://flagcdn.com/w320/ru.png"
    },
    {
        "nazione": "Giappone",
        "governo": "Monarchia Costituzionale Parlamentare",
        "bandiera": "https://flagcdn.com/w320/jp.png"
    },
    {
        "nazione": "Brasile",
        "governo": "Repubblica Federale Presidenziale",
        "bandiera": "https://flagcdn.com/w320/br.png"
    },
    {
        "nazione": "India",
        "governo": "Repubblica Parlamentare Federale",
        "bandiera": "https://flagcdn.com/w320/in.png"
    },
    {
        "nazione": "Spagna",
        "governo": "Monarchia Costituzionale Parlamentare",
        "bandiera": "https://flagcdn.com/w320/es.png"
    },
    {
        "nazione": "Canada",
        "governo": "Monarchia Costituzionale Parlamentare",
        "bandiera": "https://flagcdn.com/w320/ca.png"
    },
    {
        "nazione": "Australia",
        "governo": "Monarchia Costituzionale Parlamentare",
        "bandiera": "https://flagcdn.com/w320/au.png"
    },
    {
        "nazione": "Messico",
        "governo": "Repubblica Presidenziale Federale",
        "bandiera": "https://flagcdn.com/w320/mx.png"
    },
    {
        "nazione": "Argentina",
        "governo": "Repubblica Presidenziale Federale",
        "bandiera": "https://flagcdn.com/w320/ar.png"
    },
    {
        "nazione": "Sudafrica",
        "governo": "Repubblica Parlamentare",
        "bandiera": "https://flagcdn.com/w320/za.png"
    },
    {
        "nazione": "Corea del Sud",
        "governo": "Repubblica Presidenziale",
        "bandiera": "https://flagcdn.com/w320/kr.png"
    },
    {
        "nazione": "Turchia",
        "governo": "Repubblica Presidenziale",
        "bandiera": "https://flagcdn.com/w320/tr.png"
    },
    {
        "nazione": "Arabia Saudita",
        "governo": "Monarchia Assoluta",
        "bandiera": "https://flagcdn.com/w320/sa.png"
    },
    {
        "nazione": "Iran",
        "governo": "Repubblica Islamica",
        "bandiera": "https://flagcdn.com/w320/ir.png"
    }
];

let quizData = [];

// All possible government types for generating wrong options
const allGovernmentTypes = [
    "Repubblica Presidenziale Federale",
    "Monarchia Costituzionale Parlamentare",
    "Repubblica Semipresidenziale",
    "Repubblica Parlamentare Federale",
    "Repubblica Parlamentare",
    "Repubblica Popolare Socialista a Partito Unico",
    "Repubblica Federale Semipresidenziale",
    "Monarchia Assoluta",
    "Dittatura Militare",
    "Repubblica Federale",
    "Monarchia Costituzionale",
    "Repubblica Presidenziale",
    "Teocrazia",
    "Repubblica Islamica"
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
