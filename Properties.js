//3 rows, 4 columns, 2 vehicles, 3 rides, 2 bonus and 10 steps
const FileManager = require('./file-manager');
class Properties {
    constructor() {
        this._rows = 0;
        this._columns = 0;
        this._vehiculs = 0;
        this._rides = 0;
        this._bonus = 0;
        this._steps = 0;
    }

    get rows() {
        return this._rows;
    }
    get columns() {
        return this._columns;
    }
    get vehiculs() {
        return this._vehiculs;
    }
    get rides() {
        return this._rides;
    }
    get bonus() {
        return this._bonus;
    }
    get steps() {
        return this._steps;
    }

    set rows(rows) {
        this._rows = rows;
    }
    set columns(columns) {
        this._columns = columns;
    }
    set vehiculs(vehiculs) {
        this._vehiculs = vehiculs;
    }
    set rides(rides) {
        this._rides = rides;
    }
    set bonus(bonus) {
        this._bonus = bonus;
    }
    set steps(steps) {
        this._steps = steps;
    }

    setPropertiesFromFile(file) {
        FileManager.read(file).then(data => {
            const rows = data.split("\n");
            const header = rows[0]; 
            console.log(header);
            this._rows = header[0];
            this._columns = header[1];
            this._vehiculs = header[2];
            this._rides = header[3];
            this._bonus = header[4];
            this._steps = header[5];
        });
    }
    toString() {
        return `${this._rows} rows, ${this._columns} columns, ${this._vehiculs} vehiculs, ${this._rides} rides, ${this._bonus} bonus, ${this._steps} steps`;
    }
}

module.exports = new Properties();