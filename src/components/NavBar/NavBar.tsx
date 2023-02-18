import {Link, Outlet} from 'react-router-dom';
export const NavBar = () => {
    return (
        <div>
            <nav
                className='navbar'
                role='navigation'
                aria-label='main navigation'
            >
                <div className='navbar-brand'>
                    <a
                        role='button'
                        className='navbar-burger'
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                <div id='navbarBasicExample' className='navbar-menu'>
                    <div className='navbar-start'>
                        <Link to='/' className='navbar-item'>
                            Animal List
                        </Link>
                        <Link to='/add' className='navbar-item'>
                            Add Animal
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};
