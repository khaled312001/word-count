var button = document.getElementById('btn');

button.addEventListener('click', function(){
    var word = document.getElementById('str').value;
    var count = word.length;
    var outputDiv = document.getElementById('output');

    outputDiv.innerHTML = count;
});
