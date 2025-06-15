import { Gauge } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { computaMediaPorNomeTamanho, chartConfig, formataTamanho, calculaVariacao } from "@/data/data"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function TempoOrdenacao500_000() {
  const dados = computaMediaPorNomeTamanho(500_000)
  return (
    <Card className="grid grid-cols-2-col col-span-1 gap-4">
      <CardHeader>
        <CardTitle>Vetores de 500.000 linhas</CardTitle>
        <CardDescription>
          Comparativo com a média dos vetores de <span className="text-accent-foreground">500.000</span> linhas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <BarChart accessibilityLayer data={dados}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="nome"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              scale="log"
              domain={[1, 'auto']}
              allowDataOverflow
              tickFormatter={(value) => formataTamanho(value)}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="ms" fill="var(--color-ms)" stackId={"a"} />
            <Bar dataKey="trocas" fill="var(--color-trocas)" stackId={"a"} />
            <Bar dataKey="iteracoes" fill="var(--color-iteracoes)" stackId={"a"} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Execução média geral: {calculaVariacao(dados)} ms<Gauge className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Mostra o tempo de execução e a quantidade de comparações de cada
          algoritmo de ordenação.
        </div>
      </CardFooter>
    </Card>
  )
}
