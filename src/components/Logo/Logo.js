import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';
import './Logo.css';
const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 ,scale: 1.19,glare:true,maxGlare:.5  }} style={{ height: 125, width: 125 }} >
                <div className="Tilt-inner">
                    <img alt='logo' src={face} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;