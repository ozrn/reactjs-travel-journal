export default function CityCard(props) {

  return (

    <div className = "city-card">

      <img src = {props.travelData.imageSource} className = "city-img" alt={props.travelData.title} />

      <div className = "city-infocard">

          <h3 className = "place">{props.travelData.title}</h3>

          <p className = "country">{props.travelData.location}</p>

          <h4 className = "travel-dates">{props.travelData.startDate}</h4>

          <h4 className = "travel-dates">{props.travelData.endDate}</h4>

          <p className = "place-definition">{props.travelData.description}</p>

    </div>


  </div>
  )
}
