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
- Os arquivos dos algoritmos estão agrupados por tipo (`tipo_A`, `tipo_B`,
`tipo_C`) dentro de `src/algoritmos_ordenacao/`.
- Os gráficos e dados estão em `graficos/src/`, separados em pastas para componentes,
 dados e gráficos específicos.

## Análise dos Tipos de Ordenação

Os algoritmos de ordenação neste projeto foram agrupados de acordo com a entrega,
cada um com características e desempenhos distintos:

### Tipo A

- **Comb Sort**: Variante do Bubble Sort, melhora a eficiência ao eliminar
"tartarugas" (valores pequenos no final do array, que demoram muito para serem movidos para a posição correta).
É eficiente para listas médias.
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

 ## Gráficos
 Acesse a visualização dos gráficos diretamente pelo GitHub Pages:
 
[https://gustacamara.github.io/algoritmos-de-ordenacao](https://gustacamara.github.io/algoritmos-de-ordenacao)

![Imagem comparativa geral](https://github.com/user-attachments/assets/480af8ce-32ee-4d40-b790-7a873fa7712a)
> Gráfico comparativo de todos os vetores.

![Imagem vetor de 1_000 posições](https://github.com/user-attachments/assets/e02d4b3f-1eb0-4d63-8e2b-12ac51cb089d)
> Gráfico comparativo do vetor de 1.000 posições.

![Imagem vetor de 10_000 posições](https://github.com/user-attachments/assets/66522c68-5a62-40a9-a4df-52b61d85d5bf)
> Gráfico comparativo do vetor de 10.000 posições.


![Imagem vetor de 100_000 posições](https://github.com/user-attachments/assets/9a067d69-306a-4534-b86f-7f6cf136fa86)
> Gráfico comparativo do vetor de 100.000 posições.

![Imagem vetor de 500_000 posições](https://github.com/user-attachments/assets/7d1f2308-8f23-4c56-b2d0-33944c9de3f4)
> Gráfico comparativo do vetor de 500.000 posições.

![Imagem vetor de 1_000_000 posições](https://github.com/user-attachments/assets/7078f863-6a1e-44e6-b905-1e98331264df)
> Gráfico comparativo do vetor de 1.000.000 posições.

## Conclusão:

Após a análise comparativa, o **Quick Sort** se destacou como o algoritmo
mais eficiente, apresentando os melhores tempos de execução, especialmente
em grandes volumes de dados. Por outro lado, o **Gnome Sort** foi o que apresentou
o pior desempenho do grupo, sendo muito mais lento e inadequado para listas grandes,
o **CockTail Sort** ficou com o desempenho _26%_ melhor em relação ao numero de iterações
mas manteve o numero de trocas parelho com o do **Gnome Sort**. As observação importante
a resaltar são que, no caso do **Selection Sort**, o número de iterações foi _830,98%_
maior que o tempo de execução em milissegundos, evidenciando seu alto
custo computacional em termos de operações realizadas, o **Tim Sort** foi o
algoritmo com o menor número de iterações entre todos os cenários e foi relativamente
 melhor que o **Comb Sort**.

## Nossa Experiência no Projeto

### Divisão de Tarefas

- **Ana Paula**
  - Implementação dos algoritimos (**Comb** e **Quick** ).
  - Implementação de contadores.
  - Implementação dos timers para calcular o tempo(**ns**).

- **Carlos Nogueira**
  - Implementação dos algoritimos (**CockTail** e **Tim** ).
  - Implementação dos relatórios gerais dos algoritmos.

- **Luis Gustavo**
  - Implementação dos algoritmos (**Selection** e **Gnome**).
  - Organização e desenvolvimento dos dashboards feitos em `Typescript`.
  - Implementação do `README.md`.

 ### Desafios Enfrentados
 - Cópia dos dados, pois estavam sendo copiados ordenadamente.
 - Filtragem dos dados para melhor visibilidade do gráfico.

 ### Aprendizados
 - Descobrimos que alguns algoritmos são melhores tipos especificos de dados.
 - Aprendemos a melhorar a apresentação de dados através de gráficos de uma forma mais "acadêmica".

## Como rodar o projeto

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
   cd src/algoritmos_ordenacao/tipo_C
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
## Assista ao vídeo de apresentação do projeto

https://youtu.be/NTKNyJymmH8

**Alunos:** Ana Paula, Carlos Nogueira, Luis Gustavo
