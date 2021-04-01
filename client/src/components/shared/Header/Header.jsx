import { Link, withRouter } from 'react-router-dom';

import * as authService from '../../../services/authService.js';

import './Header.css';

function Header({ loggedIn, isAdmin, history }) {
    const logout = () => {
        authService
            .logout();

        history.push('/');
    }

    return (
        <div className="header-wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to="/home" className="navbar-brand">Recipes</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        {!loggedIn && <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>}
                        {!loggedIn && <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>}
                        {loggedIn && <li className="nav-item"> <Link to="/categories" className="nav-link">Categories</Link></li>}
                        {loggedIn && <li className="nav-item"><Link to="/recipes" className="nav-link">Recipes</Link></li>}
                        {loggedIn && <li className="nav-item"> <Link to="/users/own" className="nav-link">My Own Recipes</Link></li>}
                        {loggedIn && <li className="nav-item"><Link to="/users/favourite" className="nav-link">My Favourite Recipes</Link></li>}
                        {loggedIn && isAdmin && <li className="nav-item"><Link to="/admin/dashboard" className="nav-link">Administration</Link></li>}
                        {loggedIn && <li className="nav-item"><button className="btn btn-danger ml-1" type="button" onClick={logout}>Logout</button></li>}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Header);