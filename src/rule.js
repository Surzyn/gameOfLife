export function conwayRule(arr) {
    var nextGeneration = [];
    for (let i = 0; i < arr.length; i++) {
        nextGeneration[i] = [];
        for (let j = 0; j < arr[i].length; j++) {
            var lifeNeightbours = countLifeNeightbours(arr, i, j);
            nextGeneration[i][j] = false;
            if (!arr[i][j]) {
                if (lifeNeightbours == 3) {
                    nextGeneration[i][j] = true;
                }
            }
            else if (arr[i][j]) {
                if (lifeNeightbours == 2 || lifeNeightbours == 3) {
                    nextGeneration[i][j] = true;
                }
            }

        }
    }
    
    return nextGeneration;
}

function countLifeNeightbours(arr, i, j) {
    var lifeNeightbours = 0;
    if (i > 0 && arr[i - 1][j]) { lifeNeightbours += 1; }
    if (i < arr.length - 1 && arr[i + 1][j]) { lifeNeightbours += 1; }
    if (arr[i][j - 1]) { lifeNeightbours += 1; }
    if (arr[i][j + 1]) { lifeNeightbours += 1; }
    if (i > 0 && arr[i - 1][j - 1]) { lifeNeightbours += 1; }
    if (i > 0 && arr[i - 1][j + 1]) { lifeNeightbours += 1; }
    if (i < arr.length - 1 && arr[i + 1][j - 1]) { lifeNeightbours += 1; }
    if (i < arr.length - 1 && arr[i + 1][j + 1]) { lifeNeightbours += 1; }
    return lifeNeightbours;
}