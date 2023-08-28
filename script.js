


updateview();
        function updateview() {
            document.getElementById('adjHistorie').innerHTML = /*html*/`
            <div id="hovedText">
             I Levada skapte noen _____ fugler et festlig kaos. Landsbyboerne, overrasket av de _____,
            flygende artister, brøt ut i latter.
            Den gamle, _____ bakeren lovet at fuglene var latterens budbringere fra himmelen, og snart smilte
            selv de _____ innbyggerne.
            </div>
            <div class="ordContainer">
                <div onclick="velgOrd(this)">tullete </div>
                <div onclick="velgOrd(this)">fargerike </div>
                <div onclick="velgOrd(this)">sure </div>
                <div onclick="velgOrd(this)">skjeggete </div>
                <div onclick="velgOrd(this)">eldgamle </div>
                <div onclick="velgOrd(this)">langhårete </div>
                <div onclick="velgOrd(this)">rosa </div>
                <div onclick="velgOrd(this)">prikkete </div>
            </div>


            `;


        }


function velgOrd(valgtOrd) {
    let setning = document.getElementById('hovedText')
    let valgtAdjektiv = valgtOrd.innerHTML;
    let plassHolder = setning.innerHTML.indexOf('_____');

    if (plassHolder !== -1) {
        setning.innerHTML = setning.innerHTML.slice(0, plassHolder) + valgtAdjektiv + setning.innerHTML.slice(plassHolder + 6);
    }

    }