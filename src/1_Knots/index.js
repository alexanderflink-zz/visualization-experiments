import P5 from 'p5'
import {TweenMax} from 'gsap'

function experiment(canvas) {
  const p5 = new P5(main)
  function main(sketch) {
    const p5 = sketch
    const mouse = new P5.Vector(-1050, p5.windowHeight / 2)
    let position = new P5.Vector(-1050, p5.windowHeight / 2 - 100)
    let velocity = new P5.Vector(0, 0)
    let acceleration = new P5.Vector(0, 0)

    sketch.setup = () => {
      p5.createCanvas(1080, 1080)
      p5.background(255)
      for (var i = 0; i < 10000; i++) {
        mouse.x += 0.5
        const diff = mouse.copy().sub(position)
        const dir = diff.copy().normalize()
        const mag = diff.copy().mag()
        acceleration.add(dir.copy().mult(mag))
        acceleration.limit(1)
        velocity.limit(20)
        velocity.add(acceleration)
        position.add(velocity)

        p5.ellipse(position.x, position.y, 50, 50)
      }
      p5.saveCanvas('knots', 'png')
    }

    sketch.draw = () => {
    }
  }
}

export default experiment
