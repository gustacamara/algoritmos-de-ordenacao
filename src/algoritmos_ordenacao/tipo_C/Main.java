package algoritmos_ordenacao.tipo_C;

import algoritmos_ordenacao.tipo_A.CombSort;
import algoritmos_ordenacao.tipo_A.SelectionSort;
import algoritmos_ordenacao.tipo_B.Quicksort;

public class Main {

    public static void main(String[] args) {

        int[] tamanhos = {1000, 10000, 100000, 500000, 1000000};
        int rodadas = 5;

        for (int tamanho : tamanhos) {
            System.out.println(FormataMain.CABECALHO + tamanho + " =======");

            for (int rodada = 1; rodada <= rodadas; rodada++) {
                System.out.println(FormataMain.RODADA + rodada);

                int[] dados = GeraNumeros.numerosAleatorios(tamanho, rodada);

                // --- CombSort ---
                int[] dadosComb = new int[tamanho];
                copiarVetor(dados, dadosComb, tamanho);
                CombSort combSort = new CombSort(tamanho, dadosComb);
                long inicio = System.nanoTime();
                combSort.combsort(dadosComb);
                long tempoComb = (System.nanoTime() - inicio);

                // --- SelectionSort ---
                int[] dadosSelection = new int[tamanho];
                copiarVetor(dados, dadosSelection, tamanho);
                SelectionSort selectionSort = new SelectionSort(tamanho);
                inicio = System.nanoTime();
                selectionSort.ordenar();
                long tempoSelection = (System.nanoTime() - inicio);

                // --- QuickSort ---
                int[] dadosQuick = new int[tamanho];
                copiarVetor(dados, dadosQuick, tamanho);
                Quicksort quickSort = new Quicksort(tamanho, dadosQuick);
                inicio = System.nanoTime();
                quickSort.quicksort(0, tamanho - 1);
                long tempoQuick = (System.nanoTime() - inicio);

                // --- CocktailSort ---
                int[] dadosCocktail = new int[tamanho];
                copiarVetor(dados, dadosCocktail, tamanho);
                CockTail cocktailSort = new CockTail(dadosCocktail, tamanho);
                inicio = System.nanoTime();
                cocktailSort.cockTail();
                long tempoCocktail = (System.nanoTime() - inicio);

                // --- TimSort ---
                int[] dadosTim = new int[tamanho];
                copiarVetor(dados, dadosTim, tamanho);
                TimSort timSort = new TimSort(dadosTim, tamanho);
                inicio = System.nanoTime();
                timSort.timSort();
                long tempoTim = (System.nanoTime() - inicio);

                // --- GnomeSort ---
                GnomeSort gnomeSort = new GnomeSort(tamanho);

                GeraNumeros.numerosGnome(tamanho, gnomeSort, rodada);
                inicio = System.nanoTime();
                gnomeSort.ordenar();
                long tempoGnome = (System.nanoTime() - inicio);

                // Resultados
                System.out.println(FormataMain.RESULTADO + tamanho + " ----");

                System.out.println(FormataMain.COMB);
                System.out.println(FormataMain.TEMPO + tempoComb / 1_000_000.0);
                System.out.println(FormataMain.TROCA + combSort.getTrocas());
                System.out.println(FormataMain.INTERACAO + combSort.getIteracoes());

                System.out.println(FormataMain.SELECTION);
                System.out.println(FormataMain.TEMPO + tempoSelection / 1_000_000.0);
                System.out.println(FormataMain.TROCA + selectionSort.getTrocas());
                System.out.println(FormataMain.INTERACAO + selectionSort.getInteracoes());

                System.out.println(FormataMain.QUICK);
                System.out.println(FormataMain.TEMPO + tempoQuick / 1_000_000.0);
                System.out.println(FormataMain.TROCA + quickSort.getTrocas());
                System.out.println(FormataMain.INTERACAO + quickSort.getIteracoes());

                System.out.println(FormataMain.COCKTAIL);
                System.out.println(FormataMain.TEMPO + tempoCocktail / 1_000_000.0);
                System.out.println(FormataMain.TROCA + cocktailSort.getNumTrocas());
                System.out.println(FormataMain.INTERACAO + cocktailSort.getInteracoes());

                System.out.println(FormataMain.TIM);
                System.out.println(FormataMain.TEMPO + tempoTim / 1_000_000.0);
                System.out.println(FormataMain.TROCA + timSort.getNumTrocas());
                System.out.println(FormataMain.INTERACAO + timSort.getInteracoes());

                System.out.println(FormataMain.GNOME);
                System.out.println(FormataMain.TEMPO + tempoGnome / 1_000_000.0);
                System.out.println(FormataMain.TROCA + gnomeSort.getTrocas());
                System.out.println(FormataMain.INTERACAO + gnomeSort.getInteracoes());

            }
        }
    }

    private static void copiarVetor(int[] origem, int[] destino, int tamanho) {
        for (int i = 0; i < tamanho; i++) {
            destino[i] = origem[i];
        }
    }
}
