function handleFile() {
    const input = document.getElementById('csvFileInput');
    const file = input.files[0];

    if (!file) {
        alert("Please select a CSV file first.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const text = event.target.result;
        displayCSV(text);
    };

    reader.readAsText(file);
}

function displayCSV(csvText) {
    const lines = csvText.split("\n").map(line => line.split(","));
    
    let table = "<table>";
    lines.forEach((row, index) => {
        table += "<tr>";
        row.forEach(cell => {
            if (index === 0) {
                table += `<th>${cell}</th>`;
            } else {
                table += `<td>${cell}</td>`;
            }
        });
        table += "</tr>";
    });
    table += "</table>";

    document.getElementById('csvOutput').innerHTML = table;
}
