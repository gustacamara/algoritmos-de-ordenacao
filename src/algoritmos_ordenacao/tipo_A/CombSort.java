package algoritmos_ordenacao.tipo_A;

public class CombSort {
    int tamanho = 0;
    int[] lista = new int[tamanho];

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
        int gap = (int) (tamanho / 1.3); // O fator de encolhimento 1.3 foi definido por pesquisadores por meio de métodos empíricos
        int i = 0;
        while (gap > 0 && i != tamanho - 1) {
            i = 0;
            while ((i + gap) < tamanho) {
                if (lista[i] > lista[i + gap]) {
                    int aux = lista[i];
                    lista[i] = lista[i + gap];
                    lista[i + gap] = aux;
                }
                i++;
            }
            gap = (int) (gap / 1.3);
        }
        return lista;
    }

}
