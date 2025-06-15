package algoritmos_ordenacao.tipo_A;

public class SelectionSort {

    public int[] vetor;
    public int tamanho;
    public int trocas = 0;
    public int interacoes = 0;

    public SelectionSort(int tamanho) {
        this.vetor = new int[tamanho];
        this.tamanho = tamanho;
    }

    public void ordenar() {
        for (int i = 0; i < tamanho - 1; i++) {
            int indiceDoMenor = i;

            for (int j = i + 1; j < tamanho; j++) {
                interacoes++;
                if (vetor[j] < vetor[indiceDoMenor]) {
                    indiceDoMenor = j;
                }
            }
            int temp = vetor[indiceDoMenor];
            vetor[indiceDoMenor] = vetor[i];
            vetor[i] = temp;
            trocas++;
        }
    }

    public void imprimir() {
        for (int i = 0; i < tamanho; i++) {
            System.out.print(vetor[i] + " ");
        }
        System.out.println();
    }

    public int getTrocas() {
        return this.trocas;
    }

    public int getInteracoes() {
        return this.interacoes;
    }

}