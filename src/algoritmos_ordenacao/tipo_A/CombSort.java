package algoritmos_ordenacao.tipo_A;

public class CombSort {
    private int tamanho = 0;
    private int[] lista = new int[tamanho];
    private int contadorTrocas = 0;
    private int contadorIteracoes = 0;

    public CombSort(int tamanho, int[] lista) {
        this.tamanho = tamanho;
        this.lista = lista;
    }

    public int tamanho() {
        return tamanho;
    }

    public void imprimir() {
        for (int i = 0; i < this.tamanho(); i++) {
            System.out.print(lista[i] + " ");
        }
    }

    public int[] combsort(int[] lista) {
        boolean trocado = true;
        int gap = this.tamanho;
        double fatorEncolhimento = 1.3; // O fator de encolhimento 1.3 foi definido por pesquisadores por meio de métodos empíricos

        while (gap > 1 || trocado) {
            if (gap > 1) {
                gap = (int) (gap / fatorEncolhimento);
            }

            trocado = false;

            for (int i = 0; i + gap < this.tamanho; i++) {
                this.contadorIteracoes++;

                if (lista[i] > lista[i + gap]) {
                    int aux = lista[i];
                    lista[i] = lista[i + gap];
                    lista[i + gap] = aux;

                    this.contadorTrocas++;
                    trocado = true;
                }
            }
        }
        return lista;
    }

    public int getTrocas() {
        return this.contadorTrocas;
    }

    public int getIteracoes() {
        return this.contadorIteracoes;
    }

}
