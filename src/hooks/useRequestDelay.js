// initialize state  of speakers
import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};
function useRequestDelay(delayTime, initialData = []) {
  const [data, setData] = useState(initialData);
  const [message, setMessage] = useState("");
  const [requestState, setRequestState] = useState(REQUEST_STATUS.LOADING);
  // crate delay function
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        await delay(delayTime);
        setRequestState(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch (error) {
        setRequestState(REQUEST_STATUS.FAILURE);
        setMessage(error.message);
      }
    };

    fetchData();
  }, []);

  const updateRecord = (record, doneCallBack) => {
    console.log("record ", record);
    const newData = data.map((item) => {
      if (item.id === record.id) {
        return record;
      }
      return item;
    });

    async function delayFunction() {
      const originalData = [...data];
      try {
        setData(newData);
        await delay(delayTime);
        if (doneCallBack) {
          doneCallBack();
        }
      } catch (error) {
        console.log(error.message);
        if (doneCallBack) {
          doneCallBack();
        }
        setData(originalData);
      }
    }

    delayFunction();
  };

  return {
    data,
    requestState,
    message,
    updateRecord,
  };
}
export default useRequestDelay;
