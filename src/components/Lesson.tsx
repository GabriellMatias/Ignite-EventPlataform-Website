import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: string
}

export function Lesson(props: LessonProps) {
  /* se a data de liberacao da aula ja passou quer izer que ela ja esta liberada */
  const isLessonAvailabre = isPast(props.availableAt)
  const availableDateFormat = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'K'h'mm",
    { locale: ptBR },
  )

  const { slug } = useParams<{ slug: string }>()

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormat}</span>

      <div
        className={
          /* blibioteca classnames, recebe a classe que nunca vai ser alterada, e o outro parametro recebe
          a classe que vai alterar quando determinada variavel for true ou false */
          classNames(
            'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
            {
              'bg-green-500': isActiveLesson,
            },
          )
        }
      >
        <header className="flex items-center justify-between">
          {isLessonAvailabre ? (
            <span
              className={classNames(
                'text-sm font-medium flex items-centerr gap-2',
                {
                  'text-white': isActiveLesson,
                  'text-blue-500': !isActiveLesson,
                },
              )}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span
              className={classNames(
                'text-sm  font-medium flex items-centerr gap-2',
                {
                  'text-white': isActiveLesson,
                  'text-orange-500': !isActiveLesson,
                },
              )}
            >
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              'text-xs rounded px-2 py-[2px] text-white border font-bold ',
              {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson,
              },
            )}
          >
            {props.type === 'Live' ? 'AO VIVO' : 'AULA PRATICA'}
          </span>
        </header>
        <strong
          className={classNames(' mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
