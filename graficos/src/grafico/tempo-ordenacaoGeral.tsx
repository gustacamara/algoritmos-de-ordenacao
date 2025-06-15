import { Gauge } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { calculaVariacao, chartConfig, formataTamanho, mediaPorTamanho} from "@/data/data"

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

export function TempoOrdenacaoGeral() {
  return (
    <Card className="grid grid-cols-2-col col-span-3 gap-4">
      <CardHeader>
        <CardTitle>Tempo de ordenação geral</CardTitle>
        <CardDescription>
          Comparativo com a média dos vetores de <span className="text-accent-foreground">todos</span> os algoritmos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[240px] w-full">
          <BarChart accessibilityLayer data={mediaPorTamanho}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="nome"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(_, i) => (mediaPorTamanho[i].tamanho)}
              interval={0}
              padding={{ left: 10, right: 10 }}
              tick={({ x, y, index }) => (
                <g>
                  <text
                    x={x}
                    y={y + 15}
                    textAnchor="middle"
                    fill="#888"
                    fontSize={12}
                  >
                    {mediaPorTamanho[index].tamanho}
                  </text>
                  {index !== 0 &&
                    mediaPorTamanho[index].tamanho !== mediaPorTamanho[index - 1].tamanho && (
                      <line
                        x1={x - 25}
                        x2={x - 25}
                        y1={0}
                        y2={220}
                        stroke="#e5e7eb"
                        strokeDasharray="4 2"
                      />
                    )}
                </g>
              )}
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
          Execução média geral: {calculaVariacao(mediaPorTamanho)} ms<Gauge className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Mostra o tempo de execução e a quantidade de comparações de cada
          algoritmo de ordenação.
        </div>
      </CardFooter>
    </Card>
  )
}
