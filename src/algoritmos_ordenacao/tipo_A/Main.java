package algoritmos_ordenacao.tipo_A;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int[] lista = {10, 3, 39, 8, 23, 19, 20};

        CombSort ordenador = new CombSort(7, lista);

        System.out.println("Lista original:");
        ordenador.imprimir();

        ordenador.combsort(lista);

        System.out.println("Lista ordenada pelo CombSort:");
        ordenador.imprimir();
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