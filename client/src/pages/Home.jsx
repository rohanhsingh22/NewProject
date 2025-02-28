import RealEstateAgents from '../components/RealEstateAgents'
import HeroSection from '../components/HeroSection'
import HotProperty from '../components/HotProperty'
import LatestProperties from '../components/LatestProperty'
import Services from '../components/Services'
import Listing from '../components/Listing'
import Testimonial from '../components/Testimonial'
import DeveloperCard from '../components/DeveloperCard'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HotProperty/>
      <Listing />
      <Services/>
      <LatestProperties/>
      <DeveloperCard/>
      <RealEstateAgents/>
      <Testimonial/>
    </div>
  )
}
