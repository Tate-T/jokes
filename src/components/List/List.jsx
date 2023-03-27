import s from './List.module.css';

export const List = ({filter}) => {
    const response = useGetJokesQuery();
    const { data: jokes} = response;

const [deleteJoke] = useDeleteJokesMutation();

    const findJokes = () => {
        if (!filter) {
            return jokes || []
        }
         return jokes?.filter(joke => joke.name.toLowerCase().includes(filter?.toLowerCase())) || [];
    }

    return (
        <ul className={s.jokesList}>
            {findJokes().map(joke => (
                <li className={s.jokeItem} key={joke.id}>
                    <p className={s.jokeText}>{joke.name}</p>
                    <button type='button' className={s.deletBtn}>Delete</button>
                </li>
            ))

            }
        </ul>
    )
}