import Speaker from "./Speaker";
import useRequestSpkers, { REQUEST_STATUS } from "../hooks/useRequestSpkers";
import ReactPlaceholder from "react-placeholder";

function SpeakersList({ ShowSession }) {
  const { speakerData, isLoading, requestState, onFavoriteToggle } =
    useRequestSpkers(2000);
  if (requestState === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        <h3>There has been an error : {message}</h3>
      </div>
    );
  }

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        rows={15}
        ready={requestState === REQUEST_STATUS.SUCCESS}
        className="speakerslist-placeholder"
      >
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
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
