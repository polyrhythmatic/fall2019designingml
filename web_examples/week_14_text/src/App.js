import React, { useState, useEffect, useRef } from 'react';
import { Viewport } from 'pixi-viewport';
import * as PIXI from 'pixi.js';

import Overlay from './Overlay';
import './App.css';

// first lets make some random colors to represent clusters
const colors = [];
for(let i = 0; i < 10; i ++) {
  //this function makes a random hex code color
  colors.push(Math.floor(Math.random()*16777215))
}

function App() {
  const [overlay, setOverlay] = useState(null);
  const canvas = useRef(null);


  const setupCanvas = (data) => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: canvas.current,
      backgroundColor: 0xffffff,
    });

    const viewport = new Viewport({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        worldWidth: 1000,
        worldHeight: 1000,
        interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
    })

    // add the viewport to the stage
    app.stage.addChild(viewport)

    // activate plugins
    viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()


    let positionDict = {}

    for(let index in data){
        const circle = new PIXI.Graphics();
        const umapPos = data[index].umap_pos;

        const xPos = 5 * app.renderer.width * (umapPos[0] * 2 - 1);
        const yPos = 5 * app.renderer.width * (umapPos[1] * 2 - 1);

        const radius = 10;
        circle.hitArea = new PIXI.Circle(xPos, yPos, radius);
        circle.interactive = true;
        // circle.lineStyle (1, 0x000000, 1);

        // get a random color by our k-means cluster number
        const color = colors[data[index].cluster_num];
        circle.beginFill(color, 1);
        circle.drawCircle(xPos, yPos, radius);
        circle.endFill();

        circle.interactive = true;

        const name = data[index].filename;
        positionDict[name] = data[index];
        circle.on('click', () => {
          setOverlay(positionDict[name]);
        });

        viewport.addChild(circle);
    }
  }

  useEffect(() => {
    fetch('lookup.json').then((resp) => {
      resp.json().then((data) => {
        setupCanvas(data);
      });
    });
  }, [])

  return (
    <div className="App">
      <canvas
        ref={canvas}
      />
      {overlay &&
        <Overlay
          details={overlay}
          setOverlay={setOverlay}
        />
      }
    </div>
  );
}

export default App;
