import Image from "next/image";
import {
  Inter,
  Bebas_Neue,
  Alata,
  Archivo_Black,
  Archivo,
  Raleway,
  Ubuntu,
  Montserrat,
} from "next/font/google";
import Head from "next/head";
import {
  IntroSection,
  ShortDescriptionSection,
  OverlayBg,
  TraverseBlocks,
  CategoriesSearch,
  Headers,
} from "@/exports";
const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["700"] });
const raleway = Raleway({ subsets: ["latin"], weight: "700" });

export default function Home() {
  // The Homepage section, this carries some template components, each being a section of the homepage
  // The components are named terribly, trust me, I know
  return (
    <main>
      <Headers />
      <section className="flex  min-h-screen flex-col items-center justify-between w-full overflow-hidden">
        <IntroSection raleway={raleway} ubuntu={ubuntu} montserrat={montserrat}/>
        <ShortDescriptionSection raleway={raleway} ubuntu={ubuntu} montserrat={montserrat}/>
        <CategoriesSearch raleway={raleway} ubuntu={ubuntu} montserrat={montserrat}/>
        <OverlayBg raleway={raleway} ubuntu={ubuntu} montserrat={montserrat}/>
        <TraverseBlocks raleway={raleway} ubuntu={ubuntu} montserrat={montserrat}/>
      </section>
    </main>
  );
}
