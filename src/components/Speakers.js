import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { useContext } from "react";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";

const Speakers = () => {
  return (
    <SpeakerFilterProvider startingShowSession="false">
      <SpeakersToolbar />

      <SpeakersList />
    </SpeakerFilterProvider>
  );
};

export default Speakers;
