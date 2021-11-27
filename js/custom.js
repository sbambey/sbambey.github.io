var elements = document.getElementsByClassName("show-info");

var myFunction = function() {
    e.preventDefault();
    var attribute = this.getAttribute("data-myattribute");
    alert(attribute);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(e) {
        e.preventDefault();
        var parent = this.parentNode;
        for (var i = 0; i < parent.childNodes.length; i++) {
            if (parent.childNodes[i].className == "card-text hidden") {
                parent.childNodes[i].classList.remove('hidden');
            } else if (parent.childNodes[i].className == "show-info") {
                parent.childNodes[i].classList.add('hidden');
            }
        }
    }, false);
}