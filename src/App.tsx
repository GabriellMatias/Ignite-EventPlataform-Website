import {gql, useQuery} from '@apollo/client'


const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
      teacher{
        name
      }
    }
  }
`
export default function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)
  console.log(data);
  

  /* utilizando o useQuery e a mesma coisa que utilizar o useEffect, no entanto 
  menos codigo e mais performace*/

  // useEffect((()=>{
  //   client.query({
  //     query:GET_LESSONS_QUERY
  //   }).then( response => console.log(response.data)
  //   )
  // }), [])

  return (
    <ul>

      {data?.lessons.map(lesson =>{ 
        return <li>{lesson.title}</li>
      })}
    </ul>
  )
}


