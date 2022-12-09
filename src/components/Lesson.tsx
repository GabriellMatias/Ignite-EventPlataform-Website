import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'Live' | 'Class'
}

export function Lesson(props: LessonProps) {
  /* se a data de liberacao da aula ja passou quer izer que ela ja esta liberada */
  const isLessonAvailabre = isPast(props.availableAt)
  const availableDateFormat = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'K'h'mm",
    { locale: ptBR },
  )

  return (
    <a href="/">
      <span className="text-gray-300">{availableDateFormat}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailabre ? (
            <span className="text-sm text-blue-500 font-medium flex items-centerr gap-2">
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-centerr gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold ">
            {props.type === 'Live' ? 'AO VIVO' : 'AULA PRATICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5  block">{props.title}</strong>
      </div>
    </a>
  )
}
