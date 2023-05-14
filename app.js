
function getNum(num) {
    document.getElementById("result").value += num
}

function clearResult() {
    document.getElementById("result").value = " "
}
function getResult() {
    document.getElementById("result").value = eval(document.getElementById("result").value)
}
function clearNum() {
    var result = document.getElementById("result").value
    document.getElementById("result").value = document.getElementById("result").value.slice(0, result.length - 1);
}
