import Speaker from "./Speaker";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import ReactPlaceholder from "react-placeholder";
import { data } from "../../SpeakerData";
function SpeakersList() {
  const {
    data: speakerData,
    isLoading,
    requestState,
    updateRecord,
  } = useRequestDelay(2000, data);

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
                onFavoriteToggle={(doneCallBack) => {
                  updateRecord(
                    {
                      ...speaker,
                      favorite: !speaker.favorite,
                    },
                    doneCallBack
                  ); // updateRecord(speaker);
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
