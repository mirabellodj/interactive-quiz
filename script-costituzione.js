// Quiz data - Articoli della Costituzione Italiana
const costituzioneData = [
    { "articolo": "Art. 13", "definizione": "La libertà personale è inviolabile." },
    { "articolo": "Art. 14", "definizione": "Il domicilio è inviolabile." },
    { "articolo": "Art. 15", "definizione": "È garantita la libertà e la segretezza della corrispondenza e di ogni comunicazione." },
    { "articolo": "Art. 16", "definizione": "Ogni cittadino può circolare liberamente in Italia e uscire dal Paese." },
    { "articolo": "Art. 17", "definizione": "Tutti possono riunirsi pacificamente e senza armi." },
    { "articolo": "Art. 18", "definizione": "Tutti hanno diritto di associarsi liberamente per fini leciti." },
    { "articolo": "Art. 19", "definizione": "Tutti possono professare liberamente la propria religione, in pubblico o in privato." },
    { "articolo": "Art. 20", "definizione": "Nessuna religione può essere ostacolata o favorita dallo Stato." },
    { "articolo": "Art. 21", "definizione": "Tutti hanno diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo." },
    { "articolo": "Art. 22", "definizione": "Nessuno può essere privato della cittadinanza o dei diritti civili se non per legge." },
    { "articolo": "Art. 23", "definizione": "Nessuna prestazione personale o patrimoniale può essere imposta se non in base alla legge." },
    { "articolo": "Art. 24", "definizione": "Tutti possono agire in giudizio per difendere i propri diritti." },
    { "articolo": "Art. 25", "definizione": "Nessuno può essere punito se non in base a una legge precedente al fatto commesso." },
    { "articolo": "Art. 26", "definizione": "L'estradizione è concessa solo se prevista da convenzioni internazionali." },
    { "articolo": "Art. 27", "definizione": "La responsabilità penale è personale; la pena non può essere contraria all'umanità." },
    { "articolo": "Art. 28", "definizione": "I funzionari pubblici sono responsabili dei danni causati da violazioni di legge." },
    { "articolo": "Art. 29", "definizione": "La Repubblica riconosce la famiglia fondata sul matrimonio." },
    { "articolo": "Art. 30", "definizione": "I genitori hanno il dovere e il diritto di mantenere, istruire ed educare i figli." },
    { "articolo": "Art. 31", "definizione": "La Repubblica protegge la maternità, l'infanzia e la gioventù." },
    { "articolo": "Art. 32", "definizione": "La salute è un diritto fondamentale e le cure non possono essere imposte se non per legge." },
    { "articolo": "Art. 33", "definizione": "L'arte e la scienza sono libere; l'insegnamento è libero." },
    { "articolo": "Art. 34", "definizione": "La scuola è aperta a tutti e l'istruzione inferiore è obbligatoria e gratuita." },
    { "articolo": "Art. 35", "definizione": "La Repubblica tutela il lavoro in tutte le sue forme." },
    { "articolo": "Art. 36", "definizione": "Il lavoratore ha diritto a una retribuzione giusta e a un riposo adeguato." },
    { "articolo": "Art. 37", "definizione": "La donna lavoratrice ha gli stessi diritti dell'uomo e tutele speciali per maternità." },
    { "articolo": "Art. 38", "definizione": "Gli inabili e i disoccupati hanno diritto all'assistenza e alla sicurezza sociale." },
    { "articolo": "Art. 39", "definizione": "È garantita la libertà sindacale." },
    { "articolo": "Art. 40", "definizione": "I lavoratori hanno diritto di sciopero." },
    { "articolo": "Art. 41", "definizione": "L'iniziativa economica privata è libera ma non deve danneggiare la collettività." },
    { "articolo": "Art. 42", "definizione": "La proprietà è pubblica o privata ma deve avere una funzione sociale." },
    { "articolo": "Art. 43", "definizione": "Lo Stato può riservare a sé servizi essenziali o imprese di interesse generale." },
    { "articolo": "Art. 44", "definizione": "La legge regola l'uso dei terreni per favorire la giustizia sociale." },
    { "articolo": "Art. 45", "definizione": "La Repubblica riconosce e promuove la cooperazione e l'artigianato." },
    { "articolo": "Art. 46", "definizione": "I lavoratori possono collaborare alla gestione delle aziende." },
    { "articolo": "Art. 47", "definizione": "La Repubblica incoraggia il risparmio e l'accesso alla proprietà della casa e dell'impresa." },
    { "articolo": "Art. 48", "definizione": "Il voto è personale, uguale, libero e segreto." },
    { "articolo": "Art. 49", "definizione": "Tutti i cittadini possono associarsi in partiti per concorrere alla politica nazionale." },
    { "articolo": "Art. 50", "definizione": "Tutti possono rivolgere petizioni alle Camere per chiedere provvedimenti." },
    { "articolo": "Art. 51", "definizione": "Tutti possono accedere agli uffici pubblici e alle cariche elettive secondo capacità e merito." },
    { "articolo": "Art. 52", "definizione": "La difesa della Patria è sacro dovere del cittadino." },
    { "articolo": "Art. 53", "definizione": "Tutti devono contribuire alle spese pubbliche in base alla loro capacità economica." },
    { "articolo": "Art. 54", "definizione": "I cittadini devono essere fedeli alla Repubblica e rispettarne le leggi." }
];

let quizData = [];
let allDefinitions = []; // Tutte le definizioni disponibili per generare opzioni sbagliate

// Function to generate wrong options
function generateOptions(correctAnswer) {
    const options = [correctAnswer];
    const wrongOptions = allDefinitions.filter(def => def !== correctAnswer);
    
    // Shuffle and pick 3 random wrong answers
    shuffleArray(wrongOptions);
    for (let i = 0; i < 3 && i < wrongOptions.length; i++) {
        options.push(wrongOptions[i]);
    }
    
    return options;
}

// Initialize quiz data
function initializeQuiz() {
    // Estrai tutte le definizioni per generare opzioni casuali
    allDefinitions = costituzioneData.map(item => item.definizione);
    
    // Generate options for each question
    quizData = costituzioneData.map(item => ({
        articleNumber: item.articolo,
        correct: item.definizione,
        options: generateOptions(item.definizione)
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

// DOM Elements
const articleNumberElement = document.getElementById('article-number');
const articleTextElement = document.getElementById('article-text');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.querySelector('#score span');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

// Load question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Update article number (mostra solo il numero dell'articolo)
    articleNumberElement.textContent = currentQuestion.articleNumber;
    articleTextElement.textContent = `Domanda ${currentQuestionIndex + 1} di ${quizData.length}`;
    
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
        resultElement.textContent = `Sbagliato! La definizione corretta era: ${currentQuestion.correct}`;
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
        message = 'Perfetto! Sei un esperto della Costituzione Italiana!';
        emoji = '🏆';
    } else if (percentage >= 80) {
        message = 'Ottimo lavoro! Conosci molto bene la Costituzione!';
        emoji = '⚖️';
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
            <a href="home.html" class="restart-btn" style="display: inline-block; margin-top: 1rem; text-decoration: none;">🏠 Torna alla Home</a>
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
