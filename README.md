# Algoritmos de Ordenação

Projeto para análise de performance de algoritmos de ordenação, com visualização gráfica dos resultados.

## Estrutura de Pastas

```text
algorimos-de-ordenacao/
├── algorimos-de-ordenacao.iml
├── README.md
├── .idea/
├── graficos/
│   └── src/
│       ├── App.tsx
│       ├── global.css
│       ├── main.tsx
│       ├── components/
│       ├── data/
│       │   └── data.ts
│       ├── grafico/
│       │   ├── tempo-ordenacao-1000.tsx
│       │   ├── tempo-ordenacao-10_000.tsx
│       │   ├── tempo-ordenacao-100_000.tsx
│       │   ├── tempo-ordenacao-500_000.tsx
│       │   ├── tempo-ordenacao-1_000_000.tsx
│       │   └── tempo-ordenacaoGeral.tsx
│       └── lib/
└── src/
  ├── Main.java
  └── algoritmos_ordenacao/
    ├── tipo_A/
    │   ├── CombSort.java
    │   ├── SelectionSort.java
    │   └── Main.java
    ├── tipo_B/
    │   ├── Quicksort.java
    │   └── Main.java
    └── tipo_C/
      ├── CockTail.java
      ├── GnomeSort.java
      ├── TimSort.java
      ├── GeraNumeros.java
      ├── FormataMain.java
      └── Main.java
```
- Dica: Os arquivos dos algoritmos estão agrupados por tipo (`tipo_A`, `tipo_B`, 
`tipo_C`) dentro de `src/algoritmos_ordenacao/`.
- Os gráficos e dados estão em `graficos/src/`, separados em pastas para componentes,
 dados e gráficos específicos.

## Análise dos Tipos de Ordenação

Os algoritmos de ordenação utilizados neste projeto foram agrupados em três 
tipos, cada um com características e desempenhos distintos:

### Tipo A

- **Comb Sort**: Variante do Bubble Sort, melhora a eficiência ao eliminar 
"tartarugas" (valores pequenos no final do array). É eficiente para listas médias.
- **Selection Sort**: Simples e fácil de implementar, porém pouco eficiente 
para grandes volumes de dados devido à complexidade O(n²). Útil quando o custo 
de troca é baixo.

### Tipo B

- **Quick Sort**: Algoritmo de ordenação eficiente na prática, com complexidade 
média O(n log n). Utiliza a estratégia de divisão e conquista, sendo muito rápido 
para grandes conjuntos de dados, mas pode ter desempenho ruim em casos degenerados 
(já ordenados).

### Tipo C

- **Cocktail Sort**: Variante bidirecional do Bubble Sort, melhora um pouco a 
eficiência, mas ainda é O(n²). Indicado para listas quase ordenadas.
- **Gnome Sort**: Simples e intuitivo, funciona bem para listas pequenas ou 
quase ordenadas, mas é ineficiente para listas grandes.
- **TimSort**: Algoritmo híbrido baseado em Merge Sort e Insertion Sort. Muito 
eficiente para dados reais, especialmente listas parcialmente ordenadas.

### Conclusão: 

Após a análise comparativa, o **Quick Sort** se destacou como o algoritmo 
mais eficiente, apresentando os melhores tempos de execução, especialmente 
em grandes volumes de dados. Por outro lado, o **Gnome Sort** foi o que apresentou 
o pior desempenho do grupo, sendo muito mais lento e inadequado para listas grandes, 
o **CockTail Sort** ficou com o desempenho 26% melhor em relação ao numero de iterações 
mas manteve o numero de trocas parelho com o do **Gnome Sort**. As observação importante 
a resaltar são que, no caso do **Selection Sort**, o número de iterações foi 830,98% 
maior que o tempo de execução em milissegundos, evidenciando seu alto 
custo computacional em termos de operações realizadas, o **Tim Sort** foi o 
algoritmo com o menor número de iterações entre todos os cenários e foi relativamente
 melhor que o **Comb Sort**.


## Nossa Experiência no Projeto

### Divisão de Tarefas

#### Ana Paula
- Implementação dos algoritimos (**Comb** e **Quick** ).
- Implementa Contadores.
- Implementa Timers para calcular o tempo(**ns**).

#### Carlos Nogueira
- Implementação dos algoritimos (**CockTail** e **Tim** ).
- Implementação dos relatórios gerais dos algoritmos.

#### Luis Gustavo
- Implementação dos algoritmos (**Selection** e **Gnome**).
- Organização e desenvolvimento dos dashboards feitos em `Typescript`.
- Implementação do `README.md`.

 ### Desafios Enfrentados
 - Copia dos dados, pois estavam sendo copiados ordenadamente.
 - Filtragem dos dados para melhor visibilidade do gráfico.

 ### Aprendizados
 - Descobrimos que alguns algoritmos são melhores tipos especificos de dados.
 - Aprendemos a melhorar as implmentar gráficos de uma forma mais "academica".

## Como rodar o projeto

### Visualização dos Gráficos

Acesse a visualização dos gráficos diretamente pelo GitHub Pages:  
[https://gustacamara.github.io/algoritmos-de-ordenacao](https://gustacamara.github.io/algoritmos-de-ordenacao)

### Rodando localmente (gráficos)

1. Entre na pasta `graficos`:
   ```sh
   cd graficos
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Rode o projeto:
   ```sh
   npm run dev
   ```
4. Acesse `http://localhost:5173` no navegador.

### Rodando os algoritmos Java

1. Entre na pasta do algoritmo desejado, por exemplo:
   ```sh
   cd src/algoritmos_ordenacao/tipo_A
   ```
2. Compile e execute o arquivo `Main.java`:
   ```sh
   javac *.java
   java Main
   ```

## Localização dos Algoritmos de Ordenação

- **Comb Sort**: [`src/algoritmos_ordenacao/tipo_A/CombSort.java`](src/algoritmos_ordenacao/tipo_A/CombSort.java)
- **Selection Sort**: [`src/algoritmos_ordenacao/tipo_A/SelectionSort.java`](src/algoritmos_ordenacao/tipo_A/SelectionSort.java)
- **Quick Sort**: [`src/algoritmos_ordenacao/tipo_B/Quicksort.java`](src/algoritmos_ordenacao/tipo_B/Quicksort.java)
- **Cocktail Sort**: [`src/algoritmos_ordenacao/tipo_C/CockTail.java`](src/algoritmos_ordenacao/tipo_C/CockTail.java)
- **Gnome Sort**: [`src/algoritmos_ordenacao/tipo_C/GnomeSort.java`](src/algoritmos_ordenacao/tipo_C/GnomeSort.java)
- **TimSort**: [`src/algoritmos_ordenacao/tipo_C/TimSort.java`](src/algoritmos_ordenacao/tipo_C/TimSort.java)

## Como visualizar os gráficos

- Os gráficos estão implementados em [graficos/src/App.tsx](graficos/src/App.tsx) e componentes em [graficos/src/grafico/](graficos/src/grafico/).
- Os dados utilizados estão em [graficos/src/data/data.ts](graficos/src/data/data.ts).
- Para visualizar online, acesse o link da homepage acima.

---

**Alunos:** Ana Paula, Carlos Nogueira, Luis Gustavo
