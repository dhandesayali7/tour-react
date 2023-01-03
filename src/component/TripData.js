import "./Trip.css";

function TripData (props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img  alt="image" src= {props.image}/>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default TripData;