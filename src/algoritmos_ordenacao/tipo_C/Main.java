package algoritmos_ordenacao.tipo_C;

import java.util.Random;

public class Main {
    public static void main(String[] args) {
      int[] dados = new int[100];
      int tamanho = 50;

      Random rand = new Random();
      long inicio = System.currentTimeMillis();
      for (int i = 0; i < tamanho; i++) {
         dados[i] = rand.nextInt(1000);
      }
      long fim =  (System.currentTimeMillis() - inicio);
      System.out.println("O tempo foi de: " + fim);

      CockTail cockTailSort = new CockTail(dados,tamanho);
      cockTailSort.cockTail();
      cockTailSort.imprimir();

      inicio = System.currentTimeMillis();
      for (int i = 0; i < tamanho; i++) {
         int numeros = rand.nextInt(10000);
         dados[i] = numeros;
         System.out.println(numeros);
      }
      fim =  (System.currentTimeMillis() - inicio);
      System.out.println("O tempo foi de: " + fim);

      TimSort timSort = new TimSort(dados, tamanho);
      timSort.timSort();
      timSort.imprimir(dados, tamanho);

      GnomeSort gnome = new GnomeSort(size);
      for (int i = 0; i < tamanho; i++) {
          gnome.vetor[i] = (rand.nextInt(0, 50));
      }

      gnome.imprimir();
      gnome.ordenar();

      gnome.imprimir();
    }

}
