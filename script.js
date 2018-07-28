function changeFunc() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var descriptionField = document.getElementById("description");
    switch(selectedValue) {
        case 'concat': 
        descriptionField.innerHTML="The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.";
        break;
        case 'filter': 
        descriptionField.innerHTML="filter does this to an array";
        break;
        case 'find': 
        descriptionField.innerHTML="find does this to an array";
        break;
        case 'forEach': 
        descriptionField.innerHTML="forEach does this to an array";
        break;
    }
}

function createArray(){
    var inputArray = document.getElementById('userInput').value;
    console.log(inputArray)
}