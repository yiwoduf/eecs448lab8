var paragraph = document.getElementsByClassName('para-container')[0];
var borderBtn = document.getElementById('upd-border');
var bkgBtn = document.getElementById('upd-bkg');

var rstBtn = document.getElementById('reset-btn');

borderBtn.addEventListener('click', function onClick()
{
    var red = document.getElementById("in-border-red").value;
    var green = document.getElementById("in-border-grn").value;
    var blue = document.getElementById("in-border-blu").value;
    var widthin = document.getElementById("in-border-width").value;
    paragraph.style.borderColor = "rgb(" + red + "," + green + "," + blue + ")";
    paragraph.style.width = widthin+"px";
});

bkgBtn.addEventListener('click', function onClick()
{
    var red = document.getElementById("in-bg-red").value;
    var green = document.getElementById("in-bg-grn").value;
    var blue = document.getElementById("in-bg-blu").value;
    paragraph.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
});

rstBtn.addEventListener('click', function onClick()
{
     window.location.reload();
});

function allowNumbersOnly(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}