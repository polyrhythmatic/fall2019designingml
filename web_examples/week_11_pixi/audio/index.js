const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true
});

app.renderer.backgroundColor = 0xffffff;

document.body.appendChild(app.view);

const viewport = new Viewport.Viewport({
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

const radius = 10;

for(let i = 0; i < sounds.length; i ++) {
  const soundInfo = sounds[i];

  const xPos = 5 * app.renderer.width * (soundInfo.pos[0] * 2 - 1);
  const yPos = 5 * app.renderer.width * (soundInfo.pos[1] * 2 - 1);

  const circle = new PIXI.Graphics();
  circle.hitArea = new PIXI.Circle(xPos, yPos, radius);

  circle.interactive = true;
  circle.lineStyle (1, 0x000000, 1);
  circle.beginFill(0x55728A, 0.5);
  circle.drawCircle(xPos, yPos, radius);
  circle.endFill();

  circle.interactive = true;

  circle.player = document.createElement('audio');

  circle.player.src = soundInfo.file;

  circle.on('click', () => {
    circle.player.play();
  });

  viewport.addChild(circle);
}

