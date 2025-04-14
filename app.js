// Mapeamento de matérias para arquivos
const subjectToFileMap = {
    "Bioestatística": "bioestatistica",
    "Saúde Coletiva": "saudeColetiva",
    "Teoria e Sistemas": "teoriaSistemas",
    "Ciência e Profissão": "cienciaProfissao",
    "Comportamento, Sociedade e Psicologia": "comportamentoSociedadePsicologia",
    "Psicologia da Personalidade": "psicologiaPersonalidade",
    "Neurofisiologia": "neurofisiologia",
    "Psicologia Social": "psicologiaSocial",
    "Fenômenos e Processos": "fenomenosProcessos",
    "Desenvolvimento Infantil": "desenvolvimentoInfantil",
    "Neuroanatomofisiologia": "neuroanatomofisiologia",
    "Neuropsicologia": "neuropsicologia",
    "Psicologia Experimental": "psicologiaExperimental",
    "Teorias Psicanalíticas": "teoriasPsicanaliticas",
    "Avaliação Psicológica": "avaliacaoPsicologica",
    "Desenvolvimento Humano": "desenvolvimentoHumano",
    "Métodos e Técnicas da Pesquisa Psicológica": "metodosTecnicasPesquisa",
    "Fenomenologia": "fenomenologia",
    "Ética e Psicologia": "eticaPsicologia",
    "Psicologia do Trânsito": "psicologiaTransito",
    "Psicopatologia": "psicopatologia",
    "Entrevistas e Testes Projetivos": "entrevistasTestesProjetivos",
    "Intervenções Psicológicas em TEA e Pessoa com Deficiência": "intervencoesTEADeficiencia",
    "Bases da Psicologia Positiva": "psicologiaPositiva"
};

// Estado da aplicação
const state = {
    currentView: 'semester',
    selectedSemester: null,
    selectedSubject: null,
    questions: [],
    answers: [],
    materias: {
        "1º semestre": ["Bioestatística", "Saúde Coletiva", "Teoria e Sistemas", "Ciência e Profissão"],
        "2º semestre": ["Comportamento, Sociedade e Psicologia", "Psicologia da Personalidade", "Neurofisiologia", "Psicologia Social", "Fenômenos e Processos"],
        "3º semestre": ["Desenvolvimento Infantil", "Neuroanatomofisiologia", "Neuropsicologia", "Psicologia Experimental", "Teorias Psicanalíticas"],
        "4º semestre": ["Avaliação Psicológica", "Desenvolvimento Humano", "Métodos e Técnicas da Pesquisa Psicológica", "Fenomenologia"],
        "5º semestre": ["Ética e Psicologia", "Psicologia do Trânsito", "Psicopatologia", "Entrevistas e Testes Projetivos", "Intervenções Psicológicas em TEA e Pessoa com Deficiência", "Bases da Psicologia Positiva"]
    }
};

// Carrega questões de uma matéria
async function loadQuestions(subject) {
    const fileName = subjectToFileMap[subject];
    if (!fileName) {
        console.error("Matéria não mapeada:", subject);
        return [];
    }

    try {
        const module = await import(`./data/${fileName}.js`);
        const allQuestions = module[`questoes${fileName.charAt(0).toUpperCase() + fileName.slice(1)}`];
        return getRandomQuestions(allQuestions, 10);
    } catch (error) {
        console.error("Erro ao carregar questões:", error);
        return [];
    }
}

