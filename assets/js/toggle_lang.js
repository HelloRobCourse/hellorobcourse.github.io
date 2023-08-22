// Code to toggle whether Python or C++ is displayed.
document.getElementById('lang-toggle').onchange = function() {

    var cppElements = document.getElementsByClassName('cpp-content');
    var pythonElements = document.getElementsByClassName('python-content');
    var i;

    for (i = 0; i < cppElements.length; i++) {
        cppElements[i].style.display = this.checked ? 'none' : 'inline';
    }

    for (i = 0; i < pythonElements.length; i++) {
        pythonElements[i].style.display = this.checked ? 'inline' : 'none';
    }

    // Add active labels to the labels.
    var cppTextElement = document.getElementById('cpp-label');
    var pythonTextElement = document.getElementById('python-label');
    if(this.checked) {
        pythonTextElement.classList.add('active-lang');
        cppTextElement.classList.remove('active-lang');
    } else {
        cppTextElement.classList.add('active-lang');
        pythonTextElement.classList.remove('active-lang');
    }

}
