package algoritmos_ordenacao.tipo_C;

public class CockTail {

    private int[] vetor;
    private int tamanho;
    private int temp = 0;
    private int troca = 0;
    private int numTrocas = 0;
    private int interacoes = 0;


    public CockTail(int[] vetor, int tamanho) {
        this.vetor = vetor;
        this.tamanho = tamanho;
    }

    public void cockTail()
    {
        int inicio = 0;
        int fim = tamanho - 1;

        while (troca == 0 && inicio < fim) {
            troca = 1;

            for (int i = inicio; i < fim; i++) {
                interacoes ++;
                if (vetor[i] > vetor[i + 1]) {
                    temp = vetor[i];
                    vetor[i] = vetor[i + 1];
                    vetor[i + 1] = temp;
                    numTrocas++;
                    troca = 0;
                }
            }

            fim--;

            for (int i = fim; i > inicio; i--) {
                interacoes ++;

                if (vetor[i] < vetor[i - 1]) {
                    temp = vetor[i];
                    vetor[i] = vetor[i - 1];
                    vetor[i - 1] = temp;
                    numTrocas++;
                    troca = 0;
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
        System.out.println("Número total de trocas: " + numTrocas);
        System.out.println("Número total de interações: " + interacoes);
    }

}

