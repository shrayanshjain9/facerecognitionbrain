import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect Faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-80 center o-70' type='text' placeholder='Enter your URL' onChange={onInputChange}/>
                    <button 
                    className='w-20 grow f4 link ph3 pv2 dib bg-light-green'
                    onClick={onButtonSubmit}>Detect</button>    
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;