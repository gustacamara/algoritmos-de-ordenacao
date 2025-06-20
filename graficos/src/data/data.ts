import type { ChartConfig } from "@/components/ui/chart";
type TempoOrdenacaoItem = typeof tempoOrdenacao[number];

export const tempoOrdenacao = [
  { nome: "Comb Sort", tamanho: 1000, rodada: 1, ms: 0.6542, trocas: 4475, iteracoes: 21710 },
  { nome: "Selection Sort", tamanho: 1000, rodada: 1, ms: 2.5292, trocas: 999, iteracoes: 499500 },
  { nome: "Quick Sort", tamanho: 1000, rodada: 1, ms: 0.4391, trocas: 2943, iteracoes: 14772 },
  { nome: "Cocktail Sort", tamanho: 1000, rodada: 1, ms: 4.226, trocas: 245243, iteracoes: 372744 },
  { nome: "TimSort", tamanho: 1000, rodada: 1, ms: 0.6134, trocas: 12430, iteracoes: 13237 },
  { nome: "Gnome Sort", tamanho: 1000, rodada: 1, ms: 3.8565, trocas: 250674, iteracoes: 502335 },
  { nome: "Comb Sort", tamanho: 1000, rodada: 2, ms: 0.7785, trocas: 4439, iteracoes: 22709 },
  { nome: "Selection Sort", tamanho: 1000, rodada: 2, ms: 0.2838, trocas: 999, iteracoes: 499500 },
  { nome: "Quick Sort", tamanho: 1000, rodada: 2, ms: 0.1669, trocas: 2983, iteracoes: 14288 },
  { nome: "Cocktail Sort", tamanho: 1000, rodada: 2, ms: 1.2166, trocas: 254380, iteracoes: 393009 },
  { nome: "TimSort", tamanho: 1000, rodada: 2, ms: 0.5686, trocas: 12615, iteracoes: 13430 },
  { nome: "Gnome Sort", tamanho: 1000, rodada: 2, ms: 0.6533, trocas: 241198, iteracoes: 483377 },
  { nome: "Comb Sort", tamanho: 1000, rodada: 3, ms: 0.7549, trocas: 4465, iteracoes: 21710 },
  { nome: "Selection Sort", tamanho: 1000, rodada: 3, ms: 0.1724, trocas: 999, iteracoes: 499500 },
  { nome: "Quick Sort", tamanho: 1000, rodada: 3, ms: 0.1103, trocas: 2941, iteracoes: 14912 },
  { nome: "Cocktail Sort", tamanho: 1000, rodada: 3, ms: 1.2811, trocas: 250812, iteracoes: 380672 },
  { nome: "TimSort", tamanho: 1000, rodada: 3, ms: 0.5784, trocas: 12665, iteracoes: 13480 },
  { nome: "Gnome Sort", tamanho: 1000, rodada: 3, ms: 0.6294, trocas: 238246, iteracoes: 477477 },
  { nome: "Comb Sort", tamanho: 1000, rodada: 4, ms: 0.1063, trocas: 4356, iteracoes: 21710 },
  { nome: "Selection Sort", tamanho: 1000, rodada: 4, ms: 0.1476, trocas: 999, iteracoes: 499500 },
  { nome: "Quick Sort", tamanho: 1000, rodada: 4, ms: 0.0836, trocas: 2918, iteracoes: 15328 },
  { nome: "Cocktail Sort", tamanho: 1000, rodada: 4, ms: 1.1726, trocas: 246154, iteracoes: 377729 },
  { nome: "TimSort", tamanho: 1000, rodada: 4, ms: 0.5178, trocas: 12797, iteracoes: 13596 },
  { nome: "Gnome Sort", tamanho: 1000, rodada: 4, ms: 0.6175, trocas: 249510, iteracoes: 500011 },
  { nome: "Comb Sort", tamanho: 1000, rodada: 5, ms: 0.0983, trocas: 4473, iteracoes: 22709 },
  { nome: "Selection Sort", tamanho: 1000, rodada: 5, ms: 0.1392, trocas: 999, iteracoes: 499500 },
  { nome: "Quick Sort", tamanho: 1000, rodada: 5, ms: 0.0775, trocas: 2892, iteracoes: 16169 },
  { nome: "Cocktail Sort", tamanho: 1000, rodada: 5, ms: 0.5275, trocas: 242099, iteracoes: 375747 },
  { nome: "TimSort", tamanho: 1000, rodada: 5, ms: 0.0876, trocas: 12819, iteracoes: 13632 },
  { nome: "Gnome Sort", tamanho: 1000, rodada: 5, ms: 0.6087, trocas: 249467, iteracoes: 499921 },
  { nome: "Comb Sort", tamanho: 10000, rodada: 1, ms: 0.8041, trocas: 63308, iteracoes: 346732 },
  { nome: "Selection Sort", tamanho: 10000, rodada: 1, ms: 13.2456, trocas: 9999, iteracoes: 49995000 },
  { nome: "Quick Sort", tamanho: 10000, rodada: 1, ms: 0.7516, trocas: 37274, iteracoes: 192896 },
  { nome: "Cocktail Sort", tamanho: 10000, rodada: 1, ms: 62.1692, trocas: 24914821, iteracoes: 37407347 },
  { nome: "TimSort", tamanho: 10000, rodada: 1, ms: 1.2255, trocas: 163950, iteracoes: 172038 },
  { nome: "Gnome Sort", tamanho: 10000, rodada: 1, ms: 61.5125, trocas: 25165736, iteracoes: 50341459 },
  { nome: "Comb Sort", tamanho: 10000, rodada: 2, ms: 0.9269, trocas: 63623, iteracoes: 336733 },
  { nome: "Selection Sort", tamanho: 10000, rodada: 2, ms: 12.7561, trocas: 9999, iteracoes: 49995000 },
  { nome: "Quick Sort", tamanho: 10000, rodada: 2, ms: 0.7128, trocas: 37276, iteracoes: 192563 },
  { nome: "Cocktail Sort", tamanho: 10000, rodada: 2, ms: 63.2833, trocas: 24833858, iteracoes: 37256372 },
  { nome: "TimSort", tamanho: 10000, rodada: 2, ms: 1.6848, trocas: 164557, iteracoes: 172646 },
  { nome: "Gnome Sort", tamanho: 10000, rodada: 2, ms: 60.6096, trocas: 24936369, iteracoes: 49882719 },
  { nome: "Comb Sort", tamanho: 10000, rodada: 3, ms: 0.9375, trocas: 63842, iteracoes: 356731 },
  { nome: "Selection Sort", tamanho: 10000, rodada: 3, ms: 12.6579, trocas: 9999, iteracoes: 49995000 },
  { nome: "Quick Sort", tamanho: 10000, rodada: 3, ms: 0.7219, trocas: 36606, iteracoes: 205210 },
  { nome: "Cocktail Sort", tamanho: 10000, rodada: 3, ms: 61.3656, trocas: 25028958, iteracoes: 37706597 },
  { nome: "TimSort", tamanho: 10000, rodada: 3, ms: 2.4123, trocas: 164269, iteracoes: 172358 },
  { nome: "Gnome Sort", tamanho: 10000, rodada: 3, ms: 61.0071, trocas: 24748783, iteracoes: 49507545 },
  { nome: "Comb Sort", tamanho: 10000, rodada: 4, ms: 0.9042, trocas: 63547, iteracoes: 336733 },
  { nome: "Selection Sort", tamanho: 10000, rodada: 4, ms: 15.747, trocas: 9999, iteracoes: 49995000 },
  { nome: "Quick Sort", tamanho: 10000, rodada: 4, ms: 0.7044, trocas: 36835, iteracoes: 202625 },
  { nome: "Cocktail Sort", tamanho: 10000, rodada: 4, ms: 61.0865, trocas: 25072594, iteracoes: 37756122 },
  { nome: "TimSort", tamanho: 10000, rodada: 4, ms: 0.8384, trocas: 163509, iteracoes: 171695 },
  { nome: "Gnome Sort", tamanho: 10000, rodada: 4, ms: 60.6868, trocas: 24963150, iteracoes: 49936279 },
  { nome: "Comb Sort", tamanho: 10000, rodada: 5, ms: 0.9087, trocas: 63062, iteracoes: 336733 },
  { nome: "Selection Sort", tamanho: 10000, rodada: 5, ms: 12.6906, trocas: 9999, iteracoes: 49995000 },
  { nome: "Quick Sort", tamanho: 10000, rodada: 5, ms: 0.7097, trocas: 37264, iteracoes: 189960 },
  { nome: "Cocktail Sort", tamanho: 10000, rodada: 5, ms: 61.4201, trocas: 25336107, iteracoes: 37992450 },
  { nome: "TimSort", tamanho: 10000, rodada: 5, ms: 1.0108, trocas: 164576, iteracoes: 172680 },
  { nome: "Gnome Sort", tamanho: 10000, rodada: 5, ms: 61.7402, trocas: 25243039, iteracoes: 50496065 },
  { nome: "Comb Sort", tamanho: 100000, rodada: 1, ms: 11.3267, trocas: 810671, iteracoes: 4066741 },
  { nome: "Selection Sort", tamanho: 100000, rodada: 1, ms: 1242.6035, trocas: 99999, iteracoes: 704982704 },
  { nome: "Quick Sort", tamanho: 100000, rodada: 1, ms: 8.1147, trocas: 450276, iteracoes: 2356604 },
  { nome: "Cocktail Sort", tamanho: 100000, rodada: 1, ms: 8121.6599, trocas: 2511106515, iteracoes: 3760751564 },
  { nome: "TimSort", tamanho: 100000, rodada: 1, ms: 10.9385, trocas: 1967592, iteracoes: 2048823 },
  { nome: "Gnome Sort", tamanho: 100000, rodada: 1, ms: 6503.5367, trocas: 2497658200, iteracoes: 4995416379 },
  { nome: "Comb Sort", tamanho: 100000, rodada: 2, ms: 11.6385, trocas: 811445, iteracoes: 4166740 },
  { nome: "Selection Sort", tamanho: 100000, rodada: 2, ms: 1885.7656, trocas: 99999, iteracoes: 704982704 },
  { nome: "Quick Sort", tamanho: 100000, rodada: 2, ms: 8.2036, trocas: 452667, iteracoes: 2341236 },
  { nome: "Cocktail Sort", tamanho: 100000, rodada: 2, ms: 9335.9136, trocas: 2492436184, iteracoes: 3751474535 },
  { nome: "TimSort", tamanho: 100000, rodada: 2, ms: 10.6305, trocas: 1970586, iteracoes: 2051576 },
  { nome: "Gnome Sort", tamanho: 100000, rodada: 2, ms: 6528.2621, trocas: 2493641956, iteracoes: 4987383887 },
  { nome: "Comb Sort", tamanho: 100000, rodada: 3, ms: 11.4645, trocas: 810242, iteracoes: 3966742 },
  { nome: "Selection Sort", tamanho: 100000, rodada: 3, ms: 1883.2834, trocas: 99999, iteracoes: 704982704 },
  { nome: "Quick Sort", tamanho: 100000, rodada: 3, ms: 8.1626, trocas: 447606, iteracoes: 2494934 },
  { nome: "Cocktail Sort", tamanho: 100000, rodada: 3, ms: 9305.8677, trocas: 2495655308, iteracoes: 3750474945 },
  { nome: "TimSort", tamanho: 100000, rodada: 3, ms: 9.9352, trocas: 1964823, iteracoes: 2046166 },
  { nome: "Gnome Sort", tamanho: 100000, rodada: 3, ms: 11573.6542, trocas: 2496434584, iteracoes: 4992969151 },
  { nome: "Comb Sort", tamanho: 100000, rodada: 4, ms: 11.6225, trocas: 813828, iteracoes: 4066741 },
  { nome: "Selection Sort", tamanho: 100000, rodada: 4, ms: 1884.111, trocas: 99999, iteracoes: 704982704 },
  { nome: "Quick Sort", tamanho: 100000, rodada: 4, ms: 8.4409, trocas: 445034, iteracoes: 2597272 },
  { nome: "Cocktail Sort", tamanho: 100000, rodada: 4, ms: 9298.1981, trocas: 2501156337, iteracoes: 3752873289 },
  { nome: "TimSort", tamanho: 100000, rodada: 4, ms: 9.868, trocas: 1966540, iteracoes: 2048023 },
  { nome: "Gnome Sort", tamanho: 100000, rodada: 4, ms: 10217.7623, trocas: 2497733439, iteracoes: 4995566857 },
  { nome: "Comb Sort", tamanho: 100000, rodada: 5, ms: 11.3299, trocas: 812723, iteracoes: 3966742 },
  { nome: "Selection Sort", tamanho: 100000, rodada: 5, ms: 1947.862, trocas: 99999, iteracoes: 704982704 },
  { nome: "Quick Sort", tamanho: 100000, rodada: 5, ms: 8.2019, trocas: 452352, iteracoes: 2335117 },
  { nome: "Cocktail Sort", tamanho: 100000, rodada: 5, ms: 9373.1119, trocas: 2504436724, iteracoes: 3757064847 },
  { nome: "TimSort", tamanho: 100000, rodada: 5, ms: 9.9531, trocas: 1967706, iteracoes: 2048708 },
  { nome: "Gnome Sort", tamanho: 100000, rodada: 5, ms: 6409.974, trocas: 2490729918, iteracoes: 4981559811 },
  { nome: "Comb Sort", tamanho: 500000, rodada: 1, ms: 69.5702, trocas: 4708196, iteracoes: 25333419 },
  { nome: "Selection Sort", tamanho: 500000, rodada: 1, ms: 47377.6632, trocas: 499999, iteracoes: 445698416 },
  { nome: "Quick Sort", tamanho: 500000, rodada: 1, ms: 43.8886, trocas: 2529307, iteracoes: 13396566 },
  { nome: "Cocktail Sort", tamanho: 500000, rodada: 1, ms: 233888.6702, trocas: 62493929685, iteracoes: 93675330747 },
  { nome: "TimSort", tamanho: 500000, rodada: 1, ms: 61.9366, trocas: 10865051, iteracoes: 11270925 },
  { nome: "Gnome Sort", tamanho: 500000, rodada: 1, ms: 177832.5842, trocas: 62434391529, iteracoes: 124869283029 },
  { nome: "Comb Sort", tamanho: 500000, rodada: 2, ms: 69.9812, trocas: 4707729, iteracoes: 24833420 },
  { nome: "Selection Sort", tamanho: 500000, rodada: 2, ms: 48061.264, trocas: 499999, iteracoes: 445698416 },
  { nome: "Quick Sort", tamanho: 500000, rodada: 2, ms: 43.8881, trocas: 2530754, iteracoes: 13284504 },
  { nome: "Cocktail Sort", tamanho: 500000, rodada: 2, ms: 231538.576, trocas: 62446728205, iteracoes: 93667320715 },
  { nome: "TimSort", tamanho: 500000, rodada: 2, ms: 58.9985, trocas: 10871702, iteracoes: 11277454 },
  { nome: "Gnome Sort", tamanho: 500000, rodada: 2, ms: 171334.8459, trocas: 62599006659, iteracoes: 125198513293 },
  { nome: "Comb Sort", tamanho: 500000, rodada: 3, ms: 70.7093, trocas: 4703785, iteracoes: 25833418 },
  { nome: "Selection Sort", tamanho: 500000, rodada: 3, ms: 48149.0988, trocas: 499999, iteracoes: 445698416 },
  { nome: "Quick Sort", tamanho: 500000, rodada: 3, ms: 44.5254, trocas: 2522880, iteracoes: 13414540 },
  { nome: "Cocktail Sort", tamanho: 500000, rodada: 3, ms: 232944.0009, trocas: 62500784030, iteracoes: 93837313575 },
  { nome: "TimSort", tamanho: 500000, rodada: 3, ms: 60.9541, trocas: 10860374, iteracoes: 11266525 },
  { nome: "Gnome Sort", tamanho: 500000, rodada: 3, ms: 181364.3093, trocas: 62485581779, iteracoes: 124971663539 },
  { nome: "Comb Sort", tamanho: 500000, rodada: 4, ms: 68.4678, trocas: 4705392, iteracoes: 24833420 },
  { nome: "Selection Sort", tamanho: 500000, rodada: 4, ms: 47649.6442, trocas: 499999, iteracoes: 445698416 },
  { nome: "Quick Sort", tamanho: 500000, rodada: 4, ms: 44.1388, trocas: 2531946, iteracoes: 13406848 },
  { nome: "Cocktail Sort", tamanho: 500000, rodada: 4, ms: 234965.8017, trocas: 62431321328, iteracoes: 93686843374 },
  { nome: "TimSort", tamanho: 500000, rodada: 4, ms: 58.0688, trocas: 10862054, iteracoes: 11268459 },
  { nome: "Gnome Sort", tamanho: 500000, rodada: 4, ms: 161394.5555, trocas: 62460844033, iteracoes: 124922188041 },
  { nome: "Comb Sort", tamanho: 500000, rodada: 5, ms: 70.5936, trocas: 4702755, iteracoes: 25333419 },
  { nome: "Selection Sort", tamanho: 500000, rodada: 5, ms: 47932.5408, trocas: 499999, iteracoes: 445698416 },
  { nome: "Quick Sort", tamanho: 500000, rodada: 5, ms: 44.5738, trocas: 2508489, iteracoes: 13870352 },
  { nome: "Cocktail Sort", tamanho: 500000, rodada: 5, ms: 234675.8443, trocas: 62492638007, iteracoes: 93843304875 },
  { nome: "TimSort", tamanho: 500000, rodada: 5, ms: 62.6487, trocas: 10864977, iteracoes: 11270538 },
  { nome: "Gnome Sort", tamanho: 500000, rodada: 5, ms: 161847.3661, trocas: 62506728624, iteracoes: 125013957221 },
  { nome: "Comb Sort", tamanho: 1000000, rodada: 1, ms: 141.4841, trocas: 9750646, iteracoes: 49666762 },
  { nome: "Selection Sort", tamanho: 1000000, rodada: 1, ms: 192080.9476, trocas: 999999, iteracoes: 1783293664 },
  { nome: "Quick Sort", tamanho: 1000000, rodada: 1, ms: 90.0066, trocas: 5311881, iteracoes: 28345508 },
  { nome: "Cocktail Sort", tamanho: 1000000, rodada: 1, ms: 927470.8541, trocas: 250005517094, iteracoes: 375151703640 },
  { nome: "TimSort", tamanho: 1000000, rodada: 1, ms: 127.4685, trocas: 22730246, iteracoes: 23541911 },
  { nome: "Gnome Sort", tamanho: 1000000, rodada: 1, ms: 666253.7799, trocas: 250040968794, iteracoes: 500082937565 },
  { nome: "Comb Sort", tamanho: 1000000, rodada: 2, ms: 148.5613, trocas: 9751521, iteracoes: 50666761 },
  { nome: "Selection Sort", tamanho: 1000000, rodada: 2, ms: 191288.4988, trocas: 999999, iteracoes: 1783293664 },
  { nome: "Quick Sort", tamanho: 1000000, rodada: 2, ms: 89.5659, trocas: 5325579, iteracoes: 27893618 },
  { nome: "Cocktail Sort", tamanho: 1000000, rodada: 2, ms: 965501.0055, trocas: 249846176571, iteracoes: 374810678747 },
  { nome: "TimSort", tamanho: 1000000, rodada: 2, ms: 129.8631, trocas: 22737610, iteracoes: 23549089 },
  { nome: "Gnome Sort", tamanho: 1000000, rodada: 2, ms: 653976.8445, trocas: 250404489122, iteracoes: 500809978209 },
  { nome: "Comb Sort", tamanho: 1000000, rodada: 3, ms: 141.084, trocas: 9745616, iteracoes: 49666762 },
  { nome: "Selection Sort", tamanho: 1000000, rodada: 3, ms: 191591.5886, trocas: 999999, iteracoes: 1783293664 },
  { nome: "Quick Sort", tamanho: 1000000, rodada: 3, ms: 92.4506, trocas: 5310054, iteracoes: 28857098 },
  { nome: "Cocktail Sort", tamanho: 1000000, rodada: 3, ms: 938876.1809, trocas: 249835092306, iteracoes: 374886724575 },
  { nome: "TimSort", tamanho: 1000000, rodada: 3, ms: 124.8928, trocas: 22719275, iteracoes: 23531656 },
  { nome: "Gnome Sort", tamanho: 1000000, rodada: 3, ms: 649763.1207, trocas: 249882574192, iteracoes: 499766148351 },
  { nome: "Comb Sort", tamanho: 1000000, rodada: 4, ms: 147.5636, trocas: 9750319, iteracoes: 49666762 },
  { nome: "Selection Sort", tamanho: 1000000, rodada: 4, ms: 191830.3678, trocas: 999999, iteracoes: 1783293664 },
  { nome: "Quick Sort", tamanho: 1000000, rodada: 4, ms: 90.2857, trocas: 5304309, iteracoes: 28523446 },
  { nome: "Cocktail Sort", tamanho: 1000000, rodada: 4, ms: 926969.9985, trocas: 249909765468, iteracoes: 375202667379 },
  { nome: "TimSort", tamanho: 1000000, rodada: 4, ms: 124.713, trocas: 22720683, iteracoes: 23533365 },
  { nome: "Gnome Sort", tamanho: 1000000, rodada: 4, ms: 657573.6623, trocas: 250002308302, iteracoes: 500005616587 },
  { nome: "Comb Sort", tamanho: 1000000, rodada: 5, ms: 144.6821, trocas: 9746415, iteracoes: 49666762 },
  { nome: "Selection Sort", tamanho: 1000000, rodada: 5, ms: 190964.1619, trocas: 999999, iteracoes: 1783293664 },
  { nome: "Quick Sort", tamanho: 1000000, rodada: 5, ms: 89.4984, trocas: 5322346, iteracoes: 27550201 },
  { nome: "Cocktail Sort", tamanho: 1000000, rodada: 5, ms: 939545.6705, trocas: 250053914853, iteracoes: 375206664095 },
  { nome: "TimSort", tamanho: 1000000, rodada: 5, ms: 125.4935, trocas: 22732200, iteracoes: 23543737 },
  { nome: "Gnome Sort", tamanho: 1000000, rodada: 5, ms: 658899.4803, trocas: 249908709438, iteracoes: 499818418847 }
].map(item => ({
  ...item,
  tamanho: formataTamanho(item.tamanho)
}));

