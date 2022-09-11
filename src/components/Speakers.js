import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";
const Speakers = ({ theme, setTheme, data }) => {
  const [ShowSession, setShowSession] = useState(true);

  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        ShowSession={ShowSession}
        setShowSession={setShowSession}
      />

      <SpeakersList data={data} ShowSession={ShowSession} />
    </>
  );
};

export default Speakers;
