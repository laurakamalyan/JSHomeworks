$(() => {
    function Random() {
        let r = Math.random() * 255;
        return Math.floor(r);
    }

    // coloring outer columns
    let row1 = "";
    for (let i = 1; i <= 10; i++) {
        row1 += "<tr>";
        for (let j = 1; j <= 10; j++) {
            if (i === 1 || i === 10 || j === 1 || j === 10) {
                row1 += `<td style="background-color: rgba(${Random()}, ${Random()}, ${Random()});"></td>`;
            } else {
                row1 += "<td></td>";
            }
        }
        row1 += "</tr>";
    }
    $("#table1").html(row1);

    // coloring inner columns
    let row2 = "";
    for (let i = 1; i <= 10; i++) {
        row2 += "<tr>";
        for (let j = 1; j <= 10; j++) {
            if (i === 1 || i === 10 || j === 1 || j === 10) {
                row2 += "<td></td>";
            } else {
                row2 += `<td style="background-color: rgba(${Random()}, ${Random()}, ${Random()});"></td>`;
            }
        }
        row2 += "</tr>";
    }
    $("#table2").html(row2);

    // multiplication table
    let row3 = "";
    for (let i = 1; i <= 9; i++) {
        row3 += "<tr>";
        for (let j = 1; j <= 9; j++) {
            row3 += `<td>${i*j}</td>`;
        }
        row3 += "</tr>";
    }
    $("#table3").html(row3);
    
    $("table").css({
        borderCollapse: "collapse",
        marginBottom: "30px",
    });

    $("td").css({
        border: "1px solid",
        width: "20px",
        height: "20px",
        textAlign: "center",
    });

    // click buttons
    $("#div").css("display", "flex");
    $("#div").children("div").css({
        width: "100px",
        height: "50px",
        backgroundColor: "pink",
        border: "1px solid",
    });
    
    $(".right").click(() => {
        if ( $(".div2").text() === "" ) {
            $(".div2").text($(".div1").text());
            $(".div1").empty();
        } else {
            $(".div3").text($(".div2").text());
            $(".div2").empty();
        }
    });
    
    $(".left").click(() => {
        if ( $(".div2").text() === "" ) {
            $(".div2").text($(".div3").text());
            $(".div3").empty();
        } else {
            $(".div1").text($(".div2").text());
            $(".div2").empty();
        }
    });

    // change image and link on click
    $("#change").css("margin", "30px 0");
    $("#change").children().css("display", "block");
    $("#change").children("img").css("width", "200px");

    $(".change").click(() => {
        $("#change").children("img").attr("src", "./pic2.jpg");
        $(".link").attr("href", "https://www.youtube.com/");
        $(".link").text("Youtube");
    });

    // change 2 input values
    $(".btn").click(e => {
        e.preventDefault();
        let val1 = $("#inp1").val();
        let val2 = $("#inp2").val();

        $("#inp1").val(val2);
        $("#inp2").val(val1);
    });

    // traffic light
    $(".traffic_light").css({
        backgroundColor: "#252525",
        width: "100px",
        padding: "5px",
        borderRadius: "5px",
        marginTop: "30px",
    });

    $(".traffic_light").children("div").css({
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        margin: "10px",
        backgroundColor: "gray",
    });

    setInterval(() => {
        setTimeout(() => {
            $(".circle1").css("backgroundColor", "red");
            $(".circle2").css("backgroundColor", "gray");
            $(".circle3").css("backgroundColor", "gray");
        }, 1000);

        setTimeout(() => {
            $(".circle2").css("backgroundColor", "yellow");
            $(".circle1").css("backgroundColor", "gray");
            $(".circle3").css("backgroundColor", "gray");
        }, 2000);

        setTimeout(() => {
            $(".circle3").css("backgroundColor", "green");
            $(".circle1").css("backgroundColor", "gray");
            $(".circle2").css("backgroundColor", "gray");
        }, 3000);
    }, 3000);
});