export function calculaVariacao(dados: TempoOrdenacaoItem[]): number {
  let media: number = 0
  dados.map((value) => {
    media += value.ms
  })
  media = media / dados.length
  return Math.round(media * 100) / 100
}
export function formataTamanho(tamanho: number): string {
  if (tamanho >= 1_000_000_000) return `${tamanho / 1_000_000_000}B`;
  if (tamanho >= 1_000_000) return `${tamanho / 1_000_000}kk`;
  if (tamanho >= 1_000) return `${tamanho / 1_000}k`;
  return tamanho.toString();
}

export const mediaPorTamanho = Object.values(
  tempoOrdenacao.reduce((acc, curr) => {
    const key = `${curr.tamanho}-${curr.nome}`;
    if (!acc[key]) {
      acc[key] = { ...curr, count: 1 };
    } else {
      acc[key].ms += curr.ms;
      acc[key].trocas += curr.trocas;
      acc[key].iteracoes += curr.iteracoes;
      acc[key].count += 1;
    }
    return acc;
  }, {} as Record<string, any>)
).map((item) => ({
  ...item,
  ms: item.ms / item.count,
  trocas: Math.round(item.trocas / item.count),
  iteracoes: Math.round(item.iteracoes / item.count),
}))

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

export function computaMediaPorNomeTamanho(tamanhoOriginal: number) {
  const filtrados = filtraSortPorTamanho(tamanhoOriginal);
  const grupos: Record<string, { total: Omit<TempoOrdenacaoItem, "nome" | "tamanho">; count: number; nome: string; tamanho: string }> = {};

  for (const item of filtrados) {
    const chave = `${item.nome}|${item.tamanho}`;
    if (!grupos[chave]) {
      grupos[chave] = {
        total: { rodada: 0, ms: 0, trocas: 0, iteracoes: 0 },
        count: 0,
        nome: item.nome,
        tamanho: item.tamanho,
      };
    }
    grupos[chave].total.rodada += item.rodada;
    grupos[chave].total.ms += item.ms;
    grupos[chave].total.trocas += item.trocas;
    grupos[chave].total.iteracoes += item.iteracoes;
    grupos[chave].count += 1;
  }

  return Object.values(grupos).map(({ nome, tamanho, total, count }) => ({
    nome,
    tamanho,
    rodada: Math.round(total.rodada / count),
    ms: total.ms / count,
    trocas: Math.round(total.trocas / count),
    iteracoes: Math.round(total.iteracoes / count),
  }));
}

export const chartConfig = {
  ms: {
    label: "ms",
    color: "var(--chart-3)",
  },
  trocas: {
    label: "Trocas",
    color: "var(--chart-2)"
  },
  iteracoes: {
    label: "Iterações",
    color: "var(--chart-1)"
  },
  tamanho: {
    label: "Tamanho",
    color: "var(--chart-4)"
  }
} satisfies ChartConfig
