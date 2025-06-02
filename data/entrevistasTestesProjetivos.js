// Questões de Psicologia: Entrevistas e Testes Projetivos - Rorschach
const questoesEntrevistasTestesProjetivos = [
  {
    pergunta: "Segundo Klein (1953/1955), na técnica do Brincar, o que as atividades da criança com seus brinquedos e a atribuição de papéis ao profissional expressam?",
    alternativas: [
      "Apenas o desejo da criança de se divertir.",
      "Somente a capacidade motora da criança.",
      "Meios de expressar o que o adulto predominantemente expressa com palavras, incluindo desejos de inversão de papéis e como sente que os pais se comportam.",
      "Exclusivamente a inteligência da criança.",
      "Apenas a necessidade de atenção do profissional."
    ],
    correta: "Meios de expressar o que o adulto predominantemente expressa com palavras, incluindo desejos de inversão de papéis e como sente que os pais se comportam.",
    justificativa: "Klein via o brincar como uma forma primária de expressão da criança, equivalente à linguagem verbal do adulto, revelando fantasias, desejos e percepções sobre o mundo e os cuidadores."
  },
  {
    pergunta: "Qual a diferença fundamental entre Ludodiagnóstico e Ludoterapia?",
    alternativas: [
      "Ludodiagnóstico é um processo interventivo, Ludoterapia é de avaliação.",
      "Ludodiagnóstico é a coleta de informações através do brincar para avaliação, Ludoterapia é o processo interventivo e de comunicação que envolve o brincar como veículo terapêutico.",
      "Ambos são sinônimos e podem ser usados indistintamente.",
      "Ludodiagnóstico é para adultos, Ludoterapia é para crianças.",
      "Ludodiagnóstico foca na fala, Ludoterapia foca na ação."
    ],
    correta: "Ludodiagnóstico é a coleta de informações através do brincar para avaliação, Ludoterapia é o processo interventivo e de comunicação que envolve o brincar como veículo terapêutico.",
    justificativa: "O Ludodiagnóstico é uma técnica projetiva de avaliação, enquanto a Ludoterapia é um processo terapêutico que utiliza o brincar como ferramenta de intervenção e comunicação."
  },
  {
    pergunta: "No contexto da caixa lúdica, brinquedos com estruturas côncavas, como armários, remetem a qual função?",
    alternativas: [
      "Agressividade e poder.",
      "Relação com a função paterna.",
      "Relação com a função materna, remetendo ao útero.",
      "Expressão de angústia.",
      "Conflitos com regras."
    ],
    correta: "Relação com a função materna, remetendo ao útero.",
    justificativa: "Armários e estruturas côncavas na caixa lúdica são interpretados como símbolos da função materna e do útero."
  },
  {
    pergunta: "Qual o significado da água na caixa lúdica, a depender da brincadeira?",
    alternativas: [
      "Símbolo de poder.",
      "Representação de limites.",
      "Líquido amniótico ou grau de manifestação de angústia.",
      "Conflitos alimentares.",
      "Relações sociais."
    ],
    correta: "Líquido amniótico ou grau de manifestação de angústia.",
    justificativa: "A água pode simbolizar o líquido amniótico (origens) ou o nível de angústia presente na criança, dependendo do contexto da brincadeira."
  },
  {
    pergunta: "A utilização de casinhas na caixa lúdica pode representar diferentes aspectos. O que a cozinha pode simbolizar?",
    alternativas: [
      "Relacionamentos sociais.",
      "Sexualidade e isolamento.",
      "Fase anal e lidar com regras.",
      "Situações que remetem à fase oral ou conteúdos voltados ao comprometimento alimentar.",
      "Agressividade."
    ],
    correta: "Situações que remetem à fase oral ou conteúdos voltados ao comprometimento alimentar.",
    justificativa: "A cozinha na casinha lúdica é frequentemente associada a conteúdos da fase oral e questões alimentares."
  },
  {
    pergunta: "No Rorschach, o que o código M (Movimento Humano) indica?",
    alternativas: [
      "Movimento de animais.",
      "Cor e sombreado da mancha.",
      "Respostas que envolvem um ser humano em atividade, vivência, emoção ou sensação.",
      "Objetos inanimados em movimento.",
      "Dimensionalidade da mancha."
    ],
    correta: "Respostas que envolvem um ser humano em atividade, vivência, emoção ou sensação.",
    justificativa: "M é codificado quando o percepto humano está em movimento, expressando atividade, emoção ou sensação."
  },
  {
    pergunta: "Qual a regra principal para a codificação de respostas no Rorschach, segundo o RPAS?",
    alternativas: [
      "Codificar o que o avaliador espera ouvir.",
      "Codificar apenas o que é falado explicitamente, ignorando gestos.",
      "Codificar o que o indivíduo viu e descreveu durante a avaliação, sem influência do avaliador, e priorizar o que é visto na Fase de Resposta.",
      "Codificar somente o que está no manual, sem juízo profissional.",
      "Codificar apenas a primeira resposta do avaliado."
    ],
    correta: "Codificar o que o indivíduo viu e descreveu durante a avaliação, sem influência do avaliador, e priorizar o que é visto na Fase de Resposta.",
    justificativa: "Os princípios de codificação do Rorschach enfatizam a autonomia do avaliado na descrição do percepto e a prioridade do que é expresso na fase de resposta."
  },
  {
    pergunta: "No Rorschach, o que significa FQo (Qualidade Formal 'o')?",
    alternativas: [
      "O formato não se adequa à localização na mancha.",
      "A resposta é de média frequência na localização.",
      "O objeto visto se adequa à localização na mancha ('O formato se encaixa bem na mancha').",
      "A resposta não exige forma particular.",
      "É um ajuste à mancha pouco acurado."
    ],
    correta: "O objeto visto se adequa à localização na mancha ('O formato se encaixa bem na mancha').",
    justificativa: "FQo indica que a forma do percepto se encaixa bem na mancha, sendo uma resposta de boa qualidade formal."
  },
  {
    pergunta: "Quando, no Rorschach, codificamos (2) - Par?",
    alternativas: [
      "Quando há apenas um objeto na resposta.",
      "Quando a simetria da prancha caracteriza dois objetos iguais.",
      "Quando o objeto não tem exigência de forma.",
      "Quando há interação entre os perceptos.",
      "Quando o avaliado está em dúvida sobre o número de objetos."
    ],
    correta: "Quando a simetria da prancha caracteriza dois objetos iguais.",
    justificativa: "O código (2) - Par é utilizado quando a simetria da prancha leva o avaliado a ver dois objetos idênticos."
  },
  {
    pergunta: "No Ludodiagnóstico, qual o significado da utilização do fogão, quando não usado de maneira destrutiva?",
    alternativas: [
      "Agressividade.",
      "Regras e impulsos.",
      "Energia psíquica que mobiliza a transformação.",
      "Isolamento.",
      "Comprometimento alimentar."
    ],
    correta: "Energia psíquica que mobiliza a transformação.",
    justificativa: "O fogão, quando não usado de forma destrutiva, simboliza a energia para transformação e elaboração psíquica."
  },
  {
    pergunta: "No Rorschach, o que o Escore Z de uma variável indica?",
    alternativas: [
      "Apenas o número de respostas dadas.",
      "A classificação da resposta em termos de qualidade formal.",
      "A frequência com que um código aparece na folha de codificação.",
      "A posição relativa de um resultado em relação à média de uma amostra normativa, indicando a força da resposta.",
      "O tipo de determinante utilizado na resposta."
    ],
    correta: "A posição relativa de um resultado em relação à média de uma amostra normativa, indicando a força da resposta.",
    justificativa: "O Escore Z é uma medida padronizada que permite comparar o desempenho do indivíduo com uma amostra normativa, indicando o desvio padrão da média."
  },
  {
    pergunta: "Qual a importância de consultar o Atlas do manual do Rorschach para a Qualidade Formal (FQ)?",
    alternativas: [
      "Não é necessário, o juízo profissional é sempre suficiente.",
      "Para confirmar se o objeto visto se adequa à localização na mancha e definir a classificação FQ.",
      "Para determinar o sexo do avaliado.",
      "Apenas para contagem das respostas.",
      "Para gerar novas pranchas."
    ],
    correta: "Para confirmar se o objeto visto se adequa à localização na mancha e definir a classificação FQ.",
    justificativa: "O Atlas contém as formas mais frequentes e acuradas para cada localização da mancha, auxiliando na classificação da Qualidade Formal."
  },
  {
    pergunta: "No Ludodiagnóstico, a utilização de animais domésticos pode representar o quê?",
    alternativas: [
      "Conteúdos de ordem mais primitiva.",
      "Parte domesticada da personalidade (sociabilidade).",
      "Agressividade e conflito.",
      "Isolamento e introspecção.",
      "Desejo de controle."
    ],
    correta: "Parte domesticada da personalidade (sociabilidade).",
    justificativa: "Animais domésticos na caixa lúdica são frequentemente interpretados como a parte mais domesticada e social da personalidade da criança."
  },
  {
    pergunta: "No Rorschach, o que significa Vg (Vago) na codificação?",
    alternativas: [
      "O objeto tem forma definida e interação com outro objeto.",
      "O objeto não tem exigência de forma ou o avaliado não dá a forma de maneira precisa (ex: fogo, nuvem, fumaça).",
      "A resposta é de alta frequência.",
      "A mancha é vista em sua totalidade.",
      "O avaliado está tentando enganar o examinador."
    ],
    correta: "O objeto não tem exigência de forma ou o avaliado não dá a forma de maneira precisa (ex: fogo, nuvem, fumaça).",
    justificativa: "Vg é codificado quando o percepto não tem uma forma definida ou não é descrito com precisão em termos de forma."
  },
  {
    pergunta: "Qual o papel dos 'Determinantes' na codificação do Rorschach?",
    alternativas: [
      "Indicar o conteúdo da resposta.",
      "Serem características da mancha que provocaram a resposta do avaliado, como movimento, cor ou sombreado.",
      "Determinar o tipo de personalidade do avaliado.",
      "Calcular o Escore Z.",
      "Apenas preencher o sumário de codificação."
    ],
    correta: "Serem características da mancha que provocaram a resposta do avaliado, como movimento, cor ou sombreado.",
    justificativa: "Os determinantes são os aspectos da mancha que levaram o indivíduo a dar aquela resposta específica, sendo essenciais para a interpretação."
  },
  {
    pergunta: "No Ludodiagnóstico, o que a utilização da sala na casinha pode representar?",
    alternativas: [
      "Conteúdos inconscientes.",
      "Relações sociais e proximidade entre os membros da família.",
      "Desejos sexuais.",
      "Conflitos com regras.",
      "Isolamento."
    ],
    correta: "Relações sociais e proximidade entre os membros da família.",
    justificativa: "A sala, como espaço de convívio, simboliza as interações sociais e a dinâmica familiar."
  },
  {
    pergunta: "O que o código FQ- (Qualidade Formal 'menos') no Rorschach indica?",
    alternativas: [
      "Ajuste à mancha perfeito e acurado.",
      "A resposta é de média frequência.",
      "Ajuste à mancha pouco frequente e pouco acurado.",
      "A resposta não exige forma.",
      "O objeto está em movimento."
    ],
    correta: "Ajuste à mancha pouco frequente e pouco acurado.",
    justificativa: "FQ- indica que a forma do percepto tem um ajuste pobre ou inadequado à mancha, sendo uma resposta de baixa qualidade formal."
  },
  {
    pergunta: "No Rorschach, quando codificamos 'M' (Movimento Humano), mesmo que o percepto seja sobrenatural (ex: 'voando')?",
    alternativas: [
      "Apenas quando o ser humano está em repouso.",
      "Quando a resposta envolve um ser humano em atividade, vivência, emoção ou sensação, incluindo movimentos sobrenaturais.",
      "Somente para animais em movimento.",
      "Quando há cor na resposta.",
      "Nunca para movimentos sobrenaturais."
    ],
    correta: "Quando a resposta envolve um ser humano em atividade, vivência, emoção ou sensação, incluindo movimentos sobrenaturais.",
    justificativa: "O código M engloba movimentos humanos, mesmo que fantásticos ou sobrenaturais, desde que envolvam atividade ou experiência humana."
  },
  {
    pergunta: "Qual a ordem de prevalência dos FQ (Qualidade Formal) se houver mais de um em uma resposta no Rorschach?",
    alternativas: [
      "FQo, FQu, FQ-",
      "FQ-, FQu, FQo",
      "FQu, FQo, FQ-",
      "Não há ordem, todos têm a mesma importância.",
      "Depende do examinador."
    ],
    correta: "FQ-, FQu, FQo",
    justificativa: "A ordem de prevalência dos FQ é do mais grave para o menos grave, sendo FQ- o mais importante, seguido por FQu e FQo."
  },
  {
    pergunta: "No Ludodiagnóstico, a utilização de lápis, espadas e carrinhos e afins, geralmente utilizados como instrumentos agressivos, representam o quê?",
    alternativas: [
      "Função materna.",
      "Líquido amniótico.",
      "Substitutos fálicos, com representação de poder ou agressividade.",
      "Sociabilidade.",
      "Trabalho em equipe."
    ],
    correta: "Substitutos fálicos, com representação de poder ou agressividade.",
    justificativa: "Esses objetos são interpretados como substitutos fálicos, simbolizando poder ou agressividade, conforme o contexto do brincar."
  },
  {
    pergunta: "No Rorschach, o que o código Sy (Síntese) indica?",
    alternativas: [
      "Respostas com forma, sem interação entre os perceptos.",
      "Quando há respostas com objetos com forma definida e outro com forma indefinida, com interação.",
      "Objetos sem forma definida.",
      "Quando a mancha é vista em sua totalidade.",
      "Quando o avaliado hesita em dar uma resposta."
    ],
    correta: "Quando há respostas com objetos com forma definida e outro com forma indefinida, com interação.",
    justificativa: "Sy é codificado quando há uma síntese entre elementos com forma definida e indefinida, com interação entre eles."
  },
  {
    pergunta: "No Ludodiagnóstico, o que a utilização do quarto na casinha pode simbolizar?",
    alternativas: [
      "Relacionamentos sociais.",
      "Sexualidade, isolamento ou introspecção.",
      "Fase oral.",
      "Lidar com regras.",
      "Energia psíquica."
    ],
    correta: "Sexualidade, isolamento ou introspecção.",
    justificativa: "O quarto é um espaço mais íntimo e privado, remetendo a questões de sexualidade, isolamento ou introspecção."
  },
  {
    pergunta: "Para a interpretação dos resultados do Rorschach, após o cálculo dos Escores Z, qual o próximo passo?",
    alternativas: [
      "Finalizar a avaliação sem mais etapas.",
      "Classificar cada variável consultando a tabela disponibilizada.",
      "Apenas entregar os dados brutos ao paciente.",
      "Desconsiderar os Escores Z.",
      "Recodificar todas as respostas."
    ],
    correta: "Classificar cada variável consultando a tabela disponibilizada.",
    justificativa: "Após o cálculo dos Escores Z, a próxima etapa é a classificação de cada variável com base nas tabelas normativas."
  },
  {
    pergunta: "No Ludodiagnóstico, o que a utilização do banheiro na casinha pode representar?",
    alternativas: [
      "Relacionamentos familiares.",
      "Sexualidade.",
      "Fase anal, como lida com regras e impulsos.",
      "Comprometimento alimentar.",
      "Agressividade."
    ],
    correta: "Fase anal, como lida com regras e impulsos.",
    justificativa: "O banheiro está associado à fase anal, remetendo a questões de controle de impulsos e regras."
  },
  {
    pergunta: "No Rorschach, o que significa FQn (Qualidade Formal 'não')?",
    alternativas: [
      "O objeto visto se adequa perfeitamente à mancha.",
      "A resposta exige forma muito precisa.",
      "A resposta não vai exigir forma ou não tem forma particular.",
      "O ajuste à mancha é acurado.",
      "A resposta tem múltiplos determinantes."
    ],
    correta: "A resposta não vai exigir forma ou não tem forma particular.",
    justificativa: "FQn é usado para respostas que não têm uma forma definida ou não exigem um contorno específico da mancha."
  },
  {
    pergunta: "No Ludodiagnóstico, o que o conjunto de animais domésticos + animais selvagens pode simbolizar, na díade?",
    alternativas: [
      "Apenas alegria e diversão.",
      "Conflitos entre irmãos.",
      "Díade 'Superego x Id'.",
      "Relação com os pais.",
      "Habilidades cognitivas."
    ],
    correta: "Díade 'Superego x Id'.",
    justificativa: "O conjunto de animais domésticos (parte domesticada da personalidade) e animais selvagens (conteúdos primitivos) representa a díade entre o Superego e o Id."
  },
  {
    pergunta: "Qual a relevância de Hermann Rorschach para o desenvolvimento do teste de manchas de tinta?",
    alternativas: [
      "Ele apenas divulgou o teste, sem ter contribuído para sua criação.",
      "Ele elaborou 15 manchas de tinta, mas apenas 10 foram impressas por exigência do impressor, com o sombreado acromático sendo de extrema importância na interpretação.",
      "Ele criou o teste, mas não tinha conhecimento sobre a interpretação.",
      "Ele usou apenas cores primárias nas manchas.",
      "Ele era um artista e não um médico."
    ],
    correta: "Ele elaborou 15 manchas de tinta, mas apenas 10 foram impressas por exigência do impressor, com o sombreado acromático sendo de extrema importância na interpretação.",
    justificativa: "Rorschach foi o criador do teste, e a história de como as 10 pranchas finais foram impressas e a relevância do sombreado são aspectos importantes de sua contribuição."
  },
  {
    pergunta: "No Rorschach, o que significa FQu (Qualidade Formal 'u')?",
    alternativas: [
      "O objeto visto se adequa perfeitamente à mancha.",
      "A resposta é de média frequência na localização em questão.",
      "Ajuste à mancha pouco acurado.",
      "A resposta não exige forma particular.",
      "O avaliado inventa a resposta."
    ],
    correta: "A resposta é de média frequência na localização em questão.",
    justificativa: "FQu indica que a resposta é de média frequência e se encaixa razoavelmente bem na forma da mancha."
  },
  {
    pergunta: "Quando, no Rorschach, o avaliado muda a resposta inicial durante a Fase de Resposta, qual a recomendação para a codificação?",
    alternativas: [
      "Codificar apenas a última resposta dada.",
      "Pedir para que fique com a resposta mais elaborada.",
      "Pedir para que fique com a resposta original, pois os códigos óbvios na fase de resposta são os mais verdadeiros.",
      "Ignorar ambas as respostas.",
      "Registrar todas as respostas, mas não codificar nenhuma."
    ],
    correta: "Pedir para que fique com a resposta original, pois os códigos óbvios na fase de resposta são os mais verdadeiros.",
    justificativa: "Um dos princípios de codificação do RPAS é manter a resposta original dada na Fase de Resposta, pois ela reflete o primeiro percepto do avaliado."
  },
  {
    pergunta: "No Ludodiagnóstico, quando a criança, em uma brincadeira, assume o papel de adulto, o que isso pode expressar?",
    alternativas: [
      "Apenas um sinal de maturidade precoce.",
      "Um desejo de inversão de papéis e, principalmente, como sente que seus pais ou outras pessoas de autoridade se comportam ou deveriam se comportar.",
      "Falta de imaginação.",
      "Necessidade de controle absoluto do ambiente.",
      "Apenas um jogo aleatório."
    ],
    correta: "Um desejo de inversão de papéis e, principalmente, como sente que seus pais ou outras pessoas de autoridade se comportam ou deveriam se comportar.",
    justificativa: "Essa inversão de papéis no brincar permite à criança explorar e expressar suas percepções sobre as figuras de autoridade e seus próprios desejos."
  },
  {
    pergunta: "Os 'Códigos Cognitivos' no Rorschach, como o PEC (Peculiar), são importantes para quê?",
    alternativas: [
      "Determinar o tipo de personalidade do avaliado.",
      "Indicar a presença de distorções no pensamento e na percepção, que podem ser indicativos de psicopatologia.",
      "Calcular o tempo de resposta do avaliado.",
      "Avaliar a qualidade da caligrafia do avaliado.",
      "Apenas para preencher o sumário de codificação sem propósito interpretativo."
    ],
    correta: "Indicar a presença de distorções no pensamento e na percepção, que podem ser indicativos de psicopatologia.",
    justificativa: "Códigos Cognitivos como PEC sinalizam formas bizarras ou incomuns de processar a realidade, sendo relevantes para a avaliação psicopatológica."
  },
  {
    pergunta: "No Rorschach, o que significa AGC (Conteúdo Agressivo) quando alto?",
    alternativas: [
      "Indica passividade e submissão.",
      "Pode indicar identificação com o poder, agressividade ou perigo, mas nem sempre expresso de maneira socialmente reprovável, mas sim pela competitividade.",
      "Apenas a presença de animais domésticos.",
      "Dificuldade em expressar emoções.",
      "Falta de ambição."
    ],
    correta: "Pode indicar identificação com o poder, agressividade ou perigo, mas nem sempre expresso de maneira socialmente reprovável, mas sim pela competitividade.",
    justificativa: "AGC alto sugere temas agressivos ou de poder, que podem se manifestar de diversas formas, inclusive socialmente aceitáveis como competitividade."
  },
  {
    pergunta: "No Ludodiagnóstico, a agressividade e o ressentimento da criança podem ser expressos quando ela assume qual papel em relação ao profissional?",
    alternativas: [
      "O papel de um colega.",
      "O papel de um cuidador com relação à criança, representada pela figura do(a) profissional.",
      "O papel de um objeto inanimado.",
      "O papel de si mesma.",
      "O papel de um super-herói."
    ],
    correta: "O papel de um cuidador com relação à criança, representada pela figura do(a) profissional.",
    justificativa: "Ao assumir o papel do cuidador, a criança pode projetar e expressar sua agressividade e ressentimento em relação a eles, tendo o profissional como alvo."
  },
  {
    pergunta: "No Rorschach, o que significa COP (Cooperação) quando alto?",
    alternativas: [
      "Propensão a encarar as interações como fonte de conflito.",
      "Propensão a encarar as interações como fonte de apoio, úteis, vantajosas e colaborativas.",
      "Dificuldade em se relacionar.",
      "Isolamento social.",
      "Desconfiança em relação aos outros."
    ],
    correta: "Propensão a encarar as interações como fonte de apoio, úteis, vantajosas e colaborativas.",
    justificativa: "Um COP alto indica uma visão positiva e colaborativa das interações interpessoais."
  },
  {
    pergunta: "No Rorschach, o que significa H (Conteúdo Humano) quando alto?",
    alternativas: [
      "Dificuldade na compreensão de si e dos outros.",
      "Capacidade para relacionamentos interpessoais saudáveis.",
      "Apenas o uso de figuras abstratas.",
      "Isolamento social.",
      "Percepção de animais em vez de humanos."
    ],
    correta: "Capacidade para relacionamentos interpessoais saudáveis.",
    justificativa: "Um H alto é associado à capacidade de estabelecer relacionamentos interpessoais saudáveis e de compreender a si e aos outros."
  },
  {
    pergunta: "No contexto da Codificação do Rorschach, o que é o 'Sumário de Codificação'?",
    alternativas: [
      "Um livro sobre a história do Rorschach.",
      "Uma folha para anotar as impressões do avaliador.",
      "Uma tabela padronizada para registrar e organizar os códigos de cada resposta, facilitando a contagem e a interpretação.",
      "Um questionário para o paciente.",
      "Um guia para a aplicação do teste."
    ],
    correta: "Uma tabela padronizada para registrar e organizar os códigos de cada resposta, facilitando a contagem e a interpretação.",
    justificativa: "O Sumário de Codificação é uma ferramenta essencial para organizar os dados brutos das respostas do Rorschach, preparando-os para a análise quantitativa e interpretativa."
  },
  {
    pergunta: "No Rorschach, o que o código SR (Espaço em Branco Reflexivo) indica?",
    alternativas: [
      "O uso do espaço em branco da prancha como parte da resposta, indicando um modo de pensar diferente ou oposição.",
      "Apenas a qualidade formal da resposta.",
      "O conteúdo da resposta é agressivo.",
      "A mancha foi vista em sua totalidade.",
      "A resposta é uma síntese de diferentes perceptos."
    ],
    correta: "O uso do espaço em branco da prancha como parte da resposta, indicando um modo de pensar diferente ou oposição.",
    justificativa: "SR é codificado quando o avaliado utiliza o espaço em branco da prancha para construir sua resposta, muitas vezes associado a um estilo de pensamento opositor ou à capacidade de ver o 'outro lado'."
  },
  {
    pergunta: "Qual a importância da 'simetria' das pranchas no processo de criação do Teste de Rorschach?",
    alternativas: [
      "A simetria era irrelevante, foi um acidente.",
      "As manchas eram dobradas ao meio para dar um aspecto simétrico, o que é fundamental para a percepção das formas e a projeção do avaliado.",
      "A simetria foi adicionada após a morte de Rorschach.",
      "A simetria dificulta a interpretação do teste.",
      "A simetria é apenas um detalhe estético."
    ],
    correta: "As manchas eram dobradas ao meio para dar um aspecto simétrico, o que é fundamental para a percepção das formas e a projeção do avaliado.",
    justificativa: "A simetria é uma característica intrínseca das pranchas de Rorschach, obtida ao dobrar o papel com tinta, e é crucial para o processo projetivo do indivíduo."
  },
  {
    pergunta: "No Ludodiagnóstico, a utilização de animais selvagens pode representar o quê?",
    alternativas: [
      "Sociabilidade.",
      "Parte domesticada da personalidade.",
      "Conteúdos de ordem mais primitiva ou impulsiva.",
      "Necessidade de apoio social.",
      "Habilidades de comunicação."
    ],
    correta: "Conteúdos de ordem mais primitiva ou impulsiva.",
    justificativa: "Animais selvagens na caixa lúdica são interpretados como a manifestação de conteúdos mais primitivos e impulsivos da personalidade da criança."
  },
  {
    pergunta: "O que o código SI (Sombra Integral) no Rorschach indica?",
    alternativas: [
      "O uso apenas das cores claras da prancha.",
      "O uso da totalidade da mancha, incluindo seus matizes de cinza, para formar a resposta.",
      "Apenas o uso das cores vibrantes.",
      "Apenas o uso de espaço em branco.",
      "A resposta é baseada em movimento."
    ],
    correta: "O uso da totalidade da mancha, incluindo seus matizes de cinza, para formar a resposta.",
    justificativa: "SI é codificado quando a resposta é determinada pelo uso global da mancha, incluindo suas variações de sombreado, o que pode indicar a capacidade do indivíduo de integrar diferentes aspectos da realidade."
  },
  {
    pergunta: "No Rorschach, um V-Comp (composto de vigilância) alto pode indicar qual estilo cognitivo e possíveis características?",
    alternativas: [
      "Um estilo cognitivo relaxado e despreocupado.",
      "Um estilo cognitivo cauteloso e vigilante, podendo haver distanciamento interpessoal e, se muito alto, inflexibilidade ou traços paranoicos.",
      "Apenas criatividade e originalidade.",
      "Falta de atenção aos detalhes.",
      "Habilidades de relacionamento interpessoal."
    ],
    correta: "Um estilo cognitivo cauteloso e vigilante, podendo haver distanciamento interpessoal e, se muito alto, inflexibilidade ou traços paranoicos.",
    justificativa: "Um V-Comp alto sugere um estilo de processamento de informação vigilante, que pode levar a um distanciamento social e, em extremos, a inflexibilidade e traços paranoicos."
  },
  {
    pergunta: "Qual a importância do 'sombreamento' no teste de Rorschach?",
    alternativas: [
      "É um mero acaso e não possui importância interpretativa.",
      "Foi introduzido por Rorschach intencionalmente para dificultar o teste.",
      "Apareceu ao mero acaso na impressão das pranchas e, atualmente, é de extrema importância na interpretação, pois reflete como o indivíduo lida com ansiedade e afetos complexos.",
      "É importante apenas para a localização da resposta.",
      "Não afeta a qualidade formal da resposta."
    ],
    correta: "Apareceu ao mero acaso na impressão das pranchas e, atualmente, é de extrema importância na interpretação, pois reflete como o indivíduo lida com ansiedade e afetos complexos.",
    justificativa: "O sombreado, que surgiu acidentalmente na impressão, tornou-se um determinante crucial na interpretação do Rorschach, revelando aspectos como o manejo da ansiedade e a sensibilidade do indivíduo."
  },
  {
    pergunta: "No Ludodiagnóstico, a ausência de brinquedos ou o fato de evitá-los na caixa lúdica pode indicar o quê?",
    alternativas: [
      "Excelente desenvolvimento emocional.",
      "Desinteresse natural pelo brincar.",
      "Alguns conflitos que a criança traz, como dificuldades em expressar-se simbolicamente ou intolerância à frustração.",
      "Que a criança prefere atividades intelectuais.",
      "Falta de espaço para os brinquedos."
    ],
    correta: "Alguns conflitos que a criança traz, como dificuldades em expressar-se simbolicamente ou intolerância à frustração.",
    justificativa: "A resistência ao brincar na caixa lúdica pode ser um indicativo de conflitos emocionais, dificuldades de expressão ou intolerância à frustração."
  },
  {
    pergunta: "No Rorschach, o que o código (2) - Par indica na codificação?",
    alternativas: [
      "A presença de um único objeto na resposta.",
      "Que a resposta foi dada por dois avaliados simultaneamente.",
      "Que a simetria da prancha fez com que dois objetos iguais fossem percebidos na resposta.",
      "Que a resposta é incomum.",
      "Que a resposta é muito vaga."
    ],
    correta: "Que a simetria da prancha fez com que dois objetos iguais fossem percebidos na resposta.",
    justificativa: "O código (2) - Par é utilizado quando a simetria da prancha estimula a percepção de dois elementos idênticos na resposta do avaliado."
  },
  {
    pergunta: "Qual a função da 'Fase de Inquérito' no Rorschach?",
    alternativas: [
      "Apenas anotar o tempo de resposta.",
      "Solicitar ao avaliado que justifique o que viu, explorando a localização, os determinantes e o conteúdo da resposta, para confirmar a codificação e obter mais informações.",
      "Introduzir novas manchas.",
      "Finalizar o teste.",
      "Dar sugestões ao avaliado."
    ],
    correta: "Solicitar ao avaliado que justifique o que viu, explorando a localização, os determinantes e o conteúdo da resposta, para confirmar a codificação e obter mais informações.",
    justificativa: "A Fase de Inquérito é crucial para entender como o avaliado construiu sua resposta, permitindo ao examinador confirmar a codificação e aprofundar a compreensão do processo perceptivo e associativo."
  },
  {
    pergunta: "No Ludodiagnóstico, qual a representação do quarto (sexualidade, isolamento ou introspecção)?",
    alternativas: [
      "Relacionamentos sociais.",
      "Ambiente de conflito.",
      "Fase anal.",
      "É um espaço de intimidade que reflete temas de sexualidade, necessidade de isolamento ou tendências introspectivas.",
      "Conflitos alimentares."
    ],
    correta: "É um espaço de intimidade que reflete temas de sexualidade, necessidade de isolamento ou tendências introspectivas.",
    justificativa: "O quarto, como espaço privado, simboliza aspectos relacionados à sexualidade, isolamento e a vida interior da criança."
  },
  {
    pergunta: "O que significa 'Localização' (Loc) na codificação do Rorschach?",
    alternativas: [
      "Onde a resposta foi dada na folha de registro.",
      "A parte da mancha que foi utilizada para formar a resposta (W - inteira, D - detalhe comum, Dd - detalhe incomum, SR - espaço em branco).",
      "O lugar onde o teste foi aplicado.",
      "Apenas o tamanho da mancha.",
      "O tempo que o avaliado levou para responder."
    ],
    correta: "A parte da mancha que foi utilizada para formar a resposta (W - inteira, D - detalhe comum, Dd - detalhe incomum, SR - espaço em branco).",
    justificativa: "A localização indica qual porção da mancha de tinta foi usada para a formação da resposta, sendo um dos primeiros e mais importantes aspectos a serem codificados."
  },
  {
    pergunta: "No Rorschach, o que pode indicar um H (Conteúdo Humano) baixo?",
    alternativas: [
      "Capacidade para relacionamentos interpessoais saudáveis.",
      "Dificuldade na compreensão de si e dos outros, tanto em papéis sociais quanto no seu significado.",
      "Apenas uso de figuras abstratas.",
      "Alta sociabilidade.",
      "Identificação com o poder."
    ],
    correta: "Dificuldade na compreensão de si e dos outros, tanto em papéis sociais quanto no seu significado.",
    justificativa: "Um H baixo pode sugerir dificuldades nas relações interpessoais e na compreensão das dinâmicas humanas."
  },
  {
    pergunta: "Qual a função do 'Ludodiagnóstico' na avaliação psicológica infantil?",
    alternativas: [
      "Intervir diretamente nos conflitos da criança.",
      "Coletar informações através do brincar e suas representações para auxiliar na avaliação psicológica.",
      "Apenas entreter a criança durante a sessão.",
      "Realizar diagnósticos médicos.",
      "Ensinar a criança a brincar."
    ],
    correta: "Coletar informações através do brincar e suas representações para auxiliar na avaliação psicológica.",
    justificativa: "O Ludodiagnóstico é uma técnica de avaliação que utiliza o brincar como uma forma de acessar o mundo interno da criança e coletar dados para o diagnóstico."
  },
  {
    pergunta: "No Rorschach, os 'Códigos Cognitivos' sobrepostos: “Uma lagosta consumindo (FAB1) esses leões vermelhos (INC1). Elas têm todos os tipos de braços e olhos (INC1), e estão consumindo os leões porque eles estão vermelhos (PEC)”. Qual o mais grave que deve ser codificado?",
    alternativas: [
      "FAB1",
      "INC1",
      "PEC",
      "Todos são igualmente graves.",
      "Nenhum deve ser codificado, pois é uma cena complexa."
    ],
    correta: "PEC",
    justificativa: "Em caso de sobreposição de códigos cognitivos, o mais grave ou patológico deve ser priorizado, sendo o PEC (Peculiar) o mais severo nesse exemplo."
  },
  {
    pergunta: "A técnica do brincar, conforme Klein, não interpreta apenas as palavras, mas também as atividades da criança com seus brinquedos. Por que essa abordagem é crucial?",
    alternativas: [
      "Porque as crianças não conseguem se expressar verbalmente.",
      "Porque o brincar é um meio de expressão não-verbal que revela o mundo interno da criança, fantasias e conflitos, de forma análoga à fala do adulto.",
      "Porque o brincar é apenas um passatempo para a criança.",
      "Porque a criança precisa de distração durante a avaliação.",
      "Porque o brinquedo é a única forma de comunicação da criança."
    ],
    correta: "Porque o brincar é um meio de expressão não-verbal que revela o mundo interno da criança, fantasias e conflitos, de forma análoga à fala do adulto.",
    justificativa: "O brincar é considerado um canal de comunicação fundamental para a criança, revelando aspectos de seu inconsciente e de suas vivências que não seriam expressos verbalmente."
  },
  {
    pergunta: "No Rorschach, o que o código Pr (Rejeição à Prancha) indica?",
    alternativas: [
      "O avaliado gostou da prancha.",
      "O avaliado se recusa a dar uma resposta ou não consegue ver nada na prancha.",
      "O avaliado deu uma resposta muito criativa.",
      "O avaliado solicitou mais tempo para responder.",
      "A prancha é muito fácil de interpretar."
    ],
    correta: "O avaliado se recusa a dar uma resposta ou não consegue ver nada na prancha.",
    justificativa: "Pr é codificado quando o avaliado não consegue ou se recusa a responder à prancha, o que é um dado importante para a interpretação."
  },
  {
    pergunta: "Qual a relevância do 'tempo de resposta' na avaliação do Rorschach?",
    alternativas: [
      "Não tem relevância alguma.",
      "Indica a inteligência do avaliado.",
      "Pode fornecer informações sobre a forma como o indivíduo processa estímulos, ansiedade, ou dificuldade em organizar o pensamento.",
      "Determina a validade do teste.",
      "Apenas serve para controlar o tempo da sessão."
    ],
    correta: "Pode fornecer informações sobre a forma como o indivíduo processa estímulos, ansiedade, ou dificuldade em organizar o pensamento.",
    justificativa: "O tempo de resposta é um indicador de como o indivíduo se organiza, o tempo de latência e a capacidade de processamento."
  },
  {
    pergunta: "No Ludodiagnóstico, qual a representação da 'cozinha' (situações que remetem à fase oral ou conteúdos voltados ao comprometimento alimentar)?",
    alternativas: [
      "Relações sociais.",
      "Isolamento.",
      "É um espaço que evoca temas relacionados à alimentação, nutrição, dependência e as primeiras experiências orais.",
      "Agressividade.",
      "Lidar com regras."
    ],
    correta: "É um espaço que evoca temas relacionados à alimentação, nutrição, dependência e as primeiras experiências orais.",
    justificativa: "A cozinha na casinha lúdica é frequentemente associada à fase oral e a questões alimentares, revelando aspectos sobre a nutrição e dependência."
  },
  {
    pergunta: "O que é o 'Sistema de Avaliação por Performance (RPAS)' no Rorschach?",
    alternativas: [
      "Um método de interpretação exclusivamente psicanalítico.",
      "Um sistema padronizado para codificação, contagem e interpretação das respostas ao Rorschach, com base em evidências empíricas.",
      "Uma técnica de relaxamento para o paciente.",
      "Um método de aplicação livre, sem regras.",
      "Um teste de personalidade projetivo não estruturado."
    ],
    correta: "Um sistema padronizado para codificação, contagem e interpretação das respostas ao Rorschach, com base em evidências empíricas.",
    justificativa: "O RPAS é um sistema contemporâneo e baseado em evidências para o Rorschach, que padroniza a codificação e a interpretação, buscando maior objetividade."
  },
  {
    pergunta: "No Ludodiagnóstico, o que a caixa lúdica com brinquedos desorganizados ou a retirada de brinquedos pode indicar?",
    alternativas: [
      "Organização psicótica (ou intolerante à frustração), neurótica-obsessiva + introvertida/insegura.",
      "Apenas desinteresse da criança.",
      "Capacidade de organização e controle.",
      "Agressividade incontrolável.",
      "Ausência de conflitos."
    ],
    correta: "Organização psicótica (ou intolerante à frustração), neurótica-obsessiva + introvertida/insegura.",
    justificativa: "A desorganização ou a recusa em manter os brinquedos na caixa lúdica podem ser indicativos de conflitos internos, como intolerância à frustração ou traços obsessivos."
  },
  {
    pergunta: "Qual o papel da 'interpretação' no Rorschach após a contagem e classificação dos dados?",
    alternativas: [
      "Apenas resumir os dados em tabelas.",
      "Transformar os dados quantitativos em uma compreensão qualitativa da personalidade e funcionamento psicológico do indivíduo, formulando hipóteses diagnósticas e prognósticas.",
      "Realizar o tratamento do paciente.",
      "Ignorar os dados quantitativos.",
      "Apenas preencher o relatório final."
    ],
    correta: "Transformar os dados quantitativos em uma compreensão qualitativa da personalidade e funcionamento psicológico do indivíduo, formulando hipóteses diagnósticas e prognósticas.",
    justificativa: "A interpretação é o ponto culminante do processo do Rorschach, onde os dados codificados e classificados são integrados para formar uma imagem compreensiva da personalidade do avaliado."
  },
  {
    pergunta: "No Ludodiagnóstico, a utilização de brinquedos de armar ou blocos de construção pode indicar o quê?",
    alternativas: [
      "Agressividade.",
      "Dificuldade de estruturação psíquica ou a necessidade de construir e organizar o mundo interno e externo.",
      "Falta de criatividade.",
      "Passividade.",
      "Conflitos familiares."
    ],
    correta: "Dificuldade de estruturação psíquica ou a necessidade de construir e organizar o mundo interno e externo.",
    justificativa: "Esses brinquedos podem refletir a necessidade da criança de estruturar-se ou lidar com a desorganização interna e externa."
  },
  {
    pergunta: "No Rorschach, o que o código Pu (Conteúdo Popular) indica?",
    alternativas: [
      "Respostas raras ou incomuns.",
      "Respostas que são frequentemente dadas por pessoas em uma determinada cultura ou população, indicando conformidade e convencionalidade.",
      "Conteúdos agressivos.",
      "Respostas que não possuem forma.",
      "Apenas o uso de espaço em branco."
    ],
    correta: "Respostas que são frequentemente dadas por pessoas em uma determinada cultura ou população, indicando conformidade e convencionalidade.",
    justificativa: "As respostas populares são aquelas que são frequentemente vistas na mancha, indicando uma percepção convencional da realidade."
  },
  {
    pergunta: "Qual a importância da 'rapport' e 'vínculo' na condução da entrevista psicológica e na aplicação de testes projetivos?",
    alternativas: [
      "Não são importantes, o foco é apenas na técnica.",
      "São fundamentais para estabelecer uma relação de confiança com o avaliado, promovendo um ambiente seguro que facilita a expressão e a projeção.",
      "São apenas formalidades sem impacto no resultado.",
      "Devem ser evitados para não influenciar o paciente.",
      "São importantes apenas para crianças."
    ],
    correta: "São fundamentais para estabelecer uma relação de confiança com o avaliado, promovendo um ambiente seguro que facilita a expressão e a projeção.",
    justificativa: "O rapport e o vínculo são essenciais para que o avaliado se sinta à vontade para se expressar, especialmente em testes projetivos que exigem a projeção de conteúdos internos."
  },
  {
    pergunta: "No Rorschach, a interpretação do domínio de 'Representação de Si e Outros' com base em indicadores como V-Comp, AGC, H e COP, visa compreender o quê?",
    alternativas: [
      "Apenas a inteligência do avaliado.",
      "A dinâmica dos relacionamentos interpessoais do indivíduo, como ele se percebe e percebe os outros, e seus padrões de interação.",
      "Somente os sintomas psicóticos.",
      "A capacidade de memória do avaliado.",
      "Aptidões profissionais."
    ],
    correta: "A dinâmica dos relacionamentos interpessoais do indivíduo, como ele se percebe e percebe os outros, e seus padrões de interação.",
    justificativa: "Este domínio da interpretação foca em como o indivíduo lida com as relações, sua autoimagem e a percepção do outro."
  },
  {
    pergunta: "No Ludodiagnóstico, quando a criança brinca de maneira agressiva com os brinquedos, o que isso pode indicar?",
    alternativas: [
      "Apenas diversão e energia.",
      "Expressão de agressividade e ressentimento, que pode ser uma tentativa de lidar com conflitos internos ou externos.",
      "Falta de limites por parte dos pais.",
      "Necessidade de disciplina.",
      "Ausência de emoções."
    ],
    correta: "Expressão de agressividade e ressentimento, que pode ser uma tentativa de lidar com conflitos internos ou externos.",
    justificativa: "A agressividade no brincar é uma forma de a criança expressar e elaborar sentimentos de raiva, frustração e ressentimento."
  },
  {
    pergunta: "Para que serve a 'entrevista de devolução' após a aplicação e interpretação dos testes projetivos?",
    alternativas: [
      "Apenas para informar o diagnóstico ao paciente.",
      "Para discutir os resultados da avaliação com o avaliado e/ou seus responsáveis, promovendo a compreensão do processo e dos achados, e planejando os próximos passos (intervenção ou encaminhamento).",
      "Para justificar a aplicação do teste.",
      "Para coletar novas informações do paciente.",
      "Para aplicar mais testes."
    ],
    correta: "Para discutir os resultados da avaliação com o avaliado e/o seus responsáveis, promovendo a compreensão do processo e dos achados, e planejando os próximos passos (intervenção ou encaminhamento).",
    justificativa: "A entrevista de devolução é um momento crucial para compartilhar os resultados da avaliação, promover a reflexão e planejar as próximas etapas, seja de tratamento ou encaminhamento."
  },
  {
    pergunta: "No Rorschach, o que o código Or (Organização) indica?",
    alternativas: [
      "Apenas a desorganização da resposta.",
      "A capacidade do avaliado de integrar e organizar as informações da mancha em uma resposta coerente e complexa, refletindo a capacidade de síntese e raciocínio.",
      "O número de respostas dadas.",
      "A presença de cores na resposta.",
      "Apenas a qualidade formal."
    ],
    correta: "A capacidade do avaliado de integrar e organizar as informações da mancha em uma resposta coerente e complexa, refletindo a capacidade de síntese e raciocínio.",
    justificativa: "Or é um índice da capacidade cognitiva de organizar e integrar os estímulos da mancha, refletindo a complexidade do processamento do indivíduo."
  },
  {
    pergunta: "Qual a importância da 'formação acadêmica' e 'supervisão' para a aplicação e interpretação de testes projetivos como o Rorschach?",
    alternativas: [
      "Não são necessárias, a intuição é suficiente.",
      "Apenas para cumprir exigências burocráticas.",
      "São essenciais para garantir a competência técnica, a ética profissional e a qualidade da avaliação, permitindo a compreensão aprofundada dos complexos aspectos teóricos e práticos dos testes.",
      "São importantes apenas para iniciantes.",
      "Podem ser substituídas por livros de autoajuda."
    ],
    correta: "São essenciais para garantir a competência técnica, a ética profissional e a qualidade da avaliação, permitindo a compreensão aprofundada dos complexos aspectos teóricos e práticos dos testes.",
    justificativa: "A complexidade dos testes projetivos exige uma sólida formação teórica e prática, além de supervisão contínua, para garantir uma aplicação e interpretação adequadas e éticas."
  },
  {
    pergunta: "No Ludodiagnóstico, a utilização de bonecos de família pode ser interpretada como o quê?",
    alternativas: [
      "Apenas a preferência por brinquedos macios.",
      "Expressão da dinâmica familiar, papéis, conflitos e afetos em relação aos membros da família.",
      "Desejo de ter mais irmãos.",
      "Falta de imaginação da criança.",
      "Preferência por isolamento."
    ],
    correta: "Expressão da dinâmica familiar, papéis, conflitos e afetos em relação aos membros da família.",
    justificativa: "Os bonecos de família são um meio direto para a criança projetar e explorar as relações e dinâmicas presentes em sua família."
  },
  {
    pergunta: "O que o 'Teste de Apercepção Temática (TAT)' busca avaliar?",
    alternativas: [
      "Apenas a memória de curto prazo.",
      "As funções cognitivas básicas.",
      "As fantasias inconscientes, conflitos, necessidades e padrões de relacionamento do indivíduo, através da interpretação de imagens ambíguas.",
      "A capacidade de desenho do avaliado.",
      "O nível de inteligência verbal."
    ],
    correta: "As fantasias inconscientes, conflitos, necessidades e padrões de relacionamento do indivíduo, através da interpretação de imagens ambíguas.",
    justificativa: "O TAT é um teste projetivo que visa acessar o mundo interno do indivíduo através das histórias que ele cria a partir das imagens, revelando seus conflitos e padrões relacionais."
  },
  {
    pergunta: "No Rorschach, o que o código Sd (Sombra Determinante) indica?",
    alternativas: [
      "Apenas o uso das cores vibrantes da mancha.",
      "O uso do sombreado na resposta, podendo indicar sensibilidade, ansiedade ou humor depressivo.",
      "A presença de movimento na resposta.",
      "A localização da resposta na prancha.",
      "A forma da resposta é vaga."
    ],
    correta: "O uso do sombreado na resposta, podendo indicar sensibilidade, ansiedade ou humor depressivo.",
    justificativa: "Sd é um determinante que se refere ao uso da qualidade de sombreado da mancha, e sua interpretação está ligada a estados afetivos como ansiedade e depressão."
  },
  {
    pergunta: "Qual a importância da 'padronização' na aplicação e correção de testes projetivos como o Rorschach?",
    alternativas: [
      "É irrelevante, cada aplicador faz do seu jeito.",
      "Garante que o teste seja administrado e corrigido de maneira consistente para todos os indivíduos, permitindo comparações válidas e maior objetividade nos resultados.",
      "Limita a criatividade do avaliado.",
      "Aumenta o tempo de aplicação do teste.",
      "Torna o teste menos eficaz."
    ],
    correta: "Garante que o teste seja administrado e corrigido de maneira consistente para todos os indivíduos, permitindo comparações válidas e maior objetividade nos resultados.",
    justificativa: "A padronização é crucial para a validade e confiabilidade dos testes, assegurando que as diferenças nos resultados reflitam o indivíduo e não variações na aplicação."
  },
  {
    pergunta: "No Ludodiagnóstico, qual o significado da utilização de massa de modelar?",
    alternativas: [
      "Apenas uma atividade recreativa.",
      "Capacidade de lidar com a frustração, maleabilidade, criatividade e a possibilidade de transformar e elaborar conteúdos internos.",
      "Falta de limites.",
      "Comportamento agressivo.",
      "Necessidade de regras rígidas."
    ],
    correta: "Capacidade de lidar com a frustração, maleabilidade, criatividade e a possibilidade de transformar e elaborar conteúdos internos.",
    justificativa: "A massa de modelar permite à criança explorar a maleabilidade, a capacidade de dar forma e transformar, simbolizando a plasticidade psíquica e a elaboração."
  },
  {
    pergunta: "O que o 'Teste de Wartegg' busca avaliar, através da complementação de estímulos gráficos incompletos?",
    alternativas: [
      "Apenas a coordenação motora fina.",
      "A capacidade de resolver problemas matemáticos.",
      "Aspectos da personalidade, criatividade, forma de lidar com limites e estrutura interna do indivíduo.",
      "A inteligência verbal.",
      "Habilidades de comunicação."
    ],
    correta: "Aspectos da personalidade, criatividade, forma de lidar com limites e estrutura interna do indivíduo.",
    justificativa: "O Wartegg é um teste projetivo que explora a personalidade através da forma como o indivíduo complementa os estímulos gráficos, revelando padrões de organização e criatividade."
  },
  {
    pergunta: "No Rorschach, o que o código Dv (Detalhamento Vago) indica?",
    alternativas: [
      "Uma resposta muito clara e definida.",
      "Uma resposta com muitos detalhes, mas que não se encaixam na mancha.",
      "O detalhe da mancha foi utilizado, mas a resposta é vaga ou imprecisa na sua descrição.",
      "Apenas a cor da mancha foi usada.",
      "A resposta é muito popular."
    ],
    correta: "O detalhe da mancha foi utilizado, mas a resposta é vaga ou imprecisa na sua descrição.",
    justificativa: "Dv é codificado quando um detalhe da mancha é utilizado, mas a descrição do percepto é imprecisa ou vaga, sugerindo dificuldades na clareza perceptual."
  },
  {
    pergunta: "Qual a diferença entre uma 'entrevista semiestruturada' e uma 'entrevista não estruturada' na avaliação psicológica?",
    alternativas: [
      "A entrevista semiestruturada não possui roteiro, a não estruturada possui.",
      "A semiestruturada possui um roteiro flexível com temas pré-definidos, permitindo aprofundamento. A não estruturada é mais livre, sem roteiro fixo.",
      "A semiestruturada é utilizada apenas com crianças, a não estruturada com adultos.",
      "Ambas são idênticas.",
      "A semiestruturada foca apenas em sintomas, a não estruturada foca na história de vida."
    ],
    correta: "A semiestruturada possui um roteiro flexível com temas pré-definidos, permitindo aprofundamento. A não estruturada é mais livre, sem roteiro fixo.",
    justificativa: "A entrevista semiestruturada oferece uma estrutura que permite cobrir tópicos essenciais, mas com flexibilidade para explorar o que surgir. A não estruturada é mais exploratória e adaptável."
  },
  {
    pergunta: "No Rorschach, o que o código D (Detalhe Comum) indica?",
    alternativas: [
      "O uso de toda a mancha.",
      "O uso de uma parte da mancha que é frequentemente vista e interpretada por outros indivíduos.",
      "O uso de um detalhe incomum da mancha.",
      "O uso do espaço em branco da mancha.",
      "A ausência de resposta."
    ],
    correta: "O uso de uma parte da mancha que é frequentemente vista e interpretada por outros indivíduos.",
    justificativa: "D refere-se a um detalhe da mancha que é facilmente identificável e frequentemente utilizado para formar respostas, indicando uma percepção convencional."
  },
  {
    pergunta: "Qual a importância da 'escuta ativa' e 'observação' na aplicação de testes projetivos?",
    alternativas: [
      "São habilidades que devem ser ignoradas.",
      "São cruciais para captar não apenas o conteúdo verbal, mas também o não-verbal (gestos, expressões, tom de voz), que são ricos em informações projetivas.",
      "Devem ser utilizadas apenas na entrevista inicial.",
      "Apenas o que é dito é importante.",
      "A observação pode influenciar o avaliado."
    ],
    correta: "São cruciais para captar não apenas o conteúdo verbal, mas também o não-verbal (gestos, expressões, tom de voz), que são ricos em informações projetivas.",
    justificativa: "A escuta ativa e a observação atenta permitem ao avaliador captar as sutilezas da comunicação do indivíduo, que são fundamentais para a interpretação dos testes projetivos."
  },
  {
    pergunta: "No Ludodiagnóstico, a utilização de brinquedos de sucata ou material não estruturado pode indicar o quê?",
    alternativas: [
      "Falta de recursos financeiros.",
      "Criatividade, capacidade de simbolização, e a habilidade de dar significado a objetos diversos.",
      "Falta de interesse no brincar.",
      "Necessidade de regras rígidas.",
      "Comportamento destrutivo."
    ],
    correta: "Criatividade, capacidade de simbolização, e a habilidade de dar significado a objetos diversos.",
    justificativa: "O uso de sucata e materiais não estruturados demonstra a capacidade da criança de transformar e dar novos significados, revelando criatividade e simbolização."
  },
  {
    pergunta: "Qual a importância do 'treinamento' na aplicação e correção do Rorschach?",
    alternativas: [
      "Não é necessário, a intuição é suficiente.",
      "Permite que o avaliador memorize todas as respostas possíveis.",
      "Assegura a validade e a confiabilidade do teste, pois a aplicação e a correção exigem conhecimento técnico e prática para evitar vieses e garantir a acurácia dos resultados.",
      "Torna o teste mais subjetivo.",
      "Aumenta o tempo de aplicação."
    ],
    correta: "Assegura a validade e a confiabilidade do teste, pois a aplicação e a correção exigem conhecimento técnico e prática para evitar vieses e garantir a acurácia dos resultados.",
    justificativa: "O treinamento é essencial para o uso adequado do Rorschach, minimizando erros e garantindo a qualidade da avaliação."
  },
  {
    pergunta: "No Rorschach, o que o código W (Totalidade) indica?",
    alternativas: [
      "O uso de apenas um detalhe da mancha.",
      "O uso da mancha em sua totalidade para formar a resposta, sugerindo capacidade de síntese e integração.",
      "O uso do espaço em branco.",
      "Apenas o uso das cores da mancha.",
      "Uma resposta sem forma."
    ],
    correta: "O uso da mancha em sua totalidade para formar a resposta, sugerindo capacidade de síntese e integração.",
    justificativa: "W é codificado quando o avaliado utiliza a totalidade da mancha, o que geralmente indica a capacidade de integrar informações e ter uma visão global."
  },
  {
    pergunta: "No Ludodiagnóstico, a utilização de brinquedos de guerra ou agressivos pode indicar o quê?",
    alternativas: [
      "Apenas gosto por filmes de ação.",
      "Expressão de agressividade, conflitos internos, ou a necessidade de lidar com sentimentos de raiva e poder.",
      "Falta de limites.",
      "Necessidade de socialização.",
      "Criatividade."
    ],
    correta: "Expressão de agressividade, conflitos internos, ou a necessidade de lidar com sentimentos de raiva e poder.",
    justificativa: "Brinquedos de guerra e agressivos permitem que a criança projete e elabore seus próprios sentimentos de raiva, poder e conflitos internos."
  },
  {
    pergunta: "Qual a importância da 'confidencialidade' na aplicação de testes projetivos e entrevistas psicológicas?",
    alternativas: [
      "É opcional, o psicólogo pode divulgar as informações.",
      "É fundamental para estabelecer a confiança com o avaliado e garantir a ética profissional, assegurando que as informações compartilhadas serão protegidas e utilizadas apenas para fins terapêuticos ou diagnósticos.",
      "É importante apenas para crianças.",
      "Pode ser quebrada se o psicólogo achar necessário.",
      "Não tem impacto na qualidade da avaliação."
    ],
    correta: "É fundamental para estabelecer a confiança com o avaliado e garantir a ética profissional, assegurando que as informações compartilhadas serão protegidas e utilizadas apenas para fins terapêuticos ou diagnósticos.",
    justificativa: "A confidencialidade é um pilar da ética profissional e da relação terapêutica, garantindo a segurança e a privacidade do avaliado."
  },
  {
    pergunta: "No Rorschach, o que o código Dd (Detalhe Incomum) indica?",
    alternativas: [
      "O uso de um detalhe muito comum na mancha.",
      "O uso de uma parte pequena e incomum da mancha para formar a resposta, podendo indicar um foco excessivo em detalhes ou uma percepção peculiar.",
      "O uso de toda a mancha.",
      "O uso do espaço em branco.",
      "A resposta é uma síntese."
    ],
    correta: "O uso de uma parte pequena e incomum da mancha para formar a resposta, podendo indicar um foco excessivo em detalhes ou uma percepção peculiar.",
    justificativa: "Dd é codificado quando um detalhe menor e menos óbvio da mancha é utilizado, o que pode refletir um estilo perceptivo mais minucioso ou até peculiar."
  },
  {
    pergunta: "No Ludodiagnóstico, qual o significado de uma criança que insiste em brinquedos de bebê, mesmo sendo mais velha?",
    alternativas: [
      "Apenas nostalgia.",
      "Indica uma possível fixação em fases anteriores do desenvolvimento, regressão, ou necessidade de atenção e cuidado materno.",
      "Desejo de ter um irmão mais novo.",
      "Falta de criatividade.",
      "Agressividade."
    ],
    correta: "Indica uma possível fixação em fases anteriores do desenvolvimento, regressão, ou necessidade de atenção e cuidado materno.",
    justificativa: "A escolha de brinquedos de bebê por uma criança mais velha pode sinalizar uma regressão a fases anteriores, em busca de segurança e atenção."
  },
{
pergunta: "Segundo Klein, como a criança expressa seus conteúdos psicológicos, além das palavras?",
alternativas: [
"Apenas através de desenhos",
"Principalmente com palavras, assim como adultos",
"Através do brincar, atividades variadas e todo o seu comportamento",
"Por meio de testes escritos"
],
correta: "Através do brincar, atividades variadas e todo o seu comportamento",
justificativa: "Klein aplicou o princípio básico de interpretação não apenas das palavras, mas também das atividades com brinquedos e do comportamento da criança como meios de expressar o que o adulto expressa predominantemente com palavras [1]."
},
{
pergunta: "No contexto do Ludodiagnóstico, qual papel a criança assume frequentemente em uma brincadeira, e o que isso pode expressar?",
alternativas: [
"O papel de bebê, expressando dependência",
"O papel de animal, expressando instintos primitivos",
"O papel de adulto, expressando desejo de inversão de papéis e como sente que pessoas de autoridade se comportam",
"O papel de super-herói, expressando desejo de poder"
],
correta: "O papel de adulto, expressando desejo de inversão de papéis e como sente que pessoas de autoridade se comportam",
justificativa: "Na maioria das vezes, a criança assume, em uma brincadeira, o papel de adulto, o que pode expressar seu desejo de inversão de papéis e, principalmente, como ela sente que seus pais ou outras pessoas de autoridade se comportam ou deveriam se comportar [2]."
},
{
pergunta: "Além do desejo de inversão de papéis, o que a criança pode expressar ao assumir o papel de cuidador na brincadeira, representando a figura do profissional?",
alternativas: [
"Gratidão e afeto",
"Agressividade e ressentimento",
"Tédio e indiferença",
"Criatividade e imaginação"
],
correta: "Agressividade e ressentimento",
justificativa: "A criança pode dar espaço para a sua agressividade e ressentimento quando no papel de algum dos cuidadores com relação à criança, representada pela figura do(a) profissional [2]."
},
{
pergunta: "Qual a definição principal de Ludodiagnóstico?",
alternativas: [
"Uma técnica de tratamento para crianças",
"Uma entrevista verbal com os pais",
"Uma técnica projetiva utilizada na avaliação psicológica infantil para coletar informações através do brincar",
"Um método de observação do comportamento da criança na escola"
],
correta: "Uma técnica projetiva utilizada na avaliação psicológica infantil para coletar informações através do brincar",
justificativa: "Ludodiagnóstico é uma técnica projetiva utilizada na avaliação psicológica infantil, por meio da qual há a coleta de informações através do brincar e suas representações [2]."
},
{
pergunta: "Qual a diferença fundamental entre Ludodiagnóstico e Ludoterapia, de acordo com os fontes?",
alternativas: [
"Ludodiagnóstico é apenas para bebês, Ludoterapia para crianças mais velhas",
"Ludodiagnóstico foca na coleta de informações, enquanto Ludoterapia foca no processo interventivo e de elaboração através do brincar",
"Ludodiagnóstico usa apenas brinquedos estruturados, Ludoterapia usa não-estruturados",
"Ludodiagnóstico é para grupos, Ludoterapia é individual"
],
correta: "Ludodiagnóstico foca na coleta de informações, enquanto Ludoterapia foca no processo interventivo e de elaboração através do brincar",
justificativa: "Ludodiagnóstico, hora do jogo, hora lúdica ou entrevista lúdica (nomes sinônimos) são técnicas projetivas de avaliação. Já a Ludoterapia, em diferentes abordagens, implica no processo interventivo e de comunicação 'criança x psicoterapeuta' que envolve o brincar enquanto veículo principal para a compreensão e elaboração de conteúdos da criança [3]."
},
{
pergunta: "Ao organizar o setting para atender crianças, qual postura o profissional deve adotar, segundo as fontes?",
alternativas: [
"Uma postura de autoritarismo rígido",
"Uma postura distante e observacional",
"Uma postura de equidade, com limites claros, evitando autoritarismo e indução",
"Uma postura de total permissividade"
],
correta: "Uma postura de equidade, com limites claros, evitando autoritarismo e indução",
justificativa: "Ao atender crianças, lembrem-se: Postura de equidade. Limites existem. Basta não confundir autoridade com autoritarismo e, ainda, tomar cuidado com a indução [3]."
},
{
pergunta: "Qual a função do setting na psicoterapia infantil, similar ao espaço do adulto?",
alternativas: [
"Ser um local de punição",
"Ser apenas um local de diversão",
"Ser o espaço para expressar e fazer como berço de angústias, desejos e frustrações",
"Ser um local para o psicólogo demonstrar sua autoridade"
],
correta: "Ser o espaço para expressar e fazer como berço de angústias, desejos e frustrações",
justificativa: "Assim como o adulto possui o setting como o espaço para expressar e fazer como berço de suas angústias, o mesmo se aplica para a criança; Espaço que, por meio do brincar ou qualquer outra forma lúdica, a criança manifestará desejos e frustrações [4]."
},
{
pergunta: "Quais são alguns cuidados práticos importantes na organização do setting para psicoterapia infantil, mencionados nas fontes?",
alternativas: [
"Móveis pontiagudos e janelas sem tela",
"Ausência de pia para lavar objetos",
"Móveis laváveis, cuidado com pontas, janelas teladas e materiais de fácil reposição",
"Ambientes com excesso de decoração e brinquedos"
],
correta: "Móveis laváveis, cuidado com pontas, janelas teladas e materiais de fácil reposição",
justificativa: "Alguns cuidados devem ser tomados quando se fala na organização do setting para psicoterapia infantil: Móveis laváveis; Cuidado com móveis pontiagudos; As janelas devem ser teladas; Os materiais devem ser de fácil reposição [4]."
},
{
pergunta: "Por que é importante ter uma pia de fácil acesso no setting de psicoterapia infantil?",
alternativas: [
"Para o psicólogo lavar as mãos após cada sessão",
"Para as crianças lavarem objetos ou tirarem tintas das mãos",
"Para armazenar materiais líquidos",
"Não é um cuidado relevante"
],
correta: "Para as crianças lavarem objetos ou tirarem tintas das mãos",
justificativa: "Deverá possuir uma pia de fácil acesso, para lavar objetos ou tirar tintas das mãos [5]."
},
{
pergunta: "De acordo com a fonte, o que uma sala de brincar com excesso de fantasia pode dizer?",
alternativas: [
"Que o profissional é muito criativo",
"Que a criança se sentirá mais à vontade",
"Que a sala fantasiada diz mais sobre o(a) profissional do que propriamente os recursos suficientes para se fazer uma intervenção",
"Que a sala é ideal para Ludodiagnóstico"
],
correta: "Que a sala fantasiada diz mais sobre o(a) profissional do que propriamente os recursos suficientes para se fazer uma intervenção",
justificativa: "Cuidado com o excesso! A sala fantasiada diz mais sobre a(o) profissional do que propriamente os recursos suficientes para se fazer uma intervenção [5]."
},
{
pergunta: "Segundo Klein (1953/1955), como devem ser, em geral, os brinquedos providos pelo analista na sala de brincar?",
alternativas: [
"Complexos e mecânicos",
"Grandes e barulhentos",
"Simples, pequenos e não mecânicos",
"Em grande quantidade e caros"
],
correta: "Simples, pequenos e não mecânicos",
justificativa: "Klein (1953/1955) menciona que os brinquedos providos pelo analista devem ser, no geral, simples, pequenos e não mecânicos [6]."
},
{
pergunta: "Em casos de Psicoterapia Infantil (Ludoterapia), qual objeto é importante que cada criança tenha individualmente?",
alternativas: [
"Uma caixa de lápis de cor nova",
"Uma caixa lúdica",
"Um caderno para desenhar",
"Um boneco específico"
],
correta: "Uma caixa lúdica",
justificativa: "Em casos de Psicoterapia Infantil (Ludoterapia), cada criança deverá ter a sua caixa lúdica [5]."
},
{
pergunta: "Quais são as características recomendadas para a confecção da caixa lúdica?",
alternativas: [
"Deve ser transparente e sem fechadura",
"Feita de metal, com interior exposto",
"Confeccionada em madeira ou plástico, com isolamento do conteúdo interior e alguma forma de trancá-la",
"Feita de papelão, sem isolamento"
],
correta: "Confeccionada em madeira ou plástico, com isolamento do conteúdo interior e alguma forma de trancá-la",
justificativa: "A caixa lúdica deve ser Confeccionada em madeira ou plástico. É importante que tenha isolamento do conteúdo interior e Alguma forma de trancá-la [6]."
},
{
pergunta: "Quais são os dois tipos de materiais que compõem, inicialmente, a caixa lúdica?",
alternativas: [
"Materiais caros e baratos",
"Materiais de metal e de plástico",
"Materiais estruturados e não-estruturados",
"Materiais grandes e pequenos"
],
correta: "Materiais estruturados e não-estruturados",
justificativa: "A caixa lúdica é composta, inicialmente, por dois tipos de materiais: estruturados e os não-estruturados [7]."
},
{
pergunta: "Cite um exemplo de material estruturado na caixa lúdica.",
alternativas: [
"Folha sulfite",
"Massinha de modelar",
"Carrinho",
"Tinta lavável"
],
correta: "Carrinho",
justificativa: "Os materiais estruturados são os brinquedos que já estão prontos para o uso. Exemplos: carrinhos, espada, panelinhas, bonecos e animais, jogos etc. [7]."
},
{
pergunta: "Cite um exemplo de material não-estruturado na caixa lúdica.",
alternativas: [
"Bonecos",
"Jogos de tabuleiro",
"Lápis de cor",
"Carrinhos"
],
correta: "Lápis de cor",
justificativa: "Os materiais não-estruturados envolvem, em grande parte, os gráficos. Ex.: folha sulfite, lápis, massinha, cola, tinta lavável, uma bacia e água etc. [7, 8]."
},
{
pergunta: "Por que é mais adequado organizar os brinquedos da sala de brincar em caixas organizadas em armários do que em prateleiras?",
alternativas: [
"Para economizar espaço",
"Para que os brinquedos fiquem mais visíveis",
"O uso de caixas é mais adequado do que colocar os brinquedos em prateleiras, e devem ser organizadas em armários",
"Não há diferença significativa"
],
correta: "O uso de caixas é mais adequado do que colocar os brinquedos em prateleiras, e devem ser organizadas em armários",
justificativa: "O uso de caixas é mais adequado do que colocar os brinquedos em prateleiras. Devem organizadas em armários [8]."
},
{
pergunta: "O que a criança pode experienciar se, ao retornar para uma sessão, encontra sua caixa lúdica em um estado diferente de como a deixou?",
alternativas: [
"Alívio e satisfação",
"Curiosidade e excitação",
"Uma sensação de invasão ou falta de cuidado para consigo mesma",
"Indiferença"
],
correta: "Uma sensação de invasão ou falta de cuidado para consigo mesma",
justificativa: "Sair de uma sessão deixando a caixa lúdica em um estado e, posteriormente ao chegar, encontra-la noutro, a criança poderá experienciar uma sensação de invasão ou falta de cuidado para consigo mesma [9]."
},
{
pergunta: "Quais são as possíveis representações simbólicas da caixa lúdica?",
alternativas: [
"Um baú de tesouros",
"Um espelho ou um portal",
"O ego da criança ou um recipiente que contém seus conteúdos",
"A casa da família"
],
correta: "O ego da criança ou um recipiente que contém seus conteúdos",
justificativa: "A caixa lúdica traz como representação o ego da criança ou, então, recipiente no qual há a contenção de seus conteúdos [9]."
},
{
pergunta: "O que o conteúdo guardado na caixa lúdica representa?",
alternativas: [
"Objetos perdidos",
"Coisas sem importância",
"Os conteúdos que são importantes e fazem parte da vida psíquica da criança",
"Objetos de valor material"
],
correta: "Os conteúdos que são importantes e fazem parte da vida psíquica da criança",
justificativa: "Todo conteúdo nela guardado representará os conteúdos que são importantes e, assim, fazem parte da vida psíquica da criança [10]."
},
{
pergunta: "Como a forma com a qual a caixa lúdica é utilizada pela criança pode ser interpretada?",
alternativas: [
"Como um indicador do nível de organização da criança",
"Como um reflexo da relação dos pais com objetos",
"Diz respeito às diversas possibilidades de funcionamento psíquico",
"Como um sinal de inteligência"
],
correta: "Diz respeito às diversas possibilidades de funcionamento psíquico",
justificativa: "A forma com a qual a caixa lúdica é utilizada pela criança diz respeito às diversas possibilidades de funcionamento psíquico [10]."
},
{
pergunta: "Como a ideia de manter o sigilo no setting clínico pode ser representada simbolicamente na caixa lúdica para uma criança, dependendo da idade?",
alternativas: [
"Colocando adesivos na caixa",
"Mantendo a caixa aberta durante as sessões",
"Utilizando um cadeado na caixa lúdica, fornecendo ao paciente uma cópia da chave",
"Contando segredos para a caixa"
],
correta: "Utilizando um cadeado na caixa lúdica, fornecendo ao paciente uma cópia da chave",
justificativa: "A depender da idade, a criança não compreenderá a efetividade de se manter um sigilo no setting clínico. Isto poderá ser representado, por exemplo, pela utilização de um cadeado na caixa lúdica, fornecendo ao paciente uma cópia da chave [10]."
},
{
pergunta: "O que a resistência em guardar brinquedos, guardá-los de maneira obsessiva, ou evitar retirá-los da caixa lúdica podem indicar?",
alternativas: [
"Falta de interesse na brincadeira",
"Cansaço ou sono",
"Alguns conflitos que a criança traz",
"Inteligência superior"
],
correta: "Alguns conflitos que a criança traz",
justificativa: "Resistência ao guardar brinquedos, ou então guarda-los de maneira obsessiva e, ainda, evitar retirá-los da caixa lúdica, podem indicar alguns conflitos que a criança traz [11]."
},
{
pergunta: "Que tipo de organização psíquica a resistência em guardar brinquedos ou intolerância à frustração pode sugerir, de acordo com as fontes?",
alternativas: [
"Neurótica-obsessiva",
"Psicótica ou intolerante à frustração",
"Histérica",
"Borderline"
],
correta: "Psicótica ou intolerante à frustração",
justificativa: "Resistência ao guardar brinquedos... poderia se referir a uma criança com possível organização psicótica (ou intolerante à frustração) [11]."
},
{
pergunta: "Que tipo de organização psíquica o ato de guardar brinquedos de maneira obsessiva ou evitar retirá-los da caixa lúdica pode sugerir?",
alternativas: [
"Histérica e extrovertida",
"Psicótica e agitada",
"Neurótica-obsessiva + introvertida/insegura",
"Borderline e impulsiva"
],
correta: "Neurótica-obsessiva + introvertida/insegura",
justificativa: "...guarda-los de maneira obsessiva e, ainda, evitar retirá-los da caixa lúdica, podem indicar alguns conflitos que a criança traz; Respectivamente, poderia se referir a uma criança com possível organização... neurótica-obsessiva + introvertida/insegura [11]."
},
{
pergunta: "No Ludodiagnóstico, qual é a possível representação simbólica para armários e brinquedos com estruturas côncavas?",
alternativas: [
"Relação com a função paterna",
"Relação com a função materna, remetendo ao útero",
"Agressividade e poder",
"Limites e regras"
],
correta: "Relação com a função materna, remetendo ao útero",
justificativa: "Armários e demais brinquedos com estruturas côncavas: remetem à relação com a função materna. O côncavo remete ao útero [11]."
},
{
pergunta: "Qual a possível representação simbólica de lápis, espadas e carrinhos na brincadeira?",
alternativas: [
"Criatividade e aprendizado",
"Substitutos fálicos, instrumentos agressivos ou representação de poder",
"Necessidades básicas",
"Interação social"
],
correta: "Substitutos fálicos, instrumentos agressivos ou representação de poder",
justificativa: "Lápis, espadas, carrinhos e afins: substitutos fálicos, geralmente utilizados como instrumentos agressivos ou, então, com representação de poder [12]."
},
{
pergunta: "Qual a possível representação simbólica da água na brincadeira?",
alternativas: [
"Fome ou sede",
"Limpeza e higiene",
"Líquido amniótico ou, a depender da brincadeira, o grau de manifestação de angústia",
"Felicidade e diversão"
],
correta: "Líquido amniótico ou, a depender da brincadeira, o grau de manifestação de angústia",
justificativa: "Água: líquido amniótico ou, então, a depender da brincadeira, o grau de manifestação de angústia [12]."
},
{
pergunta: "O que a utilização de casinhas e, especificamente, a brincadeira na cozinha podem representar?",
alternativas: [
"Agressividade e ressentimento",
"Situações que remetam à fase oral ou conteúdos voltados ao comprometimento alimentar",
"Necessidade de organização",
"Criatividade"
],
correta: "Situações que remetam à fase oral ou conteúdos voltados ao comprometimento alimentar",
justificativa: "Utilização de casinhas: Cozinha (situações que remetam à fase oral ou conteúdos voltados ao comprometimento alimentar) [12]."
},
{
pergunta: "Na brincadeira com casinhas, o que o quarto pode representar?",
alternativas: [
"Relacionamentos sociais",
"A fase anal",
"Sexualidade, isolamento ou introspecção",
"Energia psíquica"
],
correta: "Sexualidade, isolamento ou introspecção",
justificativa: "Utilização de casinhas: ...quarto (sexualidade, isolamento ou introspecção) [12]."
},
{
pergunta: "Na brincadeira com casinhas, o que o banheiro pode representar?",
alternativas: [
"Agressividade",
"Relação com a função materna",
"Fase anal, como lida com regras e impulsos",
"Capacidade de síntese"
],
correta: "Fase anal, como lida com regras e impulsos",
justificativa: "Utilização de casinhas: Banheiro (fase anal, como lida com regras e impulsos) [13]."
},
{
pergunta: "Qual o significado simbólico do fogão na brincadeira, quando não utilizado de maneira destrutiva?",
alternativas: [
"Passividade e calma",
"Energia psíquica que mobiliza a transformação",
"Fase oral",
"Regras e limites"
],
correta: "Energia psíquica que mobiliza a transformação",
justificativa: "Fogão: energia psíquica que mobiliza a transformação, quando não utilizado de maneira destrutiva [13]."
},
{
pergunta: "O que os animais domésticos representam simbolicamente na brincadeira?",
alternativas: [
"Conteúdos de ordem mais primitiva",
"A parte domesticada da personalidade (sociabilidade)",
"O Superego",
"O Id"
],
correta: "A parte domesticada da personalidade (sociabilidade)",
justificativa: "Animais domésticos: parte domesticada da personalidade (sociabilidade) [13]."
},
{
pergunta: "O que os animais selvagens representam simbolicamente na brincadeira?",
alternativas: [
"A parte domesticada da personalidade",
"O Superego",
"O Id",
"Conteúdos de ordem mais primitiva"
],
correta: "Conteúdos de ordem mais primitiva",
justificativa: "Animais selvagens: conteúdos de ordem mais primitiva [13]."
},
{
pergunta: "No Rorschach RPAS, o que o código 'Or' na coluna do Sumário de Codificação indica?",
alternativas: [
"A qualidade formal da resposta",
"O tipo de conteúdo",
"A orientação do cartão",
"A localização da resposta"
],
correta: "A orientação do cartão",
justificativa: "A coluna 'Or' no Sumário de Codificação indica a Orientação do Cartão [14]."
},
{
pergunta: "Qual código é utilizado na coluna 'Or' quando o cartão foi rotacionado e voltou para a posição de origem?",
alternativas: [
"<",
">",
"V",
"@"
],
correta: "@",
justificativa: "Na coluna 'Or', @ = cartão foi rotacionado e voltou na posição de origem [14]."
},
{
pergunta: "No RPAS, o que significa codificar 'Pr' (Pedir)?",
alternativas: [
"Que o avaliado puxou uma quarta resposta",
"Que o avaliador teve que pedir para que o avaliado desse uma resposta ao cartão",
"Que o cartão foi rotacionado",
"Que a resposta tem qualidade formal comum"
],
correta: "Que o avaliador teve que pedir para que o avaliado desse uma resposta ao cartão",
justificativa: "Pr: o avaliador codifica quando tiver que pedir para que o avaliado dê uma resposta ao cartão [15]."
},
{
pergunta: "O que pode indicar um elevado número de códigos 'Pr' (Pedir) no RPAS?",
alternativas: [
"Esforço por agradar ou produtividade",
"Rigidez, percepção inflexível, depressão ou resistência",
"Alta capacidade de síntese",
"Adequado teste de realidade"
],
correta: "Rigidez, percepção inflexível, depressão ou resistência",
justificativa: "Pedir (Pr): quando elevado, pode se associar à rigidez, percepção inflexível, depressão, falta de confiança ou engajamento, defesa, resistência ou estilo opositor, não-cooperativo ou passivo-agressivo [16]."
},
{
pergunta: "No RPAS, o que significa codificar 'Pu' (Puxar)?",
alternativas: [
"Que o avaliador teve que pedir uma resposta",
"Que o avaliado rotacionou o cartão",
"Toda vez que uma quarta resposta for emitida, no cartão",
"Que a resposta usou espaço em branco"
],
correta: "Toda vez que uma quarta resposta for emitida, no cartão",
justificativa: "Pu: o avaliador codifica toda vez que uma quarta resposta for emitida, no cartão [15]."
},
{
pergunta: "Um elevado número de códigos 'Pu' (Puxar) no RPAS pode indicar o quê?",
alternativas: [
"Falta de engajamento na tarefa",
"Pensamento simples ou linear",
"Esforço de realização, ambição, esforço por agradar ou produtividade",
"Dificuldade na compreensão de si e dos outros"
],
correta: "Esforço de realização, ambição, esforço por agradar ou produtividade",
justificativa: "Puxar (Pu): quando elevado pode indicar esforço de realização, ambição, esforço por agradar ou produtividade para amenizar insegurança. A hiperprodução pode se relacionar à desinibição, qualidades maníacas, limites psicológicos pobres ou dificuldade para interiorizar regras [17]."
},
{
pergunta: "No Rorschach RPAS, qual código de localização é utilizado quando a resposta usa a mancha inteira?",
alternativas: [
"D",
"Dd",
"W",
"SR"
],
correta: "W",
justificativa: "Os códigos para localização são W, D, Dd, SR e SI, sendo: W (Global) = utilizado quando a resposta usa toda a mancha [15]."
},
{
pergunta: "Qual código de localização é usado no RPAS quando a resposta abrange um detalhe ou mais, frequentemente utilizados na prancha?",
alternativas: [
"W",
"Dd",
"D",
"SI"
],
correta: "D",
justificativa: "Os códigos para localização são W, D, Dd, SR e SI, sendo: D (Detalhe comum) = utilizado quando a resposta abrange um detalhe ou mais, frequentemente utilizados na prancha [15]."
},
{
pergunta: "Quando a resposta no Rorschach usa uma ou mais áreas pouco utilizadas da mancha, qual código de localização é aplicado?",
alternativas: [
"W",
"D",
"Dd",
"SR"
],
correta: "Dd",
justificativa: "Os códigos para localização são W, D, Dd, SR e SI, sendo: Dd (Detalhe incomum) = a resposta usa uma ou mais áreas pouco utilizadas [18]."
},
{
pergunta: "No RPAS, como é codificado o Espaço em Branco quando ele se torna o foco do sujeito, e a mancha fica em segundo plano?",
alternativas: [
"SI",
"Dd",
"SR",
"W"
],
correta: "SR",
justificativa: "SR = Reversão do Espaço em branco. O espaço em branco passa a ser o foco do sujeito, enquanto que a mancha fica em segundo plano [18]."
},
{
pergunta: "Qual o código usado no RPAS quando o sujeito integra as partes em branco à mancha na sua resposta?",
alternativas: [
"SR",
"Dd",
"SI",
"W"
],
correta: "SI",
justificativa: "SI = O sujeito integra as partes em branco à mancha [18]."
},
{
pergunta: "No RPAS, qual código de Conteúdo é utilizado para uma figura humana completa?",
alternativas: [
"(H)",
"Hd",
"H",
"(Hd)"
],
correta: "H",
justificativa: "H = Código utilizado para conteúdo humano completo [19]."
},
{
pergunta: "Como é codificado o conteúdo de uma figura humana completa, porém, fantasiosa ou mágica, como um personagem de desenho animado ou um gigante?",
alternativas: [
"H",
"(H)",
"Hd",
"(Hd)"
],
correta: "(H)",
justificativa: "(H) = Figura humana completa, porém, fantasiosa ou mágica. Personagens de desenho animados... Deuses, gigantes, ciclopes, ninfas, feiticeiros, centauros, bruxos... também são (H) [20]."
},
{
pergunta: "Qual código de Conteúdo é usado para detalhes humanos, como 'só' um olho ou uma perna?",
alternativas: [
"H",
"(H)",
"Hd",
"(Hd)"
],
correta: "Hd",
justificativa: "Hd = código utilizado para detalhes humanos. Quando são vistos 'só' o olho, perna, etc. O foco está em uma parte do corpo, apenas [21]."
},
{
pergunta: "No RPAS, como é codificado o conteúdo de um detalhe humano mágico, como 'olho de ciclope' ou 'rosto na lua'?",
alternativas: [
"Hd",
"(Hd)",
"H",
"(H)"
],
correta: "(Hd)",
justificativa: "(Hd) = detalhe do humano mágico. Ex.: olho de ciclope, cabeça de bruxo, rosto na lua, cara em abóbora... [21]."
},
{
pergunta: "Qual código de Conteúdo é utilizado para um animal completo?",
alternativas: [
"(A)",
"Ad",
"A",
"(Ad)"
],
correta: "A",
justificativa: "A = código para definir animal completo. Ex.: Urso, cachorro, lesma, borboleta e afins [21]."
},
{
pergunta: "Como é codificado o conteúdo de um animal mágico, como Pato Donald ou um Hipogrifo?",
alternativas: [
"A",
"(A)",
"Ad",
"(Ad)"
],
correta: "(A)",
justificativa: "(A) = Animais mágicos. Pato Donald, Mickey, Hipogrifo do Harry Potter ou qualquer outra criatura mágica [22]."
},
{
pergunta: "Qual código de Conteúdo é usado para detalhes animais, como 'pata de urso' ou 'asa de passarinho'?",
alternativas: [
"A",
"(A)",
"Ad",
"(Ad)"
],
correta: "Ad",
justificativa: "Ad = Detalhe animal. Pata de urso, asa de passarinho, concha do mar, etc. Assim como Hd, aqui será voltado à uma parte de um animal [22]."
},
{
pergunta: "No RPAS, como é codificado o conteúdo de um detalhe animal mágico, como 'asa de hipogrifo' ou 'bico do pato Donald'?",
alternativas: [
"Ad",
"(Ad)",
"A",
"(A)"
],
correta: "(Ad)",
justificativa: "(Ad) = Asa de hipogrifo, bico do pato Donald, cara de um dragão etc. [22]."
},
{
pergunta: "Qual código de Conteúdo é utilizado para estruturas internas que não são vistas por fora, tanto de animal quanto de humano (crânio, intestino, etc.)?",
alternativas: [
"Art",
"Ay",
"Bl",
"An"
],
correta: "An",
justificativa: "An = Código de Anatomia. Codifica-se para todas as estruturas internas que não são vistas por fora, tanto de animal como de humano. Ex.: crânio, intestino, ferida aberta, secção do cérebro. Órgãos vistos por PET Scan também entram, assim como as radiografias [23]."
},
{
pergunta: "No RPAS, qual código de Conteúdo é usado para pintura, escultura, desenhos ou objetos de decoração?",
alternativas: [
"An",
"Ay",
"Art",
"NC"
],
correta: "Art",
justificativa: "Art = conteúdo de arte, pintura, escultura, desenhos. Objetos de decoração também são codificados como Art [23]."
},
{
pergunta: "Qual código de Conteúdo é utilizado para sangue, feridas ou menstruação descritos como vermelhos?",
alternativas: [
"An",
"Sx",
"Bl",
"Fi"
],
correta: "Bl",
justificativa: "Bl = Sangue, feridas ou menstruação descritos como vermelhas recebem esse código [24]."
},
{
pergunta: "No RPAS, qual código de Conteúdo é usado para vestuário, como laço, camisa ou sapatos?",
alternativas: [
"Art",
"Sx",
"Cg",
"NC"
],
correta: "Cg",
justificativa: "Cg = Vestuário. Itens como laço, camisa, sapatos, botas e chapéu. Geralmente vem associados com conteúdo humano H. Além de vestimenta, se for algo decorativo, codificar Art [24]."
},
{
pergunta: "Qual código de Conteúdo é utilizado para explosões, foguetes em propulsão ou erupções vulcânicas?",
alternativas: [
"Fi",
"Ex",
"Bl",
"m"
],
correta: "Ex",
justificativa: "Ex = Explosão que abrange bombas estourando, foguete em propulsão, erupção vulcânica, arma que disparou e fogos de artifício [24]."
},
{
pergunta: "No RPAS, qual código de Conteúdo é usado para fogo, chamas, brasas ou lava?",
alternativas: [
"Ex",
"m",
"Y",
"Fi"
],
correta: "Fi",
justificativa: "Fi = Fogo, chamas, brasas, lava ou fumaça. Vapor ou rastros de jatos não são Fi. Descarga colorida de gases ou fumaça/gás saindo de um motor seriam Fi e não Ex [25]."
},
{
pergunta: "Qual código de Conteúdo é utilizado para conteúdo sexual, seja órgão, atividade ou vestuário sexualmente sugestivo?",
alternativas: [
"An",
"Hd",
"Cg",
"Sx"
],
correta: "Sx",
justificativa: "Sx = conteúdo sexual, quer seja órgão ou atividade, vestuário sexualmente sugestivo ou roupa interior [25]."
},
{
pergunta: "Como diferenciar na codificação de Conteúdo A (animal) de Ad (detalhe animal)?",
alternativas: [
"A é para animais terrestres, Ad para aquáticos",
"A é para animais com mais de 4 patas, Ad para menos",
"Para codificarmos A, a figura vista deve ser capaz de viver com a parte que falta. Ad foca em uma parte do animal",
"A é para animais domésticos, Ad para selvagens"
],
correta: "Para codificarmos A, a figura vista deve ser capaz de viver com a parte que falta. Ad foca em uma parte do animal",
justificativa: "Para codificarmos A ou H, a figura vista deve ser capaz de viver com a parte que falta. Exemplo: 'Um urso sem o rabo' é 'A', enquanto que uma galinha correndo com a cabeça cortada é Ad. Ad é voltado à uma parte de um animal [22, 26]."
},
{
pergunta: "No RPAS, quando se codifica Sy (Sintetizado)?",
alternativas: [
"Quando há apenas um objeto na resposta",
"Quando há dois objetos separados sem relação",
"Quando há dois objetos distintos, separados, mas em relação, e com forma definida",
"Quando o objeto não tem exigência de forma"
],
correta: "Quando há dois objetos distintos, separados, mas em relação, e com forma definida",
justificativa: "Sy: codificamos Sy quando existem dois objetos distintos, separados, mas em relação. Os objetos possuem forma definida. Ex: urso escalando uma montanha... [27]."
},
{
pergunta: "Quando se codifica Vg (Vago) no RPAS?",
alternativas: [
"Quando o objeto tem forma muito precisa",
"Quando o objeto não tem exigência de forma ou o avaliado não dá a forma de maneira precisa",
"Quando há dois objetos em interação",
"Quando a resposta usa espaço em branco"
],
correta: "Quando o objeto não tem exigência de forma ou o avaliado não dá a forma de maneira precisa",
justificativa: "Vg: codificamos Vg quando o objeto não tem exigência de forma ou o avaliado não dá a forma de maneira precisa. (Fogo, nuvem, fumaça, água, explosão, felicidade...) [28]."
},
{
pergunta: "No RPAS, quando o código (2) - Par é utilizado?",
alternativas: [
"Quando há dois objetos diferentes em interação",
"Quando a simetria da prancha caracteriza dois objetos iguais",
"Quando o avaliado dá duas respostas para o mesmo cartão",
"Quando há dois objetos sem forma definida"
],
correta: "Quando a simetria da prancha caracteriza dois objetos iguais",
justificativa: "(2) - Par: codificamos Par (2) quando a simetria da prancha caracteriza dois objetos iguais [29]."
},
{
pergunta: "Qual código de Qualidade Formal (FQ) é utilizado quando o objeto visto se adequa bem à localização na mancha ('O formato se encaixa bem')?",
alternativas: [
"FQu",
"FQ-",
"FQn",
"FQo"
],
correta: "FQo",
justificativa: "FQo: será codificado se o objeto visto se adequar à localização na mancha. 'O formato se encaixa bem na mancha' [29]."
},
{
pergunta: "No RPAS, qual código de Qualidade Formal (FQ) é utilizado quando o ajuste da resposta à mancha é pouco frequente e pouco acurado?",
alternativas: [
"FQo",
"FQu",
"FQ-",
"FQn"
],
correta: "FQ-",
justificativa: "FQ-: ajuste à mancha pouco frequente e pouco acurado [29]."
},
{
pergunta: "No RPAS, se uma resposta apresentar mais de um código de Qualidade Formal (FQ), qual deles prevalecerá na codificação?",
alternativas: [
"O primeiro mencionado pelo avaliado",
"FQo tem prioridade",
"FQu tem prioridade",
"Segue a ordem de importância: FQ-, FQu e FQo"
],
correta: "Segue a ordem de importância: FQ-, FQu e FQo",
justificativa: "Se tivermos uma resposta com mais de um FQ, apenas um deles prevalecerá. Segue, na ordem de importância: FQ-, FQu e Fqo [30]."
},
{
pergunta: "O que são Respostas Populares (P) no Rorschach RPAS?",
alternativas: [
"Respostas dadas por crianças",
"Respostas que ocorrem com maior frequência na amostra, envolvendo mancha e localização específicas",
"Respostas que usam a mancha inteira (W)",
"Respostas com conteúdo humano (H)"
],
correta: "Respostas que ocorrem com maior frequência na amostra, envolvendo mancha e localização específicas",
justificativa: "Respostas Populares - P: São respostas que ocorrem com maior frequência na amostra; Envolve mancha específica, bem como sua localização [30]."
},
{
pergunta: "No RPAS, qual código de Determinante é utilizado para Movimento Humano (M)?",
alternativas: [
"FM",
"m",
"Ma",
"M"
],
correta: "M",
justificativa: "Movimento Humano: o código utilizado é M. Codificamos M quando a resposta envolver um ser humano em atividade, vivência, emoção ou sensação [31]."
},
{
pergunta: "Um exemplo de Movimento Humano (M) pode ser:",
alternativas: [
"Dois peixes nadando",
"Um prato quebrando",
"Um gato deprimido",
"Uma pessoa chorando"
],
correta: "Uma pessoa chorando",
justificativa: "Ex. de Movimento Humano: lutando, chorando, sentado, em pé, voando (mesmo que sobrenatural), “separando as ondas do mar”, etc. Além disso, respostas com “Sorrindo”, “boca aberta” representam movimento de Flexão! [31]."
},
{
pergunta: "No RPAS, qual código de Determinante é utilizado para Movimento Animal (FM)?",
alternativas: [
"M",
"m",
"FMa",
"FM"
],
correta: "FM",
justificativa: "Movimento Animal: o código que utilizamos é FM. São movimentos adequados às respostas animais [32]."
},
{
pergunta: "Qual código de Movimento é utilizado para um animal que apresenta uma emoção ou sensação humana, como 'um gato deprimido'?",
alternativas: [
"FM",
"m",
"M",
"FMa"
],
correta: "M",
justificativa: "No entanto, se tivermos respostas como: um gato deprimido com cara emburrada, uma minhoca satisfeita, um peixe amamentando sua cria nos peitos são codificados como M [32]."
},
{
pergunta: "No RPAS, qual código de Determinante é utilizado para Movimento Inanimado (m)?",
alternativas: [
"M",
"FM",
"ma",
"m"
],
correta: "m",
justificativa: "Movimento inanimado: são respostas que envolvem movimentos mecânicos, forças naturais, inorgânicos como rigidez cadavérica, “sangrando”, um avião decolando, um prato quebrando etc. Codificamos o movimento inanimado como m (minúsculo!) [32]."
},
{
pergunta: "Para que um movimento seja codificado no RPAS, em que tempo verbal ele deve estar?",
alternativas: [
"Futuro",
"Passado",
"Presente",
"Condicional"
],
correta: "Presente",
justificativa: "O movimento deve estar acontecendo no presente. Não codificamos movimento se, por exemplo: Um animal que foi atropelado por um carro. (O movimento aconteceu, o carro não foi visto) [33]."
},
{
pergunta: "No RPAS, como é codificado um Movimento Ativo (a)?",
alternativas: [
"Ma ou Mp",
"M, FM ou m",
"Ma, FMa ou ma",
"a-p"
],
correta: "Ma, FMa ou ma",
justificativa: "Movimento ativo (a): codificamos quando o movimento em questão, quer seja humano, animal ou inanimado requer elevada energia para acontecer. Nesses casos, ficaria Ma, FMa ou ma [34]."
},
{
pergunta: "Qual código de Movimento é utilizado para movimentos mais brandos, sem dispêndio de energia, como 'sentado' ou 'sorrindo'?",
alternativas: [
"Ativo (a)",
"Inanimado (m)",
"Passivo (p)",
"Humano (M)"
],
correta: "Passivo (p)",
justificativa: "Movimento passivo (p): tratam-se de movimentos mais brandos, sem dispêndio de energia. Ex.: sentado, deitado, sorrindo ou qualquer movimento acompanhado de “levemente”, “devagar”, coração batendo etc. Codificando, teríamos Mp, FMp ou mp [34]."
},
{
pergunta: "Quando se codifica um Movimento Ativo-Passivo (a-p) no RPAS?",
alternativas: [
"Quando um mesmo organismo realiza movimento ativo e passivo simultaneamente",
"Quando a resposta envolve movimento inanimado e animal",
"Quando existem dois objetos diferentes, cada qual com uma ação distinta em termos de intensidade (ativo e passivo)",
"Quando o avaliado hesita entre movimento ativo e passivo"
],
correta: "Quando existem dois objetos diferentes, cada qual com uma ação distinta em termos de intensidade (ativo e passivo)",
justificativa: "Movimento Ativo-Passivo (a-p): codificamos a-p quando existem dois objetos diferentes, cada qual com uma ação distinta em termos de intensidade [35]."
},
{
pergunta: "No RPAS, quando se codifica FC (Forma-Cor)?",
alternativas: [
"Quando a cor é dominante sobre a forma",
"Quando não há cor na resposta",
"Quando o formato do que foi visto for dominante sobre a cor mencionada",
"Quando a cor e a forma têm a mesma importância"
],
correta: "Quando o formato do que foi visto for dominante sobre a cor mencionada",
justificativa: "Forma e Cor (FC): Codificaremos FC quando o formato do que foi visto for dominante sobre a cor mencionada [36]."
},
{
pergunta: "Quando se codifica CF (Cor-Forma) no RPAS?",
alternativas: [
"Quando o formato é dominante sobre a cor",
"Quando a cor é dominante sobre a forma",
"Quando a cor é acromática",
"Quando não há forma na resposta"
],
correta: "Quando a cor é dominante sobre a forma",
justificativa: "Cor e Forma (CF): Codificamos CF quando a cor for dominante sobre a forma [37]."
},
{
pergunta: "Qual a ordem de prevalência dos determinantes de Cor quando há mais de um em uma resposta?",
alternativas: [
"FC >> CF >> C",
"CF >> FC >> C",
"C >> CF >> FC",
"FC >> C >> CF"
],
correta: "C >> CF >> FC",
justificativa: "Quando ocorrer essa situação [mais de um determinante cor], será escolhido o código em que a cor for mais dominante. Se tivéssemos CF e C, optaríamos pelo C. C >> CF >> FC [37, 38]."
},
{
pergunta: "No RPAS, qual determinante é usado para cores preta, cinzenta e branca?",
alternativas: [
"C",
"FC",
"CF",
"C'"
],
correta: "C'",
justificativa: "Cor acromática (C’): Envolve o preto, cinzento e branco. A codificação de C’ é relativamente simples. 'Um fantasma branco', 'Um carvão, porque é preto' [38]."
},
{
pergunta: "O que é Cor Convergente no RPAS?",
alternativas: [
"Quando o avaliado atribui uma cor arbitrária ao objeto",
"Quando a cor é traço intrínseco do objeto da resposta (ex: este vermelho é sangue)",
"Quando há mistura de cores",
"Quando a cor é usada apenas para localização"
],
correta: "Quando a cor é traço intrínseco do objeto da resposta (ex: este vermelho é sangue)",
justificativa: "A cor convergente diz respeito quando a cor é traço intrínseco do objeto da resposta. Por exemplo, “este vermelho é sangue”. Aqui, saberemos que entrelinhas, a cor foi a motivadora [38]."
},
{
pergunta: "No RPAS, qual determinante de Sombreado é utilizado para dar noção de profundidade ou perspectiva com base nos tons (claro/escuro)?",
alternativas: [
"T",
"Y",
"V",
"FD"
],
correta: "V",
justificativa: "Sombreado Perspectiva (V): codificaremos V quando a resposta trouxer noção de profundidade ou perspectiva, mas com base nos tons. Ex.: A parte mais escura é o fundo da caverna [39]."
},
{
pergunta: "Qual determinante de Sombreado no RPAS é utilizado quando a resposta passa uma impressão tátil, como 'macio' ou 'pelos de cachorro'?",
alternativas: [
"V",
"Y",
"T",
"FD"
],
correta: "T",
justificativa: "Sombreado Textura (T): codificaremos T quando a resposta passar impressão tátil. Ex.: “o sombreado faz parecer macio”, “são pelos de cachorros, aqueles bem macios” [40]."
},
{
pergunta: "No RPAS, qual determinante de Sombreado é o código padrão quando não se identifica Sombreado Perspectiva (V) nem Sombreado Textura (T)?",
alternativas: [
"V",
"T",
"FD",
"Y"
],
correta: "Y",
justificativa: "Sombreado Difuso (Y): Codificaremos Y quando não tiver nem V nem T [40]. Se, porventura, não ficar claro mesmo após o inquérito, codifique Y [41]."
},
{
pergunta: "Qual determinante é utilizado no RPAS quando a noção de profundidade ou perspectiva é dada pela FORMA da mancha, e não pelo sombreado?",
alternativas: [
"V",
"T",
"Y",
"FD"
],
correta: "FD",
justificativa: "A forma da mancha implica a noção de profundidade, e não o sombreado. Ex.: “um coelho atrás de um arbusto” codificaremos FD. A forma dá a noção de distanciamento, perspectiva [41, 42]."
},
{
pergunta: "No RPAS, qual determinante é utilizado para uma resposta que envolve uma imagem espelhada ou refletida, baseada na simetria da prancha?",
alternativas: [
"(2)",
"FD",
"r",
"SI"
],
correta: "r",
justificativa: "Reflexo (r): Geralmente a resposta com r é dada com o cartão virado para o lado (< ou >). O avaliado menciona o objeto com sua imagem espelhada ou refletida; Assim como a resposta em par (2), o reflexo se baseia na simetria da prancha. O objeto e seu reflexo devem possuir a mesma localização em cada lado do cartão [42]."
},
{
pergunta: "Qual determinante é codificado no RPAS quando nenhum dos outros determinantes (Movimento, Cor, Sombreado, Dimensão, Reflexo) aparece, e a resposta é determinada apenas pela forma?",
alternativas: [
"W",
"F",
"NC",
"FQo"
],
correta: "F",
justificativa: "Quando nenhum dos determinantes explicados aparecer, nós codificamos F. Ou seja, o que determinou a resposta do sujeito foi a forma [43]."
},
{
pergunta: "No RPAS, qual determinante sempre aparece sozinho e nunca em misturas (Blends)?",
alternativas: [
"M",
"C",
"F",
"Y"
],
correta: "F",
justificativa: "O único determinante que sempre aparece sozinho é o F. Se codificar F, não se codifica mais nenhum [43]."
},
{
pergunta: "O que são Blends (Misturas) de Determinantes no RPAS?",
alternativas: [
"Quando dois avaliados dão a mesma resposta",
"Quando um determinante aparece sozinho na resposta",
"Quando um determinante aparece junto de outros em uma resposta",
"Quando a resposta não é clara"
],
correta: "Quando um determinante aparece junto de outros em uma resposta",
justificativa: "As misturas (Blends) consistem quando um determinante aparece junto de outros em uma resposta [43]."
},
{
pergunta: "No RPAS, o que o código cognitivo DV (Verbalizações Desviantes) indica?",
alternativas: [
"Uma resposta ilógica",
"Um raciocínio peculiar",
"Uma combinação implausível",
"Quando o avaliado utiliza uma palavra ou frase errada para dar uma resposta"
],
correta: "Quando o avaliado utiliza uma palavra ou frase errada para dar uma resposta",
justificativa: "Codificamos DV quando o avaliado utiliza uma palavra ou frase errada para dar uma resposta [44, 45]."
},
{
pergunta: "Qual a diferença entre DV1 e DV2?",
alternativas: [
"DV1 é para erros na Fase de Resposta, DV2 na Fase de Inquérito",
"DV1 indica erros na localização, DV2 nos conteúdos",
"DV1 é menos grave (erros incomuns mas claros), DV2 é mais grave (maior bizarrice, avaliador não entende)",
"DV1 se refere a erros de pronúncia, DV2 a erros gramaticais"
],
correta: "DV1 é menos grave (erros incomuns mas claros), DV2 é mais grave (maior bizarrice, avaliador não entende)",
justificativa: "O 1 e 2 indicam a gravidade, sendo o 2, o mais grave [44, 45]. DV1 – Codificamos DV1 quando os erros são palavras de verbalizações incomuns, mas que ficam claros para o examinador [46, 47]. DV2 – Codificamos quando há maior bizarrice nas palavras. Aqui, o avaliador não tem a menor ideia de que se trata [46, 48]."
},
{
pergunta: "No RPAS, o que o código cognitivo DR (Respostas Desviantes) indica?",
alternativas: [
"Verbalizações com palavras estranhas",
"Justificativas com lógica peculiar",
"Manifestações verbais que se afastam da tarefa, ilógicas ou irrelevantes à pergunta",
"Combinações impossíveis de características"
],
correta: "Manifestações verbais que se afastam da tarefa, ilógicas ou irrelevantes à pergunta",
justificativa: "DR – São manifestações verbais que se afastam da tarefa. Ou seja, são respostas ilógicas ou irrelevantes à pergunta: “O que poderia ser isto?” [49, 50]."
},
{
pergunta: "O que pode implicar em codificar DR no RPAS, além de comentários irrelevantes?",
alternativas: [
"Pedir para rotacionar o cartão",
"Tratar a resposta como se fosse real ('Um monstro escuro que está prestes a me pegar')",
"Dar uma resposta popular",
"Não dar nenhuma resposta"
],
correta: "Tratar a resposta como se fosse real ('Um monstro escuro que está prestes a me pegar')",
justificativa: "Outro ponto: tratar a resposta como se fosse real implica em DR. “Um monstro escuro que está prestes a me pegar”. O grau de como o avaliado concebe o cartão como real determina se será 1 ou 2 [51, 52]."
},
{
pergunta: "No RPAS, o que o código cognitivo PEC (Lógica Peculiar) indica?",
alternativas: [
"Uso de palavras erradas",
"Respostas que se afastam da tarefa",
"Raciocínio peculiar, forçado ou confuso, justificativas que não exprimem lógica clara",
"Interação impossível entre objetos"
],
correta: "Raciocínio peculiar, forçado ou confuso, justificativas que não exprimem lógica clara",
justificativa: "Codificamos PEC quando o avaliado evidenciar algum raciocínio peculiar, forçado ou confuso... São justificativas que não exprimem uma lógica clara [53, 54]."
},
{
pergunta: "No RPAS, quando se codifica INC (Combinações Incongruentes)?",
alternativas: [
"Quando há uma interação impossível entre dois objetos",
"Quando o avaliado usa palavras bizarras",
"Quando há combinações implausíveis de características de um objeto",
"Quando o avaliado trata a resposta como real"
],
correta: "Quando há combinações implausíveis de características de um objeto",
justificativa: "Codificaremos INC quando tivermos, na resposta, combinações implausíveis [53, 55]."
},
{
pergunta: "Qual a diferença fundamental entre INC (Combinação Incongruente) e FAB (Combinação Fabulada)?",
alternativas: [
"INC envolve palavras erradas, FAB envolve lógica confusa",
"INC envolve características implausíveis de um objeto, FAB envolve interação impossível entre dois ou mais objetos",
"INC se refere a conteúdo humano, FAB a conteúdo animal",
"INC é mais grave que FAB"
],
correta: "INC envolve características implausíveis de um objeto, FAB envolve interação impossível entre dois ou mais objetos",
justificativa: "O INC envolve um objeto principal e sua característica secundária, a qual será pouco ou não usual [56, 57]. O FAB envolverá a interação entre dois ou mais objetos, interação esta impossível. Há o aspecto de “fábula” – tramas [56, 58]."
},
{
pergunta: "No RPAS, quando se codifica CON (Contaminação)?",
alternativas: [
"Quando há uma mistura de determinantes",
"Quando o avaliado dá uma resposta muito popular",
"Quando o sujeito vê duas coisas sobrepostas, em uma mesma área da mancha (transparência)",
"Quando a resposta usa apenas a forma"
],
correta: "Quando o sujeito vê duas coisas sobrepostas, em uma mesma área da mancha (transparência)",
justificativa: "Contaminação (CON): É um código extremamente raro. O sujeito vê duas coisas sobrepostas, em uma mesma área da mancha... (Transparência) [59, 60]."
},
{
pergunta: "Em qual tipo de sujeito o código cognitivo CON (Contaminação) é comum?",
alternativas: [
"Sujeitos com alta capacidade de síntese",
"Sujeitos com teste de realidade comprometido",
"Sujeitos com pensamento simples",
"Sujeitos com estilo cognitivo vigilante"
],
correta: "Sujeitos com teste de realidade comprometido",
justificativa: "Contaminação (CON): É comum em sujeitos com teste de realidade comprometido [61, 62]."
},
{
pergunta: "No RPAS, se uma resposta contiver vários códigos cognitivos em uma única 'cena' ou situação, qual regra é seguida?",
alternativas: [
"Codifica-se todos os códigos presentes",
"Codifica-se apenas o primeiro código mencionado",
"Codifica-se o código mais 'grave' (com maior peso)",
"Não se codifica nenhum código cognitivo"
],
correta: "Codifica-se o código mais 'grave' (com maior peso)",
justificativa: "Códigos Cognitivos sobrepostos: ...Por se tratar de uma situação só, codificaremos o mais “grave” – PEC [62, 63]. Para as imagens referentes à batalha, apenas um código deve ser atribuído. FAB2 (o mais grave) [64]."
},
{
pergunta: "Após a codificação no Rorschach RPAS, qual é o próximo passo?",
alternativas: [
"Interpretação imediata das respostas",
"Realização das contagens de cada código",
"Cálculo do Escore Z",
"Finalizar o protocolo e entregar ao supervisor"
],
correta: "Realização das contagens de cada código",
justificativa: "Após realizarmos toda a codificação, realizaremos a contagem (unidades) de cada código que apareceu [65, 66]."
},
{
pergunta: "Como se calcula o escore WSumC (Weighted Sum of Color) no RPAS?",
alternativas: [
"Somando todos os códigos de cor (FC + CF + C)",
"FC + CF + C'",
"(FC x 0,5) + CF + (C x 1,5)",
"M + WSumC"
],
correta: "(FC x 0,5) + CF + (C x 1,5)",
justificativa: "WSumC é a soma ponderada da Cor, representada pela fórmula abaixo: WSumC = (FC x 0,5) + CF + (C x 1,5) [67, 68]."
},
{
pergunta: "Como se calcula o escore MC no RPAS?",
alternativas: [
"Subtraindo PPD de MC",
"Somando Movimento humano M com WSumC",
"Dividindo M por WSumC",
"Somando todos os determinantes de sombreado"
],
correta: "Somando Movimento humano M com WSumC",
justificativa: "MC: Somar Movimento humano M com WSumC [67, 68]."
},
{
pergunta: "Como se calcula o escore PPD (Potentially Problematic Determinants) no RPAS?",
alternativas: [
"Somando M + FM + m",
"Somando Y + T + V + C’",
"Somando FM + m + Y + T + V + C’",
"Somando todos os códigos cognitivos"
],
correta: "Somando FM + m + Y + T + V + C’",
justificativa: "PPD (Determinantes potencialmente problemáticos): Somar FM + m + Y + T + V + C’ [67, 68]."
},
{
pergunta: "Como se calcula o escore PPD-MC no RPAS?",
alternativas: [
"Somando PPD e MC",
"Dividindo PPD por MC",
"Multiplicando PPD por MC",
"Subtraindo PPD de MC"
],
correta: "Subtraindo PPD de MC",
justificativa: "PPD-MC: Subtrair PPD de MC [69, 70]."
},
{
pergunta: "Como se calcula o escore F% (Percentage of Form) no RPAS?",
alternativas: [
"Contando o total de respostas com FQo",
"Dividindo o total de F (forma pura) pelo total de respostas no teste",
"Somando todos os determinantes de forma",
"Dividindo o total de F pela soma de todos os determinantes"
],
correta: "Dividindo o total de F (forma pura) pelo total de respostas no teste",
justificativa: "F%: Pegar o total de F (forma) e dividir pelo total de respostas no teste. F / Total de Respostas [69, 70]."
},
{
pergunta: "Como se calcula o escore Blend% no RPAS?",
alternativas: [
"Contando o total de respostas com apenas um determinante",
"Dividindo a quantidade de respostas com mais de um determinante (Blend) pelo total de respostas no teste",
"Multiplicando o total de Blends por 100",
"Somando todos os Blends"
],
correta: "Dividindo a quantidade de respostas com mais de um determinante (Blend) pelo total de respostas no teste",
justificativa: "Blend%: Dividir a quantidade de respostas com mais de um determinante (Blend) pelo total de respostas no teste [69, 70]."
},
{
pergunta: "Qual a fórmula para calcular o Escore Z no RPAS?",
alternativas: [
"Z = (Média da Tabela - Sua Pontuação) / Desvio Padrão",
"Z = Sua Pontuação / Média da Tabela",
"Z = Desvio Padrão / (Sua Pontuação - Média da Tabela)",
"Z = (Sua Pontuação - Média da Tabela) / Desvio Padrão"
],
correta: "Z = (Sua Pontuação - Média da Tabela) / Desvio Padrão",
justificativa: "Fórmula do Escore Z: 𝑍 = 𝑆𝑢𝑎 𝑃𝑜𝑛𝑡𝑢𝑎çã𝑜 − 𝑚é𝑑𝑖𝑎 𝑑𝑎 𝑡𝑎𝑏𝑒𝑙𝑎 / 𝐷𝑒𝑠𝑣𝑖𝑜 𝑃𝑎𝑑𝑟ã𝑜 [71, 72]."
},
{
pergunta: "O que indica um número alto de respostas (Total R) no RPAS?",
alternativas: [
"Inflexibilidade em ver coisas por diferentes perspectivas",
"Rigidez ou resistência",
"Um nível de flexibilidade ideacional (criatividade e flexibilidade cognitiva)",
"Problemas para pensar com clareza"
],
correta: "Um nível de flexibilidade ideacional (criatividade e flexibilidade cognitiva)",
justificativa: "Número de respostas: número alto de respostas pode indicar um nível de flexibilidade ideacional (criatividade e flexibilidade cognitiva) [73]."
},
{
pergunta: "No RPAS, o que pode indicar um F% (Percentage of Form) alto?",
alternativas: [
"Atenção a nuances e aspectos sutis do ambiente",
"Propensão a processar informação com grau de riqueza",
"Não focar nos aspectos sutis do seu ambiente interno e externo, compreensão simples do outro",
"Abertura patológica"
],
correta: "Não focar nos aspectos sutis do seu ambiente interno e externo, compreensão simples do outro",
justificativa: "F%: quando alto, o sujeito pode não focar nos aspectos sutis do seu ambiente interno e externo. Há a compreensão do outro de maneira simples e irrefletida. Possibilidade de distanciamento e pouco envolvimento com o mundo [73]."
},
{
pergunta: "O que pode indicar um Blend% (Percentage of Blends) alto no RPAS?",
alternativas: [
"Processamento intelectual marcado por negligência",
"Dificuldade na compreensão de si e dos outros",
"Propensão a processar informação com grau de riqueza e flexibilidade, fácil compreensão de si e do outro",
"Pensamento simples ou linear"
],
correta: "Propensão a processar informação com grau de riqueza e flexibilidade, fácil compreensão de si e do outro",
justificativa: "Blend%: quando alto, propensão a processar informação com grau de riqueza e flexibilidade. Fácil compreensão de si e do outro [74]."
},
{
pergunta: "No RPAS, o que pode indicar um Sy (Sintetizado) alto?",
alternativas: [
"Pensamento simples ou linear",
"Dificuldade em lidar com problemas do dia a dia",
"Capacidade de realizar sínteses complexas no pensamento, facilidade na compreensão de ideias complexas ou abstratas",
"Visão estereotipada do mundo"
],
correta: "Capacidade de realizar sínteses complexas no pensamento, facilidade na compreensão de ideias complexas ou abstratas",
justificativa: "Sy: quando alto, o sujeito tem capacidade de realizar sínteses complexas no pensamento, com operações psicológicas ricas e diferenciadas (facilidade na compreensão de ideias mais complexas ou de operar ideias abstratas) [75]."
},
{
pergunta: "O que pode sugerir um MC-PPD alto no RPAS?",
alternativas: [
"Dificuldade para lidar com problemas do dia a dia",
"Funcionamento em ambientes previsíveis",
"Capacidade interior para enfrentar vigorosamente os acontecimentos diários, estabilidade, confiança e resiliência em situações estressantes",
"Estilo de enfrentamento puramente emocional"
],
correta: "Capacidade interior para enfrentar vigorosamente os acontecimentos diários, estabilidade, confiança e resiliência em situações estressantes",
justificativa: "MC-PPD: quando alto, pode sugerir capacidade interior para enfrentar vigorosamente os acontecimentos diários, não sendo influenciada por acontecimentos situacionais, indicando estabilidade, confiança e resiliência em situações estressantes [75]."
},
{
pergunta: "No RPAS, o que indica um M/MC elevado?",
alternativas: [
"Estilo de enfrentamento puramente emocional",
"Ações orientadas pela emoção",
"Estilo de enfrentamento caracterizado pela ponderação (tende a pensar antes de agir)",
"Hiperprodução e desinibição"
],
correta: "Estilo de enfrentamento caracterizado pela ponderação (tende a pensar antes de agir)",
justificativa: "M/MC: quando elevado, indica estilo de enfrentamento caracterizado pela ponderação. Ou seja, trata-se de um sujeito que tende a pensar antes de agir, não sendo propenso a reações abruptas [76]."
},
{
pergunta: "No RPAS, o que um TP-Comp (Composto de Pensamento e Percepção) muito alto pode indicar?",
alternativas: [
"Recursos egóicos adequados",
"Saúde psicológica",
"Falha no teste de realidade, problemas para pensar com clareza e possível vulnerabilidade a estados psicóticos ou borderline",
"Adequação na forma de ver o mundo"
],
correta: "Falha no teste de realidade, problemas para pensar com clareza e possível vulnerabilidade a estados psicóticos ou borderline",
justificativa: "TP-Comp: o composto de pensamento e percepção, quando muito alto, pode indicar falha no teste de realidade. Quando alto, pode indicar problemas para pensar com clareza e possível vulnerabilidade a estados psicóticos ou borderline [77]."
},
{
pergunta: "No RPAS, o que Popular (P) muito alto (associado à baixa complexidade) pode indicar?",
alternativas: [
"Falha no teste de realidade",
"Desejo de ser diferente",
"Visão estereotipada do mundo",
"Capacidade de síntese complexa"
],
correta: "Visão estereotipada do mundo",
justificativa: "Popular (P): Respostas populares muito altas, se a complexidade for baixa, pode indicar visão estereotipada do mundo [78]."
},
{
pergunta: "No RPAS, o que um FQo% (Percentage of Fully Articulated Form) alto indica?",
alternativas: [
"Problemas de teste de realidade",
"Abordagem de vida menos convencional",
"Saúde psicológica e adequado teste de realidade",
"Negligência e baixa atenção aos detalhes"
],
correta: "Saúde psicológica e adequado teste de realidade",
justificativa: "FQo%: quando alto, indica saúde psicológica e adequado teste de realidade [79]."
},
{
pergunta: "O que o escore MOR (Conteúdo Mórbido) no RPAS associa-se?",
alternativas: [
"Temas ideacionais otimistas e de sucesso",
"Temas ideacionais mórbidos, pessimistas e de ruína",
"Necessidade de amparo e apoio",
"Identificação com o poder e agressividade"
],
correta: "Temas ideacionais mórbidos, pessimistas e de ruína",
justificativa: "MOR: Associa-se a temas ideacionais mórbidos, pessimistas e de ruína [80]."
},
{
pergunta: "No RPAS, o que escores ODL% (Oral Dependency Language) altos indicam?",
alternativas: [
"Autossuficiência e independência",
"Dificuldade para lidar com problemas do dia a dia",
"Dependência, necessidade de amparo, apoio e subsistência psicológica",
"Estilo cognitivo cauteloso e vigilante"
],
correta: "Dependência, necessidade de amparo, apoio e subsistência psicológica",
justificativa: "ODL%: Escores altos indicam dependência, necessidade de amparo, apoio e subsistência psicológica [80]."
},
{
pergunta: "No RPAS, o que um AGC (Conteúdo Agressivo) alto pode indicar?",
alternativas: [
"Passividade e submissão",
"Pouco interesse em relacionamentos",
"Dificuldade na compreensão de si e dos outros",
"Identificação com o poder, agressividade ou perigo, expressa pela competitividade"
],
correta: "Identificação com o poder, agressividade ou perigo, expressa pela competitividade",
justificativa: "Conteúdo agressivo (AGC): quando alto, pode indicar identificação com o poder, agressividade ou perigo. Nem sempre são expressos de maneira socialmente reprovável, mas sim pela competitividade, esforço para realizações [81]."
},
{
pergunta: "O que indica um H (Conteúdo Humano) alto no RPAS?",
alternativas: [
"Dificuldade na compreensão de si e dos outros",
"Pouco interesse em relacionamentos",
"Capacidade para relacionamentos interpessoais saudáveis",
"Visão estereotipada dos outros"
],
correta: "Capacidade para relacionamentos interpessoais saudáveis",
justificativa: "H: quando alto indicam capacidade para relacionamentos interpessoais saudáveis [82]."
},
{
pergunta: "No RPAS, o que indica um COP (Conteúdo Colaborativo) alto?",
alternativas: [
"Pouco interesse em relacionamentos",
"Propensão de encarar as interações como fonte de apoio, úteis e colaborativas",
"Distanciamento interpessoal",
"Estilo cognitivo vigilante"
],
correta: "Propensão de encarar as interações como fonte de apoio, úteis e colaborativas",
justificativa: "COP: quando alto, há a propensão de encarar as interações como fonte de apoio, úteis, vantajosas e colaborativas [82]."
},
{
pergunta: "Como o Rorschach RPAS relaciona alguns aspectos da avaliação à psicopatologia?",
alternativas: [
"Através da contagem simples de todas as respostas",
"Apenas pela observação do comportamento do avaliado",
"As variáveis envolvidas se relacionam com problemas de pensamento, juízo ou percepção, e aspectos interpretativos podem ser indicativos de psicopatologias como o espectro da esquizofrenia",
"Exclusivamente pela Qualidade Formal das respostas"
],
correta: "As variáveis envolvidas se relacionam com problemas de pensamento, juízo ou percepção, e aspectos interpretativos podem ser indicativos de psicopatologias como o espectro da esquizofrenia",
justificativa: "Domínio de percepção e pensamento: As variáveis envolvidas se relacionam com problemas de pensamento, juízo ou percepção, bem como o sujeito tende a elaborar a sua visão de mundo; Os aspectos interpretativos podem ser indicativos de psicopatologias como o espectro da esquizofrenia [77]."
},
{
pergunta: "No RPAS, qual a diferença entre Cor Convergente e Cor Arbitrária?",
alternativas: [
"Cor Convergente é para cores quentes, Arbitrária para cores frias",
"Cor Convergente é quando a cor é intrínseca ao objeto, Arbitrária é quando o avaliado atribui uma cor ao percepto",
"Cor Convergente é codificada como C, Arbitrária como C'",
"Cor Convergente se refere ao sombreado, Arbitrária à forma"
],
correta: "Cor Convergente é quando a cor é intrínseca ao objeto, Arbitrária é quando o avaliado atribui uma cor ao percepto",
justificativa: "A cor convergente diz respeito quando a cor é traço intrínseco do objeto da resposta... A cor arbitrária é quando o avaliado atribui uma cor ao percepto. Ex.: Peixe vermelho [38, 39]."
},
{
pergunta: "No RPAS, qual o código de Determinante utilizado para 'Um coelho atrás de um arbusto', onde a noção de profundidade é dada pela posição dos elementos?",
alternativas: [
"V",
"Y",
"r",
"FD"
],
correta: "FD",
justificativa: "A forma da mancha implica a noção de profundidade, e não o sombreado. Ex.: “um coelho atrás de um arbusto” codificaremos FD [41]."
},
{
pergunta: "Um exemplo de Resposta Desviante DR1, segundo as fontes, é:",
alternativas: [
"Um porco vestígio de auxiliação",
"Esse é um tigre. Eu amo tigres. Você gosta de tigres? Eles são bem lindos.",
"Quando a gente chora muito, fica mais macio...",
"Tem que ser um homem e uma mulher, porque são 2"
],
correta: "Esse é um tigre. Eu amo tigres. Você gosta de tigres? Eles são bem lindos.",
justificativa: "Ex. de DR1: “Esse é um tigre. Eu amo tigres. Você gosta de tigres? Eles são bem lindos.”, “Um vaso lindo. Se essa parte pudesse falar, ela diria “asa”” [49, 50]."
},
{
pergunta: "Um exemplo de Resposta Desviante DR2, segundo as fontes, é:",
alternativas: [
"Devo estar com fome",
"Um tigre voando",
"Um leão vermelho dando carona para um cachorro",
"Quando a gente chora muito, fica mais macio...é assim que se parece essa figura"
],
correta: "Quando a gente chora muito, fica mais macio...é assim que se parece essa figura",
justificativa: "Ex.: “quando a gente chora muito, fica mais macio...é assim que se parece essa figura” [51, 83]."
},
{
pergunta: "Um exemplo de Lógica Peculiar (PEC), segundo as fontes, é:",
alternativas: [
"Um urso dançando no circo",
"Um urso sem pata",
"A costura está se desfazendo porque ela é esquizofrênica",
"Uma ave sem bico"
],
correta: "A costura está se desfazendo porque ela é esquizofrênica",
justificativa: "Ex.: “A costura está se desfazendo porque ela é esquizofrênica”, “É vermelho porque está num dia de calor”. São justificativas que não exprimem uma lógica clara [53, 54]."
},
{
pergunta: "Um exemplo de Combinação Incongruente INC1 é:",
alternativas: [
"Um homem com duas cabeças nos pés",
"Um pênis com asas",
"Um leão vermelho",
"Duas pessoas fisicamente ligadas"
],
correta: "Um leão vermelho",
justificativa: "Exemplos de INC1: um leão vermelho, um leão voando... [53, 55]."
},
{
pergunta: "Um exemplo de Combinação Incongruente INC2 é:",
alternativas: [
"Um leão vermelho",
"Um elefante carregando uma girafa",
"Um homem com duas cabeças nos pés",
"Um urso dançando no circo"
],
correta: "Um homem com duas cabeças nos pés",
justificativa: "Exemplos de INC2: um homem com duas cabeças nos pés, um pênis com asas...(o grau de bizarrice é maior) [55, 84]."
},
{
pergunta: "Um exemplo de Combinação Fabulada FAB1 é:",
alternativas: [
"Duas pessoas fisicamente ligadas",
"Mickey Mouse, nu, devorando o Pateta",
"Duas pessoas, e entre elas estão seus corações",
"Dois ursos dançando juntos"
],
correta: "Dois ursos dançando juntos",
justificativa: "Ex. de FAB1: “Dois ursos dançando juntos”, aqui mostra a interação impossível (FAB1) e, ainda uma combinação incomum (INC1) [85, 86]."
},
{
pergunta: "Um exemplo de Combinação Fabulada FAB2 é:",
alternativas: [
"Um elefante carregando uma girafa",
"Um louva-a-deus jogando baralho",
"Duas pessoas fisicamente ligadas uma com a outra (sem ser siameses)",
"Um leão vermelho"
],
correta: "Duas pessoas fisicamente ligadas uma com a outra (sem ser siameses)",
justificativa: "Ex2. de FAB2: “Duas pessoas, e entre elas estão seus corações”, “Duas pessoas fisicamente ligadas uma com a outra” (se o avaliado falasse que são siameses, não levaria FAB) [86, 87]."
},
{
pergunta: "Um exemplo de Contaminação (CON), segundo as fontes, é:",
alternativas: [
"Uma pessoa em pé com os braços levantados",
"Um morcego voando, vendo os olhos, corpo, etc., de maneira sobrepostas",
"Um veado com chifres",
"Uma nuvem com formato"
],
correta: "Um morcego voando, vendo os olhos, corpo, etc., de maneira sobrepostas",
justificativa: "Ex.: “Um morcego, aqui os olhos, corpo, ele está voando” (o corpo, olhos, cabeça, etc. são vistos de maneira sobrepostas); “Uma pessoa em pé. Corpo, cabeça e dá pra ver o coração batendo, ele tem símbolo vermelho, de dupla borboleta.” (Transparência) [59, 60]."
},
{
pergunta: "Na interpretação do RPAS, o que um MC-PPD baixo pode indicar?",
alternativas: [
"Estabilidade e resiliência",
"Capacidade para enfrentar vigorosamente os acontecimentos diários",
"Dificuldade para lidar com problemas do dia a dia, funcionamento em ambientes previsíveis e estruturados",
"Capacidade de síntese complexa"
],
correta: "Dificuldade para lidar com problemas do dia a dia, funcionamento em ambientes previsíveis e estruturados",
justificativa: "MC-PPD: Quando baixo, pode indicar dificuldade para lidar com problemas do dia a dia. São pessoas que funcionam em ambientes previsíveis e estruturados [76]."
},
{
pergunta: "No RPAS, o que indica um M/MC baixo?",
alternativas: [
"Estilo de enfrentamento pela ponderação",
"O sujeito tende a encarar as situações de maneira puramente emocional",
"Ações orientadas pela emoção",
"Pensamento antes de agir"
],
correta: "O sujeito tende a encarar as situações de maneira puramente emocional",
justificativa: "M/MC: ...Já quando baixo, o sujeito tende a encarar as situações de maneira puramente emocional [76]."
},
{
pergunta: "No RPAS, o que um TP-Comp baixo ou médio indica?",
alternativas: [
"Falha no teste de realidade",
"Problemas para pensar com clareza",
"Vulnerabilidade a estados psicóticos ou borderline",
"Capacidade para pensar com clareza e perceber a realidade tal qual ela existe"
],
correta: "Capacidade para pensar com clareza e perceber a realidade tal qual ela existe",
justificativa: "TP-Comp: quando baixo ou médio, indica capacidade para pensar com clareza e perceber a realidade tal qual ela existe [78]."
},
{
pergunta: "No RPAS, o que Popular (P) baixo pode indicar?",
alternativas: [
"Forma convencional de ver o mundo",
"Saúde psicológica",
"Falha no teste de realidade, idiossincrasia ou desejo de ser diferente",
"Visão estereotipada do mundo"
],
correta: "Falha no teste de realidade, idiossincrasia ou desejo de ser diferente",
justificativa: "Popular (P): ...Baixas pontuações podem indicar falha no teste de realidade, idiossincrasia ou desejo de ser diferente [78]."
},
{
pergunta: "No RPAS, se o FQo% for baixo, mas NÃO houver FQ- alto, o que isso pode indicar?",
alternativas: [
"Problemas de teste de realidade",
"Saúde psicológica",
"Um sujeito com abordagem de vida menos convencional e mais individualista, não indicando patologia",
"Negligência e baixa atenção aos detalhes"
],
correta: "Um sujeito com abordagem de vida menos convencional e mais individualista, não indicando patologia",
justificativa: "FQo%: Quando baixo, é importante verificar se há junto problemas de teste de realidade (FQ- alto). Caso não tenha essa variável, indica um sujeito com abordagem de vida menos convencional e mais individualista, não indicando patologia [79]."
},
{
pergunta: "No RPAS, o que um MOR (Conteúdo Mórbido) elevado, decorrente de conteúdos disfóricos, indica?",
alternativas: [
"Risco implícito de suicídio",
"A presença de angústia",
"Identificação com o poder",
"Autossuficiência"
],
correta: "A presença de angústia",
justificativa: "MOR: ...Se o aumento for em decorrência de conteúdos disfóricos, indica a presença de angústia [80]."
},
{
pergunta: "No RPAS, o que um MOR (Conteúdo Mórbido) elevado, decorrente de conteúdos mórbidos de destruição ou 'estrago', indica?",
alternativas: [
"Risco implícito de suicídio",
"A presença de angústia",
"Pode ser indicativo de enxergar a si mesmo como falho ou de algum modo prejudicado pela vida",
"Identificação com o poder"
],
correta: "Pode ser indicativo de enxergar a si mesmo como falho ou de algum modo prejudicado pela vida",
justificativa: "MOR: ...Em casos de conteúdos mórbidos de destruição ou “estrago”, pode ser indicativo de enxergar a si mesmo como falho ou de algum modo prejudicado pela vida [80]."
},
{
pergunta: "No RPAS, o que V-Comp (Composto de Vigilância) alto indica?",
alternativas: [
"Autossuficiência",
"Um estilo cognitivo cauteloso e vigilante, podendo haver distanciamento interpessoal",
"Propensão a encarar interações como fonte de apoio",
"Capacidade para relacionamentos saudáveis"
],
correta: "Um estilo cognitivo cauteloso e vigilante, podendo haver distanciamento interpessoal",
justificativa: "V-Comp (composto de vigilância): quando alto, indica um estilo cognitivo cauteloso e vigilante. Pode haver distanciamento interpessoal [81]."
},
{
pergunta: "No RPAS, o que um H (Conteúdo Humano) baixo indica?",
alternativas: [
"Capacidade para relacionamentos interpessoais saudáveis",
"Propensão a encarar interações como fonte de apoio",
"Dificuldade na compreensão de si e dos outros, tanto em papéis sociais e do seu significado",
"Identificação com o poder"
],
correta: "Dificuldade na compreensão de si e dos outros, tanto em papéis sociais e do seu significado",
justificativa: "H: ...Quando baixo, indica dificuldade na compreensão de si e dos outros, tanto em papeis sociais e do seu significado [82]."
},
{
pergunta: "No RPAS, o que um COP (Conteúdo Colaborativo) baixo pode indicar?",
alternativas: [
"Propensão de encarar as interações como fonte de apoio",
"Identificação com o poder",
"Capacidade para relacionamentos interpessoais saudáveis",
"Pouco interesse em relacionamentos ou pouca tendência a encará-las como fonte de apoio"
],
correta: "Pouco interesse em relacionamentos ou pouca tendência a encará-las como fonte de apoio",
justificativa: "COP: ...Quando baixa, pode haver pouco interesse em relacionamentos ou pouca tendência a encará-las como fonte de apoio [82]."
},
{
pergunta: "Segundo as fontes, quais são alguns dos determinantes no Rorschach RPAS?",
alternativas: [
"W, D, Dd",
"H, A, An",
"DV, DR, PEC",
"Movimento, Cor, Sombreado, Dimensionalidade, Reflexo, Forma"
],
correta: "Movimento, Cor, Sombreado, Dimensionalidade, Reflexo, Forma",
justificativa: "Os determinantes são características da mancha que provocaram a resposta do avaliado. Temos determinantes que envolvem: Movimento, Cor, Sombreado, Dimensionalidade, Reflexo, Forma [88]."
},
{
pergunta: "Qual a distinção entre codificar A (Animal completo) e Ad (Detalhe animal) com base na descrição de uma galinha correndo com a cabeça cortada?",
alternativas: [
"É A, pois o corpo inteiro está presente",
"É A, pois ela ainda está se movendo",
"É Ad, pois ela não é capaz de viver com a parte que falta (a cabeça)",
"É Ad, pois o foco está na parte faltante"
],
correta: "É Ad, pois ela não é capaz de viver com a parte que falta (a cabeça)",
justificativa: "Para codificarmos A ou H, a figura vista deve ser capaz de viver com a parte que falta. Exemplo: ...enquanto que uma galinha correndo com a cabeça cortada é Ad [26]."
},
{
pergunta: "No RPAS, a codificação de Conteúdo An (Anatomia) inclui:",
alternativas: [
"Veias vermelhas, artérias ou capilares",
"Feridas abertas descritas como vermelhas",
"Sangue e menstruação",
"Órgãos externos do corpo"
],
correta: "Veias vermelhas, artérias ou capilares",
justificativa: "An = Código de Anatomia... Veias vermelhas, artérias ou capilares são An [23, 24]."
},
{
pergunta: "No RPAS, se uma resposta for 'uma nuvem com formato de urso', qual combinação de códigos de localização/determinantes seria mais provável?",
alternativas: [
"W + FM",
"D + Vg",
"W + Vg",
"D + FM"
],
correta: "W + Vg",
justificativa: "Vg: codificamos Vg quando o objeto não tem exigência de forma ou o avaliado não dá a forma de maneira precisa. (Fogo, nuvem...). Apenas cuidado quando há complementos que envolvem contorno: uma nuvem com formato [28]. 'Urso' sugere uso da mancha (W ou D), e 'nuvem' sugere Vg. Dependendo da área, poderia ser W+Vg ou D+Vg. W é comum para nuvens que usam a mancha toda."
},
{
pergunta: "Em qual fase da aplicação do Rorschach RPAS os códigos que estão óbvios são considerados 'mais verdadeiros'?",
alternativas: [
"Fase de Inquérito (FE)",
"Fase de Resposta",
"Fase de Classificação",
"Fase de Interpretação"
],
correta: "Fase de Resposta",
justificativa: "Codificar o que é visto na Fase de Resposta: os códigos que estão óbvios na fase de resposta são os mais verdadeiros. Ou seja, se o avaliado mudar a resposta, pedir para que fique com a original [89]."
},
{
pergunta: "O que a rotação do cartão durante a aplicação do Rorschach pode indicar?",
alternativas: [
"Falta de interesse na tarefa",
"Necessidade de aprovação",
"Nível de curiosidade, compulsão, flexibilidade, ansiedade ou autoritarismo",
"Pensamento concreto"
],
correta: "Nível de curiosidade, compulsão, flexibilidade, ansiedade ou autoritarismo",
justificativa: "Rotação do cartão: Pode indicar nível de curiosidade, compulsão, flexibilidade, ansiedade, autoritarismo. Vai desde interesse pela tarefa ou distanciamento [17]."
},
{
pergunta: "No RPAS, como se codifica um movimento humano que envolve flexão, como 'sorrindo' ou 'boca aberta'?",
alternativas: [
"FM",
"m",
"Ma (Movimento Ativo Humano)",
"Mp (Movimento Passivo Humano)"
],
correta: "Ma (Movimento Ativo Humano)",
justificativa: "Além disso, respostas com “Sorrindo”, “boca aberta” representam movimento de Flexão! [31]."
},
{
pergunta: "No RPAS, se uma resposta for 'Um urso sem pata', qual código de Combinação Incongruente seria aplicado?",
alternativas: [
"INC1",
"INC2",
"INC não é codificado",
"FAB1"
],
correta: "INC não é codificado",
justificativa: "Partes faltantes na resposta não codificam INC. Ex.: Uma ave sem bico, Um urso sem pata [84, 90]."
},
{
pergunta: "Quando um contexto permissível, como 'no circo', é mencionado em uma resposta que conteria INC, o que acontece com a codificação de INC?",
alternativas: [
"O grau de INC aumenta (vai para INC2)",
"INC é codificado, mas com ressalva",
"Contextos permissivos eliminam o INC",
"INC continua sendo codificado normalmente"
],
correta: "Contextos permissivos eliminam o INC",
justificativa: "Contextos permissivos eliminam o INC. Ex.: Um urso dançando no circo” – sem INC. O contexto “no circo” é permissível [84, 90]."
},
{
pergunta: "No RPAS, se o avaliado diz '...Eu sei que isso não existe, mas...' ao dar uma resposta com uma combinação implausível, o INC é removido?",
alternativas: [
"Sim, a afirmação remove o INC",
"Não, essa afirmação não tira o INC, pois o sujeito viu tal combinação incongruente",
"Apenas se a combinação for INC1",
"Apenas se a combinação for FAB"
],
correta: "Não, essa afirmação não tira o INC, pois o sujeito viu tal combinação incongruente",
justificativa: "Caso o avaliado fale: “...Eu sei que isso não existe, mas..”. Essa afirmação não tira o INC, pois o sujeito viu tal combinação incongruente [84, 90]."
},
{
pergunta: "No RPAS, qual a distinção entre a codificação de C' (Cor Acromática) e Y (Sombreado Difuso)?",
alternativas: [
"C' refere-se à cor propriamente dita (preto, branco, cinza), Y se refere à variação de matiz ou sombreado sem perspectiva/textura",
"C' é para sombreado, Y é para cor pura",
"C' é para cor convergente, Y é para cor arbitrária",
"C' é para detalhes, Y é para respostas globais"
],
correta: "C' refere-se à cor propriamente dita (preto, branco, cinza), Y se refere à variação de matiz ou sombreado sem perspectiva/textura",
justificativa: "A cor acromática C’ se refere à cor propriamente dita, e não sua variação de matiz. Y é codificado quando não tiver nem V nem T [38, 40, 41]."
},
{
pergunta: "Na codificação de Determinantes, quais palavras-chave geralmente ajudam a identificar sombreados?",
alternativas: [
"Grande, pequeno, redondo",
"Rápido, devagar, forte",
"Claro, escuro, profundo, perto, longe, macio",
"Triste, alegre, bravo"
],
correta: "Claro, escuro, profundo, perto, longe, macio",
justificativa: "Geralmente identificaremos sombreados com palavras-chave que remetem a “claro, escuro, profundo, perto, longe, macio” [41]."
},
{
pergunta: "No cálculo do Escore Z no RPAS, quais dados da tabela são utilizados?",
alternativas: [
"Apenas a Variável e a Média",
"Apenas a Média e o Desvio Padrão",
"A Variável, a Média e o Desvio Padrão",
"Apenas a Sua Pontuação e a Média"
],
correta: "A Variável, a Média e o Desvio Padrão",
justificativa: "Na tabela nós utilizaremos: VARIÁVEIS, MÉDIA E DP [71, 72]."
},
{
pergunta: "No RPAS, o que pode indicar uma baixa pontuação no Total R (Número de respostas)?",
alternativas: [
"Alta flexibilidade ideacional",
"Criatividade excessiva",
"Inflexibilidade em ver coisas por diferentes perspectivas",
"Recursos egóicos adequados"
],
correta: "Inflexibilidade em ver coisas por diferentes perspectivas",
justificativa: "A baixa pontuação de R pode indicar inflexibilidade em ver coisas por diferentes perspectivas [73]."
},
{
pergunta: "No RPAS, o que pode indicar um F% (Percentage of Form) baixo?",
alternativas: [
"Não focar nos aspectos sutis do ambiente",
"Compreensão simples do outro",
"Atenção a nuances e aspectos sutis do seu mundo interno e externo",
"Distanciamento e pouco envolvimento"
],
correta: "Atenção a nuances e aspectos sutis do seu mundo interno e externo",
justificativa: "F%: Quando baixo, a depender, pode indicar uma atenção a nuances e aspectos sutis do seu mundo interno e externo [74]."
},
{
pergunta: "No RPAS, o que Blend% (Percentage of Blends) baixo pode indicar?",
alternativas: [
"Processamento de informação com riqueza",
"Fácil compreensão de si e do outro",
"Capacidade de síntese complexa",
"Processamento intelectual marcado por negligência e baixa atenção aos detalhes"
],
correta: "Processamento intelectual marcado por negligência e baixa atenção aos detalhes",
justificativa: "Blend%: Quando baixo, pode indicar processamento intelectual marcado por negligência e baixa atenção aos detalhes [74]."
},
{
pergunta: "No RPAS, o que um Sy (Sintetizado) baixo a médio pode indicar?",
alternativas: [
"Capacidade de realizar sínteses complexas",
"Facilidade na compreensão de ideias complexas",
"Pensamento simples ou linear",
"Operações psicológicas ricas"
],
correta: "Pensamento simples ou linear",
justificativa: "Sy: Quando baixo a médio, pode haver o pensamento simples ou linear [75]."
},
{
pergunta: "No RPAS, se um mesmo organismo realiza um movimento ativo e passivo simultaneamente (ex: gritando e com braços levantados), qual código de Movimento prevalece?",
alternativas: [
"O passivo (Mp)",
"O ativo (Ma)",
"O código a-p",
"Nenhum código de movimento"
],
correta: "O ativo (Ma)",
justificativa: "Por se tratar de um mesmo organismo, consideramos a sobreposição do movimento ativo. Logo, será Ma [36]."
},
{
pergunta: "No Rorschach RPAS, qual é a regra geral para a codificação de Códigos Cognitivos em uma resposta?",
alternativas: [
"Apenas um código cognitivo por resposta",
"Atribuir um código cognitivo para cada verbalização ou elemento perceptivo",
"Codificar apenas o código mais grave presente",
"Ignorar códigos cognitivos se houver determinantes"
],
correta: "Atribuir um código cognitivo para cada verbalização ou elemento perceptivo",
justificativa: "Uma resposta poderá ter mais de um código cognitivo, porém, seguiremos a regra: Devemos atribuir um código cognitivo para cada verbalização ou elemento perceptivo [61, 62]."
},
{
pergunta: "Segundo as fontes, quais são alguns dos domínios considerados na interpretação do Rorschach RPAS?",
alternativas: [
"Domínio Motor e Sensorial",
"Domínio Familiar e Social",
"Domínio do engajamento e processamento cognitivo, Domínio de percepção e pensamento, Domínio de Stress e Distress",
"Domínio Financeiro e Profissional"
],
correta: "Domínio do engajamento e processamento cognitivo, Domínio de percepção e pensamento, Domínio de Stress e Distress",
justificativa: "As fontes listam e descrevem os domínios de interpretação, incluindo Domínio do engajamento e processamento cognitivo [73], Domínio de percepção e pensamento [77], Domínio de Stress e Distress [79], e Domínio de representação de si e outros [80]."
},
{
pergunta: "No domínio de representação de si e outros, o que um V-Comp (Composto de Vigilância) muito alto pode indicar, especialmente em sujeitos com teste de realidade mais adequado?",
alternativas: [
"Flexibilidade cognitiva",
"Uma personalidade paranoica mais organizada",
"Capacidade para relacionamentos saudáveis",
"Dependência"
],
correta: "Uma personalidade paranoica mais organizada",
justificativa: "V-Comp (composto de vigilância): Quando muito alto, pode indicar inflexibilidade, persecutório. Pode indicar uma personalidade paranoica mais organizada em casos de sujeitos com teste de realidade mais adequado [81]."
},
{
pergunta: "Qual o peso do código cognitivo DR2 (Resposta Desviante grave) na regra de códigos sobrepostos?",
alternativas: [
"1",
"3",
"5",
"6"
],
correta: "6",
justificativa: "Código Peso ... DR2 6 [64]."
},
{
pergunta: "Qual o peso do código cognitivo FAB1 (Combinação Fabulada leve) na regra de códigos sobrepostos?",
alternativas: [
"2",
"4",
"5",
"7"
],
correta: "4",
justificativa: "Código Peso ... FAB1 4 [64]."
},
{
pergunta: "Qual o peso do código cognitivo CON (Contaminação) na regra de códigos sobrepostos?",
alternativas: [
"4",
"5",
"6",
"7"
],
correta: "7",
justificativa: "Código Peso ... CON 7 [64]."
},
{
pergunta: "No contexto acadêmico apresentado nas fontes, quais escores no domínio de percepção e pensamento são explicitamente mencionados como 'baixos' ou 'nada a interpretar'?",
alternativas: [
"Popular (P)",
"FQo%",
"EII3, TPCOMP, ScComp, V-Comp",
"MOR"
],
correta: "EII3, TPCOMP, ScComp, V-Comp",
justificativa: "Para a interpretação, realizar os cálculos de: ... EII3, TPCOMP, ScComp, V-Comp = baixo... ScComp (Para o trabalho: nada a interpretar)... V-Comp (Para o trabalho: nada a interpretar) [16, 79, 81]."
},
{
pergunta: "Na interpretação, o que um FQo% baixo associado a um FQ- alto indica?",
alternativas: [
"Saúde psicológica",
"Adequado teste de realidade",
"Problemas de teste de realidade",
"Abordagem de vida individualista sem patologia"
],
correta: "Problemas de teste de realidade",
justificativa: "FQo%: Quando baixo, é importante verificar se há junto problemas de teste de realidade (FQ- alto) [79]."
},
{
pergunta: "A codificação de Conteúdo Ay (Antropologia) inclui:",
alternativas: [
"Desenhos e esculturas",
"Itens de vestuário",
"Um totem, cocar de cacique, Torre Eiffel",
"Órgãos internos"
],
correta: "Um totem, cocar de cacique, Torre Eiffel",
justificativa: "Ay = Conteúdo de antropologia. Ex.: um totem, cocar do cacique X, Torre Eiffel etc. [23]."
},
{
pergunta: "Qual regra se aplica ao codificar Ay e Art em uma mesma resposta?",
alternativas: [
"Sempre codificar ambos",
"Nunca codificar ambos",
"Não codificar Ay e Art em uma mesma resposta sem uma justificativa forte",
"Codificar apenas o mais relevante"
],
correta: "Não codificar Ay e Art em uma mesma resposta sem uma justificativa forte",
justificativa: "Não codificar Ay e Art em uma mesma resposta sem uma justificativa forte [23]."
},
{
pergunta: "No RPAS, qual código de Conteúdo é usado para objetos e conteúdos que não se encaixam em nenhuma outra categoria?",
alternativas: [
"Art",
"Ay",
"Cg",
"NC"
],
correta: "NC",
justificativa: "NC = Objetos e conteúdos que não são classificados como nenhum dos anteriores. Objetos domésticos, abstrações, etc. [26]."
},
{
pergunta: "Na distinção entre A/Ad e H/Hd, qual a importância da Fase de Esclarecimento (FE)?",
alternativas: [
"É onde o avaliado pode mudar a resposta original",
"É onde o avaliador pode induzir a resposta correta",
"É onde se esclarece se o avaliado viu a figura inteira ou apenas partes, influenciando a codificação",
"A Fase de Esclarecimento não tem importância para essa distinção"
],
correta: "É onde se esclarece se o avaliado viu a figura inteira ou apenas partes, influenciando a codificação",
justificativa: "Atentar-se à Fase de Esclarecimento (FE). A resposta pode ser “Uma mulher”, dando a noção de corpo inteiro. Porém, no inquérito (FE), são descritos apenas cabeça, olhos, boca, nariz e pescoço. O código é Hd [27]."
},
{
pergunta: "No RPAS, o que uma resposta com objetos com forma definida e outro com forma indefinida, com interação, seria codificada?",
alternativas: [
"Apenas Sy",
"Apenas Vg",
"Nem Sy e nem Vg",
"Sy + Vg"
],
correta: "Sy + Vg",
justificativa: "Sy + Vg: Quando há respostas com objetos com forma definida e outro com forma indefinida, com interação [28]."
},
{
pergunta: "No RPAS, o que uma resposta com forma, sem interação entre os perceptos, seria codificada?",
alternativas: [
"Sy",
"Vg",
"Nem Sy e nem Vg",
"Sy + Vg"
],
correta: "Nem Sy e nem Vg",
justificativa: "Nem Sy e nem Vg: Respostas com forma, sem interação entre os perceptos [29]."
},
{
pergunta: "No RPAS, quando a Cor Arbitrária é utilizada (avaliado atribui uma cor), há grandes chances de a codificação do determinante ser:",
alternativas: [
"C",
"CF",
"FC",
"C'"
],
correta: "FC",
justificativa: "A cor arbitrária é quando o avaliado atribui uma cor ao percepto. Ex.: Peixe vermelho. Nesses casos há grandes chances de a codificação ser FC, visto que... a forma é dominante para determina-los [39]."
},
{
pergunta: "Em qual coluna do Sumário de Codificação são inseridos os códigos de Determinantes?",
alternativas: [
"Cognitive",
"Content",
"Loc",
"Determinants"
],
correta: "Determinants",
justificativa: "Determinantes: Inseri-los na coluna “Determinants” [88]."
},
{
pergunta: "Em qual coluna do Sumário de Codificação são inseridos os códigos Cognitivos?",
alternativas: [
"Determinants",
"Content",
"Cognitive",
"Loc"
],
correta: "Cognitive",
justificativa: "Códigos Cognitivos: Cada código cognitivo possui a sua abreviação (sigla) e, no sumário de codificação, inseriremos na coluna “Cognitive” [44, 45]."
},
{
pergunta: "Qual o peso do código cognitivo PEC (Lógica Peculiar) na regra de códigos sobrepostos?",
alternativas: [
"3",
"4",
"5",
"6"
],
correta: "5",
justificativa: "Código Peso ... PEC 5 [64]."
},
{
pergunta: "Qual o peso do código cognitivo INC1 (Combinação Incongruente leve) na regra de códigos sobrepostos?",
alternativas: [
"1",
"2",
"3",
"4"
],
correta: "2",
justificativa: "Código Peso ... INC1 2 [64]."
},
{
pergunta: "Qual o peso do código cognitivo INC2 (Combinação Incongruente grave) na regra de códigos sobrepostos?",
alternativas: [
"2",
"3",
"4",
"5"
],
correta: "4",
justificativa: "Código Peso ... INC2 4 [64]."
},
{
pergunta: "Qual o peso do código cognitivo FAB2 (Combinação Fabulada grave) na regra de códigos sobrepostos?",
alternativas: [
"4",
"5",
"6",
"7"
],
correta: "7",
justificativa: "Código Peso ... FAB2 7 [64]."
},
{
pergunta: "Quais códigos cognitivos têm o mesmo peso máximo (7) na regra de códigos sobrepostos?",
alternativas: [
"DV2 e DR2",
"PEC e INC2",
"FAB2 e CON",
"DR1 e FAB1"
],
correta: "FAB2 e CON",
justificativa: "Código Peso ... FAB2 7 CON 7 [64]."
},
{
pergunta: "No RPAS, se uma resposta incluir INC1 e FAB1 (ex: dois ursos com as mãos (INC1) juntas e rezando (FAB1)), qual código cognitivo prevalecerá segundo a regra?",
alternativas: [
"INC1",
"FAB1",
"Ambos serão codificados",
"O mais grave entre eles"
],
correta: "FAB1",
justificativa: "Ex.: dois ursos com as mãos (INC1) juntas e rezando (FAB1). Nesse caso, ficaria FAB1. Código Peso ... INC1 2 FAB1 4 [61, 62, 64]."
},
{
pergunta: "Qual o peso do código cognitivo DV1 (Verbalização Desviante leve) na regra de códigos sobrepostos?",
alternativas: [
"1",
"2",
"3",
"4"
],
correta: "1",
justificativa: "Código Peso DV1 1 [64]."
},
{
pergunta: "Qual o peso do código cognitivo DV2 (Verbalização Desviante grave) na regra de códigos sobrepostos?",
alternativas: [
"1",
"2",
"3",
"4"
],
correta: "2",
justificativa: "Código Peso ... DV2 2 [64]."
},
{
pergunta: "Qual o peso do código cognitivo DR1 (Resposta Desviante leve) na regra de códigos sobrepostos?",
alternativas: [
"1",
"2",
"3",
"4"
],
correta: "3",
justificativa: "Código Peso ... DR1 3 [64]."
},
{
pergunta: "No Ludodiagnóstico, o que a combinação simbólica de animais domésticos e animais selvagens pode representar?",
alternativas: [
"A energia psíquica",
"A relação materno-filial",
"A díade 'Superego x Id'",
"A capacidade de síntese"
],
correta: "A díade 'Superego x Id'",
justificativa: "O conjunto: animais domésticos + animais selvagens = díade “Superego x Id” [13]."
},
{
pergunta: "No RPAS, quais códigos de conteúdo podem aparecer junto de Sx (Sexual)?",
alternativas: [
"Apenas H",
"Apenas Ad",
"Hd ou An também",
"Art ou Ay"
],
correta: "Hd ou An também",
justificativa: "Junto de Sx, pode aparecer Hd ou An também [26]."
},
{
pergunta: "Quando o avaliado corrige um erro na verbalização ('Um veado com antenas...não, chifres!'), o que acontece com a codificação de DV?",
alternativas: [
"DV2 é codificado",
"DV1 é codificado",
"DV1 seria retirado",
"O código se mantém, mas com um asterisco"
],
correta: "DV1 seria retirado",
justificativa: "Os DV podem ser corrigidos pelo próprio avaliado. Nesse caso, poderemos reduzir de DV2 para DV1 ou tirar o DV. Exemplos de correção: “Um veado com antenas...não, chifres!”. Aqui o DV1 seria retirado [48, 91]."
},
{
pergunta: "Quais das seguintes frases NÃO seriam codificadas como Resposta Desviante (DR) no RPAS, segundo as fontes?",
alternativas: [
"“Devo estar com fome”",
"“Um monstro escuro que está prestes a me pegar”",
"“Quando a gente chora muito, fica mais macio...”",
"“Um vaso lindo. Se essa parte pudesse falar, ela diria “asa””"
],
correta: "“Devo estar com fome”",
justificativa: "Não codificamos DR em comentários como: “Devo estar com fome”, “Tenho visto filme demais...”, “Você vai achar isso bobo, mas...”, “Cara, esse teste é difícil!” [83, 92]."
},
{
pergunta: "No RPAS, como se classifica um Escore Z entre -0,67 e 0,67?",
alternativas: [
"Extremamente baixo",
"Médio Baixo",
"Médio",
"Médio Alto"
],
correta: "Médio",
justificativa: "Classificação do Escore Z: Escore Z -0,67 a 0,67 Classificação Médio [93, 94]."
},
{
pergunta: "No RPAS, como se classifica um Escore Z entre 1,34 e 2,00?",
alternativas: [
"Médio Alto",
"Muito alto",
"Extremamente alto",
"Médio"
],
correta: "Muito alto",
justificativa: "Classificação do Escore Z: Escore Z 1,34 a 2,00 Classificação Muito alto [93, 94]."
},
{
pergunta: "No RPAS, como se classifica um Escore Z entre 2,1 e 3,00?",
alternativas: [
"Muito alto",
"Extremamente alto",
"Médio Alto",
"Médio"
],
correta: "Extremamente alto",
justificativa: "Classificação do Escore Z: Escore Z 2,1 a 3,00 Classificação Extremamente alto [93, 94]."
},
{
pergunta: "No RPAS, como se classifica um Escore Z entre -1,33 e -0,66?",
alternativas: [
"Extremamente baixo",
"Muito Baixo",
"Médio Baixo",
"Médio"
],
correta: "Médio Baixo",
justificativa: "Classificação do Escore Z: Escore Z -1,33 a -0,66 Classificação Médio Baixo [93, 94]."
},
{
pergunta: "No RPAS, como se classifica um Escore Z entre -2,25 e -1,50?",
alternativas: [
"Extremamente baixo",
"Muito Baixo",
"Médio Baixo",
"Médio"
],
correta: "Muito Baixo",
justificativa: "Classificação do Escore Z: Escore Z -2,25 a -1,50 Classificação Muito Baixo [93, 94]."
},
{
pergunta: "No RPAS, como se classifica um Escore Z entre -3,00 e -2,25?",
alternativas: [
"Extremamente baixo",
"Muito Baixo",
"Médio Baixo",
"Médio"
],
correta: "Extremamente baixo",
justificativa: "Classificação do Escore Z: Escore Z -3,00 a -2,25 Classificação Extremamente baixo [93, 94]."
},
{
pergunta: "Qual a primeira etapa após a codificação completa no Rorschach RPAS?",
alternativas: [
"Interpretação",
"Cálculo do Escore Z",
"Realização das contagens (unidades) de cada código",
"Classificação do Escore Z"
],
correta: "Realização das contagens (unidades) de cada código",
justificativa: "Após realizarmos toda a codificação, realizaremos a contagem (unidades) de cada código que apareceu [65, 66]."
},
{
pergunta: "No Ludodiagnóstico, por que ter materiais de fácil reposição é um cuidado importante no setting?",
alternativas: [
"Para que os brinquedos sejam sempre novos",
"Porque as crianças não gostam de brinquedos usados",
"Para que a brincadeira não seja interrompida por falta ou quebra de materiais",
"Para que o psicólogo possa levar materiais para casa"
],
correta: "Para que a brincadeira não seja interrompida por falta ou quebra de materiais",
justificativa: "É importante que a(o) profissional tenha materiais de fácil reposição [8]."
},
{
pergunta: "No RPAS, qual o objetivo de transformar a pontuação bruta em Escore Z?",
alternativas: [
"Obter a classificação final do avaliado",
"Comparar a pontuação individual com uma média de referência, facilitando a interpretação normativa",
"Simplificar o cálculo das variáveis",
"Identificar códigos cognitivos presentes na resposta"
],
correta: "Comparar a pontuação individual com uma média de referência, facilitando a interpretação normativa",
justificativa: "O cálculo do Escore Z é uma transformação estatística que permite comparar a pontuação de um indivíduo com a média de um grupo normativo (representada pela média da tabela e desvio padrão), o que auxilia na interpretação do quão comum ou incomum é essa pontuação. As fontes descrevem o cálculo usando média e desvio padrão de uma tabela e a classificação do Z-score, indicando esse objetivo [71, 72, 93-96]."
},
{
pergunta: "No Ludodiagnóstico, qual cuidado deve ser tomado para que a criança não sinta que houve invasão de sua caixa lúdica?",
alternativas: [
"Deixar a caixa destrancada",
"Permitir que outras crianças usem a caixa dela e quebrem brinquedos",
"Não permitir que outra criança utilize a caixa lúdica dela, ou que brinquedos sejam quebrados por outros",
"Mudar os brinquedos de lugar dentro da caixa"
],
correta: "Não permitir que outra criança utilize a caixa lúdica dela, ou que brinquedos sejam quebrados por outros",
justificativa: "Sair de uma sessão deixando a caixa lúdica em um estado e, posteriormente ao chegar, encontra-la noutro, a criança poderá experienciar uma sensação de invasão ou falta de cuidado para consigo mesma; Ex.: deixar com que outra criança utilize a caixa lúdica dela; brinquedos que foram quebrados por outra criança... [9]."
},
{
pergunta: "No RPAS, a codificação de F (Forma Pura) é utilizada quando...",
alternativas: [
"A resposta envolve movimento",
"A resposta é determinada apenas pela cor",
"A resposta é determinada apenas pelo sombreado",
"Nenhum dos outros determinantes explicados aparece, e a resposta é determinada apenas pela forma"
],
correta: "Nenhum dos outros determinantes explicados aparece, e a resposta é determinada apenas pela forma",
justificativa: "Quando nenhum dos determinantes explicados aparecer, nós codificamos F. Ou seja, o que determinou a resposta do sujeito foi a forma [43]."
},
{
pergunta: "No RPAS, a presença do código cognitivo CON (Contaminação) é considerada:",
alternativas: [
"Comum",
"Rara",
"Sempre presente em sujeitos saudáveis",
"Exclusiva de crianças"
],
correta: "Rara",
justificativa: "Contaminação (CON): É um código extremamente raro [59, 60]."
},
{
pergunta: "No RPAS, o que pode indicar um M/MC mediano?",
alternativas: [
"Pensamento antes de agir",
"Tendência a encarar situações puramente pela emoção",
"Em alguns momentos o sujeito pode ter ações orientadas pela emoção",
"Estilo de enfrentamento pela ponderação"
],
correta: "Em alguns momentos o sujeito pode ter ações orientadas pela emoção",
justificativa: "M/MC: ...Quando mediano, pode ser que em alguns momentos o sujeito tenha ações orientadas pela emoção [76]."
},
{
pergunta: "No contexto acadêmico do RPAS apresentado nas fontes, o que significa a interpretação para EII-3 ser 'recursos egóicos adequados para lidar com os problemas do dia a dia'?",
alternativas: [
"Que escores altos em EII-3 indicam recursos egóicos inadequados",
"Que escores baixos em EII-3 indicam recursos egóicos adequados",
"Que a pontuação em EII-3 para este trabalho específico é considerada como indicando recursos egóicos adequados, sem necessidade de maior aprofundamento para o contexto do estudo",
"Que EII-3 é sempre interpretado dessa maneira, independente do escore"
],
correta: "Que a pontuação em EII-3 para este trabalho específico é considerada como indicando recursos egóicos adequados, sem necessidade de maior aprofundamento para o contexto do estudo",
justificativa: "EII-3: para o trabalho, considerar: recursos egóicos adequados para lidar com os problemas do dia a dia [77]."
},
{
pergunta: "No contexto acadêmico do RPAS, o que significa a interpretação para SC-Comp (Composto de Preocupação com o suicídio) ser 'nada a interpretar'?",
alternativas: [
"Que o sujeito não apresenta risco de suicídio",
"Que o escore em SC-Comp sempre indica baixo risco",
"Que para os fins deste trabalho específico, a variável SC-Comp não será interpretada, embora na prática clínica ela seja relevante para investigar risco de suicídio",
"Que escores muito altos em SC-Comp não indicam risco de suicídio"
],
correta: "Que para os fins deste trabalho específico, a variável SC-Comp não será interpretada, embora na prática clínica ela seja relevante para investigar risco de suicídio",
justificativa: "Composto de Preocupação com o suicídio (SC-Comp): ...Para o trabalho: nada a interpretar [79]."
},
{
pergunta: "No contexto acadêmico do RPAS, o que significa a interpretação para V-Comp (Composto de Vigilância) ser 'nada a interpretar'?",
alternativas: [
"Que o sujeito não possui um estilo cognitivo vigilante",
"Que escores altos em V-Comp indicam flexibilidade",
"Que a variável V-Comp não será interpretada para os fins deste trabalho específico, embora na prática clínica escores altos/muito altos possam indicar cautela, distanciamento ou personalidade paranoica",
"Que V-Comp só é relevante para a interpretação em crianças"
],
correta: "Que a variável V-Comp não será interpretada para os fins deste trabalho específico, embora na prática clínica escores altos/muito altos possam indicar cautela, distanciamento ou personalidade paranoica",
justificativa: "V-Comp (composto de vigilância): ...Para o trabalho: nada a interpretar [81]."
},
{
pergunta: "No Rorschach RPAS, o Atlas de Localização é consultado para:",
alternativas: [
"Identificar os conteúdos presentes na resposta",
"Consultar a qualidade formal da resposta",
"Consultar os contornos referentes a cada tipo de localização (D ou Dd)",
"Determinar o tipo de determinante da resposta"
],
correta: "Consultar os contornos referentes a cada tipo de localização (D ou Dd)",
justificativa: "Atlas de Localização: Está entre as páginas 218 e 296 do manual. Há cada uma das manchas, com os contornos referentes a cada tipo de localização (D ou Dd) [18, 19]."
},
{
pergunta: "Se um detalhe apontado pelo avaliado não estiver no Atlas de Localização, qual código é utilizado?",
alternativas: [
"D99",
"Dd99",
"W99",
"SR99"
],
correta: "Dd99",
justificativa: "Se o detalhe não tiver no mapa, codificar Dd99 [19]."
},
{
pergunta: "No Ludodiagnóstico, a técnica do brincar foi aplicada por quem, segundo a citação inicial?",
alternativas: [
"Carlos Eduardo Bovenzo Filho",
"Melanie Klein",
"Sigmund Freud",
"Donald Winnicott"
],
correta: "Melanie Klein",
justificativa: "A técnica do Brincar: 'Ao interpretar não apenas as palavras da criança mas também suas atividades com seus brinquedos, apliquei esse princípio básico à mente da criança...' (Klein, 1953/1955, p.169) [1]."
},
{
pergunta: "Qual é a unidade mínima de codificação no Rorschach RPAS, especialmente para códigos cognitivos?",
alternativas: [
"A resposta inteira",
"A prancha completa",
"Cada verbalização ou elemento perceptivo",
"O teste completo"
],
correta: "Cada verbalização ou elemento perceptivo",
justificativa: "Uma resposta poderá ter mais de um código cognitivo, porém, seguiremos a regra: Devemos atribuir um código cognitivo para cada verbalização ou elemento perceptivo [61, 62]."
},
{
pergunta: "No cálculo do Escore Z, o 'Desvio Padrão' representa o quê na fórmula?",
alternativas: [
"A pontuação bruta do avaliado",
"A média da tabela normativa",
"Uma medida da dispersão dos dados na amostra normativa da tabela",
"O resultado final do Escore Z"
],
correta: "Uma medida da dispersão dos dados na amostra normativa da tabela",
justificativa: "A fórmula do Escore Z utiliza o 'Desvio Padrão' da tabela, que é uma medida estatística da dispersão dos dados em torno da média [71, 72]."
},
{
pergunta: "Para efeitos de trabalho acadêmico, as fontes mencionam que nem todas as variáveis do RPAS serão calculadas/interpretadas. Cite uma variável que é listada para cálculo e interpretação.",
alternativas: [
"CON",
"DV1",
"Total R (respostas)",
"R-Opt"
],
correta: "Total R (respostas)",
justificativa: "Para efeitos de trabalho acadêmico, vocês não calcularão todas as variáveis. Algumas foram previamente selecionadas [65, 66]. A lista para interpretação inclui Total R [16]."
},
{
pergunta: "A classificação do Escore Z no RPAS é realizada consultando-se:",
alternativas: [
"O Atlas de Localização",
"O Sumário de Codificação",
"Uma tabela de classificação fornecida",
"O peso dos códigos cognitivos"
],
correta: "Uma tabela de classificação fornecida",
justificativa: "Após realizarmos o cálculo de todas as variáveis em Escore Z, iremos para a classificação de cada uma delas; Com isso, consultaremos a classificação na tabela disponibilizada [93-96]."
},
{
pergunta: "Qual a principal premissa da codificação no Rorschach RPAS, segundo as fontes?",
alternativas: [
"Codificar o que o avaliador pensa que a resposta significa",
"Codificar o que o indivíduo viu e descreveu durante a avaliação",
"Codificar apenas respostas populares",
"Codificar apenas respostas com códigos cognitivos"
],
correta: "Codificar o que o indivíduo viu e descreveu durante a avaliação",
justificativa: "Codificar o que o indivíduo viu e descreveu durante a avaliação: o indivíduo deve ter autonomia para falar o que viu, sem influência do avaliador [89]."
},
{
pergunta: "Na organização do setting para Ludoterapia, qual o cuidado com materiais pontiagudos?",
alternativas: [
"Devem estar em grande quantidade",
"Devem ser guardados fora do alcance",
"Cuidado com móveis pontiagudos; as janelas devem ser teladas",
"Devem ser utilizados apenas sob supervisão direta"
],
correta: "Cuidado com móveis pontiagudos; as janelas devem ser teladas",
justificativa: "Alguns cuidados devem ser tomados quando se fala na organização do setting para psicoterapia infantil: Cuidado com móveis pontiagudos; As janelas devem ser teladas [4]."
},
{
pergunta: "Qual a diferença de codificação entre 'um urso sem rabo' e 'uma galinha correndo com a cabeça cortada'?",
alternativas: [
"'Urso sem rabo' é Ad, 'galinha' é A",
"'Urso sem rabo' é A, 'galinha' é Ad",
"Ambos são Ad",
"Ambos são A"
],
correta: "'Urso sem rabo' é A, 'galinha' é Ad",
justificativa: "Para codificarmos A ou H, a figura vista deve ser capaz de viver com a parte que falta. Exemplo: “Um urso sem o rabo” é “A”, enquanto que uma galinha correndo com a cabeça cortada é Ad [26]."
},
{
pergunta: "No RPAS, quando se codifica a-p (Movimento Ativo-Passivo)?",
alternativas: [
"Quando há um único objeto com movimento ativo e passivo",
"Quando há dois objetos com movimento ativo",
"Quando há dois objetos diferentes, cada qual com uma ação distinta em termos de intensidade (ativo e passivo)",
"Quando há movimento inanimado e humano"
],
correta: "Quando há dois objetos diferentes, cada qual com uma ação distinta em termos de intensidade (ativo e passivo)",
justificativa: "Movimento Ativo-Passivo (a-p): codificamos a-p quando existem dois objetos diferentes, cada qual com uma ação distinta em termos de intensidade [35]."
},
{
pergunta: "Em qual coluna do Sumário de Codificação são inseridos os códigos de Conteúdo?",
alternativas: [
"Loc",
"Determinants",
"Cognitive",
"Content"
],
correta: "Content",
justificativa: "Conteúdos: Aqui codificaremos, na coluna “Content”, os tipos de conteúdos que aparecem em cada uma das respostas do avaliado [19]."
},
{
pergunta: "No RPAS, o que um Escore Z de -2,50 na variável X indicaria, de acordo com a tabela de classificação?",
alternativas: [
"Médio",
"Médio Baixo",
"Muito Baixo",
"Extremamente baixo"
],
correta: "Extremamente baixo",
justificativa: "Classificação do Escore Z: Escore Z -3,00 a -2,25 Extremamente baixo [93, 94]. Um Z-score de -2,50 se encontra nesta faixa."
},
{
pergunta: "No RPAS, o que um Escore Z de 1,50 na variável Y indicaria, de acordo com a tabela de classificação?",
alternativas: [
"Médio Alto",
"Muito alto",
"Extremamente alto",
"Médio"
],
correta: "Muito alto",
justificativa: "Classificação do Escore Z: Escore Z 1,34 a 2,00 Muito alto [93, 94]. Um Z-score de 1,50 se encontra nesta faixa."
},
{
pergunta: "No RPAS, o que um Escore Z de 0,00 na variável Z indicaria, de acordo com a tabela de classificação?",
alternativas: [
"Médio Baixo",
"Médio",
"Médio Alto",
"Muito alto"
],
correta: "Médio",
justificativa: "Classificação do Escore Z: Escore Z -0,67 a 0,67 Médio [93, 94]. Um Z-score de 0,00 se encontra nesta faixa."
},
{
pergunta: "No Rorschach RPAS, a consulta ao manual entre as páginas 219 e 296 é utilizada para:",
alternativas: [
"Determinar o tipo de código cognitivo",
"Consultar a Qualidade Formal (FQ)",
"Consultar as Respostas Populares (P)",
"Determinar os determinantes de sombreado"
],
correta: "Consultar a Qualidade Formal (FQ)",
justificativa: "Os FQ são consultados entre as páginas 219 e 296 [29]."
},
{
pergunta: "Qual a regra de prevalência entre os códigos de Qualidade Formal (FQ)?",
alternativas: [
"FQo >> FQu >> FQ-",
"FQ- >> FQu >> FQo",
"FQu >> FQ- >> FQo",
"FQ- >> FQo >> FQu"
],
correta: "FQ- >> FQu >> FQo",
justificativa: "Segue, na ordem de importância: FQ-, FQu e Fqo [30]."
},
{
pergunta: "Em qual coluna do Sumário de Codificação são inseridos os códigos Pr e Pu?",
alternativas: [
"Loc",
"Or",
"R-Opt (R-Otimizado)",
"Content"
],
correta: "R-Opt (R-Otimizado)",
justificativa: "Pedir (Pr) e Puxar (Pu): São codificados na última coluna, nomeada de R-Opt (R-Otimizado) [15]."
},
{
pergunta: "No RPAS, qual o código utilizado para uma Combinação Incongruente onde há uma contradição entre a falta de uma parte e uma ação (ex: 'Uma ave sem boca, mas comendo')?",
alternativas: [
"INC não é codificado",
"INC1",
"INC2",
"FAB1"
],
correta: "INC é codificado",
justificativa: "Codificaríamos INC se: “Uma ave sem boca, mas comendo”. (Há a contradição entre comer e boca) [85, 90]."
},
{
pergunta: "Qual a definição de FAB (Combinações Fabuladas)?",
alternativas: [
"Combinações implausíveis de características de um objeto",
"Verbalizações desviantes com palavras bizarras",
"Interação impossível entre dois ou mais objetos",
"Raciocínio peculiar e confuso"
],
correta: "Interação impossível entre dois ou mais objetos",
justificativa: "Combinações Fabuladas (FAB1 e FAB2): Envolve duas entidades mutualmente integradas, mas que são impossíveis [85, 86]. O FAB envolverá a interação entre dois ou mais objetos, interação esta impossível [56, 58]."
},
{
pergunta: "No RPAS, uma resposta como 'Mickey Mouse, nu, devorando o Pateta' conteria quais códigos cognitivos?",
alternativas: [
"Apenas FAB1",
"Apenas INC1",
"INC1 e FAB1",
"INC2 e FAB2"
],
correta: "INC1 e FAB1",
justificativa: "Ex.: “Mickey Mouse, nu, devorando o Pateta. Temos o INC1 (Mickey Nu) e FAB1 (devorando o pateta) [57, 87]."
},
{
pergunta: "Segundo Klein, além dos brinquedos, o que mais pode envolver a atribuição de papéis ao profissional na técnica do brincar?",
alternativas: [
"Apenas os desenhos da criança",
"Muitas atividades da criança",
"Apenas as falas da criança",
"O comportamento dos pais"
],
correta: "Muitas atividades da criança",
justificativa: "Para Klein (1953/1955), além dos brinquedos, muitas atividades da criança podem envolver a atribuição de papéis ao profissional [1]."
},
{
pergunta: "Qual a principal função da justificativa na estrutura da resposta solicitada?",
alternativas: [
"Apenas preencher espaço",
"Argumentar contra a resposta correta",
"Explicar por que a alternativa correta está certa, baseando-se diretamente nas fontes fornecidas",
"Adicionar informações externas sobre o tema"
],
correta: "Explicar por que a alternativa correta está certa, baseando-se diretamente nas fontes fornecidas",
justificativa: "A estrutura solicitada inclui um campo 'justificativa' que deve explicar a resposta correta. Além disso, a instrução geral é fornecer um resposta que seja diretamente suportada pelos fontes e citada apropriadamente [instrução geral]."
},
{
pergunta: "No RPAS, a interpretação no domínio de percepção e pensamento pode ser indicativa de quais psicopatologias?",
alternativas: [
"Transtornos de ansiedade",
"Transtornos de humor",
"Transtornos de personalidade",
"Psicopatologias como o espectro da esquizofrenia"
],
correta: "Psicopatologias como o espectro da esquizofrenia",
justificativa: "Os aspectos interpretativos [do domínio de percepção e pensamento] podem ser indicativos de psicopatologias como o espectro da esquizofrenia [77]."
},
{
pergunta: "No RPAS, o que um TP-Comp alto (mas não muito alto) pode indicar?",
alternativas: [
"Recursos egóicos adequados",
"Saúde psicológica",
"Problemas para pensar com clareza e possível vulnerabilidade a estados psicóticos ou borderline",
"Adequação na forma de ver o mundo"
],
correta: "Problemas para pensar com clareza e possível vulnerabilidade a estados psicóticos ou borderline",
justificativa: "TP-Comp: ...Quando alto, pode indicar problemas para pensar com clareza e possível vulnerabilidade a estados psicóticos ou borderline [77]."
},
{
pergunta: "No RPAS, qual a regra de prevalência entre os determinantes de Sombreado quando há mais de um?",
alternativas: [
"V >> T >> Y",
"T >> V >> Y",
"Y >> T >> V",
"Não há regra específica, codificar todos"
],
correta: "Não há regra explícita para a prevalência entre V, T, Y se aparecerem juntos, mas Y é o padrão quando V ou T não são claros.",
justificativa: "As fontes não especificam uma regra de prevalência entre V, T, e Y comparável à de C, CF, C [38]. Elas definem cada um e indicam que Y é o código padrão se V ou T não estiverem claros [39-41]. Portanto, não há uma regra de prevalência listada para V, T, Y juntos."
},
{
pergunta: "No Rorschach RPAS, a consulta às páginas 116 e 117 do manual é utilizada para:",
alternativas: [
"Determinar os determinantes de movimento",
"Consultar a Qualidade Formal (FQ)",
"Consultar as Respostas Populares (P)",
"Classificar o Escore Z"
],
correta: "Consultar as Respostas Populares (P)",
justificativa: "Resposta Popular - P: Consultar p. 116 e 117 do manual [30]."
},
{
pergunta: "No Ludodiagnóstico, um dos exemplos de materiais não-estruturados mencionados é:",
alternativas: [
"Bonecos",
"Carrinhos",
"Massinha de modelar",
"Jogos de tabuleiro"
],
correta: "Massinha de modelar",
justificativa: "Os materiais não-estruturados envolvem, em grande parte, os gráficos. São materiais que a criança produz algo por meio deles (estrutura). Ex.: folha sulfite, lápis, massinha, cola, tinta lavável, uma bacia e água etc. [7]."
},
{
pergunta: "No RPAS, como se calcula o M/MC?",
alternativas: [
"Somando M e MC",
"Subtraindo MC de M",
"Dividindo M por MC",
"Multiplicando M por MC"
],
correta: "Dividindo M por MC",
justificativa: "M/MC: Dividir M por MC [67, 68]."
},
{
pergunta: "Segundo as fontes, o Ludodiagnóstico pode ter outros nomes, quais são?",
alternativas: [
"Psicoterapia infantil e Análise do Brincar",
"Hora do jogo, hora lúdica ou entrevista lúdica",
"Teste de Apercepção Temática e Teste HTP",
"Play Therapy e Sandplay"
],
correta: "Hora do jogo, hora lúdica ou entrevista lúdica",
justificativa: "Ludodiagnóstico, hora do jogo, hora lúdica ou entrevista lúdica [3]."
},
{
pergunta: "Na estrutura de codificação do Rorschach, além das palavras, o que mais deve ser codificado?",
alternativas: [
"Apenas as emoções do avaliado",
"O que é visto por palavras e gestos",
"As interpretações do avaliador",
"O histórico familiar do avaliado"
],
correta: "O que é visto por palavras e gestos",
justificativa: "Codificar o que é visto por palavras e gestos [14]."
},
{
pergunta: "No RPAS, se o avaliado dissesse 'Um monstro escuro que está prestes a me pegar', o grau de como ele concebe o cartão como real determina:",
alternativas: [
"Se o código será DR1 ou DR2",
"Se o código será FAB1 ou FAB2",
"Se o código será INC1 ou INC2",
"Se o código será DV1 ou DV2"
],
correta: "Se o código será DR1 ou DR2",
justificativa: "Outro ponto: tratar a resposta como se fosse real implica em DR. “Um monstro escuro que está prestes a me pegar”. O grau de como o avaliado concebe o cartão como real determina se será 1 ou 2 [51, 52]."
},
{
pergunta: "Qual a característica do Determinante F (Forma pura)?",
alternativas: [
"Sempre aparece em misturas (Blends)",
"É o único determinante que sempre aparece sozinho",
"É codificado apenas para respostas populares",
"É o determinante mais grave"
],
correta: "É o único determinante que sempre aparece sozinho",
justificativa: "O único determinante que sempre aparece sozinho é o F. Se codificar F, não se codifica mais nenhum [43]."
}
];
