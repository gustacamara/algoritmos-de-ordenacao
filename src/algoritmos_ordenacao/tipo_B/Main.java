package algoritmos_ordenacao.tipo_B;

public class Main {
    public static void main(String[] args) {
        int[] lista = {10, 3, 39, 8, 23, 19, 20};
        int tamanho = 7;
        int inicio = 0;
        int fim = tamanho - 1;

        Quicksort ordenador = new Quicksort(tamanho, lista);

        System.out.println("Lista original:");
        ordenador.imprimir();

        ordenador.quicksort(inicio, fim);

        System.out.println("\nLista ordenada pelo CombSort:");
        ordenador.imprimir();
    }
}