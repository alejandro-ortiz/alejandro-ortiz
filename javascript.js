function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropdownbutton").classList.toggle("change");
    document.getElementById("changedropdown").classList.toggle("change");
}

if (typeof localStorage.getItem('player1errbrowser') === undefined) {
    let player1err;
    let player2err;
    let player1win;
    let player2win;
    player1err = 'player1err';
    player2err = 'player2err';
    player1win = 'player1win';
    player2win = 'player2win';
    localStorage.setItem('player1errbrowser', player1err);
    localStorage.setItem('player2errbrowser', player2err);
    localStorage.setItem('player1winbrowser', player1win);
    localStorage.setItem('player2winbrowser', player2win);
}
let finalreport;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("input1").addEventListener("click", function(){document.getElementById("label2").classList.remove("checkedinput");document.getElementById("label1").classList.add("checkedinput");})
    document.getElementById("input2").addEventListener("click", function(){document.getElementById("label1").classList.remove("checkedinput");document.getElementById("label2").classList.add("checkedinput");})
    document.getElementById("input3").addEventListener("click", function(){document.getElementById("label5").classList.remove("checkedinput");document.getElementById("label4").classList.remove("checkedinput");document.getElementById("label3").classList.add("checkedinput");})
    document.getElementById("input4").addEventListener("click", function(){document.getElementById("label5").classList.remove("checkedinput");document.getElementById("label3").classList.remove("checkedinput");document.getElementById("label4").classList.add("checkedinput");})
    document.getElementById("input5").addEventListener("click", function(){document.getElementById("label3").classList.remove("checkedinput");document.getElementById("label4").classList.remove("checkedinput");document.getElementById("label5").classList.add("checkedinput");})
    document.getElementById("input6").addEventListener("click", function(){document.getElementById("label7").classList.remove("checkedinput");document.getElementById("label8").classList.remove("checkedinput");document.getElementById("label9").classList.remove("checkedinput");document.getElementById("label10").classList.remove("checkedinput");document.getElementById("label11").classList.remove("checkedinput");document.getElementById("label12").classList.remove("checkedinput");document.getElementById("label6").classList.add("checkedinput");})
    document.getElementById("input7").addEventListener("click", function(){document.getElementById("label6").classList.remove("checkedinput");document.getElementById("label8").classList.remove("checkedinput");document.getElementById("label9").classList.remove("checkedinput");document.getElementById("label10").classList.remove("checkedinput");document.getElementById("label11").classList.remove("checkedinput");document.getElementById("label12").classList.remove("checkedinput");document.getElementById("label7").classList.add("checkedinput");})
    document.getElementById("input8").addEventListener("click", function(){document.getElementById("label6").classList.remove("checkedinput");document.getElementById("label7").classList.remove("checkedinput");document.getElementById("label9").classList.remove("checkedinput");document.getElementById("label10").classList.remove("checkedinput");document.getElementById("label11").classList.remove("checkedinput");document.getElementById("label12").classList.remove("checkedinput");document.getElementById("label8").classList.add("checkedinput");})
    document.getElementById("input9").addEventListener("click", function(){document.getElementById("label6").classList.remove("checkedinput");document.getElementById("label7").classList.remove("checkedinput");document.getElementById("label8").classList.remove("checkedinput");document.getElementById("label10").classList.remove("checkedinput");document.getElementById("label11").classList.remove("checkedinput");document.getElementById("label12").classList.remove("checkedinput");document.getElementById("label9").classList.add("checkedinput");})
    document.getElementById("input10").addEventListener("click", function(){document.getElementById("label6").classList.remove("checkedinput");document.getElementById("label7").classList.remove("checkedinput");document.getElementById("label8").classList.remove("checkedinput");document.getElementById("label9").classList.remove("checkedinput");document.getElementById("label11").classList.remove("checkedinput");document.getElementById("label12").classList.remove("checkedinput");document.getElementById("label10").classList.add("checkedinput");})
    document.getElementById("input11").addEventListener("click", function(){document.getElementById("label6").classList.remove("checkedinput");document.getElementById("label7").classList.remove("checkedinput");document.getElementById("label8").classList.remove("checkedinput");document.getElementById("label9").classList.remove("checkedinput");document.getElementById("label10").classList.remove("checkedinput");document.getElementById("label12").classList.remove("checkedinput");document.getElementById("label11").classList.add("checkedinput");})
    document.getElementById("input12").addEventListener("click", function(){document.getElementById("label6").classList.remove("checkedinput");document.getElementById("label7").classList.remove("checkedinput");document.getElementById("label8").classList.remove("checkedinput");document.getElementById("label9").classList.remove("checkedinput");document.getElementById("label10").classList.remove("checkedinput");document.getElementById("label11").classList.remove("checkedinput");document.getElementById("label12").classList.add("checkedinput");})
    document.getElementById("input13").addEventListener("click", function(){document.getElementById("label15").classList.remove("checkedinput");document.getElementById("label14").classList.remove("checkedinput");document.getElementById("label13").classList.add("checkedinput");})
    document.getElementById("input14").addEventListener("click", function(){document.getElementById("label15").classList.remove("checkedinput");document.getElementById("label13").classList.remove("checkedinput");document.getElementById("label14").classList.add("checkedinput");})
    document.getElementById("input15").addEventListener("click", function(){document.getElementById("label14").classList.remove("checkedinput");document.getElementById("label13").classList.remove("checkedinput");document.getElementById("label15").classList.add("checkedinput");})
    document.getElementById("input16").addEventListener("click", function(){document.getElementById("label17").classList.remove("checkedinput");document.getElementById("label18").classList.remove("checkedinput");document.getElementById("label19").classList.remove("checkedinput");document.getElementById("label20").classList.remove("checkedinput");document.getElementById("label16").classList.add("checkedinput");})
    document.getElementById("input17").addEventListener("click", function(){document.getElementById("label16").classList.remove("checkedinput");document.getElementById("label18").classList.remove("checkedinput");document.getElementById("label19").classList.remove("checkedinput");document.getElementById("label20").classList.remove("checkedinput");document.getElementById("label17").classList.add("checkedinput");})
    document.getElementById("input18").addEventListener("click", function(){document.getElementById("label16").classList.remove("checkedinput");document.getElementById("label17").classList.remove("checkedinput");document.getElementById("label19").classList.remove("checkedinput");document.getElementById("label20").classList.remove("checkedinput");document.getElementById("label18").classList.add("checkedinput");})
    document.getElementById("input19").addEventListener("click", function(){document.getElementById("label16").classList.remove("checkedinput");document.getElementById("label17").classList.remove("checkedinput");document.getElementById("label18").classList.remove("checkedinput");document.getElementById("label20").classList.remove("checkedinput");document.getElementById("label19").classList.add("checkedinput");})
    document.getElementById("input20").addEventListener("click", function(){document.getElementById("label16").classList.remove("checkedinput");document.getElementById("label17").classList.remove("checkedinput");document.getElementById("label18").classList.remove("checkedinput");document.getElementById("label19").classList.remove("checkedinput");document.getElementById("label20").classList.add("checkedinput");})

    document.getElementById("undobtn").addEventListener("click", function(){
        player1err = localStorage.getItem('player1errbrowser');
        player2err = localStorage.getItem('player2errbrowser');
        player1win = localStorage.getItem('player1winbrowser');
        player2win = localStorage.getItem('player2winbrowser');
        player = localStorage.getItem('lastplayer');
        shot = localStorage.getItem('lastshot');
        if (localStorage.getItem('canundo') == 'yup') {
            if (player == "player1") {
                if (shot == "(++)") {
                    localStorage.setItem('player1winbrowser', player1win.slice(0, -14));
                } else {
                    localStorage.setItem('player1errbrowser', player1err.slice(0, -14));
                }
                } else {
                    if (shot == "(++)") {
                        localStorage.setItem('player2winbrowser', player2win.slice(0, -14));
                    } else {
                        localStorage.setItem('player2errbrowser', player2err.slice(0, -14));
                    }
                }
            localStorage.setItem('canundo', 'nope');
        }
        document.getElementById("undobtn").textContent = `Undo Last Point`
    })
    document.getElementById("undobtn").textContent = `Undo Last Point`
    document.getElementById("downloadreport").addEventListener("click", function() {
        player1err = localStorage.getItem('player1errbrowser');
        player2err = localStorage.getItem('player2errbrowser');
        player1win = localStorage.getItem('player1winbrowser');
        player2win = localStorage.getItem('player2winbrowser');
        finalreport = invertCSV(`${player1err}\n${player1win}\n${player2err}\n${player2win}`);
        downloadCSV("matchreport.csv", finalreport);
      });      
    var form = document.getElementById("TennisForm");
    document.getElementById("endmatch").addEventListener("click", function(event) {
        player1err = 'player1err';
        player2err = 'player2err';
        player1win = 'player1win';
        player2win = 'player2win';
        localStorage.setItem('player1errbrowser', player1err);
        localStorage.setItem('player2errbrowser', player2err);
        localStorage.setItem('player1winbrowser', player1win);
        localStorage.setItem('player2winbrowser', player2win);
        document.getElementById("undobtn").textContent = `Undo Last Point`
        localStorage.setItem('canundo', 'nope');
    });
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
      player1err = localStorage.getItem('player1errbrowser');
      player2err = localStorage.getItem('player2errbrowser');
      player1win = localStorage.getItem('player1winbrowser');
      player2win = localStorage.getItem('player2winbrowser');
      let player = document.querySelector('input[name="q1"]:checked').value;
      let shot = document.querySelector('input[name="q2"]:checked').value;
      let stroke = document.querySelector('input[name="q3"]:checked').value;
      let zone = document.querySelector('input[name="q4"]:checked').value;
      let direction = document.querySelector('input[name="q5"]:checked').value;
      document.getElementById("undobtn").textContent = `Undo Last Point (${player} ${shot} ${stroke} ${zone} ${direction})`
      // Do something with the selected answers
      if (player == "player1") {
        if (shot == "(++)") {
            player1win += `,${shot} ${stroke} ${zone} ${direction}`;
        } else {
            player1err += `,${shot} ${stroke} ${zone} ${direction}`;
        }
        } else {
            if (shot == "(++)") {
                player2win += `,${shot} ${stroke} ${zone} ${direction}`;
            } else {
                player2err += `,${shot} ${stroke} ${zone} ${direction}`;
            }
        }
        localStorage.setItem('player1errbrowser', player1err);
        localStorage.setItem('player2errbrowser', player2err);
        localStorage.setItem('player1winbrowser', player1win);
        localStorage.setItem('player2winbrowser', player2win);
        localStorage.setItem('lastplayer', player);
        localStorage.setItem('lastshot', shot);
        localStorage.setItem('canundo', 'yup');
      // Reset the form
      for (let i = 0; i < 20; i++) {
        let labelnum = "label" + `${i+1}`
        document.getElementById(labelnum).classList.remove("checkedinput");
      }
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
