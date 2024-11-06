import React from 'react';
import preloader from '../../../asets/images/preloader.svg';
let Preloader = (props) => {
    return <div style={{ width: '150px', height: '150px'}}>
        <img src={preloader}/>
    </div>
}
export default Preloader;