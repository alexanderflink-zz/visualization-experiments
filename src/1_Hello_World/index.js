const twgl = require('twgl.js')
import fragmentShader from './fragment.glsl'
import vertexShader from './vertex.glsl'

function experiment(canvas) {
  const gl = canvas.getContext('webgl')
  gl.canvas.width = 300
  gl.canvas.height = 300
  const programInfo = twgl.createProgramInfo(gl, [vertexShader, fragmentShader])
  const arrays = {
    position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
  }
  const uniforms = {
    u_time: 0,
    u_resolution: [gl.canvas.width, gl.canvas.height],
    u_mouse: [0, 0]
  }
  const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays)
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

  window.addEventListener('mousemove', mouseMoveHandler)

  function mouseMoveHandler(e) {
    uniforms.u_mouse = [
      Math.min(Math.max(e.clientX / gl.canvas.width, 0), 1),
      Math.min(Math.max(e.clientY / gl.canvas.height, 0), 1),
    ]
  }

  function render() {
    uniforms.u_time += 0.01
    gl.useProgram(programInfo.program)
    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo)
    twgl.setUniforms(programInfo, uniforms)
    twgl.drawBufferInfo(gl, bufferInfo)
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
}

export default experiment
