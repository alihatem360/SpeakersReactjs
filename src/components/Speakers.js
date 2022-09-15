import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";
const Speakers = () => {
  const [ShowSession, setShowSession] = useState(true);

  return (
    <>
      <SpeakersToolbar
        ShowSession={ShowSession}
        setShowSession={setShowSession}
      />

      <SpeakersList ShowSession={ShowSession} />
    </>
  );
};

export default Speakers;
