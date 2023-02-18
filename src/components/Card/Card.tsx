import './Card.scss';

export const Card = () => {
    return (
        <div>
            <div className='card gridStretch'>
                <div className='card-image'>
                    <figure className='image is-4by3'>
                        <img
                            src='https://bulma.io/images/placeholders/1280x960.png'
                            alt='Placeholder image'
                        />
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='media'>
                        <div className='media-content'>
                            <p className='title is-5 has-text-centered'>
                                Animal Name
                            </p>
                        </div>
                    </div>
                    <div className='content has-text-centered'>
                        <p>Animal species</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
