import p5 from 'p5'

function experiment(canvas) {
  const P5 = new p5(main)
}

function main(sketch) {
  Object.assign(sketch, {
    setup
  })
}

function setup() {
  console.log('hej')
}

export default experiment
