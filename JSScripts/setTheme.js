var prevState = parseInt(localStorage.getItem("clickState"));
console.log("Saved Click State = " + prevState);

switch(prevState) {
    case 1:
        document.body.style.backgroundColor = "black";
        break;
    case 2:
        document.body.style.backgroundColor = "brown";
        break;
    case 3:
        document.body.style.backgroundColor = "green";
        break;
    case 4:
        document.body.style.backgroundColor = "rgb(100, 50, 119)";
        break;
    case 5:
        document.body.style.backgroundColor = "rgb(200, 68, 112)";
        break;
    case 6:
        document.body.style.backgroundColor = "rgb(80, 20, 122)";
        break;
    default:
        document.body.style.backgroundColor = "rgb(14, 58, 116)";
        break;
}