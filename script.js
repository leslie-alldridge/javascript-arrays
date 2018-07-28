

function changeFunc() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var descriptionField = document.getElementById("description");
    switch(selectedValue) {
        case 'concat': 
        descriptionField.innerHTML="The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.";
        break;
        case 'filter': 
        descriptionField.innerHTML="The filter() method creates a new array with all elements that pass the test implemented by the provided function. An example function is word => word.length > 8 this checks for words longer than 8 characters.";
        break;
        case 'find': 
        descriptionField.innerHTML="The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned. An example function is (function(element){ return element > 10; }) as this returns elements greater than 10.";
        break;
        case 'forEach': 
        descriptionField.innerHTML="The forEach() method executes a provided function once for each array element. Try using this provided function as an example: (function(element) {console.log(element);});"
        break;
        case 'indexOf':
        descriptionField.innerHTML="The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."
    }
}

function createArray(){
    //get user input in both fields, split by commas and send to an array
    var inputArray = [];
    var userString = document.getElementById('userInput').value;
    inputArray = userString.split(',');
    console.log(inputArray);
    //check what function they chose 
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    //depending on that, concat etc. the data 
    switch(selectedValue) {
        case 'concat': 
        //get second field input as an array since concat is selected.
        var newData = [];
        var secondUserString = document.getElementById('userData').value;
        newData = secondUserString.split(',');
        var finalOutput = inputArray.concat(newData);
        console.log(finalOutput);
        var output = document.getElementById('output');
        output.innerHTML = "[" + finalOutput + "]";
        checkOutput();
        break;

        //filter case - second field evaluated as a function 
        case 'filter':
        var newData = [];
        var secondUserString = document.getElementById('userData').value;
        newData = secondUserString;
        var fn = eval(newData);
        var finalOutput = inputArray.filter(fn);
        console.log(finalOutput);
        var output = document.getElementById('output');
        output.innerHTML = "[" + finalOutput + "]";
        checkOutput();
        break;
        //find case - second field eval as a function
        case 'find':
        var newData = [];
        var secondUserString = document.getElementById('userData').value;
        newData = secondUserString;
        var fn = eval(newData);
        var finalOutput = inputArray.find(fn);
        console.log(finalOutput);
        var output = document.getElementById('output');
        output.innerHTML = "[" + finalOutput + "]";
        checkOutput();
        break;

        //forEach case - second field eval as function
        case 'forEach':
        var newData = [];
        var secondUserString = document.getElementById('userData').value;
        newData = secondUserString;
        var fn = eval(newData);
        var finalOutput = inputArray.forEach(fn);
        console.log(finalOutput);
        var output = document.getElementById('output');
        output.innerHTML = "[" + finalOutput + "]";
        checkOutput();
        break;

        //indexOf case - second field needs number and string input
        case 'indexOf':
        var newData = [];
        var secondUserString = document.getElementById('userData').value;
        newData = secondUserString;
        var finalOutput = inputArray.indexOf(newData);
        console.log(finalOutput);
        var output = document.getElementById('output');
        output.innerHTML = "[" + finalOutput + "]";
        checkOutput();
        break;
    }

    function checkOutput (){
        if(output.innerHTML === '[undefined]'){
            output.innerHTML = "invalid function or check Dev Tools Console";
        }
    }
}