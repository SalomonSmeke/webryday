class Point {
  static fromAngle(angle, magnitude) {
    magnitude = isNaN(magnitude) ? 1 : magnitude;
    return new Point(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) { return new Point(this.x + v.x, this.y + v.y); }
  subtract(v) { return new Point(this.x - v.x, this.y - v.y); }
  multiply(s) { return new Point(this.x * s, this.y * s); }
  divide(s) { return new Point(this.x / s, this.y / s); }

  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  get unit() {
    return this.divide(this.magnitude);
  }

  get angle() {
    return Math.atan2(this.y, this.x);
  }
}

const SMove = point => `M${point.x} ${point.y}`;
const SLine = point => `L${point.x} ${point.y}`;
const SQuad = (a, b) => `Q${a.x} ${a.y} ${b.x} ${b.y}`;

/**
 * Hex
 */

class HexagonSVGPath {
  constructor(length, radius) {
    this.setDimensions(length);
    this.radius = radius;
  }
  setDimensions(length) {
    this._length = length;
    this._height = length * 2;
    this._width = this.height * Math.sqrt(3) / 2;
  }
  get length() { return this._length }
  get height() { return this._height }
  get width() { return this._width }
  render() {
    const width = this._width;
    const height = this._height;
    const points = [
      new Point(width / 2, 0),
      new Point(width, height / 4),
      new Point(width, height * 3 / 4),
      new Point(width / 2, height),
      new Point(0, height * 3 / 4),
      new Point(0, height / 4),
    ]
    const right = Point.fromAngle(points[1].subtract(points[0]).angle, this.radius);
    const left = Point.fromAngle(points[5].subtract(points[0]).angle, this.radius);
    const level = new Point(0, this.radius);

    return [
      SMove(points[0].add(left)),
      SQuad(points[0], points[0].add(right)),
      SLine(points[1].subtract(right)),
      SQuad(points[1], points[1].add(level)),
      SLine(points[2].subtract(level)),
      SQuad(points[2], points[2].add(left)),
      SLine(points[3].subtract(left)),
      SQuad(points[3], points[3].subtract(right)),
      SLine(points[4].add(right)),
      SQuad(points[4], points[4].subtract(level)),
      SLine(points[5].add(level)),
      SQuad(points[5], points[5].subtract(left)),
      'Z'
    ].join('');
  }
}

export default HexagonSVGPath
