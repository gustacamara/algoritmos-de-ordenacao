package algoritmos_ordenacao.tipo_B;
import java.util.Random;

public class Quicksort {

    private int[] lista;
    private int tamanho;
    private Random random = new Random();

    public Quicksort(int tamanho, int[] lista) {
        this.lista = lista;
        this.tamanho = tamanho;
    }

    public void ordenar() {
        if (this.lista == null || this.tamanho == 0) {
            return;
        }
        quicksort(0, this.tamanho - 1);
    }

    public void quicksort(int inicio, int fim) {
        if (inicio >= fim) {
            return;
        }
        int pivo = escolherPivo(inicio, fim);
        int indiceParticao = particionar(inicio, fim, pivo);
        quicksort(inicio, indiceParticao - 1);
        quicksort(indiceParticao, fim);
    }

    private int escolherPivo(int inicio, int fim) {
        int indiceAleatorio = inicio + random.nextInt(fim - inicio + 1);
        return this.lista[indiceAleatorio];
    }

    private int particionar(int inicio, int fim, int pivo) {
        int esq = inicio, dir = fim;
        while (esq <= dir) {
            while (this.lista[esq] < pivo) esq++;
            while (this.lista[dir] > pivo) dir--;
            if (esq <= dir) {
                trocar(esq, dir);
                esq++;
                dir--;
            }
        }
        return esq;
    }

    private void trocar(int i, int j) {
        int aux = this.lista[i];
        this.lista[i] = this.lista[j];
        this.lista[j] = aux;
    }

    public void imprimir() {
        for (int i = 0; i < this.tamanho; i++) {
            System.out.print(lista[i] + " ");
        }
    }
}