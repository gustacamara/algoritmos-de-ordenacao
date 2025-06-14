import type { ChartConfig } from "@/components/ui/chart";

function formataTamanho(tamanho: number): string {
  if (tamanho >= 1_000_000) return `${tamanho / 1_000_000}kk`;
  if (tamanho >= 1_000) return `${tamanho / 1_000}k`;
  return tamanho.toString();
}

export const tempoOrdenacao = [
  // Comb Sort
  { nome: "Comb Sort", ms: 0.7048, trocas: 4475, iteracoes: 21710, tamanho: 1000 },
  { nome: "Comb Sort", ms: 0.7356, trocas: 4439, iteracoes: 22709, tamanho: 1000 },
  { nome: "Comb Sort", ms: 0.7013, trocas: 4465, iteracoes: 21710, tamanho: 1000 },
  { nome: "Comb Sort", ms: 0.1087, trocas: 4356, iteracoes: 21710, tamanho: 1000 },
  { nome: "Comb Sort", ms: 0.1295, trocas: 4473, iteracoes: 22709, tamanho: 1000 },
  { nome: "Comb Sort", ms: 1.2268, trocas: 63308, iteracoes: 346732, tamanho: 10000 },
  { nome: "Comb Sort", ms: 0.7789, trocas: 63623, iteracoes: 336733, tamanho: 10000 },
  { nome: "Comb Sort", ms: 0.8048, trocas: 63842, iteracoes: 356731, tamanho: 10000 },
  { nome: "Comb Sort", ms: 0.7816, trocas: 63547, iteracoes: 336733, tamanho: 10000 },
  { nome: "Comb Sort", ms: 0.9195, trocas: 63062, iteracoes: 336733, tamanho: 10000 },
  { nome: "Comb Sort", ms: 11.6266, trocas: 810671, iteracoes: 4066741, tamanho: 100000 },
  { nome: "Comb Sort", ms: 11.7738, trocas: 811445, iteracoes: 4166740, tamanho: 100000 },
  { nome: "Comb Sort", ms: 11.5229, trocas: 810242, iteracoes: 3966742, tamanho: 100000 },
  { nome: "Comb Sort", ms: 11.7242, trocas: 813828, iteracoes: 4066741, tamanho: 100000 },
  { nome: "Comb Sort", ms: 11.5916, trocas: 812723, iteracoes: 3966742, tamanho: 100000 },
  { nome: "Comb Sort", ms: 49.7772, trocas: 4708196, iteracoes: 25333419, tamanho: 500000 },
  { nome: "Comb Sort", ms: 49.201, trocas: 4707729, iteracoes: 24833420, tamanho: 500000 },
  { nome: "Comb Sort", ms: 49.8661, trocas: 4703785, iteracoes: 25833418, tamanho: 500000 },
  { nome: "Comb Sort", ms: 49.5545, trocas: 4705392, iteracoes: 24833420, tamanho: 500000 },
  { nome: "Comb Sort", ms: 49.6869, trocas: 4702755, iteracoes: 25333419, tamanho: 500000 },
  { nome: "Comb Sort", ms: 102.1669, trocas: 9750646, iteracoes: 49666762, tamanho: 1000000 },
  { nome: "Comb Sort", ms: 101.8543, trocas: 9751521, iteracoes: 50666761, tamanho: 1000000 },
  { nome: "Comb Sort", ms: 100.4909, trocas: 9745616, iteracoes: 49666762, tamanho: 1000000 },
  { nome: "Comb Sort", ms: 102.5018, trocas: 9750319, iteracoes: 49666762, tamanho: 1000000 },
  { nome: "Comb Sort", ms: 101.9731, trocas: 9746415, iteracoes: 49666762, tamanho: 1000000 },

  // Selection Sort
  { nome: "Selection Sort", ms: 2.567, trocas: 999, iteracoes: 499500, tamanho: 1000 },
  { nome: "Selection Sort", ms: 1.1709, trocas: 999, iteracoes: 499500, tamanho: 1000 },
  { nome: "Selection Sort", ms: 0.2324, trocas: 999, iteracoes: 499500, tamanho: 1000 },
  { nome: "Selection Sort", ms: 1.209, trocas: 999, iteracoes: 499500, tamanho: 1000 },
  { nome: "Selection Sort", ms: 1.2309, trocas: 999, iteracoes: 499500, tamanho: 1000 },
  { nome: "Selection Sort", ms: 20.902, trocas: 9999, iteracoes: 49995000, tamanho: 10000 },
  { nome: "Selection Sort", ms: 13.6671, trocas: 9999, iteracoes: 49995000, tamanho: 10000 },
  { nome: "Selection Sort", ms: 12.982, trocas: 9999, iteracoes: 49995000, tamanho: 10000 },
  { nome: "Selection Sort", ms: 13.075, trocas: 9999, iteracoes: 49995000, tamanho: 10000 },
  { nome: "Selection Sort", ms: 12.8552, trocas: 9999, iteracoes: 49995000, tamanho: 10000 },
  { nome: "Selection Sort", ms: 1271.3223, trocas: 99999, iteracoes: 704982704, tamanho: 100000 },
  { nome: "Selection Sort", ms: 1253.3513, trocas: 99999, iteracoes: 704982704, tamanho: 100000 },
  { nome: "Selection Sort", ms: 1242.4015, trocas: 99999, iteracoes: 704982704, tamanho: 100000 },
  { nome: "Selection Sort", ms: 949.2368, trocas: 99999, iteracoes: 704982704, tamanho: 100000 },
  { nome: "Selection Sort", ms: 949.3071, trocas: 99999, iteracoes: 704982704, tamanho: 100000 },
  { nome: "Selection Sort", ms: 24089.6084, trocas: 499999, iteracoes: 445698416, tamanho: 500000 },
  { nome: "Selection Sort", ms: 24644.285, trocas: 499999, iteracoes: 445698416, tamanho: 500000 },
  { nome: "Selection Sort", ms: 24420.6283, trocas: 499999, iteracoes: 445698416, tamanho: 500000 },
  { nome: "Selection Sort", ms: 24054.623, trocas: 499999, iteracoes: 445698416, tamanho: 500000 },
  { nome: "Selection Sort", ms: 24278.3878, trocas: 499999, iteracoes: 445698416, tamanho: 500000 },
  { nome: "Selection Sort", ms: 96457.1211, trocas: 999999, iteracoes: 1783293664, tamanho: 1000000 },
  { nome: "Selection Sort", ms: 97068.5446, trocas: 999999, iteracoes: 1783293664, tamanho: 1000000 },
  { nome: "Selection Sort", ms: 96251.2418, trocas: 999999, iteracoes: 1783293664, tamanho: 1000000 },
  { nome: "Selection Sort", ms: 95274.3936, trocas: 999999, iteracoes: 1783293664, tamanho: 1000000 },
  { nome: "Selection Sort", ms: 95216.8779, trocas: 999999, iteracoes: 1783293664, tamanho: 1000000 },

  // Quick Sort
  { nome: "Quick Sort", ms: 0.4307, trocas: 2955, iteracoes: 1280, tamanho: 1000 },
  { nome: "Quick Sort", ms: 0.1275, trocas: 2964, iteracoes: 1243, tamanho: 1000 },
  { nome: "Quick Sort", ms: 0.1293, trocas: 2966, iteracoes: 1274, tamanho: 1000 },
  { nome: "Quick Sort", ms: 0.1115, trocas: 2948, iteracoes: 1271, tamanho: 1000 },
  { nome: "Quick Sort", ms: 0.1106, trocas: 2928, iteracoes: 1248, tamanho: 1000 },
  { nome: "Quick Sort", ms: 1.0667, trocas: 36852, iteracoes: 12591, tamanho: 10000 },
  { nome: "Quick Sort", ms: 0.8183, trocas: 37416, iteracoes: 12721, tamanho: 10000 },
  { nome: "Quick Sort", ms: 1.0002, trocas: 37117, iteracoes: 12646, tamanho: 10000 },
  { nome: "Quick Sort", ms: 0.7357, trocas: 37170, iteracoes: 12649, tamanho: 10000 },
  { nome: "Quick Sort", ms: 0.755, trocas: 37388, iteracoes: 12836, tamanho: 10000 },
  { nome: "Quick Sort", ms: 8.3916, trocas: 445724, iteracoes: 125919, tamanho: 100000 },
  { nome: "Quick Sort", ms: 8.0636, trocas: 449028, iteracoes: 125277, tamanho: 100000 },
  { nome: "Quick Sort", ms: 8.1115, trocas: 449266, iteracoes: 125905, tamanho: 100000 },
  { nome: "Quick Sort", ms: 8.0093, trocas: 451841, iteracoes: 126128, tamanho: 100000 },
  { nome: "Quick Sort", ms: 7.9543, trocas: 451674, iteracoes: 126236, tamanho: 100000 },
  { nome: "Quick Sort", ms: 41.7973, trocas: 2535083, iteracoes: 613089, tamanho: 500000 },
  { nome: "Quick Sort", ms: 42.1195, trocas: 2528119, iteracoes: 612490, tamanho: 500000 },
  { nome: "Quick Sort", ms: 42.0889, trocas: 2523954, iteracoes: 612272, tamanho: 500000 },
  { nome: "Quick Sort", ms: 41.4016, trocas: 2503217, iteracoes: 612636, tamanho: 500000 },
  { nome: "Quick Sort", ms: 40.8725, trocas: 2517255, iteracoes: 613011, tamanho: 500000 },
  { nome: "Quick Sort", ms: 84.2487, trocas: 5269173, iteracoes: 1190101, tamanho: 1000000 },
  { nome: "Quick Sort", ms: 85.7468, trocas: 5290787, iteracoes: 1187153, tamanho: 1000000 },
  { nome: "Quick Sort", ms: 85.4854, trocas: 5325099, iteracoes: 1189099, tamanho: 1000000 },
  { nome: "Quick Sort", ms: 86.2914, trocas: 5319503, iteracoes: 1188636, tamanho: 1000000 },
  { nome: "Quick Sort", ms: 84.1751, trocas: 5330201, iteracoes: 1188273, tamanho: 1000000 },

  // Cocktail Sort
  { nome: "Cocktail Sort", ms: 4.3744, trocas: 245243, iteracoes: 372744, tamanho: 1000 },
  { nome: "Cocktail Sort", ms: 2.1246, trocas: 254380, iteracoes: 393009, tamanho: 1000 },
  { nome: "Cocktail Sort", ms: 1.2819, trocas: 250812, iteracoes: 380672, tamanho: 1000 },
  { nome: "Cocktail Sort", ms: 1.2803, trocas: 246154, iteracoes: 377729, tamanho: 1000 },
  { nome: "Cocktail Sort", ms: 0.5812, trocas: 242099, iteracoes: 375747, tamanho: 1000 },
  { nome: "Cocktail Sort", ms: 72.4696, trocas: 24914821, iteracoes: 37407347, tamanho: 10000 },
  { nome: "Cocktail Sort", ms: 69.7954, trocas: 24833858, iteracoes: 37256372, tamanho: 10000 },
  { nome: "Cocktail Sort", ms: 69.8279, trocas: 25028958, iteracoes: 37706597, tamanho: 10000 },
  { nome: "Cocktail Sort", ms: 70.3917, trocas: 25072594, iteracoes: 37756122, tamanho: 10000 },
  { nome: "Cocktail Sort", ms: 70.7086, trocas: 25336107, iteracoes: 37992450, tamanho: 10000 },
  { nome: "Cocktail Sort", ms: 8409.0901, trocas: 2511106515, iteracoes: 3760751564, tamanho: 100000 },
  { nome: "Cocktail Sort", ms: 8354.3057, trocas: 2492436184, iteracoes: 3751474535, tamanho: 100000 },
  { nome: "Cocktail Sort", ms: 8356.5117, trocas: 2495655308, iteracoes: 3750474945, tamanho: 100000 },
  { nome: "Cocktail Sort", ms: 8099.8015, trocas: 2501156337, iteracoes: 3752873289, tamanho: 100000 },
  { nome: "Cocktail Sort", ms: 8210.4416, trocas: 2504436724, iteracoes: 3757064847, tamanho: 100000 },
  { nome: "Cocktail Sort", ms: 199144.14, trocas: 62493929685, iteracoes: 93675330747, tamanho: 500000 },
  { nome: "Cocktail Sort", ms: 198950.2959, trocas: 62446728205, iteracoes: 93667320715, tamanho: 500000 },
  { nome: "Cocktail Sort", ms: 198473.6771, trocas: 62500784030, iteracoes: 93837313575, tamanho: 500000 },
  { nome: "Cocktail Sort", ms: 198532.1946, trocas: 62431321328, iteracoes: 93686843374, tamanho: 500000 },
  { nome: "Cocktail Sort", ms: 199105.79, trocas: 62492638007, iteracoes: 93843304875, tamanho: 500000 },
  // 1000000 não conseguiu processar

  // TimSort
  { nome: "TimSort", ms: 0.5996, trocas: 12430, iteracoes: 13237, tamanho: 1000 },
  { nome: "TimSort", ms: 0.6171, trocas: 12615, iteracoes: 13430, tamanho: 1000 },
  { nome: "TimSort", ms: 0.5854, trocas: 12665, iteracoes: 13480, tamanho: 1000 },
  { nome: "TimSort", ms: 0.5912, trocas: 12797, iteracoes: 13596, tamanho: 1000 },
  { nome: "TimSort", ms: 0.1146, trocas: 12819, iteracoes: 13632, tamanho: 1000 },
  { nome: "TimSort", ms: 1.6525, trocas: 163950, iteracoes: 172038, tamanho: 10000 },
  { nome: "TimSort", ms: 1.2356, trocas: 164557, iteracoes: 172646, tamanho: 10000 },
  { nome: "TimSort", ms: 1.2856, trocas: 164269, iteracoes: 172358, tamanho: 10000 },
  { nome: "TimSort", ms: 1.4112, trocas: 163509, iteracoes: 171695, tamanho: 10000 },
  { nome: "TimSort", ms: 1.3845, trocas: 164576, iteracoes: 172680, tamanho: 10000 },
  { nome: "TimSort", ms: 21.3831, trocas: 1967592, iteracoes: 2048823, tamanho: 100000 },
  { nome: "TimSort", ms: 18.3251, trocas: 1970586, iteracoes: 2051576, tamanho: 100000 },
  { nome: "TimSort", ms: 12.2402, trocas: 1964823, iteracoes: 2046166, tamanho: 100000 },
  { nome: "TimSort", ms: 13.8909, trocas: 1966540, iteracoes: 2048023, tamanho: 100000 },
  { nome: "TimSort", ms: 10.6093, trocas: 1967706, iteracoes: 2048708, tamanho: 100000 },
  { nome: "TimSort", ms: 61.4593, trocas: 10865051, iteracoes: 11270925, tamanho: 500000 },
  { nome: "TimSort", ms: 52.0887, trocas: 10871702, iteracoes: 11277454, tamanho: 500000 },
  { nome: "TimSort", ms: 53.8689, trocas: 10860374, iteracoes: 11266525, tamanho: 500000 },
  { nome: "TimSort", ms: 47.8217, trocas: 10862054, iteracoes: 11268459, tamanho: 500000 },
  { nome: "TimSort", ms: 52.2674, trocas: 10864977, iteracoes: 11270538, tamanho: 500000 },
  { nome: "TimSort", ms: 111.34, trocas: 22730246, iteracoes: 23541911, tamanho: 1000000 },
  { nome: "TimSort", ms: 111.7851, trocas: 22737610, iteracoes: 23549089, tamanho: 1000000 },
  { nome: "TimSort", ms: 110.6126, trocas: 22719275, iteracoes: 23531656, tamanho: 1000000 },
  { nome: "TimSort", ms: 106.5849, trocas: 22720683, iteracoes: 23533365, tamanho: 1000000 },
  { nome: "TimSort", ms: 110.3872, trocas: 22732200, iteracoes: 23543737, tamanho: 1000000 },

  // Gnome Sort
  { nome: "Gnome Sort", ms: 3.7551, trocas: 245243, iteracoes: 491473, tamanho: 1000 },
  { nome: "Gnome Sort", ms: 0.7201, trocas: 254380, iteracoes: 509747, tamanho: 1000 },
  { nome: "Gnome Sort", ms: 1.511, trocas: 250812, iteracoes: 502599, tamanho: 1000 },
  { nome: "Gnome Sort", ms: 0.6133, trocas: 246154, iteracoes: 493297, tamanho: 1000 },
  { nome: "Gnome Sort", ms: 0.6119, trocas: 242099, iteracoes: 485187, tamanho: 1000 },
  { nome: "Gnome Sort", ms: 60.5103, trocas: 24914821, iteracoes: 49839621, tamanho: 10000 },
  { nome: "Gnome Sort", ms: 61.5898, trocas: 24833858, iteracoes: 49677701, tamanho: 10000 },
  { nome: "Gnome Sort", ms: 60.7225, trocas: 25028958, iteracoes: 50067889, tamanho: 10000 },
  { nome: "Gnome Sort", ms: 60.91, trocas: 25072594, iteracoes: 50155175, tamanho: 10000 },
  { nome: "Gnome Sort", ms: 61.3442, trocas: 25336107, iteracoes: 50682195, tamanho: 10000 },
  { nome: "Gnome Sort", ms: 6042.0446, trocas: 2511106515, iteracoes: 5022313007, tamanho: 100000 },
  { nome: "Gnome Sort", ms: 5951.1011, trocas: 2492436184, iteracoes: 4984972347, tamanho: 100000 },
  { nome: "Gnome Sort", ms: 5948.8865, trocas: 2495655308, iteracoes: 4991410583, tamanho: 100000 },
  { nome: "Gnome Sort", ms: 6880.6053, trocas: 2501156337, iteracoes: 5002412653, tamanho: 100000 },
  { nome: "Gnome Sort", ms: 6784.7089, trocas: 2504436724, iteracoes: 5008973425, tamanho: 100000 },
  { nome: "Gnome Sort", ms: 166229.7975, trocas: 62493929685, iteracoes: 124988359345, tamanho: 500000 },
  { nome: "Gnome Sort", ms: 166888.3205, trocas: 62446728205, iteracoes: 124893956387, tamanho: 500000 },
  { nome: "Gnome Sort", ms: 167372.356, trocas: 62500784030, iteracoes: 125002068025, tamanho: 500000 },
  { nome: "Gnome Sort", ms: 174056.1358, trocas: 62431321328, iteracoes: 124863142623, tamanho: 500000 },
  { nome: "Gnome Sort", ms: 174217.9009, trocas: 62492638007, iteracoes: 124985775987, tamanho: 500000 },
  // 1000000 não conseguiu processar
].map(item => ({
  ...item,
  tamanho: formataTamanho(item.tamanho)
}));
export function filtraSortPorTamanho(tamanhoOriginal: number) {
  return tempoOrdenacao.filter(item => {
    if (typeof item.tamanho === 'string') {
      if (item.tamanho.endsWith('kk')) {
        return tamanhoOriginal === parseFloat(item.tamanho) * 1_000_000;
      }
      if (item.tamanho.endsWith('k')) {
        return tamanhoOriginal === parseFloat(item.tamanho) * 1_000;
      }
      return tamanhoOriginal === parseFloat(item.tamanho);
    }
    return tamanhoOriginal === item.tamanho;
  });
}
export const chartConfig = {
  ms: {
    label: "ms",
    color: "var(--chart-4)",
  },
  comparacoes: {
    label: "Comparações",
    color: "var(--chart-1)",
  },
  trocas: {
    label: "Trocas",
    color: "var(--chart-3)"
  },
  tamanho: {
    label: "Vetor",
    color: "var(--chart-2)"
  },
  iteracoes: {
    label: "Iterações",
    color: "var(--chart-5)"
  }
} satisfies ChartConfig
