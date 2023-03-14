function submitdata(str) {
    var str = document.querySelector('#text').value
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    alert(joinArray)
}