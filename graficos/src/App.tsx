import './global.css'
import { TempoOrdenacao1000 } from './grafico/tempo-ordenacao-1000'
import { TempoOrdenacao100_000 } from './grafico/tempo-ordenacao-100_000'
import { TempoOrdenacao10_000 } from './grafico/tempo-ordenacao-10_000'
import { TempoOrdenacao1_000_000 } from './grafico/tempo-ordenacao-1_000_000'
import { TempoOrdenacao500_000 } from './grafico/tempo-ordenacao-500_000'
import { TempoOrdenacaoGeral } from './grafico/tempo-ordenacaoGeral'


export function App() {

  return (
    <div className='w-screen'>
      <div className='m-5'>
        <h1 className='text-3xl font-bold'>Análise de performance</h1>
        <p className='text-muted-foreground mb-2'>
          <span className='font-bold'>Alunos:</span> Ana Paula, Carlos Nogueira, Giovanni Galarda, Luis Gustavo
        </p>
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-9 gap-4'>
          </div>
          <div className='grid gap-4'>
            <TempoOrdenacaoGeral />
            <TempoOrdenacao1000 />
            <TempoOrdenacao10_000 />
            <TempoOrdenacao100_000 />
            <TempoOrdenacao500_000 />
            <TempoOrdenacao1_000_000 />
          </div>
          <div className='grid grid-cols-2 gap-4'>
          </div>
        </div>
      </div>
    </div>
  )
}
