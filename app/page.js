import Faq from '@components/Faq'
import Features from '@components/Features'
import Hero from '@components/Hero'
import Question from '@components/Question'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Faq />
      <Question/>
    </main>
  )
}
