import P5 from 'p5'
import Mover from './Mover'
import {TweenMax} from 'gsap'

function experiment(canvas) {
  const p5 = new P5(main)
  function main(sketch) {
    const p5 = sketch
    const wind = new P5.Vector(0.001, 0)
    const gravity = new P5.Vector(0, 0.01)
    const liquid = {x: 0, y: p5.windowHeight / 2, width: p5.windowWidth, height: p5.windowHeight / 2, c: 0.1}
    const m = [...new Array(100)].map(_ => {
      return new Mover(p5, Math.random() * p5.windowWidth, 0, p5.random(1, 10))
    })

    sketch.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
      p5.background(255)
    }

    sketch.draw = () => {
      p5.clear()
      p5.rect(liquid.x, liquid.y, liquid.width, liquid.height)
      m.forEach(mover => {
        if (mover.isInside(liquid)) mover.drag(liquid)
        mover.applyForce(gravity)
        mover.applyForce(wind)
        mover.update()
      })
    }
  }
}

export default experiment
