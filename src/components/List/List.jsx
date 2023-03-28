import s from './List.module.css';
import React from 'react';
import { useGetJokesQuery, useDeleteJokesMutation } from '../../redux/jokesApi';

export const List = ({ filter }) => {
  // const response = useGetJokesQuery();
  // const { data: jokes} = response;

  // const [deleteJoke] = useDeleteJokesMutation();

  // const findJokes = () => {
  //     if (!filter) {
  //         return jokes || []
  //     }
  //      return jokes?.filter(joke => joke.id.toLowerCase().includes(filter?.toLowerCase())) || [];
  // }

  return (
    <ul className={s.jokesList}>
      {/* {findJokes().map(joke => (
                <li className={s.jokeItem} key={joke.id}>
                    <p className={s.jokeText}>{joke.name}</p>
                    <button type='button' className={s.deletBtn}>Delete</button>
                </li>
            ))

            } */}

      <li className={s.jokesCard}>
        <div className={s.jokesContent}>
          <p className={s.jokesType}>
            Type: <span className={s.jokesName}>General</span>
          </p>
          <p className={s.jokesId}>ID: #12</p>
        </div>
        <h3 className={s.jokesSetup}>Setup:</h3>
        <p className={s.jokesText}>text</p>
        <h3 className={s.jokesPunchline}>Punchline:</h3>
        <p className={s.jokesText}>text</p>
        <ul className={s.jokesBtns}>
          <li className={s.jokesBtn}>
            <button className={s.jokesDel} type="button">
              Delete
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesAdd} type="button">
              Add
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesRefresh} type="button">
              Refresh
            </button>
          </li>
        </ul>
      </li>

      <li className={s.jokesCard}>
        <div className={s.jokesContent}>
          <p className={s.jokesType}>
            Type: <span className={s.jokesName}>General</span>
          </p>
          <p className={s.jokesId}>ID: #12</p>
        </div>
        <h3 className={s.jokesSetup}>Setup:</h3>
        <p className={s.jokesText}>text</p>
        <h3 className={s.jokesPunchline}>Punchline:</h3>
        <p className={s.jokesText}>text</p>
        <ul className={s.jokesBtns}>
          <li className={s.jokesBtn}>
            <button className={s.jokesDel} type="button">
              Delete
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesAdd} type="button">
              Add
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesRefresh} type="button">
              Refresh
            </button>
          </li>
        </ul>
      </li>

      <li className={s.jokesCard}>
        <div className={s.jokesContent}>
          <p className={s.jokesType}>
            Type: <span className={s.jokesName}>General</span>
          </p>
          <p className={s.jokesId}>ID: #12</p>
        </div>
        <h3 className={s.jokesSetup}>Setup:</h3>
        <p className={s.jokesText}>text</p>
        <h3 className={s.jokesPunchline}>Punchline:</h3>
        <p className={s.jokesText}>text</p>
        <ul className={s.jokesBtns}>
          <li className={s.jokesBtn}>
            <button className={s.jokesDel} type="button">
              Delete
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesAdd} type="button">
              Add
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesRefresh} type="button">
              Refresh
            </button>
          </li>
        </ul>
      </li>

      <li className={s.jokesCard}>
        <div className={s.jokesContent}>
          <p className={s.jokesType}>
            Type: <span className={s.jokesName}>General</span>
          </p>
          <p className={s.jokesId}>ID: #12</p>
        </div>
        <h3 className={s.jokesSetup}>Setup:</h3>
        <p className={s.jokesText}>text</p>
        <h3 className={s.jokesPunchline}>Punchline:</h3>
        <p className={s.jokesText}>text</p>
        <ul className={s.jokesBtns}>
          <li className={s.jokesBtn}>
            <button className={s.jokesDel} type="button">
              Delete
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesAdd} type="button">
              Add
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesRefresh} type="button">
              Refresh
            </button>
          </li>
        </ul>
      </li>

      <li className={s.jokesCard}>
        <div className={s.jokesContent}>
          <p className={s.jokesType}>
            Type: <span className={s.jokesName}>General</span>
          </p>
          <p className={s.jokesId}>ID: #12</p>
        </div>
        <h3 className={s.jokesSetup}>Setup:</h3>
        <p className={s.jokesText}>text</p>
        <h3 className={s.jokesPunchline}>Punchline:</h3>
        <p className={s.jokesText}>text</p>
        <ul className={s.jokesBtns}>
          <li className={s.jokesBtn}>
            <button className={s.jokesDel} type="button">
              Delete
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesAdd} type="button">
              Add
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesRefresh} type="button">
              Refresh
            </button>
          </li>
        </ul>
      </li>

      <li className={s.jokesCard}>
        <div className={s.jokesContent}>
          <p className={s.jokesType}>
            Type: <span className={s.jokesName}>General</span>
          </p>
          <p className={s.jokesId}>ID: #12</p>
        </div>
        <h3 className={s.jokesSetup}>Setup:</h3>
        <p className={s.jokesText}>text</p>
        <h3 className={s.jokesPunchline}>Punchline:</h3>
        <p className={s.jokesText}>text</p>
        <ul className={s.jokesBtns}>
          <li className={s.jokesBtn}>
            <button className={s.jokesDel} type="button">
              Delete
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesAdd} type="button">
              Add
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesRefresh} type="button">
              Refresh
            </button>
          </li>
        </ul>
      </li>

      <li className={s.jokesCard}>
        <div className={s.jokesContent}>
          <p className={s.jokesType}>
            Type: <span className={s.jokesName}>General</span>
          </p>
          <p className={s.jokesId}>ID: #12</p>
        </div>
        <h3 className={s.jokesSetup}>Setup:</h3>
        <p className={s.jokesText}>text</p>
        <h3 className={s.jokesPunchline}>Punchline:</h3>
        <p className={s.jokesText}>text</p>
        <ul className={s.jokesBtns}>
          <li className={s.jokesBtn}>
            <button className={s.jokesDel} type="button">
              Delete
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesAdd} type="button">
              Add
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesRefresh} type="button">
              Refresh
            </button>
          </li>
        </ul>
      </li>

      <li className={s.jokesCard}>
        <div className={s.jokesContent}>
          <p className={s.jokesType}>
            Type: <span className={s.jokesName}>General</span>
          </p>
          <p className={s.jokesId}>ID: #12</p>
        </div>
        <h3 className={s.jokesSetup}>Setup:</h3>
        <p className={s.jokesText}>text</p>
        <h3 className={s.jokesPunchline}>Punchline:</h3>
        <p className={s.jokesText}>text</p>
        <ul className={s.jokesBtns}>
          <li className={s.jokesBtn}>
            <button className={s.jokesDel} type="button">
              Delete
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesAdd} type="button">
              Add
            </button>
          </li>
          <li className={s.jokesBtn}>
            <button className={s.jokesRefresh} type="button">
              Refresh
            </button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

// export default List;
