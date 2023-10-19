import React from 'react';
import Navbar from './component/Navbar';
import Searchbar from './component/Searchbar';
import backgroundImage from './assets/backgroundimage.jpg';
import PexelsGallery from './component/PexelsGallery';

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '330px',
      }}
    >
      <Navbar />
      <Searchbar />
      <PexelsGallery />
    </div>
  );
};

export default App;
