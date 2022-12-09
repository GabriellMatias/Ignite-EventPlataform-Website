import { gql, useQuery } from '@apollo/client'
import { Lesson } from './Lesson'

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: Array<{
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'Live' | 'Class'
  }>
}
export function SideBar() {
  /* transformar em SSR */
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>
      <section className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.slug}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </section>
    </aside>
  )
}
