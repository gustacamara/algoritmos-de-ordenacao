package algoritmos_ordenacao.tipo_A;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int[] lista = {10, 3, 39, 8, 23, 19, 20};

        CombSort ordenador = new CombSort(7, lista);

        System.out.println("Lista original:");
        ordenador.imprimir();

        long tempoInicial = System.nanoTime();
        ordenador.combsort(lista);
        long tempoFinal = System.nanoTime();

        System.out.println("\nLista ordenada pelo CombSort:");
        ordenador.imprimir();

        long tempoDeExecucaoEmNanossegundos = tempoFinal - tempoInicial;
        double tempoDeExecucaoEmMilissegundos = tempoDeExecucaoEmNanossegundos / 1_000_000.0;

        System.out.println("\n\n>>> Métricas de Execução <<<");
        System.out.printf("Tempo de execução: %.4f milissegundos.\n", tempoDeExecucaoEmMilissegundos);

        System.out.println("\nContador de iterações: ");
        System.out.println(ordenador.getIteracoes());
        System.out.println("Contador de trocas: ");
        System.out.println(ordenador.getTrocas());



        System.out.println("\n");

        // main selection sort
        final Random random = new Random();
        int tamanho = 10;
        SelectionSort sel = new SelectionSort(tamanho);
        for (int i = 0; i < sel.tamanho; i++) {
            sel.vetor[i] = (random.nextInt(0, 20));
        }

        System.out.println("Selection original:");
        sel.imprimir();

        sel.ordenar();

        System.out.println("\nSelection ordenado:");
        sel.imprimir();
    }
}