// Seleciona questões aleatórias
function getRandomQuestions(questions, count) {
    if (!questions || questions.length === 0) return [];
    if (questions.length <= count) return [...questions];
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Renderiza a aplicação
function render() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <header class="app-header">
            <h1>Questionários de Psicologia</h1>
            <button id="logout-button" class="logout-button">Sair</button>
        </header>
        <main class="app-main">
            ${renderCurrentView()}
        </main>
    `;

    document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.removeItem('psicoquestion_loggedIn');
        location.reload();
    });
}

function renderCurrentView() {
    switch (state.currentView) {
        case 'semester': return renderSemesterSelection();
        case 'quiz': return renderQuiz();
        case 'results': return renderResults();
        default: return renderSemesterSelection();
    }
}

function renderSemesterSelection() {
    return `
        <div class="semester-selection">
            <h2>Escolha o semestre:</h2>
            <div class="semester-grid">
                ${Object.keys(state.materias).map(semester => `
                    <button class="btn ${state.selectedSemester === semester ? 'selected' : ''}" 
                            data-semester="${semester}">
                        ${semester}
                    </button>
                `).join('')}
            </div>
            ${state.selectedSemester ? renderSubjects() : ''}
        </div>
    `;
}

function renderSubjects() {
    return `
        <div class="subject-selection">
            <h3>Escolha a matéria:</h3>
            <div class="subject-grid">
                ${state.materias[state.selectedSemester].map(subject => `
                    <button class="btn-outline" data-subject="${subject}">
                        ${subject}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function renderQuiz() {
    return `
        <div class="quiz-container">
            <h2>${state.selectedSubject} - Questionário</h2>
            ${state.questions.map((q, index) => `
                <div class="question-card">
                    <p><strong>${index + 1}.</strong> ${q.pergunta}</p>
                    <div class="options-grid">
                        ${q.alternativas.map(option => `
                            <button class="option-btn ${state.answers[index] === option ? 'selected' : ''}" 
                                    data-question="${index}" data-option="${option}">
                                ${option}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
            <button id="submit-answers" class="btn">Enviar Respostas</button>
        </div>
    `;
}

function renderResults() {
    const correctCount = state.questions.reduce((count, q, index) => 
        count + (state.answers[index] === q.correta ? 1 : 0), 0);
    
    return `
        <div class="results-container">
            <h2>Resultados - ${state.selectedSubject}</h2>
            <p class="score">Você acertou ${correctCount} de ${state.questions.length} questões</p>
            
            ${state.questions.map((q, index) => {
                const isCorrect = state.answers[index] === q.correta;
                return `
                    <div class="result-card ${isCorrect ? 'correct' : 'incorrect'}">
                        <p><strong>${index + 1}.</strong> ${q.pergunta}</p>
                        <div class="answer-feedback">
                            ${q.alternativas.map(option => {
                                const isSelected = state.answers[index] === option;
                                const isRight = q.correta === option;
                                let classes = 'answer-option';
                                if (isSelected && !isRight) classes += ' wrong';
                                if (isRight) classes += ' correct';
                                return `
                                    <div class="${classes}">
                                        ${option}
                                        ${isRight && !isSelected ? '<span class="correct-mark">✓</span>' : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        ${!isCorrect ? `
                            <div class="justification">
                                <strong>Justificativa:</strong> ${q.justificativa}
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('')}
            
            <button id="restart-quiz" class="btn">Voltar ao Início</button>
        </div>
    `;
}

// Event delegation
document.addEventListener('click', async (e) => {
    if (e.target.matches('[data-semester]')) {
        state.selectedSemester = e.target.dataset.semester;
        render();
    }
    
    if (e.target.matches('[data-subject]')) {
        state.selectedSubject = e.target.dataset.subject;
        state.questions = await loadQuestions(state.selectedSubject);
        state.answers = Array(state.questions.length).fill(null);
        state.currentView = 'quiz';
        render();
    }
    
    if (e.target.matches('[data-question][data-option]')) {
        const questionIndex = parseInt(e.target.dataset.question);
        state.answers[questionIndex] = e.target.dataset.option;
        render();
    }
    
    if (e.target.matches('#submit-answers')) {
        if (state.answers.includes(null)) {
            alert('Por favor, responda todas as questões antes de enviar.');
            return;
        }
        state.currentView = 'results';
        render();
    }
    
    if (e.target.matches('#restart-quiz')) {
        state.selectedSemester = null;
        state.selectedSubject = null;
        state.questions = [];
        state.answers = [];
        state.currentView = 'semester';
        render();
    }
});

// Inicializa quando autorizado
window.addEventListener('app-authorized', () => {
    render();
});