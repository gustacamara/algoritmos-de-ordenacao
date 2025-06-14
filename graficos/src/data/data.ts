function formataTamanho(tamanho: number): string {
  if (tamanho >= 1_000_000) return `${tamanho / 1_000_000}kk`;
  if (tamanho >= 1_000) return `${tamanho / 1_000}k`;
  return tamanho.toString();
}

export const tempoOrdenacao = [
  { nome: "Quick Sort", ms: 180, comparacoes: 18, trocas: 8, tamanho: 1000 },
  { nome: "Merge Sort", ms: 250, comparacoes: 25, trocas: 12, tamanho: 10000 },
  { nome: "Heap Sort", ms: 1200, comparacoes: 100, trocas: 90, tamanho: 100000 },
  { nome: "Bubble Sort", ms: 950, comparacoes: 85, trocas: 70, tamanho: 500000 },
  { nome: "Insertion Sort", ms: 1100, comparacoes: 95, trocas: 80, tamanho: 1000000 },
  { nome: "Selection Sort", ms: 400, comparacoes: 35, trocas: 20, tamanho: 1000 },
  { nome: "Shell Sort", ms: 90, comparacoes: 10, trocas: 5, tamanho: 10000 },
  { nome: "Counting Sort", ms: 100, comparacoes: 12, trocas: 6, tamanho: 100000 },
  { nome: "Radix Sort", ms: 130, comparacoes: 15, trocas: 7, tamanho: 500000 },
  { nome: "Bucket Sort", ms: 230, comparacoes: 21, trocas: 10, tamanho: 1000000 },
  { nome: "Quick Sort", ms: 180, comparacoes: 18, trocas: 8, tamanho: 1000 },
  { nome: "Merge Sort", ms: 250, comparacoes: 25, trocas: 12, tamanho: 10000 },
  { nome: "Heap Sort", ms: 1200, comparacoes: 100, trocas: 90, tamanho: 100000 },
  { nome: "Bubble Sort", ms: 950, comparacoes: 85, trocas: 70, tamanho: 500000 },
  { nome: "Insertion Sort", ms: 1100, comparacoes: 95, trocas: 80, tamanho: 1000000 },
  { nome: "Selection Sort", ms: 400, comparacoes: 35, trocas: 20, tamanho: 1000 },
  { nome: "Shell Sort", ms: 90, comparacoes: 10, trocas: 5, tamanho: 10000 },
  { nome: "Counting Sort", ms: 100, comparacoes: 12, trocas: 6, tamanho: 100000 },
  { nome: "Radix Sort", ms: 130, comparacoes: 15, trocas: 7, tamanho: 500000 },
  { nome: "Bucket Sort", ms: 230, comparacoes: 21, trocas: 10, tamanho: 1000000 },
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
