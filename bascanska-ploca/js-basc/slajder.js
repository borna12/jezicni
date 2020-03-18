
kliz = "prijevod"
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(document).ready(function () {
    $("#pocetna").fadeIn(900);

});

$(".handle").draggable({
    axis: "x",
    containment: "parent",
    drag: function () {
        var position = $(this).position();
        var positionExtra = position.left + 6;
        $(".coverImage").width(positionExtra + "px");
    }
});
var startingPosition = "50%"
slider_horizontal = new juxtapose.JXSlider('#horizontal-demo', [{
    src: 'slike-bascanska/bascanska-prijevod.jpg',
    label: '',
    credit: ''
}, {
    src: 'slike-bascanska/bascanska.jpg',
    label: '',
    credit: ""
}], {
    animate: true,
    showLabels: false,
    showCredits: false,
    startingPosition: startingPosition,
    makeResponsive: true
});

function klizac(x) {
    startingPosition = $(".jx-handle")[0].style.left
    if (x == 1) {
        $(".jx-slider")[0].remove()
        slider_horizontal = new juxtapose.JXSlider('#horizontal-demo', [{
            src: 'slike-bascanska/bascanska-transliteracija.jpg',
            label: '',
            credit: ''
        }, {
            src: 'slike-bascanska/bascanska.jpg',
            label: '',
            credit: ""
        }], {
            animate: true,
            showLabels: false,
            showCredits: false,
            startingPosition: startingPosition,
            makeResponsive: true
        });

    }
    else if (x == 3) {
        $(".jx-slider")[0].remove()
        slider_horizontal = new juxtapose.JXSlider('#horizontal-demo', [{
            src: 'slike-bascanska/bascanska-slova.jpg',
            label: '',
            credit: ''
        }, {
            src: 'slike-bascanska/bascanska.jpg',
            label: '',
            credit: ""
        }], {
            animate: true,
            showLabels: false,
            showCredits: false,
            startingPosition: startingPosition,
            makeResponsive: true
        });

    }

    else {
        
        $(".jx-slider")[0].remove()
        slider_horizontal = new juxtapose.JXSlider('#horizontal-demo', [{
            src: 'slike-bascanska/bascanska-prijevod.jpg',
            label: '',
            credit: ''
        }, {
            src: 'slike-bascanska/bascanska.jpg',
            label: '',
            credit: ""
        }], {
            animate: true,
            showLabels: false,
            showCredits: false,
            startingPosition: startingPosition,
            makeResponsive: true
        });
    }

}