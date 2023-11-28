// JavaScript kode
        function skiftFarve(element) {
            var tilfældigFarve = Math.floor(Math.random() * 5) + 1;

            if (tilfældigFarve === 1) {
                element.style.backgroundColor = "#FFDDD2";
            } else if (tilfældigFarve === 2) {
                element.style.backgroundColor = "#C589E8";
            } else if (tilfældigFarve === 3) {
                element.style.backgroundColor = "#C6DBF0";
            } else if (tilfældigFarve === 4) {
                element.style.backgroundColor = "#D0FFD6";
            } else {
                element.style.backgroundColor = "#83C5BE";
            }
        }

        // Hent alle elementer med klassen "colorful-element"
        var elements = document.getElementsByClassName("cardcolor");

        // Kald funktionen for hvert element for at ændre farven ved lastning af siden
        for (var i = 0; i < elements.length; i++) {
            skiftFarve(elements[i]);
        }