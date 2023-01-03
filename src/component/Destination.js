import Mountain1 from "../assets/2.jpg";
import Mountain2 from "../assets/GOA1.webp";
import Mountain3 from "../assets/13.jpg";

import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame.</p>
      <DestinationData
    
        heading="Taal Volcano,Batangas"
        text="One of the more devastating eruptions of Taal took place in January
          1911. During the night of the 27th of that month, the seismographs
          at the Manila Observatory commenced to register frequent
          disturbances, which were at first of insignificant importance, but
          increased rapidly in frequency and intensity. The total recorded
          shocks on that day numbered 26. During the 28th there were recorded
          217 distinct shocks, of which 135 were microseismic and 10 quite
          severe. The frequent and increasingly strong earthquakes caused much
          alarm in Manila, but the observatory staff was soon able to locate
          their epicenter in the region of Taal Volcano and assured the public
          that Manila was in no danger, as Taal was some 60 km (37 mi) away,
          too far to directly damage the city.Great changes took place in the
          crater after the eruption. Before 1911, the crater floor was higher
          than Taal lake and had several separate openings in which there were
          lakes of different colors. There was a green lake, a yellow lake, a
          red lake and some holes filled with hot water from which steam
          issued. Many places were covered with a shaky crust of volcanic
          material, full of crevices, which was always hot and on which it was
          rather dangerous to walk. Immediately after the explosion, the
          various colored lakes had disappeared and in their place was one
          large lake, about ten feet below the level of the lake surrounding
          the island."
        img1={Mountain1}
        
      />
      <DestinationData
      
        heading="Mt.Daguldul,Batangas"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain.
The Tagalog word “Daguldol” means a feeling of apprehension and grandiosity. According to locals, the mountain was named as such because it describes the magnificence of the mountain range and the blunt rolling of its slopes. Mt. Daguldol has a total trail length of nine kilometers.However, it’s one of a kind mountain where hikers can be able to experience a diversity of landscapes. Mt. Daguldol has three different trails. First is the trail where one can see the beach or seaside. The second is the trail that passes by woodlands and forests. The third is the grassland trail at the top of the mountain where one can see the mountain ranges and coastal view of Batangas. "
        img1={Mountain2}
       
      />
      <DestinationData
        heading="Ladakh SUV"
        text="Surrounded by ice-capped mountains of the Himalayan ranges and Karakoram. And with endless stretches of natural beauty at its pristine stage, Leh Ladakh is the perfect getaway if you want to experience a new culture and environment. To truly experience the rich culture and the beautiful landscape, you should never miss out on a trip to Ladakh.
        You can visit places like Pangong Lake, Diskit Monastery, Royal Leh Palace, Nubra Valley, Tsomoriri Lake, Khardung La, Indus and Zanskar River Sanga; and definitely, a new mesmerizing culture.."
        img1={Mountain3}
        
      />
    </div>
  );
};
export default Destination;
