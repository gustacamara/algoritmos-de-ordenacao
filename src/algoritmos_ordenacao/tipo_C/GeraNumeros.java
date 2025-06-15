package algoritmos_ordenacao.tipo_C;

import java.util.Random;

public class GeraNumeros {

    public static int[] numerosAleatorios(int tamanho, int rodada){
        Random rand = new Random(rodada);
        int[] dadosOriginais = new int[tamanho];
        for (int i = 0; i < tamanho; i++) {
            int numeros = rand.nextInt(1000000);
            dadosOriginais[i] = numeros;
        }
        return dadosOriginais;

    }

    public static void copiaDadosGnome(int[] dados, GnomeSort gnome, int tamanho) {
        for (int i = 0; i < tamanho; i++) {
            gnome.vetor[i] = dados[i];
        }
    }


}
