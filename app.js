

window.addEventListener('load', initialize);


function progressUpdate() {
    var pbars = document.getElementsByClassName('progress-bar');
    var pvals = document.getElementsByClassName('progress-value');

    for (var i = 0; i < pbars.length; i++) {
        var progress = pbars[i].dataset.progress;
        if (!progress) { break; }
        pbars[i].style.width = progress + '%';
        pvals[i].innerHTML = progress + '%';
    }
}

function initialize() {
    progressUpdate();
}
