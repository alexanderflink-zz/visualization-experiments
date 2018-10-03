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
  vec3 color1 = vec3(1.0, 0.5, 0.2);
  vec3 color2 = vec3(1.0, 0.3, 0.5);
  vec3 gradient1 = mix(color1, color2, impulse(x, 1.0));
  vec3 gradient2 = mix(color2, color1, impulse(x, 0.5));
  vec3 color = vec3(mix(gradient1, gradient2, sin(y + u_time * 10.0)));

  gl_FragColor = vec4(color, 1.0);
}
