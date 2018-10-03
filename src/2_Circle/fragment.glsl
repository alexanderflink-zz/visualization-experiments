precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

float plot(vec2 pos, float pct) {
  return smoothstep(pct - 0.01, pct, pos.y) - smoothstep(pct, pct + 0.01, pos.y);
}

@import ../shader-utils;

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution;
  float x = position.x;
  float y = position.y;
  vec3 color = vec3(0.0);
  float length = tan(cubicPulse(0.5 * abs(sin(u_time * 2.0)), 0.003, distance(position, vec2(0.5))));
  color += vec3(mix(vec3(1.0), vec3(0.0), length));
  gl_FragColor = vec4(color, 1.0);
}
