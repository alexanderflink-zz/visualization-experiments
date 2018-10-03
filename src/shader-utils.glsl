float impulse( float k, float x ) {
    float h = k * x;
    return h * exp(1.0 - h);
}

float cubicPulse( float c, float w, float x ) {
    x = abs(x - c);
    if (x > w) return 0.0;
    x /= w;
    return 1.0 - x * x * (3.0 - 2.0 * x);
}

float parabola( float x, float k ) {
    return pow(4.0 * x * (1.0 - x), k);
}
