function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropdownbutton").classList.toggle("change");
    document.getElementById("changedropdown").classList.toggle("change");
}

if (typeof localStorage.getItem('player1errbrowser') === undefined) {
    let player1err = 'player1err';
    let player2err = 'player2err';
    let player1win = 'player1win';
    let player2win = 'player2win';
    localStorage.setItem('player1errbrowser', player1err)
    localStorage.setItem('player2errbrowser', player2err)
    localStorage.setItem('player1winbrowser', player1win)
    localStorage.setItem('player2winbrowser', player2win)
}
let finalreport;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadreport").addEventListener("click", function() {
        player1err = localStorage.getItem('player1errbrowser')
        player2err = localStorage.getItem('player2errbrowser')
        player1win = localStorage.getItem('player1winbrowser')
        player2win = localStorage.getItem('player2winbrowser')
        finalreport = invertCSV(`${player1err}\n${player1win}\n${player2err}\n${player2win}`);
        downloadCSV("matchreport.csv", finalreport);
      });      
    var form = document.getElementById("TennisForm");
    document.getElementById("endmatch").addEventListener("click", function(event) {
        player1err = localStorage.getItem('player1errbrowser')
        player2err = localStorage.getItem('player2errbrowser')
        player1win = localStorage.getItem('player1winbrowser')
        player2win = localStorage.getItem('player2winbrowser')
        finalreport = invertCSV(`${player1err}\n${player1win}\n${player2err}\n${player2win}`);
        downloadCSV("midmatchreport.csv", finalreport);
        player1err = 'player1err';
        player2err = 'player2err';
        player1win = 'player1win';
        player2win = 'player2win';
        localStorage.setItem('player1errbrowser', player1err)
        localStorage.setItem('player2errbrowser', player2err)
        localStorage.setItem('player1winbrowser', player1win)
        localStorage.setItem('player2winbrowser', player2win)
    });
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
      player1err = localStorage.getItem('player1errbrowser')
      player2err = localStorage.getItem('player2errbrowser')
      player1win = localStorage.getItem('player1winbrowser')
      player2win = localStorage.getItem('player2winbrowser')
      let player = document.querySelector('input[name="q1"]:checked').value;
      let shot = document.querySelector('input[name="q2"]:checked').value;
      let stroke = document.querySelector('input[name="q3"]:checked').value;
      let zone = document.querySelector('input[name="q4"]:checked').value;
      let direction = document.querySelector('input[name="q5"]:checked').value;
      // Do something with the selected answers
      if (player == "player1") {
        if (shot == "(++)") {
            player1win += `,${shot} ${stroke} ${zone} ${direction}`
        } else {
            player1err += `,${shot} ${stroke} ${zone} ${direction}`
        }
        } else {
            if (shot == "(++)") {
                player2win += `,${shot} ${stroke} ${zone} ${direction}`
            } else {
                player2err += `,${shot} ${stroke} ${zone} ${direction}`
            }
        }
        localStorage.setItem('player1errbrowser', player1err)
        localStorage.setItem('player2errbrowser', player2err)
        localStorage.setItem('player1winbrowser', player1win)
        localStorage.setItem('player2winbrowser', player2win)
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