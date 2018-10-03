precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

float plot(vec2 pos, float pct, float thickness) {
  return smoothstep(pct - thickness, pct, pos.y) - smoothstep(pct, pct + thickness, pos.y);
}

@import ../shader-utils;

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;
  vec2 u_mouse = u_mouse / u_resolution - 0.5;
  // scale and translate coordinate system
  // position.x -= 0.5;
  // position *= 2.0;
  float x = position.x;
  float y = position.y;
  vec3 color = vec3(0.0);

  vec3 white = vec3(1.0);
  vec3 black = vec3(0.0);

  vec2 bl = step(vec2(0.1), position);
  vec2 tr = step(vec2(0.1), 1.0 - position);
  float borders = bl.x * bl.y * tr.x * tr.y;
  color += vec3(borders);
  gl_FragColor = vec4(color, 1.0);
}
