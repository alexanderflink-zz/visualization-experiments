precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

float plot(vec2 pos, float pct, float thickness) {
  return smoothstep(pct - thickness, pct, pos.y) - smoothstep(pct, pct + thickness, pos.y);
}

float circle(in vec2 circlePos, in float radius, in vec2 position) {
  vec2 dist = position - circlePos;
	return 1.0 - smoothstep(radius - (radius * 0.01), radius + (radius * 0.01), dot(dist, dist) * 4.0);
}

@import ../shader-utils;

void main() {
  vec2 position = gl_FragCoord.xy / u_resolution.xy;
  vec2 u_mouse = u_mouse / u_resolution;
  // scale and translate coordinate system
  // position *= 2.0;
  // position -= 0.5;
  float x = position.x;
  float y = position.y;
  vec3 color = vec3(0.0);

  vec3 white = vec3(1.0);
  vec3 black = vec3(0.0);
  float circ = circle(u_mouse, 1.0, position);

  color = vec3(circ);

  gl_FragColor = vec4(color, 1.0);
}
