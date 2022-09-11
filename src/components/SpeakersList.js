import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState } from "react";
function SpeakersList({ ShowSession }) {
  const [data, setData] = useState(data);
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              ShowSession={ShowSession}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
