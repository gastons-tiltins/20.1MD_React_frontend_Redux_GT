import logo from '../../assets/images/animals_logo.webp';
import './InitialView.scss';

export const InitialView = () => {
    return (
        <div className='initViewContainer'>
            <div className='flexCenter'>
                <img src={logo} className='logoImage' alt='logo' />
            </div>
            <div>
                <h1>No animals added yet</h1>
            </div>
            <div className='control'>
                <button className='button is-link'>Add animal</button>
            </div>
            <div></div>
        </div>
    );
};
