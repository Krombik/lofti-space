import React from 'react';
import ScreenContent from '../ScreenContent';
import { Gmaps, Marker } from 'react-gmaps';
import Contact from './Contact'
import './style.scss';

const SixthScreen = props => {
  const coords = {
    lat: 51.5258541,
    lng: -0.08040660000006028
  };
  const sideTitle = {
    title: 'contacts',
  };
  const sideBack = {
    col: 3
  }

  const params = { v: '3.exp', key: 'AIzaSyAVJGVgREJdA70A9P-hTX-E-amZn7079sw' };
  return (
    <ScreenContent isReverse={true} className="contacts" sideBack={sideBack} sideTitle={sideTitle} {...props}>
      <div className="col-lg-9 contacts__map">
        <Gmaps
          height={'100vh'}
          disableDefaultUI={true}
          {...coords}
          zoom={12}
          params={params}
        >
          <Marker {...coords} />
        </Gmaps>
      </div>
      <div className="col-xl-5 col-md-7 contacts__container">
        <div>
          <Contact type="tel" typeText="телефон" value='0123456789' />
          <Contact type="email" typeText="e-mail" value='support@lofti-space.com' />
          <Contact type="adress" typeText="адрес" value='г. Киев, бул. Леси Украинки, 12' />
          <div className="contacts__links">
            <a href="/">INSTAGRAM</a>
            <a href="/">FACEBOOK</a>
            <a href="/">TWITTER</a>
          </div>
          <button className="btn btn__red">ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
      </div>
    </ScreenContent>
  );
}

export default SixthScreen;
