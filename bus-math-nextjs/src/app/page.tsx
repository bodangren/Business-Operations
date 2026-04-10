import { HeroSection } from "@/components/landing/sections/HeroSection"
import { FeaturesSection } from "@/components/landing/sections/FeaturesSection"
import { CurriculumSection } from "@/components/landing/sections/CurriculumSection"
import { ImpactSection } from "@/components/landing/sections/ImpactSection"
import { Footer } from "@/components/landing/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <HeroSection />
      <FeaturesSection />
      <CurriculumSection />
      <ImpactSection />
      <Footer />
    </div>
  )
}
