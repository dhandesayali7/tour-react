import "./Trip.css";
import TripData from "./TripData";

import Trip1 from "../assets/22.jpg";
import Trip2 from "../assets/15.jpg";
import Trip3 from "../assets/9.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Your can discover unique destinations using Google Map.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia,Bali"
          text="Bali is part of the Coral Triangle, the area with the highest biodiversity of marine species, especially fish and turtles.[12] In this area alone, over 500 reef-building coral species can be found. For comparison, this is about seven times as many as in the entire Caribbean.[13] Bali is the home of the Subak irrigation system, a UNESCO World Heritage Site.[14] It is also home to a unified confederation of kingdoms composed of 10 traditional royal Balinese houses, each house ruling a specific geographic area. The confederation is the successor of the Bali Kingdom. The royal houses are not recognised by the government of Indonesia; however, they originated before Dutch colonisation.[15]"
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings, busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers. "
        />
        <TripData
          image={Trip3}
          heading="Trip in Sri Lanka"
          text="Sri Lanka, formerly known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, and southeast of the Arabian Sea; it is separated from the Indian subcontinent by the Gulf of Mannar and the Palk Strait. "
        />
      </div>
    </div>
  );
}
export default Trip;
