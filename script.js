// Dados das matérias e questões
const materias = {
    "1º semestre": [
        "Bioestatística",
        "Saúde Coletiva",
        "Teoria e Sistemas",
        "Ciência e Profissão"
    ],
    "2º semestre": [
        "Comportamento, Sociedade e Psicologia",
        "Psicologia da Personalidade",
        "Neurofisiologia",
        "Psicologia Social",
        "Fenômenos e Processos"
    ],
    "3º semestre": [
        "Desenvolvimento Infantil",
        "Neuroanatomofisiologia",
        "Neuropsicologia",
        "Psicologia Experimental",
        "Teorias Psicanalíticas"
    ],
    "4º semestre": [
        "Avaliação Psicológica",
        "Desenvolvimento Humano",
        "Métodos e Técnicas da Pesquisa Psicológica",
        "Fenomenologia"
    ],
    "5º semestre": [
        "Ética e Psicologia",
        "Psicologia do Trânsito",
        "Psicopatologia",
        "Entrevistas e Testes Projetivos",
        "Intervenções Psicológicas em TEA e Pessoa com Deficiência",
        "Bases da Psicologia Positiva"
    ]
};

// Estado da aplicação
let state = {
    currentView: 'semester', // 'semester', 'quiz', 'results'
    selectedSemester: null,
    selectedSubject: null,
    questions: [],
    answers: []
};

// Elementos da DOM
const app = document.getElementById('app');

// Renderiza a aplicação baseada no estado atual
function render() {
    switch (state.currentView) {
        case 'semester':
            renderSemesterSelection();
            break;
        case 'quiz':
            renderQuiz();
            break;
        case 'results':
            renderResults();
            break;
    }
}

// Renderiza a seleção de semestre
function renderSemesterSelection() {
    let html = `
        <h1>Escolha o semestre:</h1>
        <div class="semester-grid">
    `;

    // Botões para cada semestre
    for (const semestre in materias) {
        html += `
            <button class="btn ${state.selectedSemester === semestre ? 'selected' : ''}" 
                    onclick="selectSemester('${semestre}')">
                ${semestre}
            </button>
        `;
    }

    html += `</div>`;

    // Mostrar matérias se um semestre foi selecionado
    if (state.selectedSemester) {
        html += `
            <h2 style="margin-top: 30px;">Escolha a matéria:</h2>
            <div class="subject-grid">
        `;

        for (const materia of materias[state.selectedSemester]) {
            html += `
                <button class="btn-outline" onclick="selectSubject('${materia}')">
                    ${materia}
                </button>
            `;
        }

        html += `</div>`;
    }

    app.innerHTML = html;
}

