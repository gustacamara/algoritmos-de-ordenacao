package algoritmos_ordenacao.tipo_C;

import java.util.Random;

public class GeraNumeros {

    public static int[] numerosAleatorios(int tamanho, int rodada){
        Random rand = new Random(rodada);
        int[] dadosOriginais = new int[tamanho];

        for (int i = 0; i < tamanho; i++) {
            dadosOriginais[i] = rand.nextInt(1000000);
        }
        return dadosOriginais;

    }

    public static int[] numerosGnome(int tamanho, GnomeSort gnomeSort, int rodada){
        Random rand = new Random(rodada);

        for (int i = 0; i < tamanho; i++) {
            gnomeSort.vetor[i] = rand.nextInt(1000000);
        }
        return gnomeSort.vetor;
    }
}
