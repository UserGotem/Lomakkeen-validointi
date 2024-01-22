function tarkistaSyöttöTiedot() {
    // Tarkista, onko 'salasana'-syötteen, 'nimi'-syötteen, 'osoite'-syötteen tai maa arvo tyhjä
    if (salasana.value.trim() === "") {
        alert("Anna salasana.");
        return false; // Estä lomakkeen lähettäminen
    }

    if (nimi.value.trim() === "") {
        alert("Anna nimi.");
        return false; // Estä lomakkeen lähettäminen
    }

    if (osoite.value.trim() === "") {
        alert("Anna osoite.");
        return false; // Estä lomakkeen lähettäminen
    }

    if (maa.value === "(Valitse maa)") {
        alert("Valitse maa.");
        return false; // Estä lomakkeen lähettäminen
    }

    // Kaikilla syötteillä on arvot, jatka muita toimintoja.
    return true;

}

document.getElementById("laheta").onclick = function (event) {
    event.preventDefault(); // Estä lomakkeen oletuslähetys

    let kayttajaId = document.getElementById("kayttaja-id");
    let salasana = document.getElementById("salasana");
    let nimi = document.getElementById("nimi");
    let osoite = document.getElementById("osoite");
    let postiNumero = document.getElementById("postinumero");
    let email = document.getElementById("email");
    let sukupuoli = document.querySelector('input[name="sukupuoli"]:checked');
    let kieliSuomi = document.getElementById("suomi");
    let kieliMuu = document.getElementById("muu");

    // Säännöllinen lauseke sähköpostin perusvalidointia varten
    let emailKo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    switch (true) {
        case (käyttäjäId.value.length < 6):
            // käyttämällä Javascriptin length-ominaisuutta tarkistaa, että käyttäjätunnuksen pituus on vähintään 6 merkkiä. 
            alert("Käyttäjä ID:n on oltava vähintään 6 merkkiä pitkä.");
            break;

        case (!tarkistaSyöttöTiedot()):

            break;

        case (!/^\d{5}$/.test(postiNumero.value)):
            // '/^\d{5}$/' : Tämä säännöllisen lausekkeen malli (Regular Expression) varmistaa, että postinumeron on koostuttava täsmälleen viidestä numerosta eikä mistään muusta.
            // sitten kutsuu 'test'-metodia säännölliselle lausekkeelle ja siirtää postiNumero.value-arvon testattavaksi syöttömerkkijonoksi.
            alert("Postinumeron on oltava 5-numeroinen.");
            break;

        case !emailKo.test(email.value):
            // Tarkista, onko sähköposti kelvollisessa muodossa, jos ei ole, näytölle tulee hälytys.
            alert("Sähköpostiosoite ei ole kelvollinen.");
            break;

        case !sukupuoli:
            //käyttämällä Javascriptin checked-ominaisuutta
            // Tarkista, onko käyttäjä valinnut valintapainikkeesta joko miehen tai naisen, jos käyttäjä ei ole valinnut, näytölle tulee hälytys.
            alert("Sinun täytyy valita sukupuolesi!");
            break;

        case !(kieliSuomi.checked || kieliMuu.checked):
            //käyttämällä Javascriptin checked-ominaisuutta
            // Tarkista, onko vähintään yksi "kieli" -valintaruutu valittuna, jos käyttäjä ei ole valinnut, näytölle tulee hälytys.
            alert("Sinun täytyy valita kieli!");
            break;



        default:
            // Lähetä lomake, jos kaikki validoinnit hyväksytään.
            document.getElementById("rekisteroitymislomake").submit();
            alert("Lähetetty lomake");
            break;
    }
};