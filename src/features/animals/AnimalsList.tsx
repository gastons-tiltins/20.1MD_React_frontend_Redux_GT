import {useSelector} from 'react-redux';
// import {selectAllPosts} from '../posts/postsSlice';
import {selectAllAnimals} from '../../components/AddForm/animalsSlice';

export const AnimalsList = () => {
    const animals = useSelector(selectAllAnimals);

    const renderAnimals = animals.map((animal: any) => (
        <article key={animal.id}>
            <h3>{animal.name}</h3>
            <p>{animal.image}</p>
            <p>{animal.species}</p>
        </article>
    ));

    return (
        <section>
            <h2>Animals</h2>
            {renderAnimals}
        </section>
    );
};
