package algoritmos_ordenacao.tipo_C;

import algoritmos_ordenacao.tipo_A.CombSort;
import algoritmos_ordenacao.tipo_A.SelectionSort;
import algoritmos_ordenacao.tipo_B.Quicksort;


import java.util.Random;

public class Main {
    public static void main(String[] args) {

        int[] tamanhos = {1000, 10000, 100000, 500000, 1000000};
        int rodadas = 5;


        for (int tamanho : tamanhos) {
            System.out.println("\n======= Tamanho do vetor: " + tamanho + " =======");

            long TempoCocktail = 0;
            long TempoTim = 0;
            long TempoGnome = 0;
            long TempoCombSort = 0;
            long TempoSelectionSort = 0;
            long TempoQuickSort = 0;
            int inicio = 0;
            int fim = tamanho - 1;


            for (int rodada = 1; rodada <= rodadas; rodada++) {
                System.out.println("\nRodada: " + rodada);

                Random rand = new Random(rodada);

                int[] dados = new int[tamanho];
                for (int i = 0; i < tamanho; i++) {
                    dados[i] = rand.nextInt(1000000);
                }


                // ===== CombSort =====
                CombSort combSort = new CombSort(tamanho, dados);

                long inicioCombSort = System.nanoTime();
                combSort.combsort(dados);
                long tempoCombSort = System.nanoTime() - inicioCombSort;

                TempoCombSort = tempoCombSort;

//                 ===== SelectionSort =====
                SelectionSort selectionSort = new SelectionSort(tamanho);

                long inicioSelectionSort = System.nanoTime();
                selectionSort.ordenar();
                long tempoSelectionSort = System.nanoTime() - inicioSelectionSort;

                TempoSelectionSort = tempoSelectionSort;

                // ===== QuickSort =====
                Quicksort quickSort = new Quicksort(tamanho, dados);

                long inicioQuickSort = System.nanoTime();
                quickSort.quicksort(inicio, fim);
                long tempoQuickSort = System.nanoTime() - inicioQuickSort;

                TempoQuickSort = tempoQuickSort;

                // ===== CocktailSort =====
                CockTail cocktail = new CockTail(dados, tamanho);

                long inicioCockTail = System.nanoTime();
                cocktail.cockTail();
                long tempoCockTail = System.nanoTime() - inicioCockTail;

                TempoCocktail = tempoCockTail;

//                 ===== TimSort =====
                TimSort timSort = new TimSort(dados, tamanho);

                long inicioTimSort = System.nanoTime();
                timSort.timSort();
                long tempoTimSort = System.nanoTime() - inicioTimSort;

                TempoTim = tempoTimSort;

                // ===== GnomeSort =====
                GnomeSort gnome = new GnomeSort(tamanho);

                for (int i = 0; i < tamanho; i++) {
                    gnome.vetor[i] = (rand.nextInt(1000000));
                }
                long inicioGnome = System.nanoTime();
                gnome.ordenar();
                long tempoGnome = System.nanoTime() - inicioGnome;

                TempoGnome = tempoGnome;


                System.out.println("\n----Resultados para tamanho " + tamanho + " ----");

                System.out.println("\nComb Sort:");
                System.out.println("Tempo (ms): " + TempoCombSort / 1_000_000.0);
                System.out.println("Trocas: " + combSort.getTrocas());
                System.out.println("Iterações: " + combSort.getIteracoes());

                System.out.println("\nSelection Sort:");
                System.out.println("Tempo (ms): " + TempoSelectionSort / 1_000_000.0);
                System.out.println("Trocas: " + selectionSort.getTrocas());
                System.out.println("Iterações: " + selectionSort.getInteracoes());

                System.out.println("\nQuick Sort:");
                System.out.println("Tempo (ms): " + TempoQuickSort / 1_000_000.0);
                System.out.println("Trocas: " + quickSort.getTrocas());
                System.out.println("Iterações: " + quickSort.getIteracoes());

                System.out.println("\nCocktail Sort:");
                System.out.println("Tempo (ms): " + TempoCocktail / 1_000_000.0);
                System.out.println("Trocas: " + cocktail.getNumTrocas());
                System.out.println("Iterações: " + cocktail.getInteracoes());

                System.out.println("\nTimSort:");
                System.out.println("Tempo (ms): " + TempoTim / 1_000_000.0);
                System.out.println("Trocas: " + timSort.getNumTrocas());
                System.out.println("Iterações: " + timSort.getInteracoes());

                System.out.println("\nGnome Sort:");
                System.out.println("Tempo (ms): " + TempoGnome / 1_000_000.0);
                System.out.println("Trocas: " + gnome.getTrocas());
                System.out.println("Iterações: " + gnome.getInteracoes());
            }
        }
    }
}