import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Sponsor from '@/components/Sponsor'
import Team from '@/components/Team'

export default function Home() {
  return (
    <main className='px-4 md:px-0'>
      <Navbar />
      <Sponsor />
      <Services />
      <Features />
      <Team />
    </main>
  )
}
