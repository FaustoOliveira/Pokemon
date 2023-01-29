function generatePokeStats(i, pokemonName, pokemonImg, pokemonHeight, pokemonWeight, pokemonHp, pokemonAttak, pokemonDefense, pokemonSpecialAttak, pokemonSpecialDefense, pokemonSpeed, bgType, pokemonSearch) {
    return /*html*/ `
    <div class="pokeCard">
        <div class="closePokeStats" onclick="closePokeStats()">
            <img id="x-close" src="img/close.svg" alt="">
        </div>
        <div id="cardTypeContainer" class="cardTypeContainer">
            
        </div>
        <img class="pokemonImg" style="height: 400px; z-index: 9;" src="${pokemonImg}" alt="">
        <div class="heightAndWeight">
            <div class="pokemonHeight">
                <h2>${pokemonHeight / 10}</h2>
                <h2>m</h2>
            </div>
            <div class="pokemonWeight">
                <h2>KG</h2>
                <h2>${pokemonWeight / 10}</h2>
            </div>
        </div>
        </div>
    <div class="pokeCardInfo ${bgType}">


    <div class="cardControlBar">
        <div> <img id="arrow_back" onclick="previousPokemon(${i})" style="filter: invert(100);" src="img/arrow_back.svg" alt=""></div>
        <div class="statsName"> 
            <h1>${capitalizeFirstLetter(pokemonName)}</h1>
            <h1>#${("00" + pokemonSearch[i]['id']).slice(-3)}</h1>
        </div>
        <div><img id="arrow_forward" onclick="nextPokemon(${i})" style="filter: invert(100);" src="img/arrow_forward.svg" alt=""></div>
    </div>
    <div class="allStats">
        <div class="pokemonStats">
            <h2>HP</h2>
            <h2>Attak</h2>
            <h2>Special Attack</h2>
            <h2>Defense</h2>
            <h2>Special Defense</h2>
            <h2>Speed</h2>
        </div>
        <div class="statsBarContainer">
            <div>
                <b class="MobileStatTitle">HP</b>
                <div class="statsBar">
                    <div class="realStats" style="width: ${pokemonHp / 1.5}%;"> <b> ${pokemonHp} </b></div>
                </div>
            </div>
            <div>
                <b class="MobileStatTitle">Attak</b>
                <div class="statsBar">
                    <div class="realStats" style="width: ${pokemonAttak / 1.5}%;"> <b> ${pokemonAttak} </b></div>
                </div>
            </div>
            <div>
                <b class="MobileStatTitle">SpecialAttak</b>
                <div class="statsBar">
                    <div class="realStats" style="width: ${pokemonSpecialAttak / 1.5}%;"> <b> ${pokemonSpecialAttak} </b></div>
                </div>
            </div>
            <div>
                <b class="MobileStatTitle">Defense</b>
                <div class="statsBar">
                    <div class="realStats" style="width: ${pokemonDefense / 1.5}%;"> <b> ${pokemonDefense} </b></div>
                 </div>
            </div>
           
            <div><b class="MobileStatTitle">Special Defense</b>
                <div class="statsBar">
                    <div class="realStats" style="width: ${pokemonSpecialDefense / 1.5}%;"> <b> ${pokemonSpecialDefense} </b></div>
                </div>
            </div>
            <div><b class="MobileStatTitle">Speed</b>
                <div class="statsBar">
                     <div class="realStats" style="width: ${pokemonSpeed / 1.5}%;"> <b> ${pokemonSpeed} </b></div>
                </div>
            </div>
            
        </div>
    </div>
   

</div>
<div class="backgroundStatsClose" onclick="closePokeStats()"></div>

    `
}

function generatePokeIndex(pokemonImg, pokemonName, i, bgType, pokemonSearch) {
    return /*html*/`
    <div id="pokemonBox${i}" class="pokemonBox ${bgType}" onclick="showPokemonStats(${i})">
                <div class="nameIndex">
                <div class="nameBg"></div>
                <div class="nameBgBottom">
                    <div id="infoElementContainer${i}" class="infoElementBox">
                        
                    </div>
                </div>
                    <div class="pokemonName">
                        <h2>${capitalizeFirstLetter(pokemonName)}</h2>
                    </div>
                    <div class="pokeIndex"> <h2>#${pokemonSearch[i]['id']}</h2> </div>
                </div>
                <div class="boxImg"><img style="height:180px" src="${pokemonImg}" alt=""></div>
            </div>
    `;
}

function generateTypeHTML(type) {
    return /*html*/ `
    <div class="icon ${type}">
        <img src="icons/${type}.svg"/>
    </div>`
}