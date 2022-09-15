// initialize state  of speakers
import { useState, useEffect } from "react";
import { data } from "../../SpeakerData";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};
function useRequestSpkers(delayTime) {
  const [speakerData, setSpeakerData] = useState([]);
  const [message, setMessage] = useState("");
  const [requestState, setRequestState] = useState(REQUEST_STATUS.LOADING);
  // crate delay function
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        await delay(delayTime);
        setRequestState(REQUEST_STATUS.SUCCESS);
        setSpeakerData(data);
      } catch (error) {
        setRequestState(REQUEST_STATUS.FAILURE);
        setMessage(error.message);
      }
    };

    fetchData();
  }, []);

  const onFavoriteToggle = (id) => {
    const speakerRecPreviosState = speakerData.find((rec) => {
      return rec.id === id;
    });

    const speakerUpdated = {
      ...speakerRecPreviosState,
      favorite: !speakerRecPreviosState.favorite,
    };

    const speakerUpdatedData = speakerData.map((rec) => {
      return rec.id === id ? speakerUpdated : rec;
    });

    setSpeakerData(speakerUpdatedData);
  };

  return {
    speakerData,
    requestState,
    message,
    onFavoriteToggle,
  };
}
export default useRequestSpkers;
