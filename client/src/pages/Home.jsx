import RealEstateAgents from '../components/RealEstateAgents'
import HeroSection from '../components/HeroSection'
// import HotProperty from '../components/HotProperty'
import LatestProperties from '../components/LatestProperty'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      {/* <HotProperty/> */}
      <Services/>
      <LatestProperties/>
      <RealEstateAgents/>

    </div>
  )
}
