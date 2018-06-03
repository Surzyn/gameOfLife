export function conwayRule(arr) {
    var nextGeneration = [];
    for (let i = 0; i < arr.length; i++) {
        nextGeneration[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            var liveNeightbours = countLiveNeightbours(arr, i, j);
            nextGeneration[i][j] = false;
            if (!arr[i][j]) {
                if (liveNeightbours == 3) {
                    nextGeneration[i][j] = true;
                }
            }
            else if (arr[i][j]) {
                if (liveNeightbours == 2 || liveNeightbours == 3) {
                    nextGeneration[i][j] = true;
                }
            }

        }
    }
    
    return nextGeneration;
}

function countLiveNeightbours(arr, i, j) {
    var liveNeightbours = 0;
    if (i > 0 && arr[i - 1][j]) { liveNeightbours += 1; }
    if (i < arr.length - 1 && arr[i + 1][j]) { liveNeightbours += 1; }
    if (arr[i][j - 1]) { liveNeightbours += 1; }
    if (arr[i][j + 1]) { liveNeightbours += 1; }
    if (i > 0 && arr[i - 1][j - 1]) { liveNeightbours += 1; }
    if (i > 0 && arr[i - 1][j + 1]) { liveNeightbours += 1; }
    if (i < arr.length - 1 && arr[i + 1][j - 1]) { liveNeightbours += 1; }
    if (i < arr.length - 1 && arr[i + 1][j + 1]) { liveNeightbours += 1; }
    return liveNeightbours;
}