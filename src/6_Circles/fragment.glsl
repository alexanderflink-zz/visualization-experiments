precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

float plot(vec2 pos, float pct, float thickness) {
  return smoothstep(pct - thickness, pct, pos.y) - smoothstep(pct, pct + thickness, pos.y);
}

@import ../shader-utils;

float rect(float x, float y, float width, float height, vec2 position) {
  vec2 bl = step(vec2(x, y), position);
  vec2 tr = step(position, vec2(x + width, y + height));
  float borders = bl.x * bl.y * tr.x * tr.y;
  return borders;
}

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

  float box = rect(0.0, 0.7, 0.2, 0.3, position);
  float box2 = rect(0.0, 0.0, 0.2, 0.65, position);
  float box3 = rect(0.25, 0.0, 0.3, 1.0, position);
  float box4 = rect(0.6, 0.0, 0.35, 1.0, position);
  color = vec3(1.0, 0.0, 0.0) * box;
  color += vec3(1.0, 1.0, 0.8) * box2;
  color += vec3(0.0, 1.0, 1.0) * box3;
  color += vec3(0.7, 0.2, 0.7) * box4;
  gl_FragColor = vec4(color, 1.0);
}
