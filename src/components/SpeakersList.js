import Speaker from "./Speaker";

function SpeakersList({ data, ShowSession }) {
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
