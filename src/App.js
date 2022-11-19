import Navbar from "./Navbar"
import CityCard from "./CityCard"
import data from"./data.js"

export default function App() {

  const travelDatas = data.map(travelData => {

    return <CityCard
     img = {travelData.imageSource}
     alt = {travelData.title}
     place = {travelData.title}
     country = {travelData.location}
     startDate = {travelData.startDate}
     endDate = {travelData.endDate}
     description = {travelData.description}
     />

  })

  return (
   <div>
     <Navbar />
     {travelDatas}
   </div>
  )
}
