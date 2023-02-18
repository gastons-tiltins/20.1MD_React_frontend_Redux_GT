import {Link, Outlet} from 'react-router-dom';
import './NavBar.scss';
export const NavBar = () => {
    return (
        <div>
            <div className='mainNavbar '>
                <Link to='/' className='navbar-item'>
                    Animal List
                </Link>
                <Link to='/add' className='navbar-item'>
                    Add Animal
                </Link>
            </div>
            <Outlet />
        </div>
    );
};
