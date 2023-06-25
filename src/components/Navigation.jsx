import React from 'react';
import '../styles/navigation.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveRoute } from '../store/pokemon';

const Navigation = () => {
    const dispatch = useDispatch();
    const { activeRoute } = useSelector(state => state.pokemon);

    return (
        <section className='navigation-main'>
            <div className="navigation">
                <ul>
                    <Link to="/" className={activeRoute === '/' ? 'active' : ''} onClick={() => dispatch(updateActiveRoute('/'))}>
                        <li>Home <img src='/Home.svg' /></li>
                    </Link>
                    <Link to="/pokemon/bookmarks" className={activeRoute === '/pokemon/bookmarks' ? 'active' : ''} onClick={() => dispatch(updateActiveRoute('/pokemon/bookmarks'))}>
                        <li>Bookmark <img src='/Bookmark.svg' /></li>
                    </Link>
                </ul>
            </div>
        </section>
    )
}

export default Navigation