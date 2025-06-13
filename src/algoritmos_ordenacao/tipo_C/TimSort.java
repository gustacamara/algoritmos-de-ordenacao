package algoritmos_ordenacao.tipo_C;

public class TimSort {

    static final int BLOCOS = 32;
    int[] vetor;
    private int tamanho;
    private int numTrocas = 0;
    private int interacoes = 0;

    public TimSort(int[] vetor, int tamanho) {
        this.vetor = vetor;
        this.tamanho = tamanho;
    }



    public void insertionSort(int inicio, int fim) {
        for (int i = inicio + 1; i <= fim; i ++) {
            int atual = vetor[i];
            int indice = i - 1;

            while (indice >= inicio) {
                interacoes++;
                if (vetor[indice] > atual) {
                    vetor[indice + 1] = vetor[indice];
                    numTrocas++;
                    indice--;
                } else {
                    break;
                }
            }

            vetor[indice + 1] = atual;
        }
    }

    public void mergeSort(int inicio, int meio, int fim){
        int[] temp = new int[fim - inicio + 1];

        for (int i = inicio; i <= fim; i++){
            temp[i - inicio] = vetor[i];
        }

        int indiceEsq = 0;
        int indiceDir = meio - inicio + 1;
        int indice = inicio;

        while (indiceEsq <= meio - inicio && indiceDir <= fim - inicio){
            interacoes++;
            if (temp[indiceEsq] <= temp[indiceDir]) {
                vetor[indice] = temp[indiceEsq];
                numTrocas++;
                indiceEsq++;
            }else {
                vetor[indice] = temp[indiceDir];
                numTrocas++;
                indiceDir++;
            }
            indice++;
        }

        while (indiceEsq <= meio - inicio){
            vetor[indice] = temp[indiceEsq];
            numTrocas++;
            indiceEsq++;
            indice++;
        }

        while (indiceDir <= fim - inicio){
            vetor[indice] = temp[indiceDir];
            numTrocas++;
            indiceDir++;
            indice++;
        }
    }

    public void timSort() {
        for (int i = 0; i < tamanho; i += BLOCOS){
            int direita;
            if ((i + BLOCOS - 1) < (tamanho - 1)) {
                direita = i + BLOCOS - 1;
            } else{
                direita = tamanho -1;
            }
            insertionSort(i ,direita);
        }

        for (int tamnahoBloco = BLOCOS; tamnahoBloco < tamanho; tamnahoBloco *= 2){
            for (int esquerda = 0; esquerda <  tamanho; esquerda += 2 *tamnahoBloco) {
                int meio = esquerda + tamnahoBloco - 1;
                if (meio >= tamanho -1) continue;
                int direita;
                if ((esquerda + 2 * tamnahoBloco - 1) < (tamanho - 1)) {
                    direita = esquerda + 2 * tamnahoBloco -1;
                } else {
                    direita = tamanho - 1;
                }
                mergeSort(esquerda, meio, direita);
            }
        }
    }

    public void imprimir(int[] vetor, int tamanho){
        System.out.print("Vetor: ");
        for (int i = 0; i < tamanho; i++) {
            System.out.print(vetor[i] + " ");
        }
        System.out.println();
        System.out.println("Número total de trocas: " + numTrocas);
        System.out.println("Número total de iterações: " + interacoes);
    }
}

