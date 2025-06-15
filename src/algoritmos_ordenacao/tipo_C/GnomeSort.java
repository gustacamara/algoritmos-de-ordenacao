package algoritmos_ordenacao.tipo_C;

public class GnomeSort{
    public int[] vetor;
    public int tamanho;
    public long trocas = 0;
    public long interacoes = 0;


    public GnomeSort(int tamanho) {
        this.vetor = new int[tamanho];
        this.tamanho = tamanho;

    }

    public void imprimir() {
        for (int i = 0; i < tamanho; i++) {
            System.out.print(vetor[i] + " ");
        }

        System.out.println("\n");
    }

    public void ordenar() {
        int i = 0;
        int aux;
        while(i<( tamanho - 1)){
            interacoes++;
            if(vetor[i] > vetor[i + 1]) {
                aux = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = aux;
                trocas++;

                if( i > 0 ){
                    i-=2;
                }
            }
            i++;
        }
    }


    public long getTrocas() {
        return trocas;
    }

    public long getInteracoes() {
        return interacoes;
    }

}