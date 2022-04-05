//import { Component } from 'react';

import './headerNav.scss';

const HeaderNav=({page,onChangePage})=>{
    const clasLink='navigate-link';
    
    function changePage(e){
        onChangePage(e.target.getAttribute('data-page'))
    }
    return(
        <ul className="navigate">
            <li
              onClick={(e)=>changePage(e)}>
                <span 
                  className={clasLink + ` ${page==='main'?clasLink + '_active':''}`}
                  data-page='main'>
                      Персонажи</span>
            </li>
            <li
              onClick={(e)=>changePage(e)}>
                <span 
                  className={clasLink+ ` ${page==='comics'?clasLink + '_active  divider':'divider'}`}
                  data-page='comics'>
                      Комиксы</span>
            </li>
        </ul>
    )
}

export default HeaderNav;