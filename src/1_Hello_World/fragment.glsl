precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;
  gl_FragColor = vec4(position.x, position.y, 1.0, 1.0);
}
