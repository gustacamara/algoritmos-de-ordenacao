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
- Dica: Os arquivos dos algoritmos estão agrupados por tipo (`tipo_A`, `tipo_B`, `tipo_C`) dentro de `src/algoritmos_ordenacao/`.
- Os gráficos e dados estão em `graficos/src/`, separados em pastas para componentes, dados e gráficos específicos.

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
