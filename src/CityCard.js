export default function CityCard(props) {

  return (

    <div className = "city-card">

      <img src = {props.img} className = "city-img" alt={props.place} />

      <div className = "city-infocard">

          <h3 className = "place">{props.place}</h3>

          <p className = "country">{props.country}</p>

          <h4 className = "travel-dates">{props.startDate}</h4>

          <h4 className = "travel-dates">{props.endDate}</h4>

          <p className = "place-definition">{props.description}</p>

    </div>


  </div>
  )
}
