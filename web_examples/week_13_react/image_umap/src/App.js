import React, { useState, useEffect, useRef } from 'react';
import { Viewport } from 'pixi-viewport';
import * as PIXI from 'pixi.js';

import Overlay from './Overlay';
import positions from './image_umap_position';
import './App.css';

function App() {
  const [overlay, setOverlay] = useState(null);
  const canvas = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: canvas.current,
    });

    let positionDict = {}

    for(let i = 0; i < positions.length; i ++) {
      const filename = positions[i].filename.replace(/\//g, '_');
      const name = filename.replace('.jpg', '');

      app.loader.add(name, "./resized/" + filename)

      positionDict[name] = positions[i]
    }

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


    app.loader.load((loader, resources) => {
      for(let key in resources) {
        const imageSprite = new PIXI.Sprite(resources[key].texture)

        const clusterPos = positionDict[key].cluster_pos;

        imageSprite.x = 5 * app.renderer.width * (clusterPos[0] * 2 - 1);
        imageSprite.y = 5 * app.renderer.width * (clusterPos[1] * 2 - 1);

        imageSprite.anchor.x = 0.5;
        imageSprite.anchor.y = 0.5;

        imageSprite.interactive = true;

        const name = key;
        imageSprite.on('click', () => {
          setOverlay(positionDict[name]);
        });

        imageSprite.on('mouseover', () => {
          imageSprite.height = imageSprite.height * 2;
          imageSprite.width = imageSprite.width * 2;
        });

        imageSprite.on('mouseout', () => {
          imageSprite.height = imageSprite.height * .5;
          imageSprite.width = imageSprite.width * .5;
        });


        viewport.addChild(imageSprite);
      }
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
