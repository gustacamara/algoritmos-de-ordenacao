package algoritmos_ordenacao.tipo_B;
import java.util.Random;

public class Quicksort {

    private int[] lista;
    private int tamanho;
    private Random random = new Random();
    private int contadorTrocas = 0;
    private int contadorIteracoes = 0;

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

    private int escolherPivo(int inicio, int fim) { // a escolha do pivo foi definida como índice aleatório
        int indice = inicio + random.nextInt(fim - inicio + 1);
        return this.lista[indice];
    }

    private int particionar(int inicio, int fim, int pivo) {
        int esq = inicio, dir = fim;
        while (esq <= dir) {
            while (this.lista[esq] < pivo) {
                this.contadorIteracoes++;
                esq++;
            }
            this.contadorIteracoes++;

            while (this.lista[dir] > pivo) {
                this.contadorIteracoes++;
                dir--;
            }
            this.contadorIteracoes++;

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
        this.contadorTrocas ++;
    }

    public void imprimir() {
        for (int i = 0; i < this.tamanho; i++) {
            System.out.print(lista[i] + " ");
        }
    }

    public int getTrocas() {
        return this.contadorTrocas;
    }

    public int getIteracoes() {
        return this.contadorIteracoes;
    }
}