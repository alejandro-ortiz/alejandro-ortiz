function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropdownbutton").classList.toggle("change");
    document.getElementById("changedropdown").classList.toggle("change");
}

const player1err = [];
const player2err = [];
const player1win = [];
const player2win = [];
let player1errfinal = 'player1err';
let player2errfinal = 'player2err';
let player1winfinal = 'player1win';
let player2winfinal = 'player2win';
let finalreport;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadreport").addEventListener("click", function() {
        downloadCSV("alextennisreport.csv", finalreport);
      });      
    var form = document.getElementById("TennisForm");
    document.getElementById("endmatch").addEventListener("click", function(event) {
        for (let i = 0; i < player1err.length; i++) {
            player1errfinal += ","
            for (let i2 = 0; i2 < player1err[i].length; i2++) {
                player1errfinal += `${player1err[i][i2]} `;
            }
        }
        for (let i = 0; i < player2err.length; i++) {
            player2errfinal += ","
            for (let i2 = 0; i2 < player2err[i].length; i2++) {
                player2errfinal += `${player2err[i][i2]} `;
            }
        }
        for (let i = 0; i < player1win.length; i++) {
            player1winfinal += ","
            for (let i2 = 0; i2 < player1win[i].length; i2++) {
                player1winfinal += `${player1win[i][i2]} `;
            }
        }
        for (let i = 0; i < player2win.length; i++) {
            player2winfinal += ","
            for (let i2 = 0; i2 < player2win[i].length; i2++) {
                player2winfinal += `${player2win[i][i2]} `;
            }
        }
        finalreport = invertCSV(`${player1errfinal}\n${player1winfinal}\n${player2errfinal}\n${player2winfinal}`);
        player1err.splice(0);
        player2err.splice(0);
        player1win.splice(0);
        player2win.splice(0);
    });
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
    
      let player = document.querySelector('input[name="q1"]:checked').value;
      let shot = document.querySelector('input[name="q2"]:checked').value;
      let stroke = document.querySelector('input[name="q3"]:checked').value;
      let zone = document.querySelector('input[name="q4"]:checked').value;
      let direction = document.querySelector('input[name="q5"]:checked').value;
      // Do something with the selected answers
      if (player == "player1") {
        if (shot == "(++)") {
            player1win.push([shot, stroke, zone, direction])
        } else {
            player1err.push([shot, stroke, zone, direction])
        }
        } else {
            if (shot == "(++)") {
                player2win.push([shot, stroke, zone, direction])
            } else {
                player2err.push([shot, stroke, zone, direction])
            }
        }
    
      // Reset the form
      form.reset();
    });
});

function invertCSV(csvData) {
    // Split the CSV data into rows
    const rows = csvData.split('\n');

    // Create an array to store the inverted CSV data
    const invertedData = [];

    // Iterate over each row
    rows.forEach((row, rowIndex) => {
        // Split the row into columns
        const columns = row.split(',');

        // Iterate over each column
        columns.forEach((column, columnIndex) => {
        // Check if the column index exceeds the number of rows in the inverted data
        if (!invertedData[columnIndex]) {
            invertedData[columnIndex] = [];
        }

        // Assign the value of the current column to the inverted data
        invertedData[columnIndex][rowIndex] = column;
        });
    });

    // Convert the inverted data back to CSV format
    const invertedCSV = invertedData.map(row => row.join(',')).join('\n');

    // Return the inverted CSV data
    return invertedCSV;
}

function downloadCSV(filename, csvContent) {
    var blob = new Blob([csvContent], { type: 'text/csv' });
    var url = URL.createObjectURL(blob);

    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}  