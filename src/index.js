import 'sanitize.css'
import './index.css'
import createExperiment from './Experiment1'

export default function main () {
  const canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const experiment = createExperiment(canvas)
  experiment.run()
}

main();
