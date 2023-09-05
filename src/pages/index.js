import Image from 'next/image'
import { Inter, Bebas_Neue, Alata, Archivo_Black, Archivo } from 'next/font/google'
import Head from 'next/head'
import { IntroSection, ShortDescriptionSection, OverlayBg, TraverseBlocks, CategoriesSearch, Headers } from '@/exports'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // The Homepage section, this carries some template components, each being a section of the homepage
  // The components are named terribly, trust me, I know
  return (
    <main >
      <Headers />
      <section className="flex  min-h-screen flex-col items-center justify-between">
      <IntroSection />
      <ShortDescriptionSection />
      <CategoriesSearch />
      <OverlayBg />
      <TraverseBlocks />
      </section>
    </main>
  )
}
