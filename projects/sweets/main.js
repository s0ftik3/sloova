var i = 5;
function takeSweet() {
    do {
        i--
        document.getElementById("count").firstChild.data = 'You have ' + i + ' sweets.';
        switch (i) {
            case 0: 
                document.getElementById("test").disabled = true;
                document.getElementById("count").innerHTML = 'You have no sweets.';
                break;
            case -1:
                document.getElementById("test").disabled = true;
                document.getElementById("count").innerHTML = 'Good boy, you hacked the system.';
                break;
        }
        if (i < -1) {
            document.getElementById("test").disabled = true;
            document.getElementById("count").innerHTML = 'You have no sweets.';
        }
    } while (i > 0 && i < 0);
};