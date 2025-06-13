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

        long tempoInicial = System.nanoTime();
        ordenador.quicksort(inicio, fim);
        long tempoFinal = System.nanoTime();

        System.out.println("\n\nLista ordenada pelo QuickSort:");
        ordenador.imprimir();

        long tempoDeExecucaoEmNanossegundos = tempoFinal - tempoInicial;
        double tempoDeExecucaoEmMilissegundos = tempoDeExecucaoEmNanossegundos / 1_000_000.0;

        System.out.println("\n--- Métricas de Execução ---");
        System.out.printf("Tempo de execução: %.4f milissegundos.\n", tempoDeExecucaoEmMilissegundos);

        System.out.println("\n\nContador de iterações: ");
        System.out.println(ordenador.getIteracoes());
        System.out.println("Contador de trocas: ");
        System.out.println(ordenador.getTrocas());
    }
}