
import '../appBanner/appBanner.scss';

import avengers from '../../resources/img/avengers.png';
import avengersLogo from '../../resources/img/avengers_logo.png';

const AppBanner=()=>{
    return(
        <div className="banner">
            <img src={avengers} alt="avenger" className='left'/>
            <div className="banner_new-comics">
                Новые комиксы каждую неделю!<br></br>
                Следите за обновлениями!
            </div>
            <img src={avengersLogo} alt="avengers_logo" className='right'/>
        </div>
    )
}
export default AppBanner;
