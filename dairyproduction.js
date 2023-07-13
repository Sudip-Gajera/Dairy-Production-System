let formRef = document.getElementById("register");

const handleSubmit = () => {
    return false;
}

const handleData = () => {
    let milk = parseInt(document.getElementById("milk").value);
    let p1 = parseInt(document.getElementById("b-milk").value);
    let p2 = parseInt(document.getElementById("curd").value);
    let p3 = parseInt(document.getElementById("paneer").value);
    let p4 = parseInt(document.getElementById("chees").value);

    let req_qty_p1 = p1 * 2;
    let req_qty_p2 = p2 * 3;
    let req_qty_p3 = p3 * 5;
    let req_qty_p4 = p4 * 10;

    if (milk >= req_qty_p1) {
        milk = milk - req_qty_p1;
        document.getElementById("p1-used").innerHTML = req_qty_p1;
        document.getElementById("p1-status").innerHTML = "Ready";
    } else {
        document.getElementById("p1-used").innerHTML = "0";
        document.getElementById("p1-status").innerHTML = "Not-Ready";
    }

    if (milk >= req_qty_p2) {
        milk = milk - req_qty_p2;
        document.getElementById("p2-used").innerHTML = req_qty_p2;
        document.getElementById("p2-status").innerHTML = "Ready";
    } else {
        document.getElementById("p2-used").innerHTML = "0";
        document.getElementById("p2-status").innerHTML = "Not-Ready";
    }

    if (milk >= req_qty_p3) {
        milk = milk - req_qty_p3;
        document.getElementById("p3-used").innerHTML = req_qty_p3;
        document.getElementById("p3-status").innerHTML = "Ready";
    } else {
        document.getElementById("p3-used").innerHTML = "0";
        document.getElementById("p3-status").innerHTML = "Not-Ready";
    }

    if (milk >= req_qty_p4) {
        milk = milk - req_qty_p4;
        document.getElementById("p4-used").innerHTML = req_qty_p4;
        document.getElementById("p4-status").innerHTML = "Ready";
    } else {
        document.getElementById("p4-used").innerHTML = "0";
        document.getElementById("p4-status").innerHTML = "Not-Ready";
    }

    let leftmilk = milk;
    document.getElementById("leftmilk").innerHTML = "Remaning Milk = " + leftmilk + "ltr.";
}