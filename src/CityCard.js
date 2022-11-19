export default function CityCard(props) {
console.log(props);
  return (

    <div className = "city-card">

      <img src = {props.img} className = "city-img" alt="Anıtkabir" />

      <div className = "city-infocard">

          <p className = "country">{props.country}</p>

          <h3 className = "place">{props.place}</h3>

          <h4 className = "travel-dates">{props.dates}</h4>

          <p className = "place-definition">{props.definition}</p>

    </div>


  </div>
  )
}
