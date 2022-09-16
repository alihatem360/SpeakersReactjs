import { createContext, startTransition } from "react";

import useSpeackerFilter from "../hooks/useSpeackerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({
  startingShowSession = "false",
  children,
  startingEventYear = "2020",
}) {
  const {
    ShowSession,
    setShowSession,
    eventYear,
    setEventYear,
    EVENT_YEARS,
    queryString,
    setQueryString,
  } = useSpeackerFilter(startingShowSession, startingEventYear);

  return (
    <SpeakerFilterContext.Provider
      value={{
        ShowSession,
        setShowSession,
        eventYear,
        setEventYear,
        EVENT_YEARS,
        queryString,
        setQueryString,
      }}
    >
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export { SpeakerFilterProvider, SpeakerFilterContext };
