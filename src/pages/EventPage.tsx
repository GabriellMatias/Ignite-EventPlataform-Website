import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { PlayerVideo } from '../components/PlayerVideo'
import { SideBar } from '../components/SideBar'

export function EventPage() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <PlayerVideo lessonSlug={slug} /> : <div className="flex-1" />}
        <SideBar />
      </main>
    </div>
  )
}
