import { createContext, startTransition } from "react";

import useSpeackerFilter from "../hooks/useSpeackerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({ startingShowSession = "false", children }) {
  const { ShowSession, setShowSession } =
    useSpeackerFilter(startingShowSession);

  return (
    <SpeakerFilterContext.Provider value={{ ShowSession, setShowSession }}>
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export { SpeakerFilterProvider, SpeakerFilterContext };
