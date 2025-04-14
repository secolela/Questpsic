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

// Função para carregar questões (substitui o import dinâmico)
function loadQuestions(subject) {
    // Mapeamento de matérias para arquivos
    const subjectMap = {
        "Bioestatística": "bioestatistica",
        "Saúde Coletiva": "saudeColetiva",
        // Adicione todas as outras matérias aqui
    };

    const fileName = subjectMap[subject];
    if (!fileName) return Promise.resolve([]);

    return new Promise((resolve) => {
        // Carrega o arquivo via script (solução alternativa)
        const script = document.createElement('script');
        script.src = `data/${fileName}.js`;
        script.onload = () => {
            const questions = window[`questoes${fileName.charAt(0).toUpperCase() + fileName.slice(1)}`] || [];
            resolve(getRandomQuestions(questions, 10));
        };
        script.onerror = () => resolve([]);
        document.head.appendChild(script);
    });
}

// Restante do código app.js permanece igual...
// (mantenha todas as outras funções como estão)