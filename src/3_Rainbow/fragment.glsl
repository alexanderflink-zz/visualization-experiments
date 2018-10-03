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
  position.x -= 0.5;
  position *= 2.0;
  float x = position.x;
  float origin = plot(vec2(0.0, 0.0), x, 0.0);
  vec3 color = vec3(origin, 0.0, 0.0);

  vec3 white = vec3(1.0);
  vec3 black = vec3(0.0);

  // float y = 1.0 - pow(abs(x), 0.5); // ease in
  // float y = 1.0 - pow(abs(x), 1.0); // linear
  float y = 1.0 - sin(pow(abs(x), 2.0) + u_time * 5.0); // ease out
  // float y = 1.0 - pow(abs(x), 100.0); // step
  float line = plot(position, y, 0.01);

  float line1 = plot(position, y, 0.3);
  float line2 = plot(position, y - 0.3, 0.3);
  float line3 = plot(position, y - 0.5, 0.3);
  color += mix(white, black, vec3(line1, line2, line3));

  // color += vec3(line);
  gl_FragColor = vec4(color, 1.0);
}
