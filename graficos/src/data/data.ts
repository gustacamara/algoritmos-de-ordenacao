import type { ChartConfig } from "@/components/ui/chart";

function formataTamanho(tamanho: number): string {
  if (tamanho >= 1_000_000) return `${tamanho / 1_000_000}kk`;
  if (tamanho >= 1_000) return `${tamanho / 1_000}k`;
  return tamanho.toString();
}

export const tempoOrdenacao =
  [
    {
      nome: "Comb Sort",
      tamanho: 1000,
      rodada: 1,
      ms: 0.502344,
      trocas: 4475,
      iteracoes: 21710
    },
    {
      nome: "Selection Sort",
      tamanho: 1000,
      rodada: 1,
      ms: 2.171121,
      trocas: 999,
      iteracoes: 499500
    },
    {
      nome: "Quick Sort",
      tamanho: 1000,
      rodada: 1,
      ms: 0.351749,
      trocas: 1510,
      iteracoes: 15767
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000,
      rodada: 1,
      ms: 0.038506,
      trocas: 0,
      iteracoes: 1997
    },
    {
      nome: "TimSort",
      tamanho: 1000,
      rodada: 1,
      ms: 0.21329,
      trocas: 5000,
      iteracoes: 3528
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000,
      rodada: 1,
      ms: 2.954121,
      trocas: 250674,
      iteracoes: 502335
    },
    {
      nome: "Comb Sort",
      tamanho: 1000,
      rodada: 2,
      ms: 0.4978,
      trocas: 4439,
      iteracoes: 22709
    },
    {
      nome: "Selection Sort",
      tamanho: 1000,
      rodada: 2,
      ms: 0.16242,
      trocas: 999,
      iteracoes: 499500
    },
    {
      nome: "Quick Sort",
      tamanho: 1000,
      rodada: 2,
      ms: 0.077586,
      trocas: 1541,
      iteracoes: 16548
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000,
      rodada: 2,
      ms: 0.032927,
      trocas: 0,
      iteracoes: 1997
    },
    {
      nome: "TimSort",
      tamanho: 1000,
      rodada: 2,
      ms: 0.182933,
      trocas: 5000,
      iteracoes: 3528
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000,
      rodada: 2,
      ms: 0.493823,
      trocas: 241198,
      iteracoes: 483377
    },
    {
      nome: "Comb Sort",
      tamanho: 1000,
      rodada: 3,
      ms: 0.476772,
      trocas: 4465,
      iteracoes: 21710
    },
    {
      nome: "Selection Sort",
      tamanho: 1000,
      rodada: 3,
      ms: 0.764489,
      trocas: 999,
      iteracoes: 499500
    },
    {
      nome: "Quick Sort",
      tamanho: 1000,
      rodada: 3,
      ms: 0.066209,
      trocas: 1534,
      iteracoes: 15926
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000,
      rodada: 3,
      ms: 0.03238,
      trocas: 0,
      iteracoes: 1997
    },
    {
      nome: "TimSort",
      tamanho: 1000,
      rodada: 3,
      ms: 0.187678,
      trocas: 5000,
      iteracoes: 3528
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000,
      rodada: 3,
      ms: 1.103467,
      trocas: 238246,
      iteracoes: 477477
    },
    {
      nome: "Comb Sort",
      tamanho: 1000,
      rodada: 4,
      ms: 0.07746,
      trocas: 4356,
      iteracoes: 21710
    },
    {
      nome: "Selection Sort",
      tamanho: 1000,
      rodada: 4,
      ms: 0.11453,
      trocas: 999,
      iteracoes: 499500
    },
    {
      nome: "Quick Sort",
      tamanho: 1000,
      rodada: 4,
      ms: 0.052147,
      trocas: 1476,
      iteracoes: 15972
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000,
      rodada: 4,
      ms: 0.032328,
      trocas: 0,
      iteracoes: 1997
    },
    {
      nome: "TimSort",
      tamanho: 1000,
      rodada: 4,
      ms: 0.191717,
      trocas: 5000,
      iteracoes: 3528
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000,
      rodada: 4,
      ms: 0.395188,
      trocas: 249510,
      iteracoes: 500011
    },
    {
      nome: "Comb Sort",
      tamanho: 1000,
      rodada: 5,
      ms: 0.074506,
      trocas: 4473,
      iteracoes: 22709
    },
    {
      nome: "Selection Sort",
      tamanho: 1000,
      rodada: 5,
      ms: 0.11311,
      trocas: 999,
      iteracoes: 499500
    },
    {
      nome: "Quick Sort",
      tamanho: 1000,
      rodada: 5,
      ms: 0.045887,
      trocas: 1500,
      iteracoes: 15733
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000,
      rodada: 5,
      ms: 0.032803,
      trocas: 0,
      iteracoes: 1997
    },
    {
      nome: "TimSort",
      tamanho: 1000,
      rodada: 5,
      ms: 0.030185,
      trocas: 5000,
      iteracoes: 3528
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000,
      rodada: 5,
      ms: 0.417954,
      trocas: 249467,
      iteracoes: 499921
    },
    {
      nome: "Comb Sort",
      tamanho: 10000,
      rodada: 1,
      ms: 1.003213,
      trocas: 63308,
      iteracoes: 346732
    },
    {
      nome: "Selection Sort",
      tamanho: 10000,
      rodada: 1,
      ms: 10.308821,
      trocas: 9999,
      iteracoes: 49995000
    },
    {
      nome: "Quick Sort",
      tamanho: 10000,
      rodada: 1,
      ms: 0.375437,
      trocas: 15003,
      iteracoes: 197217
    },
    {
      nome: "Cocktail Sort",
      tamanho: 10000,
      rodada: 1,
      ms: 0.326658,
      trocas: 0,
      iteracoes: 19997
    },
    {
      nome: "TimSort",
      tamanho: 10000,
      rodada: 1,
      ms: 0.484416,
      trocas: 86336,
      iteracoes: 56407
    },
    {
      nome: "Gnome Sort",
      tamanho: 10000,
      rodada: 1,
      ms: 42.46171,
      trocas: 25165736,
      iteracoes: 50341459
    },
    {
      nome: "Comb Sort",
      tamanho: 10000,
      rodada: 2,
      ms: 0.746153,
      trocas: 63623,
      iteracoes: 336733
    },
    {
      nome: "Selection Sort",
      tamanho: 10000,
      rodada: 2,
      ms: 10.432261,
      trocas: 9999,
      iteracoes: 49995000
    },
    {
      nome: "Quick Sort",
      tamanho: 10000,
      rodada: 2,
      ms: 0.363034,
      trocas: 14895,
      iteracoes: 202317
    },
    {
      nome: "Cocktail Sort",
      tamanho: 10000,
      rodada: 2,
      ms: 0.31755,
      trocas: 0,
      iteracoes: 19997
    },
    {
      nome: "TimSort",
      tamanho: 10000,
      rodada: 2,
      ms: 0.76054,
      trocas: 86336,
      iteracoes: 56407
    },
    {
      nome: "Gnome Sort",
      tamanho: 10000,
      rodada: 2,
      ms: 59.206363,
      trocas: 24936369,
      iteracoes: 49882719
    },
    {
      nome: "Comb Sort",
      tamanho: 10000,
      rodada: 3,
      ms: 1.221574,
      trocas: 63842,
      iteracoes: 356731
    },
    {
      nome: "Selection Sort",
      tamanho: 10000,
      rodada: 3,
      ms: 15.625791,
      trocas: 9999,
      iteracoes: 49995000
    },
    {
      nome: "Quick Sort",
      tamanho: 10000,
      rodada: 3,
      ms: 0.503351,
      trocas: 15038,
      iteracoes: 201022
    },
    {
      nome: "Cocktail Sort",
      tamanho: 10000,
      rodada: 3,
      ms: 0.439913,
      trocas: 0,
      iteracoes: 19997
    },
    {
      nome: "TimSort",
      tamanho: 10000,
      rodada: 3,
      ms: 0.832968,
      trocas: 86336,
      iteracoes: 56407
    },
    {
      nome: "Gnome Sort",
      tamanho: 10000,
      rodada: 3,
      ms: 45.190976,
      trocas: 24748783,
      iteracoes: 49507545
    },
    {
      nome: "Comb Sort",
      tamanho: 10000,
      rodada: 4,
      ms: 0.69884,
      trocas: 63547,
      iteracoes: 336733
    },
    {
      nome: "Selection Sort",
      tamanho: 10000,
      rodada: 4,
      ms: 10.409479,
      trocas: 9999,
      iteracoes: 49995000
    },
    {
      nome: "Quick Sort",
      tamanho: 10000,
      rodada: 4,
      ms: 0.36689,
      trocas: 14994,
      iteracoes: 195332
    },
    {
      nome: "Cocktail Sort",
      tamanho: 10000,
      rodada: 4,
      ms: 0.191072,
      trocas: 0,
      iteracoes: 19997
    },
    {
      nome: "TimSort",
      tamanho: 10000,
      rodada: 4,
      ms: 0.849151,
      trocas: 86336,
      iteracoes: 56407
    },
    {
      nome: "Gnome Sort",
      tamanho: 10000,
      rodada: 4,
      ms: 54.21748,
      trocas: 24963150,
      iteracoes: 49936279
    },
    {
      nome: "Comb Sort",
      tamanho: 10000,
      rodada: 5,
      ms: 0.740331,
      trocas: 63062,
      iteracoes: 336733
    },
    {
      nome: "Selection Sort",
      tamanho: 10000,
      rodada: 5,
      ms: 15.52583,
      trocas: 9999,
      iteracoes: 49995000
    },
    {
      nome: "Quick Sort",
      tamanho: 10000,
      rodada: 5,
      ms: 0.581791,
      trocas: 15080,
      iteracoes: 205891
    },
    {
      nome: "Cocktail Sort",
      tamanho: 10000,
      rodada: 5,
      ms: 0.130077,
      trocas: 0,
      iteracoes: 19997
    },
    {
      nome: "TimSort",
      tamanho: 10000,
      rodada: 5,
      ms: 0.303127,
      trocas: 86336,
      iteracoes: 56407
    },
    {
      nome: "Gnome Sort",
      tamanho: 10000,
      rodada: 5,
      ms: 54.864717,
      trocas: 25243039,
      iteracoes: 50496065
    },
    {
      nome: "Comb Sort",
      tamanho: 100000,
      rodada: 1,
      ms: 9.15896,
      trocas: 810671,
      iteracoes: 4066741
    },
    {
      nome: "Selection Sort",
      tamanho: 100000,
      rodada: 1,
      ms: 1002.421323,
      trocas: 99999,
      iteracoes: 704982704
    },
    {
      nome: "Quick Sort",
      tamanho: 100000,
      rodada: 1,
      ms: 3.712095,
      trocas: 149945,
      iteracoes: 2543233
    },
    {
      nome: "Cocktail Sort",
      tamanho: 100000,
      rodada: 1,
      ms: 0.357541,
      trocas: 0,
      iteracoes: 199997
    },
    {
      nome: "TimSort",
      tamanho: 100000,
      rodada: 1,
      ms: 2.32059,
      trocas: 1192992,
      iteracoes: 724843
    },
    {
      nome: "Gnome Sort",
      tamanho: 100000,
      rodada: 1,
      ms: 4218.488786,
      trocas: 2497658200,
      iteracoes: 4995416379
    },
    {
      nome: "Comb Sort",
      tamanho: 100000,
      rodada: 2,
      ms: 8.367807,
      trocas: 811445,
      iteracoes: 4166740
    },
    {
      nome: "Selection Sort",
      tamanho: 100000,
      rodada: 2,
      ms: 987.7296,
      trocas: 99999,
      iteracoes: 704982704
    },
    {
      nome: "Quick Sort",
      tamanho: 100000,
      rodada: 2,
      ms: 3.790082,
      trocas: 150435,
      iteracoes: 2499252
    },
    {
      nome: "Cocktail Sort",
      tamanho: 100000,
      rodada: 2,
      ms: 0.054829,
      trocas: 0,
      iteracoes: 199997
    },
    {
      nome: "TimSort",
      tamanho: 100000,
      rodada: 2,
      ms: 2.037798,
      trocas: 1192992,
      iteracoes: 724843
    },
    {
      nome: "Gnome Sort",
      tamanho: 100000,
      rodada: 2,
      ms: 4213.351492,
      trocas: 2493641956,
      iteracoes: 4987383887
    },
    {
      nome: "Comb Sort",
      tamanho: 100000,
      rodada: 3,
      ms: 8.18347,
      trocas: 810242,
      iteracoes: 3966742
    },
    {
      nome: "Selection Sort",
      tamanho: 100000,
      rodada: 3,
      ms: 989.043458,
      trocas: 99999,
      iteracoes: 704982704
    },
    {
      nome: "Quick Sort",
      tamanho: 100000,
      rodada: 3,
      ms: 3.75698,
      trocas: 150082,
      iteracoes: 2511764
    },
    {
      nome: "Cocktail Sort",
      tamanho: 100000,
      rodada: 3,
      ms: 0.055046,
      trocas: 0,
      iteracoes: 199997
    },
    {
      nome: "TimSort",
      tamanho: 100000,
      rodada: 3,
      ms: 2.078813,
      trocas: 1192992,
      iteracoes: 724843
    },
    {
      nome: "Gnome Sort",
      tamanho: 100000,
      rodada: 3,
      ms: 4274.020531,
      trocas: 2496434584,
      iteracoes: 4992969151
    },
    {
      nome: "Comb Sort",
      tamanho: 100000,
      rodada: 4,
      ms: 8.489039,
      trocas: 813828,
      iteracoes: 4066741
    },
    {
      nome: "Selection Sort",
      tamanho: 100000,
      rodada: 4,
      ms: 999.199207,
      trocas: 99999,
      iteracoes: 704982704
    },
    {
      nome: "Quick Sort",
      tamanho: 100000,
      rodada: 4,
      ms: 3.755334,
      trocas: 150032,
      iteracoes: 2537356
    },
    {
      nome: "Cocktail Sort",
      tamanho: 100000,
      rodada: 4,
      ms: 0.055652,
      trocas: 0,
      iteracoes: 199997
    },
    {
      nome: "TimSort",
      tamanho: 100000,
      rodada: 4,
      ms: 2.175914,
      trocas: 1192992,
      iteracoes: 724843
    },
    {
      nome: "Gnome Sort",
      tamanho: 100000,
      rodada: 4,
      ms: 4350.753175,
      trocas: 2497733439,
      iteracoes: 4995566857
    },
    {
      nome: "Comb Sort",
      tamanho: 100000,
      rodada: 5,
      ms: 8.309209,
      trocas: 812723,
      iteracoes: 3966742
    },
    {
      nome: "Selection Sort",
      tamanho: 100000,
      rodada: 5,
      ms: 992.974235,
      trocas: 99999,
      iteracoes: 704982704
    },
    {
      nome: "Quick Sort",
      tamanho: 100000,
      rodada: 5,
      ms: 3.909353,
      trocas: 150137,
      iteracoes: 2504611
    },
    {
      nome: "Cocktail Sort",
      tamanho: 100000,
      rodada: 5,
      ms: 0.057341,
      trocas: 0,
      iteracoes: 199997
    },
    {
      nome: "TimSort",
      tamanho: 100000,
      rodada: 5,
      ms: 1.953156,
      trocas: 1192992,
      iteracoes: 724843
    },
    {
      nome: "Gnome Sort",
      tamanho: 100000,
      rodada: 5,
      ms: 4323.757403,
      trocas: 2490729918,
      iteracoes: 4981559811
    },
    {
      nome: "Comb Sort",
      tamanho: 500000,
      rodada: 1,
      ms: 49.439464,
      trocas: 4708196,
      iteracoes: 25333419
    },
    {
      nome: "Selection Sort",
      tamanho: 500000,
      rodada: 1,
      ms: 25991.912813,
      trocas: 499999,
      iteracoes: 445698416
    },
    {
      nome: "Quick Sort",
      tamanho: 500000,
      rodada: 1,
      ms: 19.857604,
      trocas: 754738,
      iteracoes: 13785781
    },
    {
      nome: "Cocktail Sort",
      tamanho: 500000,
      rodada: 1,
      ms: 0.30491,
      trocas: 0,
      iteracoes: 999997
    },
    {
      nome: "TimSort",
      tamanho: 500000,
      rodada: 1,
      ms: 11.826597,
      trocas: 6990272,
      iteracoes: 4032151
    },
    {
      nome: "Gnome Sort",
      tamanho: 500000,
      rodada: 1,
      ms: 105754.158216,
      trocas: 62434391529,
      iteracoes: 124869283029
    },
    {
      nome: "Comb Sort",
      tamanho: 500000,
      rodada: 2,
      ms: 48.410011,
      trocas: 4707729,
      iteracoes: 24833420
    },
    {
      nome: "Selection Sort",
      tamanho: 500000,
      rodada: 2,
      ms: 24842.910475,
      trocas: 499999,
      iteracoes: 445698416
    },
    {
      nome: "Quick Sort",
      tamanho: 500000,
      rodada: 2,
      ms: 19.221862,
      trocas: 754817,
      iteracoes: 13658611
    },
    {
      nome: "Cocktail Sort",
      tamanho: 500000,
      rodada: 2,
      ms: 0.297276,
      trocas: 0,
      iteracoes: 999997
    },
    {
      nome: "TimSort",
      tamanho: 500000,
      rodada: 2,
      ms: 9.207507,
      trocas: 6990272,
      iteracoes: 4032151
    },
    {
      nome: "Gnome Sort",
      tamanho: 500000,
      rodada: 2,
      ms: 105875.182944,
      trocas: 62599006659,
      iteracoes: 125198513293
    },
    {
      nome: "Comb Sort",
      tamanho: 500000,
      rodada: 3,
      ms: 48.681033,
      trocas: 4703785,
      iteracoes: 25833418
    },
    {
      nome: "Selection Sort",
      tamanho: 500000,
      rodada: 3,
      ms: 25035.739394,
      trocas: 499999,
      iteracoes: 445698416
    },
    {
      nome: "Quick Sort",
      tamanho: 500000,
      rodada: 3,
      ms: 19.780856,
      trocas: 754761,
      iteracoes: 14492120
    },
    {
      nome: "Cocktail Sort",
      tamanho: 500000,
      rodada: 3,
      ms: 0.275338,
      trocas: 0,
      iteracoes: 999997
    },
    {
      nome: "TimSort",
      tamanho: 500000,
      rodada: 3,
      ms: 8.669955,
      trocas: 6990272,
      iteracoes: 4032151
    },
    {
      nome: "Gnome Sort",
      tamanho: 500000,
      rodada: 3,
      ms: 105213.60934,
      trocas: 62485581779,
      iteracoes: 124971663539
    },
    {
      nome: "Comb Sort",
      tamanho: 500000,
      rodada: 4,
      ms: 48.380509,
      trocas: 4705392,
      iteracoes: 24833420
    },
    {
      nome: "Selection Sort",
      tamanho: 500000,
      rodada: 4,
      ms: 24758.99987,
      trocas: 499999,
      iteracoes: 445698416
    },
    {
      nome: "Quick Sort",
      tamanho: 500000,
      rodada: 4,
      ms: 19.458831,
      trocas: 755209,
      iteracoes: 13847005
    },
    {
      nome: "Cocktail Sort",
      tamanho: 500000,
      rodada: 4,
      ms: 0.278873,
      trocas: 0,
      iteracoes: 999997
    },
    {
      nome: "TimSort",
      tamanho: 500000,
      rodada: 4,
      ms: 6.753544,
      trocas: 6990272,
      iteracoes: 4032151
    },
    {
      nome: "Gnome Sort",
      tamanho: 500000,
      rodada: 4,
      ms: 105318.070078,
      trocas: 62460844033,
      iteracoes: 124922188041
    },
    {
      nome: "Comb Sort",
      tamanho: 500000,
      rodada: 5,
      ms: 48.480636,
      trocas: 4702755,
      iteracoes: 25333419
    },
    {
      nome: "Selection Sort",
      tamanho: 500000,
      rodada: 5,
      ms: 24809.123388,
      trocas: 499999,
      iteracoes: 445698416
    },
    {
      nome: "Quick Sort",
      tamanho: 500000,
      rodada: 5,
      ms: 19.539454,
      trocas: 752664,
      iteracoes: 14447172
    },
    {
      nome: "Cocktail Sort",
      tamanho: 500000,
      rodada: 5,
      ms: 0.275082,
      trocas: 0,
      iteracoes: 999997
    },
    {
      nome: "TimSort",
      tamanho: 500000,
      rodada: 5,
      ms: 7.103348,
      trocas: 6990272,
      iteracoes: 4032151
    },
    {
      nome: "Gnome Sort",
      tamanho: 500000,
      rodada: 5,
      ms: 105949.293844,
      trocas: 62506728624,
      iteracoes: 125013957221
    },
    {
      nome: "Comb Sort",
      tamanho: 1000000,
      rodada: 1,
      ms: 99.367732,
      trocas: 9750646,
      iteracoes: 49666762
    },
    {
      nome: "Selection Sort",
      tamanho: 1000000,
      rodada: 1,
      ms: 99545.995087,
      trocas: 999999,
      iteracoes: 1783293664
    },
    {
      nome: "Quick Sort",
      tamanho: 1000000,
      rodada: 1,
      ms: 39.233623,
      trocas: 1526295,
      iteracoes: 29188106
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000000,
      rodada: 1,
      ms: 0.572062,
      trocas: 0,
      iteracoes: 1999997
    },
    {
      nome: "TimSort",
      tamanho: 1000000,
      rodada: 1,
      ms: 12.629279,
      trocas: 14980544,
      iteracoes: 8564302
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000000,
      rodada: 1,
      ms: 422410.700477,
      trocas: 250040968794,
      iteracoes: 500082937565
    },
    {
      nome: "Comb Sort",
      tamanho: 1000000,
      rodada: 2,
      ms: 99.602406,
      trocas: 9751521,
      iteracoes: 50666761
    },
    {
      nome: "Selection Sort",
      tamanho: 1000000,
      rodada: 2,
      ms: 99696.132175,
      trocas: 999999,
      iteracoes: 1783293664
    },
    {
      nome: "Quick Sort",
      tamanho: 1000000,
      rodada: 2,
      ms: 39.098532,
      trocas: 1525503,
      iteracoes: 28960747
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000000,
      rodada: 2,
      ms: 0.572328,
      trocas: 0,
      iteracoes: 1999997
    },
    {
      nome: "TimSort",
      tamanho: 1000000,
      rodada: 2,
      ms: 16.094866,
      trocas: 14980544,
      iteracoes: 8564302
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000000,
      rodada: 2,
      ms: 422478.803409,
      trocas: 250404489122,
      iteracoes: 500809978209
    },
    {
      nome: "Comb Sort",
      tamanho: 1000000,
      rodada: 3,
      ms: 99.312963,
      trocas: 9745616,
      iteracoes: 49666762
    },
    {
      nome: "Selection Sort",
      tamanho: 1000000,
      rodada: 3,
      ms: 99890.350267,
      trocas: 999999,
      iteracoes: 1783293664
    },
    {
      nome: "Quick Sort",
      tamanho: 1000000,
      rodada: 3,
      ms: 39.334262,
      trocas: 1524742,
      iteracoes: 28896688
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000000,
      rodada: 3,
      ms: 0.555402,
      trocas: 0,
      iteracoes: 1999997
    },
    {
      nome: "TimSort",
      tamanho: 1000000,
      rodada: 3,
      ms: 13.701189,
      trocas: 14980544,
      iteracoes: 8564302
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000000,
      rodada: 3,
      ms: 421522.311476,
      trocas: 249882574192,
      iteracoes: 499766148351
    },
    {
      nome: "Comb Sort",
      tamanho: 1000000,
      rodada: 4,
      ms: 99.433302,
      trocas: 9750319,
      iteracoes: 49666762
    },
    {
      nome: "Selection Sort",
      tamanho: 1000000,
      rodada: 4,
      ms: 99449.708082,
      trocas: 999999,
      iteracoes: 1783293664
    },
    {
      nome: "Quick Sort",
      tamanho: 1000000,
      rodada: 4,
      ms: 39.091465,
      trocas: 1526672,
      iteracoes: 28633512
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000000,
      rodada: 4,
      ms: 0.567078,
      trocas: 0,
      iteracoes: 1999997
    },
    {
      nome: "TimSort",
      tamanho: 1000000,
      rodada: 4,
      ms: 14.702403,
      trocas: 14980544,
      iteracoes: 8564302
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000000,
      rodada: 4,
      ms: 425193.107861,
      trocas: 250002308302,
      iteracoes: 500005616587
    },
    {
      nome: "Comb Sort",
      tamanho: 1000000,
      rodada: 5,
      ms: 99.240093,
      trocas: 9746415,
      iteracoes: 49666762
    },
    {
      nome: "Selection Sort",
      tamanho: 1000000,
      rodada: 5,
      ms: 99681.451711,
      trocas: 999999,
      iteracoes: 1783293664
    },
    {
      nome: "Quick Sort",
      tamanho: 1000000,
      rodada: 5,
      ms: 39.187489,
      trocas: 1525003,
      iteracoes: 28815627
    },
    {
      nome: "Cocktail Sort",
      tamanho: 1000000,
      rodada: 5,
      ms: 0.579236,
      trocas: 0,
      iteracoes: 1999997
    },
    {
      nome: "TimSort",
      tamanho: 1000000,
      rodada: 5,
      ms: 14.072776,
      trocas: 14980544,
      iteracoes: 8564302
    },
    {
      nome: "Gnome Sort",
      tamanho: 1000000,
      rodada: 5,
      ms: 423426.003143,
      trocas: 249908709438,
      iteracoes: 499818418847
    }
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