// Renderiza o quiz
function renderQuiz() {
    let html = `
        <h1>${state.selectedSubject} — Responda as questões:</h1>
    `;

    state.questions.forEach((question, index) => {
        html += `
            <div class="question-card">
                <p><strong>${index + 1}.</strong> ${question.pergunta}</p>
                <div class='group-options'>
        `;

        question.alternativas.forEach((option, optionIndex) => {
            const isSelected = state.answers[index] === option;
            html += `
                <button class="option-btn ${isSelected ? 'selected' : ''}" 
                        onclick="selectAnswer(${index}, '${option}')">
                    ${option}
                </button>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    html += `
        <div class="btn-bottom">
            <button class="btn" onclick="resetApp()">Voltar ao início</button>
            <button class="btn" onclick="submitAnswers()">Enviar respostas</button>
        </div>
    `;

    app.innerHTML = html;
}

// Renderiza os resultados
function renderResults() {
    let correctCount = 0;
    
    let html = `
        <h1>Resultado da Avaliação</h1>
        <p style="margin-bottom: 30px;">Matéria: ${state.selectedSubject}</p>
    `;

    state.questions.forEach((question, index) => {
        const userAnswer = state.answers[index];
        const isCorrect = userAnswer === question.correta;
        
        if (isCorrect) correctCount++;

        html += `
            <div class="result-card ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>${index + 1}.</strong> ${question.pergunta}</p>
                <div style="margin-top: 15px;">
        `;

        question.alternativas.forEach(option => {
            const isUserAnswer = userAnswer === option;
            const isCorrectOption = question.correta === option;
            
            let classes = 'option-btn';
            if (isUserAnswer && !isCorrect) classes += ' wrong-answer';
            if (isCorrectOption) classes += ' correct-answer';
            
            html += `
                <button class="${classes}" style="pointer-events: none;">
                    ${option}
                    ${isCorrectOption && !isUserAnswer ? '<span class="correct-mark">✓</span>' : ''}
                </button>
            `;
        });

        if (!isCorrect) {
            html += `
                <div class="feedback">
                    <p><strong>Justificativa:</strong> ${question.justificativa}</p>
                </div>
            `;
        }

        html += `
                </div>
            </div>
        `;
    });

    html += `
        <div style="text-align: center; margin-top: 30px;">
            <h2>Resumo</h2>
            <p>Você acertou ${correctCount} de ${state.questions.length} questões</p>
            <p>${Math.round((correctCount / state.questions.length) * 100)}% de aproveitamento</p>
            <button class="btn" style="margin-top: 20px;" onclick="resetApp()">Voltar ao início</button>
        </div>
    `;

    app.innerHTML = html;
}

// Funções para manipular o estado
function selectSemester(semester) {
    state.selectedSemester = semester;
    render();
}

function selectSubject(subject) {
    state.selectedSubject = subject;
    let fullQuestions;
    // Carrega as questões para a matéria selecionada
    if (subject === "Avaliação Psicológica")
    {
        fullQuestions = questoesAvaliacaoPsicologica;
    }
    else if(subject === "Bioestatística")
    {
        fullQuestions = questoesBioestatistica;
    }
    else if(subject === "Saúde Coletiva")
    {
        fullQuestions = questoesSaudeColetivaPsicologia;
    }
    else if(subject === "Teoria e Sistemas")
    {
        fullQuestions = questoesTeoriaSistemasPsicologia;
    }
    else if(subject === "Ciência e Profissão")
    {
        fullQuestions = questoesCienciaProfissaoPsicologia;
    }
    else if(subject === "Comportamento, Sociedade e Psicologia")
    {
        fullQuestions = questoesComportamentoSociedadePsicologia;
    }
    else if(subject === "Psicologia da Personalidade")
    {
        fullQuestions = questoesPsicologiaPersonalidade;
    }   
    else if(subject === "Neurofisiologia")
    {
        fullQuestions = questoesNeurofisiologiaPsicologia;
    }
    else if(subject === "Psicologia Social")
    {
        fullQuestions = questoesPsicologiaSocial;
    }
    else if(subject === "Fenômenos e Processos")
    {
        fullQuestions = questoesFenomenosProcessosPsicologia;
    }
    else if(subject === "Desenvolvimento Infantil")
    {
        fullQuestions = questoesDesenvolvimentoInfantil;
    }
    else if(subject === "Neuroanatomofisiologia")
    {
        fullQuestions = questoesNeuroanatomofisiologia;
    }
    else if(subject === "Neuropsicologia")
    {
        fullQuestions = questoesNeuropsicologia;
    }
    else if(subject === "Psicologia Experimental")
    {
        fullQuestions = questoesPsicologiaExperimental;
    }
    else if(subject === "Teorias Psicanalíticas")
    {
        fullQuestions = questoesTeoriasPsicanaliticas;
    }
    else if(subject === "Desenvolvimento Humano")
    {
        fullQuestions = questoesDesenvolvimentoHumano;
    }
    else if(subject === "Métodos e Técnicas da Pesquisa Psicológica")
    {
        fullQuestions = questoesMetodosPesquisaPsicologica;
    }
    else if(subject === "Fenomenologia")
    {
        fullQuestions = questoesFenomenologiaPsicologia;
    }
    else if(subject === "Ética e Psicologia")
    {
        fullQuestions = questoesEticaPsicologia;
    }
    else if(subject === "Psicologia do Trânsito")
    {
        fullQuestions = questoesPsicologiaTransito;
    }
    else if(subject === "Psicopatologia")
    {
        fullQuestions = questoesPsicopatologia;
    }
    else if(subject === "Entrevistas e Testes Projetivos")
    {
        fullQuestions = questoesEntrevistasTestesProjetivos;
    }
    else if(subject === "Intervenções Psicológicas em TEA e Pessoa com Deficiência")
    {
        fullQuestions = questoesIntervencoesTEAdeficiencia;
    }
    else if(subject === "Bases da Psicologia Positiva")
    {
        fullQuestions = questoesPsicologiaPositiva;
    }
        
    else {
        // Gera questões fictícias para outras matérias
        fullQuestions = Array.from({ length: 10 }, (_, i) => ({
            pergunta: `Pergunta ${i + 1} sobre ${subject}?`,
            alternativas: ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
            correta: "Alternativa B",
            justificativa: `Esta é a justificativa para a resposta correta da pergunta ${i + 1} sobre ${subject}.`
        }));
    }

    let sortiados = [];
    let selectedQuestions = [];

    for(let i=0; i<10; i++)
    {
        let sort = parseInt(Math.random() * fullQuestions.length);
        if(sortiados.find(element => element == sort))
            i--;
        else
        {
            sortiados.push(sort);
            selectedQuestions.push(fullQuestions[sort]);
        }
    }

    state.questions = selectedQuestions;
    state.answers = Array(state.questions.length).fill(null);
    state.currentView = 'quiz';
    render();
}

function addScript(path)
{
    const script = document.createElement('script');
    script.src = 'outro-script.js'; // caminho do seu script
    script.onload = () => {
        console.log('Script carregado com sucesso!');
    };

    document.head.appendChild(script);
}

function selectAnswer(questionIndex, answer) {
    state.answers[questionIndex] = answer;
    render();
}

function submitAnswers() {
    if (state.answers.includes(null)) {
        alert("Por favor, responda todas as perguntas antes de enviar.");
        return;
    }
    
    state.currentView = 'results';
    render();
}

function resetApp() {
    state = {
        currentView: 'semester',
        selectedSemester: null,
        selectedSubject: null,
        questions: [],
        answers: []
    };
    render();
}

// Inicializa a aplicação
render();
