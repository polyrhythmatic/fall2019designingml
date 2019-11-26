import React from 'react';
import './Overlay.css';

function Overlay(props) {
  const name = props.details.filename.split('/')[1];
  const url = props.details.filename.replace(/\//g, '_');
  const setOverlay = props.setOverlay;

  return (
    <div className="Overlay">
      <button
        onClick={() => {
          setOverlay(null);
        }}
      >Close</button>
      <img src={`hires/${url}`} alt="this is our description"/>
      <h1>{name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default Overlay;
