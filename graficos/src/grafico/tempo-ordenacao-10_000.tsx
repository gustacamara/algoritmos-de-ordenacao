import { Gauge } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { chartConfig, filtraSortPorTamanho, tempoOrdenacao } from "@/data/data"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

function calculaVariacao(): number {
  let media: number = 0
  tempoOrdenacao.map((value) => {
    media += value.ms
  })
  media = media / tempoOrdenacao.length
  media = Math.round(media)
  return media
}

export function TempoOrdenacao10_000() {
  return (
    <Card className="grid grid-cols-2-col col-span-3 gap-4">
      <CardHeader>
        <CardTitle>Vetores de 10.000 linhas</CardTitle>
        <CardDescription>
          Comparativo com os vetores de <span className="text-accent-foreground">10.000</span> linhas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <BarChart accessibilityLayer data={filtraSortPorTamanho(10000)}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="nome"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="ms" fill="var(--color-ms)" stackId={"a"} />
            <Bar dataKey="comparacoes" fill="var(--color-comparacoes)" stackId={"a"} />
            <Bar dataKey="trocas" fill="var(--color-trocas)" stackId={"a"} />
            <Bar dataKey="iteracoes" fill="var(--color-iteracoes)" stackId={"a"} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Execução média geral: {calculaVariacao()} ms<Gauge className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Mostra o tempo de execução e a quantidade de comparações de cada
          algoritmo de ordenação.
        </div>
      </CardFooter>
    </Card>
  )
}
