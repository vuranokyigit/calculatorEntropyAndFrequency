
const textArea = document.getElementById("textArea");
const submit = document.getElementById("submit");
const tableResult = document.getElementById("result");
const buttonEntropy = document.getElementById("buttonEntropy");
const resultEntropy = document.getElementById("resultEn");
let submitObj = {}; //for submit button
var entropyObj = {} //for buttonEntropy button

submit.addEventListener("click", function calculateFreq() {
    var textInputArea = textArea.value;
    for (var i = 0; i < textInputArea.length; i++) {
        var char = textInputArea[i];
        submitObj[char] = submitObj[char] + 1 || 1;
    }
    console.log(submitObj);
    var submitObjString = JSON.stringify(submitObj);
    console.log(submitObjString);

    // Create the HTML table
    var table = document.createElement('table');
    table.setAttribute('border', '1');
    table.setAttribute('cellpadding', '5');

    // Create the table headers
    var headers = ['Character', 'Count'];
    var headerRow = document.createElement('tr');
    for (var i = 0; i < headers.length; i++) {
        var th = document.createElement('th');
        th.textContent = headers[i];
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    // Populate the table with the data
    for (var key in submitObj) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.textContent = key;
        tr.appendChild(td1);

        var td2 = document.createElement('td');
        td2.textContent = submitObj[key];
        tr.appendChild(td2);

        table.appendChild(tr);
    }
    // Add the table to the result element
    tableResult.innerHTML = '';
    tableResult.appendChild(table);
    // Table Position Setting
    tableResult.style.display = 'flex';
    tableResult.style.justifyContent = 'center';
    tableResult.style.alignItems = 'center';
});
buttonEntropy.addEventListener("click", function calculateEnt() {
    var textInputArea = textArea.value;
    for (let j = 0; j < textInputArea.length; j++) {
        var symbol = textInputArea[j];
        if (entropyObj[symbol] === undefined) {
            entropyObj[symbol] = 1;
        } else {
            entropyObj[symbol]++;
        }
    }
    var entropyCalc = 0;
    var allCounts = Object.values(entropyObj);
    var allCountsLength = allCounts.length;
    for (let k = 0; k < allCountsLength; k++) {
        entropyCalc = entropyCalc - allCounts[k] / textInputArea.length * Math.log2(allCounts[k] / textInputArea.length);
    }
    console.log(entropyCalc);
    resultEntropy.innerHTML = entropyCalc.toFixed(2);
})
