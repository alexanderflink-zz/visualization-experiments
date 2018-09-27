import p5 from 'p5'

const experiment = (canvas) => {
  return {
    run() {
      const myp5 = new p5()
      p5.setup = () => {
        console.log('hej')
      }
    }
  }
}

export default experiment
