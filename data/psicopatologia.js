// Questões de Psicopatologia na Psicologia
const questoesPsicopatologia = [
    {
      pergunta: "Qual é o principal objetivo da psicopatologia?",
      alternativas: [
        "Diagnosticar transtornos mentais",
        "Compreender a natureza e as causas dos transtornos mentais",
        "Tratar transtornos mentais",
        "Prevenir transtornos mentais"
      ],
      correta: "Compreender a natureza e as causas dos transtornos mentais",
      justificativa: "A psicopatologia busca investigar os processos subjacentes aos transtornos mentais."
    },
    {
      pergunta: "Quais são os principais critérios para definir um comportamento como patológico?",
      alternativas: [
        "Desvio estatístico, sofrimento pessoal, disfunção e perigo",
        "Desvio social, sofrimento interpessoal, disfunção e perigo",
        "Desvio cultural, sofrimento emocional, disfunção e perigo",
        "Desvio familiar, sofrimento psicológico, disfunção e perigo"
      ],
      correta: "Desvio estatístico, sofrimento pessoal, disfunção e perigo",
      justificativa: "Esses critérios ajudam a diferenciar comportamentos normais de patológicos."
    },
    {
      pergunta: "O que é o DSM-5?",
      alternativas: [
        "Um manual de tratamento para transtornos mentais",
        "Um sistema de classificação para transtornos mentais",
        "Um guia de pesquisa em psicopatologia",
        "Um código de ética para psicólogos"
      ],
      correta: "Um sistema de classificação para transtornos mentais",
      justificativa: "O DSM-5 é amplamente utilizado para diagnosticar e classificar transtornos mentais."
    },
    {
      pergunta: "Qual é a diferença entre transtorno e sintoma?",
      alternativas: [
        "Transtorno é uma condição, sintoma é uma manifestação",
        "Transtorno é uma manifestação, sintoma é uma condição",
        "Transtorno é uma causa, sintoma é um efeito",
        "Transtorno é um efeito, sintoma é uma causa"
      ],
      correta: "Transtorno é uma condição, sintoma é uma manifestação",
      justificativa: "Os sintomas são sinais e características de um transtorno."
    },
    {
      pergunta: "O que é comorbidade?",
      alternativas: [
        "A presença de dois ou mais transtornos mentais no mesmo indivíduo",
        "A ausência de transtornos mentais",
        "A presença de um transtorno mental leve",
        "A presença de um transtorno mental grave"
      ],
      correta: "A presença de dois ou mais transtornos mentais no mesmo indivíduo",
      justificativa: "A comorbidade é comum em muitos transtornos mentais."
    },
    {
      pergunta: "Quais são os principais tipos de transtornos de ansiedade?",
      alternativas: [
        "Transtorno de ansiedade generalizada, transtorno do pânico, fobias e transtorno obsessivo-compulsivo",
        "Transtorno depressivo maior, transtorno bipolar e transtorno de personalidade borderline",
        "Esquizofrenia, transtorno delirante e transtorno esquizoafetivo",
        "Transtorno de déficit de atenção e hiperatividade, transtorno do espectro autista e transtorno de aprendizagem"
      ],
      correta: "Transtorno de ansiedade generalizada, transtorno do pânico, fobias e transtorno obsessivo-compulsivo",
      justificativa: "Esses transtornos compartilham características de ansiedade excessiva e medo."
    },
    {
      pergunta: "O que é transtorno de ansiedade generalizada (TAG)?",
      alternativas: [
        "Ansiedade excessiva e preocupação persistente",
        "Medo intenso de situações sociais",
        "Crises de pânico recorrentes",
        "Pensamentos obsessivos e comportamentos compulsivos"
      ],
      correta: "Ansiedade excessiva e preocupação persistente",
      justificativa: "A TAG envolve preocupação constante com diversos aspectos da vida."
    },
    {
      pergunta: "Quais são os principais sintomas do transtorno do pânico?",
      alternativas: [
        "Crises de pânico repentinas e intensas",
        "Medo de objetos ou situações específicas",
        "Pensamentos intrusivos e obsessivos",
        "Comportamentos repetitivos e compulsivos"
      ],
      correta: "Crises de pânico repentinas e intensas",
      justificativa: "As crises de pânico são acompanhadas de sintomas físicos e emocionais intensos."
    },
    {
      pergunta: "O que são fobias?",
      alternativas: [
        "Medos irracionais e persistentes de objetos ou situações específicas",
        "Preocupações excessivas com a saúde",
        "Pensamentos obsessivos e compulsivos",
        "Crises de pânico recorrentes"
      ],
      correta: "Medos irracionais e persistentes de objetos ou situações específicas",
      justificativa: "As fobias podem limitar significativamente a vida de uma pessoa."
    },
    {
      pergunta: "O que é transtorno obsessivo-compulsivo (TOC)?",
      alternativas: [
        "Pensamentos obsessivos e comportamentos compulsivos",
        "Medo intenso de situações sociais",
        "Crises de pânico recorrentes",
        "Ansiedade excessiva e preocupação persistente"
      ],
      correta: "Pensamentos obsessivos e comportamentos compulsivos",
      justificativa: "O TOC envolve obsessões (pensamentos intrusivos) e compulsões (comportamentos repetitivos)."
    },
    {
      pergunta: "Quais são os principais tipos de transtornos do humor?",
      alternativas: [
        "Transtorno depressivo maior, transtorno bipolar e transtorno ciclotímico",
        "Transtorno de ansiedade generalizada, transtorno do pânico e fobias",
        "Esquizofrenia, transtorno delirante e transtorno esquizoafetivo",
        "Transtorno de déficit de atenção e hiperatividade, transtorno do espectro autista e transtorno de aprendizagem"
      ],
      correta: "Transtorno depressivo maior, transtorno bipolar e transtorno ciclotímico",
      justificativa: "Esses transtornos afetam o humor e o estado emocional."
    },
    {
      pergunta: "O que é transtorno depressivo maior (TDM)?",
      alternativas: [
        "Humor persistentemente triste e perda de interesse em atividades",
        "Oscilações extremas de humor entre mania e depressão",
        "Humor instável e impulsividade",
        "Delírios e alucinações"
      ],
      correta: "Humor persistentemente triste e perda de interesse em atividades",
      justificativa: "O TDM envolve sintomas de tristeza, desesperança e falta de energia."
    },
    {
      pergunta: "O que é transtorno bipolar?",
      alternativas: [
        "Oscilações extremas de humor entre mania e depressão",
        "Humor persistentemente triste e perda de interesse em atividades",
        "Humor instável e impulsividade",
        "Delírios e alucinações"
      ],
      correta: "Oscilações extremas de humor entre mania e depressão",
      justificativa: "O transtorno bipolar envolve episódios de mania (humor elevado) e depressão."
    },
    {
      pergunta: "O que é transtorno ciclotímico?",
      alternativas: [
        "Oscilações de humor menos intensas do que no transtorno bipolar",
        "Humor persistentemente triste e perda de interesse em atividades",
        "Humor instável e impulsividade",
        "Delírios e alucinações"
      ],
      correta: "Oscilações de humor menos intensas do que no transtorno bipolar",
      justificativa: "O transtorno ciclotímico envolve oscilações de humor mais leves e crônicas."
    },
    {
      pergunta: "Quais são os principais tipos de transtornos de personalidade?",
      alternativas: [
        "Transtorno de personalidade borderline, transtorno de personalidade antissocial e transtorno de personalidade narcisista",
        "Transtorno de ansiedade generalizada, transtorno do pânico e fobias",
        "Esquizofrenia, transtorno delirante e transtorno esquizoafetivo",
        "Transtorno de déficit de atenção e hiperatividade, transtorno do espectro autista e transtorno de aprendizagem"
      ],
      correta: "Transtorno de personalidade borderline, transtorno de personalidade antissocial e transtorno de personalidade narcisista",
      justificativa: "Esses transtornos envolvem padrões de pensamento, comportamento e emoções disfuncionais."
    },
    {
      pergunta: "O que é transtorno de personalidade borderline (TPB)?",
      alternativas: [
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia",
        "Medo intenso de situações sociais"
      ],
      correta: "Humor instável, impulsividade e medo de abandono",
      justificativa: "O TPB envolve padrões de relacionamento instáveis e intensos."
    },
    {
      pergunta: "O que é transtorno de personalidade antissocial?",
      alternativas: [
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Humor instável, impulsividade e medo de abandono",
        "Necessidade de admiração e falta de empatia",
        "Medo intenso de situações sociais"
      ],
      correta: "Desrespeito pelos direitos dos outros e comportamento antissocial",
      justificativa: "O transtorno de personalidade antissocial envolve padrões de comportamento manipulador e irresponsável."
    },
    {
      pergunta: "O que é transtorno de personalidade narcisista?",
      alternativas: [
        "Necessidade de admiração e falta de empatia",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Medo intenso de situações sociais"
      ],
      correta: "Necessidade de admiração e falta de empatia",
      justificativa: "O transtorno de personalidade narcisista envolve um senso inflado de autoimportância."
    },
    {
      pergunta: "Quais são os principais tipos de transtornos psicóticos?",
      alternativas: [
        "Esquizofrenia, transtorno delirante e transtorno esquizoafetivo",
        "Transtorno de ansiedade generalizada, transtorno do pânico e fobias",
        "Transtorno depressivo maior, transtorno bipolar e transtorno ciclotímico",
        "Transtorno de déficit de atenção e hiperatividade, transtorno do espectro autista e transtorno de aprendizagem"
      ],
      correta: "Esquizofrenia, transtorno delirante e transtorno esquizoafetivo",
      justificativa: "Esses transtornos envolvem sintomas de psicose, como delírios e alucinações."
    },
    {
      pergunta: "O que é esquizofrenia?",
      alternativas: [
        "Delírios, alucinações e pensamento desorganizado",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Delírios, alucinações e pensamento desorganizado",
      justificativa: "A esquizofrenia é um transtorno psicótico grave e crônico."
    },
    {
      pergunta: "O que é transtorno delirante?",
      alternativas: [
        "Delírios persistentes e não bizarros",
        "Alucinações e pensamento desorganizado",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial"
      ],
      correta: "Delírios persistentes e não bizarros",
      justificativa: "O transtorno delirante envolve delírios persistentes sem outros sintomas psicóticos."
    },
    {
      pergunta: "O que é transtorno esquizoafetivo?",
      alternativas: [
        "Sintomas de esquizofrenia e transtorno do humor",
        "Delírios persistentes e não bizarros",
        "Alucinações e pensamento desorganizado",
        "Humor instável, impulsividade e medo de abandono"
      ],
      correta: "Sintomas de esquizofrenia e transtorno do humor",
      justificativa: "O transtorno esquizoafetivo envolve sintomas de esquizofrenia e transtorno do humor."
    },
    {
      pergunta: "Quais são os principais tipos de transtornos do neurodesenvolvimento?",
      alternativas: [
        "Transtorno de déficit de atenção e hiperatividade, transtorno do espectro autista e transtorno de aprendizagem",
        "Transtorno de ansiedade generalizada, transtorno do pânico e fobias",
        "Transtorno depressivo maior, transtorno bipolar e transtorno ciclotímico",
        "Esquizofrenia, transtorno delirante e transtorno esquizoafetivo"
      ],
      correta: "Transtorno de déficit de atenção e hiperatividade, transtorno do espectro autista e transtorno de aprendizagem",
      justificativa: "Esses transtornos se manifestam na infância e afetam o desenvolvimento."
    },
    {
      pergunta: "O que é transtorno de déficit de atenção e hiperatividade (TDAH)?",
      alternativas: [
        "Desatenção, hiperatividade e impulsividade",
        "Dificuldades de aprendizagem e comunicação",
        "Comportamentos repetitivos e interesses restritos",
        "Delírios e alucinações"
      ],
      correta: "Desatenção, hiperatividade e impulsividade",
      justificativa: "O TDAH afeta a capacidade de concentração e controle de impulsos."
    },
    {
      pergunta: "O que é transtorno do espectro autista (TEA)?",
      alternativas: [
        "Dificuldades de comunicação e interação social, comportamentos repetitivos e interesses restritos",
        "Desatenção, hiperatividade e impulsividade",
        "Dificuldades de aprendizagem e comunicação",
        "Delírios e alucinações"
      ],
      correta: "Dificuldades de comunicação e interação social, comportamentos repetitivos e interesses restritos",
      justificativa: "O TEA afeta a comunicação, a interação social e o comportamento."
    },
    {
      pergunta: "O que são transtornos de aprendizagem?",
      alternativas: [
        "Dificuldades em habilidades acadêmicas, como leitura, escrita e matemática",
        "Desatenção, hiperatividade e impulsividade",
        "Comportamentos repetitivos e interesses restritos",
        "Delírios e alucinações"
      ],
      correta: "Dificuldades em habilidades acadêmicas, como leitura, escrita e matemática",
      justificativa: "Os transtornos de aprendizagem afetam o desempenho escolar."
    },
    {
      pergunta: "Quais são os principais fatores de risco para transtornos mentais?",
      alternativas: [
        "Genética, ambiente, experiências traumáticas e uso de substâncias",
        "Apenas genética",
        "Apenas ambiente",
        "Apenas experiências traumáticas"
      ],
      correta: "Genética, ambiente, experiências traumáticas e uso de substâncias",
      justificativa: "Os transtornos mentais são influenciados por uma combinação de fatores."
    },
    {
      pergunta: "O que é o modelo biopsicossocial da psicopatologia?",
      alternativas: [
        "Um modelo que considera fatores biológicos, psicológicos e sociais na compreensão dos transtornos mentais",
        "Um modelo que considera apenas fatores biológicos",
        "Um modelo que considera apenas fatores psicológicos",
        "Um modelo que considera apenas fatores sociais"
      ],
      correta: "Um modelo que considera fatores biológicos, psicológicos e sociais na compreensão dos transtornos mentais",
      justificativa: "O modelo biopsicossocial é amplamente utilizado na psicopatologia."
    },
    {
      pergunta: "Qual é a importância da pesquisa em psicopatologia?",
      alternativas: [
        "Desenvolver tratamentos eficazes e melhorar a compreensão dos transtornos mentais",
        "Diagnosticar transtornos mentais",
        "Tratar transtornos mentais",
        "Prevenir transtornos mentais"
      ],
      correta: "Desenvolver tratamentos eficazes e melhorar a compreensão dos transtornos mentais",
      justificativa: "A pesquisa é essencial para avançar o conhecimento e a prática na psicopatologia."
    },
    {
      pergunta: "O que é avaliação psicológica em psicopatologia?",
      alternativas: [
        "O processo de coleta e análise de informações para diagnosticar e compreender os transtornos mentais",
        "O tratamento de transtornos mentais",
        "A prevenção de transtornos mentais",
        "A pesquisa em psicopatologia"
      ],
      correta: "O processo de coleta e análise de informações para diagnosticar e compreender os transtornos mentais",
      justificativa: "A avaliação psicológica é fundamental para o diagnóstico e tratamento."
    },
    {
      pergunta: "Quais são os principais métodos de avaliação psicológica em psicopatologia?",
      alternativas: [
        "Entrevistas clínicas, testes psicológicos e observação comportamental",
        "Apenas entrevistas clínicas",
        "Apenas testes psicológicos",
        "Apenas observação comportamental"
      ],
      correta: "Entrevistas clínicas, testes psicológicos e observação comportamental",
      justificativa: "Esses métodos fornecem informações abrangentes sobre o funcionamento psicológico."
    },
    {
      pergunta: "O que é diagnóstico diferencial em psicopatologia?",
      alternativas: [
        "O processo de diferenciar entre transtornos mentais com sintomas semelhantes",
        "O tratamento de transtornos mentais",
        "A prevenção de transtornos mentais",
        "A pesquisa em psicopatologia"
      ],
      correta: "O processo de diferenciar entre transtornos mentais com sintomas semelhantes",
      justificativa: "O diagnóstico diferencial é essencial para um diagnóstico preciso."
    },
    {
      pergunta: "Qual é o papel do psicólogo clínico na psicopatologia?",
      alternativas: [
        "Avaliar, diagnosticar e tratar transtornos mentais",
        "Apenas avaliar transtornos mentais",
        "Apenas diagnosticar transtornos mentais",
        "Apenas tratar transtornos mentais"
      ],
      correta: "Avaliar, diagnosticar e tratar transtornos mentais",
      justificativa: "O psicólogo clínico desempenha um papel fundamental na psicopatologia."
    },
    {
      pergunta: "Quais são os principais tipos de tratamento para transtornos mentais?",
      alternativas: [
        "Psicoterapia, farmacoterapia e intervenções psicossociais",
        "Apenas psicoterapia",
        "Apenas farmacoterapia",
        "Apenas intervenções psicossociais"
      ],
      correta: "Psicoterapia, farmacoterapia e intervenções psicossociais",
      justificativa: "O tratamento varia dependendo do transtorno e das necessidades do indivíduo."
    },
    {
      pergunta: "O que é psicoterapia?",
      alternativas: [
        "Tratamento psicológico que envolve conversas e técnicas terapêuticas",
        "Tratamento com medicamentos",
        "Intervenções sociais para melhorar o funcionamento",
        "Prevenção de transtornos mentais"
      ],
      correta: "Tratamento psicológico que envolve conversas e técnicas terapêuticas",
      justificativa: "A psicoterapia ajuda os indivíduos a compreender e superar seus problemas."
    },
    {
      pergunta: "O que é farmacoterapia?",
      alternativas: [
        "Tratamento com medicamentos para transtornos mentais",
        "Tratamento psicológico que envolve conversas e técnicas terapêuticas",
        "Intervenções sociais para melhorar o funcionamento",
        "Prevenção de transtornos mentais"
      ],
      correta: "Tratamento com medicamentos para transtornos mentais",
      justificativa: "A farmacoterapia pode ser usada em conjunto com a psicoterapia."
    },
    {
      pergunta: "O que são intervenções psicossociais?",
      alternativas: [
        "Intervenções que visam melhorar o funcionamento social e ocupacional",
        "Tratamento com medicamentos",
        "Tratamento psicológico que envolve conversas e técnicas terapêuticas",
        "Prevenção de transtornos mentais"
      ],
      correta: "Intervenções que visam melhorar o funcionamento social e ocupacional",
      justificativa: "As intervenções psicossociais podem incluir terapia familiar e grupos de apoio."
    },
    {
      pergunta: "Qual é a importância da prevenção em psicopatologia?",
      alternativas: [
        "Reduzir a incidência de transtornos mentais e promover a saúde mental",
        "Diagnosticar transtornos mentais",
        "Tratar transtornos mentais",
        "Pesquisar transtornos mentais"
      ],
      correta: "Reduzir a incidência de transtornos mentais e promover a saúde mental",
      justificativa: "A prevenção é fundamental para reduzir o impacto dos transtornos mentais."
    },
    {
      pergunta: "Quais são os principais tipos de prevenção em psicopatologia?",
      alternativas: [
        "Prevenção primária, secundária e terciária",
        "Apenas prevenção primária",
        "Apenas prevenção secundária",
        "Apenas prevenção terciária"
      ],
      correta: "Prevenção primária, secundária e terciária",
      justificativa: "Cada tipo de prevenção tem um foco diferente."
    },
    {
      pergunta: "O que é prevenção primária?",
      alternativas: [
        "Prevenção de novos casos de transtornos mentais",
        "Detecção precoce de transtornos mentais",
        "Redução do impacto de transtornos mentais existentes",
        "Tratamento de transtornos mentais"
      ],
      correta: "Prevenção de novos casos de transtornos mentais",
      justificativa: "A prevenção primária visa reduzir os fatores de risco."
    },
    {
      pergunta: "O que é prevenção secundária?",
      alternativas: [
        "Detecção precoce de transtornos mentais e intervenção imediata",
        "Prevenção de novos casos de transtornos mentais",
        "Redução do impacto de transtornos mentais existentes",
        "Tratamento de transtornos mentais"
      ],
      correta: "Detecção precoce de transtornos mentais e intervenção imediata",
      justificativa: "A prevenção secundária visa evitar a progressão dos transtornos."
    },
    {
      pergunta: "O que é prevenção terciária?",
      alternativas: [
        "Redução do impacto de transtornos mentais existentes e reabilitação",
        "Detecção precoce de transtornos mentais",
        "Prevenção de novos casos de transtornos mentais",
        "Tratamento de transtornos mentais"
      ],
      correta: "Redução do impacto de transtornos mentais existentes e reabilitação",
      justificativa: "A prevenção terciária visa melhorar a qualidade de vida."
    },
    {
      pergunta: "Qual é a importância da interdisciplinaridade na psicopatologia?",
      alternativas: [
        "Permitir a colaboração entre diferentes profissionais para um tratamento abrangente",
        "Limitar a atuação do psicólogo clínico",
        "Ignorar a influência de fatores biológicos",
        "Focar apenas em intervenções psicossociais"
      ],
      correta: "Permitir a colaboração entre diferentes profissionais para um tratamento abrangente",
      justificativa: "A interdisciplinaridade é essencial para um tratamento eficaz."
    },
    {
      pergunta: "Quais são os principais desafios da psicopatologia?",
      alternativas: [
        "Diagnosticar transtornos mentais com precisão e desenvolver tratamentos eficazes",
        "Apenas diagnosticar transtornos mentais",
        "Apenas desenvolver tratamentos eficazes",
        "Ignorar a influência de fatores sociais"
      ],
      correta: "Diagnosticar transtornos mentais com precisão e desenvolver tratamentos eficazes",
      justificativa: "A psicopatologia enfrenta desafios complexos e multifacetados."
    },
    {
      pergunta: "Qual é a importância da ética na psicopatologia?",
      alternativas: [
        "Garantir o respeito aos direitos e dignidade dos indivíduos com transtornos mentais",
        "Limitar a atuação do psicólogo clínico",
        "Ignorar a influência de fatores biológicos",
        "Focar apenas em intervenções psicossociais"
      ],
      correta: "Garantir o respeito aos direitos e dignidade dos indivíduos com transtornos mentais",
      justificativa: "A ética é fundamental para a prática responsável e justa."
    },
    {
      pergunta: "Quais são os principais avanços da psicopatologia?",
      alternativas: [
        "Melhor compreensão dos transtornos mentais e desenvolvimento de tratamentos mais eficazes",
        "Apenas melhor compreensão dos transtornos mentais",
        "Apenas desenvolvimento de tratamentos mais eficazes",
        "Ignorar a influência de fatores sociais"
      ],
      correta: "Melhor compreensão dos transtornos mentais e desenvolvimento de tratamentos mais eficazes",
      justificativa: "A psicopatologia está em constante evolução."
    },
    {
      pergunta: "Qual é o futuro da psicopatologia?",
      alternativas: [
        "Continuar a avançar na compreensão e tratamento dos transtornos mentais",
        "Limitar a atuação do psicólogo clínico",
        "Ignorar a influência de fatores biológicos",
        "Focar apenas em intervenções psicossociais"
      ],
      correta: "Continuar a avançar na compreensão e tratamento dos transtornos mentais",
      justificativa: "A psicopatologia busca melhorar a qualidade de vida das pessoas com transtornos mentais."
    },
    {
      pergunta: "O que é transtorno de estresse pós-traumático (TEPT)?",
      alternativas: [
        "Sintomas de ansiedade, flashbacks e pesadelos após um evento traumático",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Sintomas de ansiedade, flashbacks e pesadelos após um evento traumático",
      justificativa: "O TEPT pode ser debilitante e afetar significativamente a vida de uma pessoa."
    },
    {
      pergunta: "O que é transtorno de ajustamento?",
      alternativas: [
        "Sintomas emocionais e comportamentais em resposta a um evento estressante",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Sintomas emocionais e comportamentais em resposta a um evento estressante",
      justificativa: "O transtorno de ajustamento é uma resposta maladaptativa ao estresse."
    },
    {
      pergunta: "O que é transtorno de somatização?",
      alternativas: [
        "Sintomas físicos sem causa médica aparente",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Sintomas físicos sem causa médica aparente",
      justificativa: "O transtorno de somatização envolve sintomas físicos que causam sofrimento."
    },
    {
      pergunta: "O que é transtorno de conversão?",
      alternativas: [
        "Perda de funções físicas sem causa médica aparente",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Perda de funções físicas sem causa médica aparente",
      justificativa: "O transtorno de conversão envolve sintomas neurológicos sem base médica."
    },
    {
      pergunta: "O que é transtorno dissociativo de identidade (TDI)?",
      alternativas: [
        "Presença de duas ou mais identidades distintas",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Presença de duas ou mais identidades distintas",
      justificativa: "O TDI é um transtorno complexo e controverso."
    },
    {
      pergunta: "O que é amnésia dissociativa?",
      alternativas: [
        "Perda de memória relacionada a eventos traumáticos",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Perda de memória relacionada a eventos traumáticos",
      justificativa: "A amnésia dissociativa é uma forma de fuga psicológica."
    },
    {
      pergunta: "O que é fuga dissociativa?",
      alternativas: [
        "Fuga repentina e inesperada de casa ou do trabalho",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Fuga repentina e inesperada de casa ou do trabalho",
      justificativa: "A fuga dissociativa envolve perda de identidade e fuga física."
    },
    {
      pergunta: "O que é transtorno de despersonalização/desrealização?",
      alternativas: [
        "Sensação de estar fora do próprio corpo ou de que o mundo é irreal",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Sensação de estar fora do próprio corpo ou de que o mundo é irreal",
      justificativa: "O transtorno de despersonalização/desrealização causa sofrimento e disfunção."
    },
    {
      pergunta: "O que são transtornos alimentares?",
      alternativas: [
        "Anorexia nervosa, bulimia nervosa e transtorno da compulsão alimentar",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Anorexia nervosa, bulimia nervosa e transtorno da compulsão alimentar",
      justificativa: "Os transtornos alimentares envolvem padrões alimentares disfuncionais."
    },
    {
      pergunta: "O que é anorexia nervosa?",
      alternativas: [
        "Restrição alimentar extrema e medo de ganhar peso",
        "Episódios de compulsão alimentar seguidos de comportamentos compensatórios",
        "Episódios recorrentes de compulsão alimentar sem comportamentos compensatórios",
        "Humor instável, impulsividade e medo de abandono"
      ],
      correta: "Restrição alimentar extrema e medo de ganhar peso",
      justificativa: "A anorexia nervosa pode levar à desnutrição e morte."
    },
    {
      pergunta: "O que é bulimia nervosa?",
      alternativas: [
        "Episódios de compulsão alimentar seguidos de comportamentos compensatórios",
        "Restrição alimentar extrema e medo de ganhar peso",
        "Episódios recorrentes de compulsão alimentar sem comportamentos compensatórios",
        "Humor instável, impulsividade e medo de abandono"
      ],
      correta: "Episódios de compulsão alimentar seguidos de comportamentos compensatórios",
      justificativa: "A bulimia nervosa pode causar problemas de saúde graves."
    },
    {
      pergunta: "O que é transtorno da compulsão alimentar?",
      alternativas: [
        "Episódios recorrentes de compulsão alimentar sem comportamentos compensatórios",
        "Restrição alimentar extrema e medo de ganhar peso",
        "Episódios de compulsão alimentar seguidos de comportamentos compensatórios",
        "Humor instável, impulsividade e medo de abandono"
      ],
      correta: "Episódios recorrentes de compulsão alimentar sem comportamentos compensatórios",
      justificativa: "O transtorno da compulsão alimentar pode levar à obesidade e problemas de saúde."
    },
    {
      pergunta: "O que são transtornos do sono-vigília?",
      alternativas: [
        "Insônia, hipersonia, narcolepsia e apneia do sono",
        "Humor instável, impulsividade e medo de abandono",
        "Desrespeito pelos direitos dos outros e comportamento antissocial",
        "Necessidade de admiração e falta de empatia"
      ],
      correta: "Insônia, hipersonia, narcolepsia e apneia do sono",
      justificativa: "Os transtornos do sono-vigília afetam a qualidade e a quantidade do sono."
    },]