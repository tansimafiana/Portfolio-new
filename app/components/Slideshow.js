import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
//import './styles.css';

const Slideshow = () => {

    const slideImages = [
        {
          url: 'https://st3.depositphotos.com/3591429/18431/i/450/depositphotos_184311644-stock-photo-white-background-template-copy-space.jpg',
          caption: 'Slide 1'
        },
        {
          url: 'https://st3.depositphotos.com/3591429/18431/i/450/depositphotos_184311644-stock-photo-white-background-template-copy-space.jpg',
          caption: 'Slide 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 3'
        },
      ];

      const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: 'full'
      }

    return (
        <div className="slide-container">
        <Slide autoplay={false}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <button style={spanStyle}>{slideImage.caption}</button>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    );
};

export default Slideshow;