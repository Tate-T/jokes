import s from './List.module.css';
import React from 'react';
import { useGetJokesQuery, useDeleteJokesMutation} from '../../redux/jokesApi';

export const List = ({filter}) => {
    const response = useGetJokesQuery();
    const { data: jokes} = response;

const [deleteJoke] = useDeleteJokesMutation();

    const findJokes = () => {
        if (!filter) {
            return jokes || []
        }
         return jokes?.filter(joke => joke.id.toLowerCase().includes(filter?.toLowerCase())) || [];
    }

    return (
        <ul className={s.jokesList}>
            {/* {findJokes().map(joke => (
                <li className={s.jokeItem} key={joke.id}>
                    <p className={s.jokeText}>{joke.name}</p>
                    <button type='button' className={s.deletBtn}>Delete</button>
                </li>
            ))

            } */}
        </ul>
    )
}

// export default List;