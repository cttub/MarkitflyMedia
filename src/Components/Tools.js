import React, { Component } from 'react';
import './Style/tools.css';
import frame from '../Assets/Frames/Purple-2.png';
class Tools extends Component {
    state = {  } 
    render() { 
        return (
            <div id='tools'>
                <img className='top-frame' src={frame}/>

            </div>

        );
    }
}
 
export default Tools;