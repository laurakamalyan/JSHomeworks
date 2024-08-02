function Random() {
    let r = Math.random() * 255;
    return Math.floor(r);
}

// coloring outer columns
let table1 = document.querySelector("#table1");
let row1 = "";
for (let i = 1; i <= 10; i++) {
    row1 += "<tr>";
    for (let j = 1; j <= 10; j++) {
        if (i === 1 || i === 10 || j === 1 || j === 10) {
            row1 += `<td 
                    style="
                        background-color: rgba(${Random()}, ${Random()}, ${Random()}); 
                        width: 15px; 
                        height: 15px;
                        border: 1px solid;
                    ">
                    </td>`;
        } else {
            row1 += "<td style='border: 1px solid'></td>";
        }
    }
    row1 += "</tr>";
}
table1.innerHTML = row1;

// coloring inner columns
let table2 = document.getElementById("table2");
let row2 = "";
for (let i = 1; i <= 10; i++) {
    row2 += "<tr>";
    for (let j = 1; j <= 10; j++) {
        if (i === 1 || i === 10 || j === 1 || j === 10) {
            row2 += "<td style='border: 1px solid; width: 15px; height: 15px;'></td>";
        } else {            
            row2 += `<td style="background-color: rgba(${Random()}, ${Random()}, ${Random()}); border: 1px solid;"></td>`;
        }
    }
    row2 += "</tr>";
}
table2.innerHTML = row2;

///////////////////////////////////////////////////
let table3 = document.getElementById("table3");
let row3 = "";

for (let i = 1; i <= 9; i++) {
    row3 += "<tr>";
    for (let j = 1; j <= 9; j++) {
        row3 += `<td style='border: 1px solid; width: 25px; height: 25px; text-align: center;'>${j * i}</td>`;
    }
    row3 += "</tr>";
}

table3.innerHTML = row3;