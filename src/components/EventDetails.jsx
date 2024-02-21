import { useParams } from "react-router-dom";
import eventsData from '../events.json'
import { useEffect } from "react";

function EventDetails() {

    const { title, id } = useParams();
    console.log(title)
    console.log(id)
    const event = eventsData.find(event => event.id == id); // Find event by name
    useEffect(() => {
        if (event) {
            console.log("Event found:", event);
            // Perform any action you want with the event data here
          } else {
            console.log("Event not found.");
          }
      
    }, [])
    return ( 
        <div>
        <h2>Event Detail</h2>
        <ul>
         
            <li key={event.name}>
              <div>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
               
              </div>
            </li>
          
        </ul>
      </div>
     );
}

export default EventDetails;