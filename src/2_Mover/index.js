import P5 from 'p5'
import Mover from './Mover'
import {TweenMax} from 'gsap'

function experiment(canvas) {
  const p5 = new P5(main)
  function main(sketch) {
    const p5 = sketch
    const m = new Mover()

    sketch.setup = () => {
      p5.createCanvas(1080, 1080)
      p5.background(255)
    }

    sketch.draw = () => {
      m.update()
    }
  }
}

export default experiment
