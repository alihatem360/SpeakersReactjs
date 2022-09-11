import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState } from "react";
function SpeakersList({ ShowSession }) {
  const [speakerData, setSpeakerData] = useState(data);
  const onFavoriteToggle = (id) => {
    const speakerRecPreviosState = speakerData.find((rec) => {
      return rec.id === id;
    });

    const speakerUpdated = {
      ...speakerRecPreviosState,
      favorite: !speakerRecPreviosState.favorite,
    };

    const speakerUpdatedData = speakerData.map((rec) => {
      return rec.id === id ? speakerUpdated : rec;
    });

    setSpeakerData(speakerUpdatedData);
  };
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              ShowSession={ShowSession}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
