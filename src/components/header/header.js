import './header.scss';

import HeaderNav from '../headerNav/headerNav';


const Header=({page,onChangePage})=>{

    return (
        <header className='header'>
            <h1>Вселенная <span className='marvel'>Marvel</span></h1>
            <HeaderNav page={page} onChangePage={onChangePage}/>
        </header>
    )
}

export default Header;