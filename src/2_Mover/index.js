import P5 from 'p5'
import Mover from './Mover'
import {TweenMax} from 'gsap'

function experiment(canvas) {
  const p5 = new P5(main)
  function main(sketch) {
    const p5 = sketch
    const m = new Mover(p5, p5.windowWidth / 2, p5.windowHeight / 2, 5)

    sketch.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
      p5.background(255)
    }

    sketch.draw = () => {
      p5.clear()
      m.applyForce(new P5.Vector(0, 0.1))
      m.update()
    }
  }
}

export default experiment
