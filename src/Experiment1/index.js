import P5 from 'p5'

function experiment(canvas) {
  const p5 = new P5(main)
  function main(sketch) {
    sketch.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight)
    }

    sketch.draw = () => {
      p5.ellipse(50, 50, 80, 80)
    }
  }
}

export default experiment
