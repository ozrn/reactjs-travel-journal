import Navbar from "./Navbar"
import CityCard from "./CityCard"
//import data from"./data.js"

export default function App() {

  return (
   <div>
     <Navbar />
     <CityCard
      img = "/images/unsplash-anıtkabir.png"
      country = "Ankara, Turkey"
      place = "Anıtkabir"
      dates = "01 Oct 2022 - 14 Oct 2022"
      definition = "Anıtkabir is the mausoleum of Mustafa Kemal Atatürk, the leader of the Turkish War of Independence and the founder and the first President of the Republic of Turkey."
       />
   </div>
  )
}
