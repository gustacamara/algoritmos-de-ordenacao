package algoritmos_ordenacao.tipo_C;

import java.util.Random;

public class Main {

    public static void main(String[] args) {
        final int size = 10;
        GnomeSort gnome = new GnomeSort(size);
        final Random random = new Random();
        for (int i = 0; i < size; i++) {
            gnome.vetor[i] = (random.nextInt(0, 50));
        }

        gnome.imprimir();
        gnome.ordenar();

        gnome.imprimir();
    }
}
