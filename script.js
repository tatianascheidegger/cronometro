window.onload = function () {
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById('seconds');
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () { // Correção: adicionado "function" após "buttonReset.onclick ="
        clearInterval(Interval);
        tens = 0; // Correção: use números em vez de strings
        seconds = 0; // Correção: use números em vez de strings
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    }

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9 && tens <= 99) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            tens = 0;
            appendTens.innerHTML = "00";
            seconds++;
            if (seconds <= 9) {
                appendSeconds.innerHTML = "0" + seconds;
            } else {
                appendSeconds.innerHTML = seconds;
            }
        }
    }
}
