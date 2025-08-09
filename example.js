document.getElementById('myButton').onclick = function() {
    alert('Button clicked!');
};
document.getElementById('inputField').oninput = function() {
    console.log('Input changed to: ' + this.value);
}