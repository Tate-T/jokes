import s from './List.module.css';
import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addJoke,
  deleteJoke,
  requestJokes,
  requestRefreshJokes,
} from '../../redux/jokesReducer';

export const List = ({ filter }) => {
  //const { data, error, isLoading } = useGetJokesQuery();
  //   console.log('data: ', data);
  const jokes = useSelector(state => state.jokes.jokes);
  const favJokes = useSelector(state => state.jokes.favJokes);
  const isLoading = useSelector(state => state.jokes.isLoading);
  const dispatch = useDispatch();
  // const [deleteJoke] = useDeleteJokeMutation();

  useEffect(() => {
    dispatch(requestJokes());
  }, [dispatch]);

  // const findJokes = () => {
  //     if (!filter) {
  //         return jokes || []
  //     }
  //      return jokes?.filter(joke => joke.id.toLowerCase().includes(filter?.toLowerCase())) || [];
  // }

  const finalJokes = [...favJokes, ...jokes];
  return (
    <>
      <ul className={s.jokesList}>
        {finalJokes?.length > 0 &&
          finalJokes.map(joke => (
            <li className={s.jokesCard}>
              <div className={s.jokesContent}>
                <p className={s.jokesType}>
                  Type: <span className={s.jokesName}>{joke.type}</span>
                </p>
                <p className={s.jokesId}>ID: {joke.id}</p>
              </div>
              <h3 className={s.jokesSetup}>Setup:</h3>
              <p className={s.jokesText}>{joke.setup}</p>
              <h3 className={s.jokesPunchline}>Punchline:</h3>
              <p className={s.jokesText}>{joke.punchline}</p>
              <ul className={s.jokesBtns}>
                <li className={s.jokesBtn}>
                  <button
                    onClick={() => dispatch(deleteJoke(joke))}
                    className={s.jokesDel}
                    type="button"
                  >
                    Delete
                  </button>
                </li>
                <li className={s.jokesBtn}>
                  <button
                    onClick={() => dispatch(addJoke(joke))}
                    className={s.jokesAdd}
                    type="button"
                  >
                    Add
                  </button>
                </li>
                <li className={s.jokesBtn}>
                  <button
                    onClick={() => {
                      dispatch(deleteJoke(joke));
                      dispatch(requestRefreshJokes());
                    }}
                    className={s.jokesRefresh}
                    type="button"
                  >
                    Refresh
                  </button>
                </li>
              </ul>
            </li>
          ))}
      </ul>

      <Button
        variant="contained"
        onClick={() => dispatch(requestRefreshJokes())}
        className={s.jokesLoad}
      >
        Load more
      </Button>
    </>
  );
};

// export default List;
