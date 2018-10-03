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
  // get normalized position
  vec2 position = gl_FragCoord.xy / u_resolution;
  // get normalized mouse
  vec2 u_mouse = u_mouse / u_resolution - 0.5;

  // shift coordinate system in x axis
  float x = position.x + 10.0;
  float y = position.y;

  // create colors and mix gradients
  vec3 color1 = vec3(1.0, 0.5, 0.2);
  vec3 color2 = vec3(1.0, 0.3, 0.5);
  vec3 gradient1 = mix(color1, color2, impulse(x, 1.0));
  vec3 gradient2 = mix(color2, color1, impulse(x, 2.0));
  vec3 color = vec3(mix(gradient1, gradient2, sin(y + u_time * 10.0)));

  // set color
  gl_FragColor = vec4(color, 1.0);
}
