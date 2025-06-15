package algoritmos_ordenacao.tipo_C;

public class CockTail {

    private int[] vetor;
    private int tamanho;
    private int temp = 0;
    private int troca = 0;
    private long numTrocas = 0;
    private long interacoes = 0;


    public CockTail(int[] vetor, int tamanho) {
        this.vetor = vetor;
        this.tamanho = tamanho;
    }

    public void cockTail() {
        int inicio = 0;
        int fim = tamanho - 1;
        boolean trocou = true;

        while (trocou && inicio < fim) {
            trocou = false;

            for (int i = inicio; i < fim; i++) {
                interacoes++;
                if (vetor[i] > vetor[i + 1]) {
                    temp = vetor[i];
                    vetor[i] = vetor[i + 1];
                    vetor[i + 1] = temp;
                    numTrocas++;
                    trocou = true;
                }
            }

            fim--;

            for (int i = fim; i > inicio; i--) {
                interacoes++;
                if (vetor[i] < vetor[i - 1]) {
                    temp = vetor[i];
                    vetor[i] = vetor[i - 1];
                    vetor[i - 1] = temp;
                    numTrocas++;
                    trocou = true;
                }
            }

            inicio++;
        }
    }

    public void imprimir(){
        System.out.print("Vetor ordenado: ");
        for (int i = 0; i < tamanho; i++) {
            System.out.print(vetor[i] + " ");
        }
        System.out.println();
    }


    public long getNumTrocas() {
        return numTrocas;
    }

    public long getInteracoes() {
        return interacoes;
    }

}

