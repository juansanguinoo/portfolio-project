import React from 'react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const handleClickLinkedin = () => {
  window.open('https://www.linkedin.com/in/juan-david-sanguino-483783260/');
}

const handleClickWhatsapp = () => {
  window.open('https://wa.me/573124645360');
}

const handleClickMail = () => {
  window.open('mailto:juandavidsanguinoo@gmail.com')
}

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={handleClickLinkedin}
    >
      <BsLinkedin />
    </div>
    <div
      onClick={handleClickWhatsapp}
    >
      <BsWhatsapp />
    </div>
    <div
      onClick={handleClickMail}
    >
      <SiGmail />
    </div>
  </div>
);

export default SocialMedia;