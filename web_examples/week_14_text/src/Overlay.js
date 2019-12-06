import React from 'react';
import './Overlay.css';

function Overlay(props) {
  const name = props.details.filename.split('/')[1];
  const article = props.details.content;
  const setOverlay = props.setOverlay;

  return (
    <div className="Overlay">
      <button
        onClick={() => {
          setOverlay(null);
        }}
      >Close</button>
      <h1>Category: {name}</h1>
      <div>{article.split('\n').map((para) => {
        return(<p>{para}</p>);
      })}</div>
    </div>
  );
}

export default Overlay;
