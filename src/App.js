import Navbar from "./Navbar"
import CityCard from "./CityCard"
import Footer from "./Footer"
import data from "./data.js"

export default function App() {

  const travelDatas = data.map(travelData => {

    return <CityCard
     travelData = {travelData}
     />

  })

  return (
   <div>
     <Navbar />
     {travelDatas}
     <Footer />
   </div>
  )
}
