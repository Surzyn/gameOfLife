import style from "./main.css";
import renderer from './gui';
import { conwayRule } from './rule';

var arr = generate(100);

renderer(arr);

setInterval(() => {
    arr = conwayRule(arr);
    renderer(arr);
}, 100)

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