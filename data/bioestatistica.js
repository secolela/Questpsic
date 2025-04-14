// Questões de Bioestatística
const questoesBioestatistica = [
    {
      pergunta: "Qual é a definição de média aritmética?",
      alternativas: [
        "O valor que mais se repete em um conjunto de dados",
        "A soma de todos os valores dividida pelo número de observações",
        "O valor central quando os dados estão ordenados",
        "A diferença entre o maior e menor valor do conjunto"
      ],
      correta: "A soma de todos os valores dividida pelo número de observações",
      justificativa: "A média aritmética é calculada somando todos os valores e dividindo pelo número total de observações."
    },
    {
      pergunta: "O que representa a mediana em um conjunto de dados?",
      alternativas: [
        "O valor mais frequente",
        "O valor central quando os dados estão ordenados",
        "A média dos valores extremos",
        "A diferença entre quartis"
      ],
      correta: "O valor central quando os dados estão ordenados",
      justificativa: "A mediana divide o conjunto de dados ordenados em duas partes iguais."
    },
    {
      pergunta: "Qual é a principal medida de tendência central para dados assimétricos?",
      alternativas: [
        "Média",
        "Moda",
        "Mediana",
        "Variância"
      ],
      correta: "Mediana",
      justificativa: "A mediana é menos sensível a valores extremos do que a média, sendo mais adequada para distribuições assimétricas."
    },
    {
      pergunta: "O que é desvio padrão?",
      alternativas: [
        "A média das diferenças absolutas em relação à média",
        "A raiz quadrada da variância",
        "A diferença entre o maior e menor valor",
        "O intervalo entre o primeiro e terceiro quartil"
      ],
      correta: "A raiz quadrada da variância",
      justificativa: "O desvio padrão é a medida de dispersão calculada como a raiz quadrada da variância."
    },
    {
      pergunta: "Qual medida estatística é usada para comparar a variabilidade entre conjuntos com unidades diferentes?",
      alternativas: [
        "Variância",
        "Desvio padrão",
        "Coeficiente de variação",
        "Amplitude interquartil"
      ],
      correta: "Coeficiente de variação",
      justificativa: "O coeficiente de variação permite comparar a dispersão relativa entre conjuntos com unidades diferentes."
    },
    {
      pergunta: "O que representa o primeiro quartil (Q1)?",
      alternativas: [
        "O valor que separa os 25% menores valores",
        "A mediana do conjunto de dados",
        "O valor que separa os 75% menores valores",
        "A média dos 25% centrais"
      ],
      correta: "O valor que separa os 25% menores valores",
      justificativa: "O primeiro quartil divide os dados de forma que 25% das observações estão abaixo dele."
    },
    {
      pergunta: "Qual gráfico é mais adequado para representar a distribuição de frequências de variáveis contínuas?",
      alternativas: [
        "Gráfico de barras",
        "Gráfico de pizza",
        "Histograma",
        "Gráfico de dispersão"
      ],
      correta: "Histograma",
      justificativa: "O histograma mostra a distribuição de frequências dividindo os dados em intervalos contínuos."
    },
    {
      pergunta: "O que é o p-valor em um teste de hipóteses?",
      alternativas: [
        "A probabilidade de a hipótese nula ser verdadeira",
        "A probabilidade de obter resultados tão extremos quanto os observados, assumindo a hipótese nula",
        "A medida do tamanho do efeito",
        "O nível de confiança do teste"
      ],
      correta: "A probabilidade de obter resultados tão extremos quanto os observados, assumindo a hipótese nula",
      justificativa: "O p-valor quantifica a evidência contra a hipótese nula."
    },
    {
      pergunta: "Qual teste estatístico é apropriado para comparar médias de dois grupos independentes?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "ANOVA",
        "Correlação de Pearson"
      ],
      correta: "Teste t de Student",
      justificativa: "O teste t compara médias entre dois grupos independentes, assumindo distribuição normal."
    },
    {
      pergunta: "O que mede o coeficiente de correlação de Pearson?",
      alternativas: [
        "A diferença entre médias",
        "A relação linear entre duas variáveis contínuas",
        "A proporção de variância explicada",
        "A significância estatística"
      ],
      correta: "A relação linear entre duas variáveis contínuas",
      justificativa: "O coeficiente de Pearson varia de -1 a 1, indicando força e direção da relação linear."
    },
    {
      pergunta: "Qual é a fórmula para calcular a variância populacional?",
      alternativas: [
        "Σ(x - x̄)² / n",
        "Σ(x - x̄)² / (n - 1)",
        "Σ(x - μ)² / N",
        "Σ(x - μ) / N"
      ],
      correta: "Σ(x - μ)² / N",
      justificativa: "A variância populacional usa o tamanho total da população (N) e a média populacional (μ)."
    },
    {
      pergunta: "O que é um outlier em estatística?",
      alternativas: [
        "Um valor que se repete frequentemente",
        "Um valor extremamente diferente dos demais",
        "A média dos valores centrais",
        "O ponto médio de um intervalo de confiança"
      ],
      correta: "Um valor extremamente diferente dos demais",
      justificativa: "Outliers são observações que se destacam por serem significativamente diferentes do restante dos dados."
    },
    {
      pergunta: "Qual teste não paramétrico equivale ao teste t para amostras independentes?",
      alternativas: [
        "Teste de Wilcoxon",
        "Teste de Kruskal-Wallis",
        "Teste U de Mann-Whitney",
        "Teste de Friedman"
      ],
      correta: "Teste U de Mann-Whitney",
      justificativa: "O teste U de Mann-Whitney é a alternativa não paramétrica para comparar dois grupos independentes."
    },
    {
      pergunta: "O que representa um intervalo de confiança de 95%?",
      alternativas: [
        "95% dos dados estão dentro desse intervalo",
        "Temos 95% de confiança que o parâmetro populacional está no intervalo",
        "95% das médias amostrais estão nesse intervalo",
        "A probabilidade de o parâmetro estar no intervalo é 95%"
      ],
      correta: "Temos 95% de confiança que o parâmetro populacional está no intervalo",
      justificativa: "O intervalo de confiança estima onde o parâmetro populacional provavelmente está, com certo nível de confiança."
    },
    {
      pergunta: "Qual é a principal suposição do teste ANOVA?",
      alternativas: [
        "Normalidade dos resíduos",
        "Homogeneidade das variâncias",
        "Independência das observações",
        "Todas as anteriores"
      ],
      correta: "Todas as anteriores",
      justificativa: "ANOVA assume normalidade, homocedasticidade (variâncias iguais) e independência das observações."
    },
    {
      pergunta: "O que é viés de seleção?",
      alternativas: [
        "Erro sistemático na escolha dos participantes do estudo",
        "Erro aleatório na coleta de dados",
        "Influência do pesquisador nos resultados",
        "Variação natural dos dados"
      ],
      correta: "Erro sistemático na escolha dos participantes do estudo",
      justificativa: "Viés de seleção ocorre quando a amostra não representa a população devido à forma como foi selecionada."
    },
    {
      pergunta: "Qual teste estatístico é usado para comparar proporções entre dois grupos independentes?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "ANOVA",
        "Correlação de Pearson"
      ],
      correta: "Teste qui-quadrado",
      justificativa: "O teste qui-quadrado compara frequências observadas com frequências esperadas para verificar associações entre variáveis categóricas."
    },
    {
      pergunta: "O que é um erro do tipo I em testes de hipóteses?",
      alternativas: [
        "Rejeitar a hipótese nula quando ela é verdadeira",
        "Não rejeitar a hipótese nula quando ela é falsa",
        "Erro na coleta de dados",
        "Erro na interpretação dos resultados"
      ],
      correta: "Rejeitar a hipótese nula quando ela é verdadeira",
      justificativa: "O erro do tipo I (falso positivo) ocorre quando se conclui que há um efeito quando, na verdade, não há."
    },
    {
      pergunta: "Qual medida estatística indica a força da relação linear entre duas variáveis?",
      alternativas: [
        "Média",
        "Mediana",
        "Coeficiente de correlação",
        "Variância"
      ],
      correta: "Coeficiente de correlação",
      justificativa: "O coeficiente de correlação, como o de Pearson, quantifica a força e direção da relação linear."
    },
    {
      pergunta: "O que é um estudo transversal?",
      alternativas: [
        "Estudo que acompanha os participantes ao longo do tempo",
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo experimental com grupos de controle",
        "Estudo que compara diferentes populações"
      ],
      correta: "Estudo que analisa dados de um único ponto no tempo",
      justificativa: "Estudos transversais coletam dados em um momento específico, fornecendo um instantâneo da população."
    },
    {
      pergunta: "Qual teste não paramétrico é usado para comparar três ou mais grupos independentes?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "ANOVA",
        "Teste de Kruskal-Wallis"
      ],
      correta: "Teste de Kruskal-Wallis",
      justificativa: "O teste de Kruskal-Wallis é usado quando as suposições da ANOVA não são atendidas, comparando medianas de múltiplos grupos."
    },
    {
      pergunta: "O que é sensibilidade em testes diagnósticos?",
      alternativas: [
        "Probabilidade de um teste ser negativo quando a doença está ausente",
        "Probabilidade de um teste ser positivo quando a doença está presente",
        "Proporção de resultados corretos",
        "Precisão do teste em detectar falsos positivos"
      ],
      correta: "Probabilidade de um teste ser positivo quando a doença está presente",
      justificativa: "Sensibilidade mede a capacidade do teste de identificar corretamente os casos positivos."
    },
    {
      pergunta: "Qual gráfico é usado para representar a relação entre duas variáveis quantitativas?",
      alternativas: [
        "Gráfico de barras",
        "Gráfico de pizza",
        "Histograma",
        "Gráfico de dispersão"
      ],
      correta: "Gráfico de dispersão",
      justificativa: "Gráficos de dispersão mostram a relação entre duas variáveis, com cada ponto representando um par de valores."
    },
    {
      pergunta: "O que é um erro do tipo II em testes de hipóteses?",
      alternativas: [
        "Rejeitar a hipótese nula quando ela é verdadeira",
        "Não rejeitar a hipótese nula quando ela é falsa",
        "Erro na coleta de dados",
        "Erro na interpretação dos resultados"
      ],
      correta: "Não rejeitar a hipótese nula quando ela é falsa",
      justificativa: "O erro do tipo II (falso negativo) ocorre quando se falha em detectar um efeito que realmente existe."
    },
    {
      pergunta: "Qual medida estatística representa a dispersão dos dados em torno da média?",
      alternativas: [
        "Média",
        "Mediana",
        "Desvio padrão",
        "Moda"
      ],
      correta: "Desvio padrão",
      justificativa: "O desvio padrão mede a variabilidade dos dados em relação à média."
    },
    {
      pergunta: "O que é um estudo de caso-controle?",
      alternativas: [
        "Estudo que acompanha os participantes ao longo do tempo",
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo que compara grupos com e sem a doença",
        "Estudo experimental com grupos de controle"
      ],
      correta: "Estudo que compara grupos com e sem a doença",
      justificativa: "Estudos de caso-controle comparam indivíduos com uma condição (casos) com aqueles sem a condição (controles)."
    },
    {
      pergunta: "Qual teste estatístico é usado para comparar médias de três ou mais grupos independentes?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "ANOVA",
        "Correlação de Pearson"
      ],
      correta: "ANOVA",
      justificativa: "A ANOVA (Análise de Variância) compara as médias de três ou mais grupos para determinar se há diferenças significativas."
    },
    {
      pergunta: "O que é especificidade em testes diagnósticos?",
      alternativas: [
        "Probabilidade de um teste ser negativo quando a doença está ausente",
        "Probabilidade de um teste ser positivo quando a doença está presente",
        "Proporção de resultados corretos",
        "Precisão do teste em detectar falsos positivos"
      ],
      correta: "Probabilidade de um teste ser negativo quando a doença está ausente",
      justificativa: "Especificidade mede a capacidade do teste de identificar corretamente os casos negativos."
    },
    {
      pergunta: "Qual gráfico é usado para representar a distribuição de variáveis categóricas?",
      alternativas: [
        "Gráfico de barras",
        "Gráfico de pizza",
        "Histograma",
        "Gráfico de dispersão"
      ],
      correta: "Gráfico de barras",
      justificativa: "Gráficos de barras mostram a frequência de cada categoria, facilitando a comparação entre elas."
    },
    {
      pergunta: "O que é um intervalo de confiança?",
      alternativas: [
        "A faixa de valores que contém a média amostral",
        "A faixa de valores que contém o parâmetro populacional com certa probabilidade",
        "A diferença entre o maior e menor valor dos dados",
        "A média dos valores centrais"
      ],
      correta: "A faixa de valores que contém o parâmetro populacional com certa probabilidade",
      justificativa: "O intervalo de confiança estima onde o parâmetro populacional provavelmente está, com certo nível de confiança."
    },
    {
      pergunta: "Qual medida estatística representa a média ponderada dos dados?",
      alternativas: [
        "Média aritmética",
        "Média geométrica",
        "Média harmônica",
        "Média ponderada"
      ],
      correta: "Média ponderada",
      justificativa: "A média ponderada leva em consideração a importância relativa de cada valor, atribuindo pesos diferentes."
    },
    {
      pergunta: "O que é um estudo de coorte?",
      alternativas: [
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo que compara grupos com e sem a doença",
        "Estudo que acompanha um grupo de pessoas ao longo do tempo",
        "Estudo experimental com grupos de controle"
      ],
      correta: "Estudo que acompanha um grupo de pessoas ao longo do tempo",
      justificativa: "Estudos de coorte seguem um grupo de indivíduos ao longo do tempo para observar o desenvolvimento de resultados de interesse."
    },
    {
      pergunta: "Qual teste não paramétrico é usado para comparar duas amostras pareadas?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "Teste de Wilcoxon",
        "Teste de Kruskal-Wallis"
      ],
      correta: "Teste de Wilcoxon",
      justificativa: "O teste de Wilcoxon é usado para comparar duas amostras pareadas quando os dados não seguem uma distribuição normal."
    },
    {
      pergunta: "O que é um gráfico de caixa (boxplot)?",
      alternativas: [
        "Gráfico que mostra a relação entre duas variáveis",
        "Gráfico que representa a distribuição de frequências",
        "Gráfico que exibe a mediana, quartis e outliers",
        "Gráfico que mostra a evolução de uma variável ao longo do tempo"
      ],
      correta: "Gráfico que exibe a mediana, quartis e outliers",
      justificativa: "O boxplot resume a distribuição dos dados, mostrando a mediana, quartis e possíveis outliers."
    },
    {
      pergunta: "O que é um viés de informação?",
      alternativas: [
        "Erro sistemático na escolha dos participantes do estudo",
        "Erro sistemático na coleta de dados",
        "Influência do pesquisador nos resultados",
        "Variação natural dos dados"
      ],
      correta: "Erro sistemático na coleta de dados",
      justificativa: "Viés de informação ocorre quando há erros na forma como os dados são coletados, afetando a precisão dos resultados."
    },
    {
      pergunta: "Qual medida estatística representa a proporção de variância explicada por um modelo?",
      alternativas: [
        "Coeficiente de correlação",
        "Coeficiente de determinação (R²)",
        "Desvio padrão",
        "Média"
      ],
      correta: "Coeficiente de determinação (R²)",
      justificativa: "O R² indica a proporção da variância da variável dependente que é previsível a partir da variável independente."
    },
    {
      pergunta: "O que é um estudo experimental?",
      alternativas: [
        "Estudo que observa os participantes sem intervenção",
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo que compara grupos com e sem a doença",
        "Estudo que manipula uma variável para observar o efeito em outra"
      ],
      correta: "Estudo que manipula uma variável para observar o efeito em outra",
      justificativa: "Estudos experimentais envolvem a manipulação de uma variável independente para observar seu efeito na variável dependente."
    },
    {
      pergunta: "Qual teste estatístico é usado para comparar a distribuição de frequências observadas com as esperadas?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "ANOVA",
        "Correlação de Pearson"
      ],
      correta: "Teste qui-quadrado",
      justificativa: "O teste qui-quadrado compara frequências observadas com frequências esperadas para verificar associações entre variáveis categóricas."
    },
    {
      pergunta: "O que é um gráfico de linha?",
      alternativas: [
        "Gráfico que mostra a relação entre duas variáveis",
        "Gráfico que representa a distribuição de frequências",
        "Gráfico que exibe a mediana, quartis e outliers",
        "Gráfico que mostra a evolução de uma variável ao longo do tempo"
      ],
      correta: "Gráfico que mostra a evolução de uma variável ao longo do tempo",
      justificativa: "Gráficos de linha são usados para mostrar a mudança de uma variável ao longo do tempo."
    },
    {
      pergunta: "O que é um viés de confusão?",
      alternativas: [
        "Erro sistemático na escolha dos participantes do estudo",
        "Erro sistemático na coleta de dados",
        "Influência de uma terceira variável nos resultados",
        "Variação natural dos dados"
      ],
      correta: "Influência de uma terceira variável nos resultados",
      justificativa: "Viés de confusão ocorre quando uma terceira variável não controlada afeta tanto a variável independente quanto a dependente."
    },
    {
      pergunta: "Qual medida estatística representa a média geométrica dos dados?",
      alternativas: [
        "Média aritmética",
        "Média geométrica",
        "Média harmônica",
        "Média ponderada"
      ],
      correta: "Média geométrica",
      justificativa: "A média geométrica é usada quando os dados representam taxas de crescimento ou proporções."
    },
    {
      pergunta: "O que é um estudo ecológico?",
      alternativas: [
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo que compara grupos com e sem a doença",
        "Estudo que analisa dados de populações ou grupos, não de indivíduos",
        "Estudo experimental com grupos de controle"
      ],
      correta: "Estudo que analisa dados de populações ou grupos, não de indivíduos",
      justificativa: "Estudos ecológicos examinam associações entre variáveis em nível de população ou grupo, não individual."
    },
    {
      pergunta: "Qual teste não paramétrico é usado para comparar três ou mais amostras pareadas?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "Teste de Wilcoxon",
        "Teste de Friedman"
      ],
      correta: "Teste de Friedman",
      justificativa: "O teste de Friedman é usado para comparar três ou mais amostras pareadas quando os dados não seguem uma distribuição normal."
    },
    {
      pergunta: "O que é um gráfico de pizza?",
      alternativas: [
        "Gráfico que mostra a relação entre duas variáveis",
        "Gráfico que representa a distribuição de frequências",
        "Gráfico que exibe a mediana, quartis e outliers",
        "Gráfico que mostra a proporção de cada categoria em relação ao todo"
      ],
      correta: "Gráfico que mostra a proporção de cada categoria em relação ao todo",
      justificativa: "Gráficos de pizza são usados para mostrar a proporção de cada categoria em relação ao total."
    },
    {
      pergunta: "O que é um viés de sobrevivência?",
      alternativas: [
        "Erro sistemático na escolha dos participantes do estudo",
        "Erro sistemático na coleta de dados",
        "Erro que ocorre quando apenas os sobreviventes são incluídos na análise",
        "Variação natural dos dados"
      ],
      correta: "Erro que ocorre quando apenas os sobreviventes são incluídos na análise",
      justificativa: "Viés de sobrevivência ocorre quando a análise é restrita a indivíduos que sobreviveram a um evento, ignorando aqueles que não sobreviveram."
    },
    {
      pergunta: "Qual medida estatística representa a média harmônica dos dados?",
      alternativas: [
        "Média aritmética",
        "Média geométrica",
        "Média harmônica",
        "Média ponderada"
      ],
      correta: "Média harmônica",
      justificativa: "A média harmônica é usada quando os dados representam taxas ou razões."
    },
    {
      pergunta: "O que é um estudo de intervenção?",
      alternativas: [
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo que compara grupos com e sem a doença",
        "Estudo que manipula uma variável para observar o efeito em outra",
        "Estudo que observa os participantes sem intervenção"
      ],
      correta: "Estudo que manipula uma variável para observar o efeito em outra",
      justificativa: "Estudos de intervenção envolvem a manipulação de uma variável independente para observar seu efeito na variável dependente."
    },
    {
      pergunta: "Qual teste estatístico é usado para comparar a associação entre duas variáveis categóricas?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "ANOVA",
        "Correlação de Pearson"
      ],
      correta: "Teste qui-quadrado",
      justificativa: "O teste qui-quadrado é usado para verificar a associação entre duas variáveis categóricas."
    },
    {
      pergunta: "O que é um gráfico de área?",
      alternativas: [
        "Gráfico que mostra a relação entre duas variáveis",
        "Gráfico que representa a distribuição de frequências",
        "Gráfico que exibe a mediana, quartis e outliers",
        "Gráfico que mostra a evolução de uma variável ao longo do tempo, preenchendo a área abaixo da linha"
      ],
      correta: "Gráfico que mostra a evolução de uma variável ao longo do tempo, preenchendo a área abaixo da linha",
      justificativa: "Gráficos de área são usados para mostrar a evolução de uma variável ao longo do tempo, destacando a magnitude da mudança."
    },
    {
      pergunta: "O que é um viés de publicação?",
      alternativas: [
        "Erro sistemático na escolha dos participantes do estudo",
        "Erro sistemático na coleta de dados",
        "Tendência de publicar apenas resultados estatisticamente significativos",
        "Variação natural dos dados"
      ],
      correta: "Tendência de publicar apenas resultados estatisticamente significativos",
      justificativa: "Viés de publicação ocorre quando estudos com resultados não significativos têm menor probabilidade de serem publicados."
    },
    {
      pergunta: "Qual medida estatística representa a taxa de mortalidade em uma população?",
      alternativas: [
        "Prevalência",
        "Incidência",
        "Mortalidade",
        "Morbilidade"
      ],
      correta: "Mortalidade",
      justificativa: "A taxa de mortalidade representa o número de mortes em uma população durante um período específico."
    },
    {
      pergunta: "O que é um estudo de validação?",
      alternativas: [
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo que compara grupos com e sem a doença",
        "Estudo que avalia a precisão e acurácia de um teste ou medida",
        "Estudo experimental com grupos de controle"
      ],
      correta: "Estudo que avalia a precisão e acurácia de um teste ou medida",
      justificativa: "Estudos de validação avaliam a capacidade de um teste ou medida de medir o que se propõe a medir."
    },
    {
      pergunta: "Qual teste estatístico é usado para comparar médias de amostras pareadas?",
      alternativas: [
        "Teste t de Student pareado",
        "Teste qui-quadrado",
        "ANOVA",
        "Correlação de Pearson"
      ],
      correta: "Teste t de Student pareado",
      justificativa: "O teste t de Student pareado compara as médias de duas amostras relacionadas ou pareadas."
    },
    {
      pergunta: "O que é um gráfico de radar?",
      alternativas: [
        "Gráfico que mostra a relação entre duas variáveis",
        "Gráfico que representa a distribuição de frequências",
        "Gráfico que exibe a mediana, quartis e outliers",
        "Gráfico que mostra múltiplas variáveis em um formato circular"
      ],
      correta: "Gráfico que mostra múltiplas variáveis em um formato circular",
      justificativa: "Gráficos de radar são usados para mostrar múltiplas variáveis em um formato circular, facilitando a comparação entre elas."
    },
    {
      pergunta: "O que é um viés de memória?",
      alternativas: [
        "Erro sistemático na escolha dos participantes do estudo",
        "Erro sistemático na coleta de dados",
        "Erro que ocorre quando os participantes recordam informações de forma diferente",
        "Variação natural dos dados"
      ],
      correta: "Erro que ocorre quando os participantes recordam informações de forma diferente",
      justificativa: "Viés de memória ocorre quando a recordação de eventos passados é influenciada por fatores como a presença de uma doença."
    },
    {
      pergunta: "Qual medida estatística representa a taxa de incidência em uma população?",
      alternativas: [
        "Prevalência",
        "Incidência",
        "Mortalidade",
        "Morbilidade"
      ],
      correta: "Incidência",
      justificativa: "A taxa de incidência representa o número de novos casos de uma doença em uma população durante um período específico."
    },
    {
      pergunta: "O que é um estudo de revisão sistemática?",
      alternativas: [
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo que compara grupos com e sem a doença",
        "Estudo que sintetiza evidências de múltiplos estudos sobre uma questão específica",
        "Estudo experimental com grupos de controle"
      ],
      correta: "Estudo que sintetiza evidências de múltiplos estudos sobre uma questão específica",
      justificativa: "Revisões sistemáticas resumem e avaliam criticamente a evidência de estudos primários sobre uma questão de pesquisa."
    },
    {
      pergunta: "Qual teste estatístico é usado para comparar a associação entre variáveis ordinais?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "Correlação de Spearman",
        "ANOVA"
      ],
      correta: "Correlação de Spearman",
      justificativa: "A correlação de Spearman é usada para medir a associação entre variáveis ordinais."
    },
    {
      pergunta: "O que é um gráfico de dispersão com linha de regressão?",
      alternativas: [
        "Gráfico que mostra a relação entre duas variáveis com uma linha que melhor se ajusta aos dados",
        "Gráfico que representa a distribuição de frequências",
        "Gráfico que exibe a mediana, quartis e outliers",
        "Gráfico que mostra a evolução de uma variável ao longo do tempo"
      ],
      correta: "Gráfico que mostra a relação entre duas variáveis com uma linha que melhor se ajusta aos dados",
      justificativa: "Gráficos de dispersão com linha de regressão mostram a relação linear entre duas variáveis e a linha que melhor se ajusta aos dados."
    },
    {
      pergunta: "O que é um viés de não resposta?",
      alternativas: [
        "Erro sistemático na escolha dos participantes do estudo",
        "Erro sistemático na coleta de dados",
        "Erro que ocorre quando os participantes não respondem às perguntas",
        "Variação natural dos dados"
      ],
      correta: "Erro que ocorre quando os participantes não respondem às perguntas",
      justificativa: "Viés de não resposta ocorre quando aqueles que não respondem a uma pesquisa diferem daqueles que respondem."
    },
    {
      pergunta: "Qual medida estatística representa a taxa de prevalência em uma população?",
      alternativas: [
        "Prevalência",
        "Incidência",
        "Mortalidade",
        "Morbilidade"
      ],
      correta: "Prevalência",
      justificativa: "A taxa de prevalência representa o número total de casos de uma doença em uma população durante um período específico."
    },
    {
      pergunta: "O que é um estudo de meta-análise?",
      alternativas: [
        "Estudo que analisa dados de um único ponto no tempo",
        "Estudo que compara grupos com e sem a doença",
        "Estudo que combina resultados de múltiplos estudos para obter uma estimativa geral",
        "Estudo experimental com grupos de controle"
      ],
      correta: "Estudo que combina resultados de múltiplos estudos para obter uma estimativa geral",
      justificativa: "Meta-análises combinam estatisticamente os resultados de múltiplos estudos para obter uma estimativa mais precisa do efeito."
    },
    {
      pergunta: "Qual teste estatístico é usado para comparar a igualdade de variâncias entre dois grupos?",
      alternativas: [
        "Teste t de Student",
        "Teste qui-quadrado",
        "Teste de Levene",
        "ANOVA"
      ],
      correta: "Teste de Levene",
      justificativa: "O teste de Levene é usado para verificar a homogeneidade das variâncias entre dois ou mais grupos."
    },
    {
      pergunta: "O que é um gráfico de funil?",
      alternativas: [
        "Gráfico que mostra a relação entre duas variáveis",
        "Gráfico que representa a distribuição de frequências",
        "Gráfico que exibe a mediana, quartis e outliers",
        "Gráfico usado para detectar viés de publicação em meta-análises"
      ],
      correta: "Gráfico usado para detectar viés de publicação em meta-análises",
      justificativa: "Gráficos de funil são usados em meta-análises para detectar viés de publicação, mostrando a relação entre o tamanho do efeito e a precisão do estudo."
    },
    {
      pergunta: "O que é um viés de detecção?",
      alternativas: [
        "Erro sistemático na escolha dos participantes do estudo",
        "Erro sistemático na coleta de dados",
        "Erro que ocorre quando a detecção de um resultado é influenciada pela exposição",
        "Variação natural dos dados"
      ],
      correta: "Erro que ocorre quando a detecção de um resultado é influenciada pela exposição",
      justificativa: "Viés de detecção ocorre quando a forma como um resultado é detectado varia entre os grupos de comparação."
    },
    {
      pergunta: "Qual medida estatística representa a taxa de mortalidade específica por causa?",
      alternativas: [
        "Taxa de mortalidade bruta",
        "Taxa de mortalidade específica por causa",
        "Taxa de mortalidade infantil",
        "Taxa de mortalidade materna"
      ],
      correta: "Taxa de mortal"
    },]
