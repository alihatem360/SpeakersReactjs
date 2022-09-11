import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState } from "react";
function SpeakersList({ ShowSession }) {
  const [speakerData, setSpeakerData] = useState(data);
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map(function (speaker) {
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
