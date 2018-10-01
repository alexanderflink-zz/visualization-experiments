import P5 from 'p5'

class Mover {
  constructor(p5, x = 0, y = 0, mass = 10) {
    this.p5 = p5
    this.position = new P5.Vector(x, y)
    this.velocity = new P5.Vector(0, 0)
    this.acceleration = new P5.Vector(0, 0)
    this.mass = mass
  }
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.p5.ellipse(this.position.x, this.position.y, 50, 50)
    this.acceleration.set(0, 0)
  }
  applyForce(force) {
    const f = P5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }
}

export default Mover
