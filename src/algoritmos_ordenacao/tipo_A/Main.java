package algoritmos_ordenacao.tipo_A;

public class Main {
    public static void main(String[] args) {
        int[] lista = {10, 3, 39, 8, 23, 19, 20};

        CombSort ordenador = new CombSort(7, lista);

        System.out.println("Lista original:");
        ordenador.imprimir();

        ordenador.combsort(lista);

        System.out.println("Lista ordenada pelo CombSort:");
        ordenador.imprimir();
    }
}