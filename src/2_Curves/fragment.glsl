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
  // scale and translate coordinate system
  position.x -= 0.5;
  position *= 2.0;
  float x = position.x;
  float origin = plot(vec2(0.0, 0.0), x);
  vec3 color = vec3(origin, 0.0, 0.0);

  // float y = 1.0 - pow(abs(x), 0.5); // ease in
  // float y = 1.0 - pow(abs(x), 1.0); // linear
  // float y = 1.0 - pow(abs(x), 2.0); // ease out
  float y = 1.0 - pow(abs(x), 100.0); // step


  color += vec3(plot(position, y));
  gl_FragColor = vec4(color, 1.0);
}
