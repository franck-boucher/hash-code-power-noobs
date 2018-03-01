class Ride {
  constructor() {
    this._from = [];
    this._to = [];
    this._start = 0;
    this._finish = 0;

    this.distance = this.distance.bind(this);
  }

  distance() {
    return (
      Math.abs(this._start[0] - this._finish[0]) +
      Math.abs(this._start[1] - this._finish[1])
    );
  }

  /* GETTERS / SETTER */
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  get start() {
    return this._start;
  }
  get finish() {
    return this._finish;
  }

  set from(val) {
    this._from = val;
  }
  set to(val) {
    this._to = val;
  }
  set start(val) {
    this._start = val;
  }
  set finish(val) {
    this._finish = val;
  }
}

module.exports = Ride;
