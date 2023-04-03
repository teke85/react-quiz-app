import { useEffect, useState } from 'react';
import data from '../components/database/data';
import { useDispatch } from 'react-redux';

/** redux actions */
import * as Action from '../redux/question_reducer';

/** fetch question hook to fetch api data and set value to the store */
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    /**async function to fetch backend data */
    (async () => {
      try {
        let question = await data;

        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: question }));

          /** dispatch an action */
          dispatch(Action.startExamAction(question));
        } else {
          throw new Error('No Question Available');
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};
