import React from 'react';
import ScreenContent from '../ScreenContent';
import { Gmaps, Marker } from 'react-gmaps';

const SixthScreen = props => {
  const coords = {
    lat: 51.5258541,
    lng: -0.08040660000006028
  };

  const params = { v: '3.exp', key: 'AIzaSyAVJGVgREJdA70A9P-hTX-E-amZn7079sw' };
  return (
    <ScreenContent isReverse={true} {...props}>
      <div className="col-md-9">
        <Gmaps
          width={'100%'}
          height={'100vh'}
          disableDefaultUI={true}
          {...coords}
          zoom={12}
          params={params}
        >
          <Marker {...coords} />
        </Gmaps>
      </div>
      <div className="col-md-3">
        <div>
          <div><a href="tel:+380888888888">+380 (88) 888 8888</a></div>
          <div><a href="mailto:support@lofti-space.com">support@lofti-space.com</a></div>
          <div><span>г. Киев, <br /> бул. Леси Украинки, 12</span></div>
          <div className="links">
            <a href="/">INSTAGRAM</a>
            <a href="/">FACEBOOK</a>
            <a href="/">TWITTER</a>
          </div>
        </div>
        <button>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </ScreenContent>
  );
}

export default SixthScreen;
