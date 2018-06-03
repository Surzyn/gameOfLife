import style from "./main.css";
import renderer from './gui';
import { conwayRule } from './rule';

var arr = generate(200);

renderer(arr);

setInterval(() => {
    var t0 = performance.now();
    arr = conwayRule(arr);
    var t1 = performance.now();
    renderer(arr);
    var t2 = performance.now();
    console.log(`calculate:  ${t1 - t0}, render  ${t2 - t1}`);
}, 200)

function generate(size) {
    var arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = [];
        for (let j = 0; j < size; j++) {
            arr[i][j] = Math.floor((Math.random() * 10) + 1) > 8;

        }
    }
    return arr;
}