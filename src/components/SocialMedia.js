import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const handleClickLinkedin = () => {
  window.open('https://www.linkedin.com/in/juandavid-sanguino/');
}

const handleClickGitHub = () => {
  window.open('https://github.com/juansanguinoo/');
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
      onClick={handleClickGitHub}
    >
      <BsGithub />
    </div>
    <div
      onClick={handleClickMail}
    >
      <SiGmail />
    </div>
  </div>
);

export default SocialMedia;