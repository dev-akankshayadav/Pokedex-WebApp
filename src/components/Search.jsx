import React, { useState } from 'react'
import '../styles/search.css'
import { Link, useNavigate } from 'react-router-dom'

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    //handling search functionality and redirecting to deatils page
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/pokemon/${searchValue.trimStart()}`)
    }

    return (
        <section className='search-main'>
            <div className="search">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='seacrh..' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button type='submit'>Search</button>
                </form>
                <div className='search-example'>
                    <p id='eg'>Eg.</p>
                    <Link to='/pokemon/bulbasaur'><p>bulbasaur</p></Link>
                    <Link to='/pokemon/ivysaur'><p>ivysaur</p></Link>
                    <Link to='/pokemon/venusaur'><p>venusaur</p></Link>
                </div>
            </div>
        </section>
    )
}

export default Search