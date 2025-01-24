import React from 'react';

const Background = () => {
  const baseUrl = "http://www.testomic.com/public/codepen-assets/img/paralax";

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#C0B3A0]">
      <div className="absolute w-full h-full overflow-hidden" style={{ backgroundImage: `url(${baseUrl}/background.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute w-full" style={{ height: '50%', bottom: 0, background: `url(${baseUrl}/foreground.png) repeat-x`, backgroundSize: '25% 100%', animation: 'slideshow 30s linear infinite' }}></div>
        <div className="absolute w-full" style={{ height: '40%', bottom: '15%', background: `url(${baseUrl}/hills.png) repeat-x`, backgroundSize: '25% 100%', animation: 'slideshow 60s linear infinite' }}></div>
        <div className="absolute w-full" style={{ height: '35%', bottom: '25%', background: `url(${baseUrl}/rocks1.png) repeat-x`, backgroundSize: '25% 100%', animation: 'slideshow 120s linear infinite' }}></div>
        <div className="absolute w-full" style={{ height: '40%', bottom: '15%', background: `url(${baseUrl}/rocks2.png) repeat-x`, backgroundSize: '25% 100%', animation: 'slideshow 240s linear infinite' }}></div>
      </div>
    </div>
  );
};

export default Background;
