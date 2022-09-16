import Speaker from "./Speaker";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import ReactPlaceholder from "react-placeholder";
import { data } from "../../SpeakerData";
import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
function SpeakersList() {
  const {
    data: speakerData,
    isLoading,
    requestState,
    updateRecord,
  } = useRequestDelay(2000, data);

  const { queryString, eventYear } = useContext(SpeakerFilterContext);

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
          {speakerData
            .filter(function (speaker) {
              return (
                speaker.first.toLowerCase().includes(queryString) ||
                speaker.last.toLowerCase().includes(queryString)
              );
            })
            .filter(function (speaker) {
              return speaker.sessions.find((session) => {
                return session.eventYear === eventYear;
              });
            })
            .map(function (speaker) {
              return (
                <Speaker
                  key={speaker.id}
                  speaker={speaker}
                  updateRecord={updateRecord}
                />
              );
            })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
