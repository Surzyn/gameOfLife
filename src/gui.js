export default function showArr(arr) {
    var rows = []
    for (let i = 0; i < arr.length; i++) {
        var row = "<div class='row'>";
        for (let j = 0; j < arr[i].length; j++) {
            row += `<span class='item --selected-${arr[i][j]}'></span>`;
        }
        row += "</div>";
        rows[i] = row;
    }
    rows = rows.join("");
    var symulationSection = document.getElementById('symulation');
    symulationSection.innerHTML = rows;
}