import { useState } from "react";

function useSpeackerFilter(startingShowSession, startingEventYear) {
  const [ShowSession, setShowSession] = useState(startingShowSession);
  const [eventYear, setEventYear] = useState(startingEventYear);
  const [queryString, setQueryString] = useState("");

  const EVENT_YEARS = [
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020,
  ];

  return {
    ShowSession,
    setShowSession,
    eventYear,
    setEventYear,
    EVENT_YEARS,
    queryString,
    setQueryString,
  };
}

export default useSpeackerFilter;
