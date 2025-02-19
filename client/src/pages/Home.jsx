import RealEstateAgents from '../components/RealEstateAgents'
import HeroSection from '../components/HeroSection'
import HotProperty from '../components/HotProperty'
import LatestProperties from '../components/LatestProperty'
import Services from '../components/Services'
import Listing from '../components/Listing'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HotProperty/>
      <Listing />
      <Services/>
      <LatestProperties/>
      <RealEstateAgents/>
      <Testimonial />
    </div>
  )
}
