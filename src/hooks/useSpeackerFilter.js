import { useState } from "react";

function useSpeackerFilter(startingShowSession) {
  const [ShowSession, setShowSession] = useState(startingShowSession);

  return {
    ShowSession,
    setShowSession,
  };
}

export default useSpeackerFilter;
