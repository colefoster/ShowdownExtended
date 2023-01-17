'use strict';

let TooltipPlus = {};

TooltipPlus.Settings = {
    showBaseStats: 'OFF',
    showBaseStatsToggleKey: 's',

    showItemName: 'OFF',
    showItemNameToggleKey: 'n',

    showItemDescription: 'OFF',
    showItemDescriptionToggleKey: 'i'
};



function keyDown(e)
{
  //var eventObj = window.event? event : e
    var key = e.key;
    var alt = e.altKey;
    if (key ===  TooltipPlus.Settings.showItemNameToggleKey && alt){
        TooltipPlus.Settings.showItemName === 'ON' ? TooltipPlus.Settings.showItemName = 'OFF' : TooltipPlus.Settings.showItemName = 'ON';
        alert("Item names toggled");   
    }
    if (key === TooltipPlus.Settings.showItemDescriptionToggleKey && alt){
        TooltipPlus.Settings.showItemDescription === 'ON' ? TooltipPlus.Settings.showItemDescription = 'OFF' : TooltipPlus.Settings.showItemDescription = 'ON';
        alert("Item descriptions toggled");   
    }
    if (key === TooltipPlus.Settings.showBaseStatsToggleKey && alt){
        TooltipPlus.Settings.showBaseStats === 'ON' ? TooltipPlus.Settings.showBaseStats = 'OFF' : TooltipPlus.Settings.showBaseStats = 'ON';
        alert("Item base stats toggled");   
    }
    if (key === "c"){
        var roleBlock = document.getElementById("role0");
        if (roleBlock.style.display === "none") {
            roleBlock.style.display = "block";
          } else {
            roleBlock.style.display = "none";
          }
    }

}
document.onkeydown = keyDown;

TooltipPlus.BattleTypeChart = {
    // defending type
    "Bug": {
        damageGiven: {
            // attacking type : effectivenessMultiplier
            "Bug": 1,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 1,
            "Fighting": 0.5,
            "Fire": 2,
            "Flying": 2,
            "Ghost": 1,
            "Grass": 0.5,
            "Ground": 0.5,
            "Ice": 1,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 1,
            "Rock": 2,
            "Steel": 1,
            "Water": 1,
        },
        HPivs: { "atk": 30, "def": 30, "spd": 30 },
        HPdvs: { "atk": 13, "def": 13 },
    },
    "Dark": {
        damageGiven: {
            "Bug": 2,
            "Dark": 0.5,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 2,
            "Fighting": 2,
            "Fire": 1,
            "Flying": 1,
            "Ghost": 0.5,
            "Grass": 1,
            "Ground": 1,
            "Ice": 1,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 0,
            "Rock": 1,
            "Steel": 1,
            "Water": 1,
        },
        HPivs: {},
    },
    "Dragon": {
        damageGiven: {
            "Bug": 1,
            "Dark": 1,
            "Dragon": 2,
            "Electric": 0.5,
            "Fairy": 2,
            "Fighting": 1,
            "Fire": .5,
            "Flying": 1,
            "Ghost": 1,
            "Grass": 0.5,
            "Ground": 1,
            "Ice": 2,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 1,
            "Rock": 1,
            "Steel": 1,
            "Water": 0.5,
        },
        HPivs: { "atk": 30 },
        HPdvs: { "def": 14 },
    },
    "Electric": {
        damageGiven: {
            "Bug": 1,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 0.5,
            "Fairy": 1,
            "Fighting": 1,
            "Fire": 1,
            "Flying": 0.5,
            "Ghost": 1,
            "Grass": 1,
            "Ground": 2,
            "Ice": 1,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 1,
            "Rock": 1,
            "Steel": 0.5,
            "Water": 1,
        },
        HPivs: { "spa": 30 },
        HPdvs: { "atk": 14 },
    },
    "Fairy": {
        damageGiven: {
            "Bug": 0.5,
            "Dark": 0.5,
            "Dragon": 0,
            "Electric": 1,
            "Fairy": 1,
            "Fighting": 0.5,
            "Fire": 1,
            "Flying": 1,
            "Ghost": 1,
            "Grass": 1,
            "Ground": 1,
            "Ice": 1,
            "Normal": 1,
            "Poison": 2,
            "Psychic": 1,
            "Rock": 1,
            "Steel": 2,
            "Water": 1,
        },
    },
    "Fighting": {
        damageGiven: {
            "Bug": 0.5,
            "Dark": 0.5,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 2,
            "Fighting": 1,
            "Fire": 1,
            "Flying": 2,
            "Ghost": 1,
            "Grass": 1,
            "Ground": 1,
            "Ice": 1,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 2,
            "Rock": 0.5,
            "Steel": 1,
            "Water": 1,
        },
        HPivs: { "def": 30, "spa": 30, "spd": 30, "spe": 30 },
        HPdvs: { "atk": 12, "def": 12 },
    },
    "Fire": {
        damageGiven: {
            "Bug": 0.5,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 0.5,
            "Fighting": 1,
            "Fire": 0.5,
            "Flying": 1,
            "Ghost": 1,
            "Grass": 0.5,
            "Ground": 2,
            "Ice": 0.5,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 1,
            "Rock": 2,
            "Steel": 0.5,
            "Water": 2,
        },
        HPivs: { "atk": 30, "spa": 30, "spe": 30 },
        HPdvs: { "atk": 14, "def": 12 },
    },
    "Flying": {
        damageGiven: {
            "Bug": 0.5,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 2,
            "Fairy": 1,
            "Fighting": 0.5,
            "Fire": 1,
            "Flying": 1,
            "Ghost": 1,
            "Grass": 0.5,
            "Ground": 0,
            "Ice": 2,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 1,
            "Rock": 2,
            "Steel": 1,
            "Water": 1,
        },
        HPivs: { "hp": 30, "atk": 30, "def": 30, "spa": 30, "spd": 30 },
        HPdvs: { "atk": 12, "def": 13 },
    },
    "Ghost": {
        damageGiven: {
            "Bug": 0.5,
            "Dark": 2,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 1,
            "Fighting": 0,
            "Fire": 1,
            "Flying": 1,
            "Ghost": 2,
            "Grass": 1,
            "Ground": 1,
            "Ice": 1,
            "Normal": 0,
            "Poison": 0.5,
            "Psychic": 1,
            "Rock": 1,
            "Steel": 1,
            "Water": 1,
        },
        HPivs: { "def": 30, "spd": 30 },
        HPdvs: { "atk": 13, "def": 14 },
    },
    "Grass": {
        damageGiven: {
            "Bug": 2,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 0.5,
            "Fairy": 1,
            "Fighting": 1,
            "Fire": 2,
            "Flying": 2,
            "Ghost": 1,
            "Grass": 0.5,
            "Ground": 0.5,
            "Ice": 2,
            "Normal": 1,
            "Poison": 2,
            "Psychic": 1,
            "Rock": 1,
            "Steel": 1,
            "Water": 0.5,
        },
        HPivs: { "atk": 30, "spa": 30 },
        HPdvs: { "atk": 14, "def": 14 },
    },
    "Ground": {
        damageGiven: {
            "Bug": 1,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 0,
            "Fairy": 1,
            "Fighting": 1,
            "Fire": 1,
            "Flying": 1,
            "Ghost": 1,
            "Grass": 2,
            "Ground": 1,
            "Ice": 2,
            "Normal": 1,
            "Poison": 0.5,
            "Psychic": 1,
            "Rock": 0.5,
            "Steel": 1,
            "Water": 2,
        },
        HPivs: { "spa": 30, "spd": 30 },
        HPdvs: { "atk": 12 },
    },
    "Ice": {
        damageGiven: {
            "Bug": 1,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 1,
            "Fighting": 2,
            "Fire": 2,
            "Flying": 1,
            "Ghost": 1,
            "Grass": 1,
            "Ground": 1,
            "Ice": 0.5,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 1,
            "Rock": 2,
            "Steel": 2,
            "Water": 1,
        },
        HPivs: { "atk": 30, "def": 30 },
        HPdvs: { "def": 13 },
    },
    "Normal": {
        damageGiven: {
            "Bug": 1,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 1,
            "Fighting": 2,
            "Fire": 1,
            "Flying": 1,
            "Ghost": 0,
            "Grass": 1,
            "Ground": 1,
            "Ice": 1,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 1,
            "Rock": 1,
            "Steel": 1,
            "Water": 1,
        },
    },
    "Poison": {
        damageGiven: {
            "Bug": 0.5,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 0.5,
            "Fighting": 0.5,
            "Fire": 1,
            "Flying": 1,
            "Ghost": 1,
            "Grass": 0.5,
            "Ground": 2,
            "Ice": 1,
            "Normal": 1,
            "Poison": 0.5,
            "Psychic": 2,
            "Rock": 1,
            "Steel": 1,
            "Water": 1,
        },
        HPivs: { "def": 30, "spa": 30, "spd": 30 },
        HPdvs: { "atk": 12, "def": 14 },
    },
    "Psychic": {
        damageGiven: {
            "Bug": 2,
            "Dark": 2,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 1,
            "Fighting": 0.5,
            "Fire": 1,
            "Flying": 1,
            "Ghost": 2,
            "Grass": 1,
            "Ground": 1,
            "Ice": 1,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 0.5,
            "Rock": 1,
            "Steel": 1,
            "Water": 1,
        },
        HPivs: { "atk": 30, "spe": 30 },
        HPdvs: { "def": 12 },
    },
    "Rock": {
        damageGiven: {
            "Bug": 1,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 1,
            "Fairy": 1,
            "Fighting": 2,
            "Fire": 0.5,
            "Flying": 0.5,
            "Ghost": 1,
            "Grass": 2,
            "Ground": 2,
            "Ice": 1,
            "Normal": 0.5,
            "Poison": 0.5,
            "Psychic": 1,
            "Rock": 1,
            "Steel": 2,
            "Water": 2,
        },
        HPivs: { "def": 30, "spd": 30, "spe": 30 },
        HPdvs: { "atk": 13, "def": 12 },
    },
    "Steel": {
        damageGiven: {
            "Bug": 0.5,
            "Dark": 1,
            "Dragon": 0.5,
            "Electric": 1,
            "Fairy": 0.5,
            "Fighting": 2,
            "Fire": 2,
            "Flying": 0.5,
            "Ghost": 1,
            "Grass": 0.5,
            "Ground": 2,
            "Ice": 0.5,
            "Normal": 0.5,
            "Poison": 0,
            "Psychic": 0.5,
            "Rock": 0.5,
            "Steel": 0.5,
            "Water": 1,
        },
        HPivs: { "spd": 30 },
        HPdvs: { "atk": 13 },
    },
    "Water": {
        damageGiven: {
            "Bug": 1,
            "Dark": 1,
            "Dragon": 1,
            "Electric": 2,
            "Fairy": 1,
            "Fighting": 1,
            "Fire": 0.5,
            "Flying": 1,
            "Ghost": 1,
            "Grass": 2,
            "Ground": 1,
            "Ice": 0.5,
            "Normal": 1,
            "Poison": 1,
            "Psychic": 1,
            "Rock": 1,
            "Steel": 0.5,
            "Water": 0.5,
        },
        HPivs: { "atk": 30, "def": 30, "spa": 30 },
        HPdvs: { "atk": 14, "def": 13 },
    },
};

TooltipPlus.TypeColors = {
    "Bug": "adbd21",
    "Dark": "403229",
    "Dragon": "7761d8",
    "Electric": "f5be2f",
    "Fairy": "ff65d5",
    "Fighting": "a55239",
    "Fire": "f75231",
    "Flying": "9cadf7",
    "Ghost": "6363b5",
    "Grass": "7bce52",
    "Ground": "cfae55",
    "Ice": "5acee7",
    "Normal": "ada594",
    "Poison": "b55aa5",
    "Psychic": "cc5c83",
    "Rock": "bda55a",
    "Steel": "adadc6",
    "Water": "399cff"
}
var Random_Battle_Data = {};

TooltipPlus.getRandBatsData = function getRandBatsData() {


    var SUPPORTED = [
        'gen1randombattle', 'gen2randombattle', 'gen3randombattle',
        'gen4randombattle', 'gen5randombattle', 'gen6randombattle',
        'gen7randombattle', 'gen7letsgorandombattle', 'gen7randomdoublesbattle',
        'gen8bdsprandombattle', 'gen8randombattle', 
        'gen8randomdoublesbattle','gen9randombattle'
        
    ];
    for (var format of SUPPORTED) {
        (function (f) {
            var request = new XMLHttpRequest();
            request.addEventListener('load', function () {
                var data = {};
                var json = JSON.parse(request.responseText);
                for (var name in json) {
                    var pokemon = json[name];
                    data[pokemon.level] = data[pokemon.level] || {};
                    var species = Dex.species.get(name);
                    var id = toID(species.forme === 'Gmax'
                        ? species.baseSpecies
                        : species.battleOnly || species.name);
                    data[pokemon.level][id] = data[pokemon.level][id] || [];
                    data[pokemon.level][id].push(Object.assign({ name: name }, pokemon));
                }
                Random_Battle_Data[f] = data;

            });
            request.open('GET', 'https://pkmn.github.io/randbats/data/' + f + '.json');
            request.send(null);
        })(format);
    }
}

TooltipPlus.displaySet = function displaySet(gen, gameType, letsgo, species, data, name) {
    var stats = {};
    for (var stat in species.baseStats) {
        stats[stat] = TooltipPlus.calc(
            gen,
            stat,
            species.baseStats[stat],
            'ivs' in data && stat in data.ivs ? data.ivs[stat] : (gen < 3 ? 30 : 31),
            'evs' in data && stat in data.evs ? data.evs[stat] : (gen < 3 ? 255 : letsgo ? 0 : 85),
            data.level,
            letsgo);
    }
    var roles = data.roles;
    if(typeof roles === 'undefined'){
        roles = {
            'Random Battle Set': {
                abilities: data.abilities,
                items: data.items,
                teraTypes: null,
                moves: data.moves
            }
        };
    }
    var buf = '';
    var roleCounter = 0;
    for (var [role, values] of Object.entries(roles)){
        var moves = values.moves;
        var noHP = true;
        var multi = !['singles', 'doubles'].includes(gameType);
        var ms = [];
        //********Border  */
        console.log
        buf += `<p class = "section"; id = "role${roleCounter}"; ${data.confirmedRole === roleCounter ? 'style= "border-width: 2px;  border-color : red; border-style:solid;' : ''}">`;
        roleCounter++;
        //*********Set Tera Types */
        if (gen === 9){
            buf+= '<span style="float:right"><sup>Tera Types:&nbsp;</sup>';

            var teraTypes = values.teraTypes;
            for (var type of teraTypes){
                buf += Dex.getTypeIcon(type) + ' ';
            }
        }
        buf+='</span>';
        //***** role text */
        buf += `<b>` + role + '</b></br>';
        
        
        
        if (gen >= 3 && !letsgo) {
            buf += '<b>Abilities:</b><br/>' + data.abilities.map(a => a += ' (' + Dex.abilities.get(a).shortDesc + ')').join('</br> ') ;
        }
        if (gen >= 2 && !(letsgo && !values.items)) {
            buf +='</br><b>Items: </b><br/>';
            console.log(values.items);
            if(values.items){
                for (var item of values.items){
                
                    //Fix no icon for booster energy 
                    if (item === "Booster Energy"){

                    }
                    else{
                       buf+= '<span class="itemicon" style = "' + Dex.getItemIcon(item) + ';"></span >';

                    }

                    if(TooltipPlus.Settings.showItemName === 'ON'){
                        buf += ' '+ Dex.items.get(item).name ;
                    }
                    if(TooltipPlus.Settings.showItemDescription === 'ON'){
                        buf +=' (' + Dex.items.get(item).shortDesc + ')' + '<br/>';
                    }
                
                }
            }
            else{
                buf+='<small>No Items</small>'
            }
            
             buf+='<br/>';
        
        }
        let tempMove = '<b>Moves:</b><br/>';
        for (let move of moves){
            if (move.startsWith('Hidden Power')) noHP = false;
            if (!(multi && move === 'Ally Switch')) ms.push(move);
        
            let m = Dex.moves.get(move);
            tempMove +=''+ Dex.getTypeIcon(m.type) +  Dex.getCategoryIcon(m.category);
            tempMove += '' +  m.name  + '';
            tempMove += '<span style ="float: right">' + m.basePower + '</span></br>';
        }
            tempMove+= '</p>';
        buf += tempMove;
    }
    buf += '<p class = "section"><small>';
    for (var statName of Dex.statNamesExceptHP) {
        if (gen === 1 && statName === 'spd') continue;
        var known = gen === 1 || (gen === 2 && noHP) ||
            ('ivs' in data && statName in data.ivs) || ('evs' in data && statName in data.evs);
        var statLabel = (gen === 1 && statName === 'spa' ) ? 'spc' : statName;
        buf += statName === 'atk' ? '' : ' / ';
        buf += '' + BattleText[statLabel].statShortName + '&nbsp;';
        var italic = !known && (statName === 'atk' || statName === 'spe');
        buf += (italic ? '<i>' : '') + stats[statName] + (italic ? '</i>' : '');
    }
    buf += '</small></p>';
    buf += '</span>';
    return buf;
}

TooltipPlus.tr = function tr(num) {
    return num >>> 0
}

TooltipPlus.calc = function calc(gen, stat, base, iv, ev, level, letsgo) {
    if (gen < 3) iv = Math.floor(iv / 2) * 2;
    if (stat === 'hp') {
        var val = base === 1 ? base : TooltipPlus.tr(TooltipPlus.tr(2 * base + iv + TooltipPlus.tr(ev / 4) + 100) * level / 100 + 10);
        return letsgo ? val + 20 : val;
    } else {
        var val = TooltipPlus.tr(TooltipPlus.tr(2 * base + iv + TooltipPlus.tr(ev / 4)) * level / 100 + 5);
        return letsgo ? tr(val * 102 / 100) + 20 : val;
    }
}


TooltipPlus.getStatbarHTML = function getStatbarHTML(pokemon) {
    let buf = '<div class="statbar' + (this.siden ? ' lstatbar' : ' rstatbar') + '" style="display: none">';
    const ignoreNick = this.siden && (this.scene.battle.ignoreOpponent || this.scene.battle.ignoreNicks);

    // *****************
    // Make pokemon name open smogon link in new tab
    buf += `<strong><a href="https://www.smogon.com/dex/ss/pokemon/${pokemon.name}/" target="_blank" style="color: #222222; text-decoration: none;">${BattleLog.escapeHTML(ignoreNick ? pokemon.species : pokemon.name)}</a>`;
    //

    const gender = pokemon.gender;
    if (gender === 'M' || gender === 'F') {
        buf += ` <img src="${Dex.resourcePrefix}fx/gender-${gender.toLowerCase()}.png" alt="${gender}" width="7" height="10" class="pixelated" />`;
    }
    buf += (pokemon.level === 100 ? `` : ` <small>L${pokemon.level}</small>`);

    let symbol = '';
    if (pokemon.speciesForme.indexOf('-Mega') >= 0) symbol = 'mega';
    else if (pokemon.speciesForme === 'Kyogre-Primal') symbol = 'alpha';
    else if (pokemon.speciesForme === 'Groudon-Primal') symbol = 'omega';
    if (symbol) {
        buf += ` <img src="${Dex.resourcePrefix}sprites/misc/${symbol}.png" alt="${symbol}" style="vertical-align:text-bottom;" />`;
    }

    buf += `</strong><div class="hpbar"><div class="hptext"></div><div class="hptextborder"></div><div class="prevhp"><div class="hp"></div></div><div class="status"></div>`;
    buf += `</div>`;
    return buf;
}


TooltipPlus.showPokemonTooltip = function showPokemonTooltip(clientPokemon, serverPokemon, isActive, illusionIndex) {
    /******
     * Active pokemon when user is in a battle: client pokemon and server pokemon
     * 
     * Active pokemon when user is spectating: Client pokemon, no server pokemon
     * 
     * Pokemon in team preview: Client pokemon no server pokemon
     * Enemy pokemon, active or team preview: Client pokemon no server pokemon
     * 
     * Switch-in pokemon: Server, no client pokemon
     * 
     * Client pokemon: Contains tracked info like moves used, last move, revealed items, 
     * Server pokemon: Contains private info like poke's ability, exact stats, moves,  item, gender, tera typeC
     */

    var _this3 = this;
    const pokemon = clientPokemon || serverPokemon;
    var format = toID(this.battle.tier);
    let text = '';

    var types = this.getPokemonTypes(pokemon);

    //*********** Colored type background ******************/
    let typeBuf = `<p style="background-image:linear-gradient(150deg, #${TooltipPlus.TypeColors[types[0]]}, 55%, #${types.length === 1 ? TooltipPlus.TypeColors[types[0]] : TooltipPlus.TypeColors[types[1]]}";>`;
    
    
    //*********************Type icons***********************/
    if (clientPokemon && (clientPokemon.volatiles.typechange || clientPokemon.volatiles.typeadd)) {
        typeBuf += `<small>(Type changed)</small>`;
    }
    typeBuf += types.map(type => Dex.getTypeIcon(type)).join(' ');
    typeBuf+= '</p>';

  
    if (!((pokemon.speciesForme).includes("Rotom") || (pokemon.speciesForme).includes("Therian") || (pokemon.speciesForme).includes("Mimikyu")|| (pokemon.speciesForme).includes("Hisui")
     || (pokemon.speciesForme).includes("Squawkabilly")|| (pokemon.speciesForme).includes("Galar") ||  (pokemon.speciesForme).includes("Tatsugiri") ||  (pokemon.speciesForme).includes("Indeedee")
     ||  (pokemon.speciesForme).includes("Florges") ||  (pokemon.speciesForme).includes("Paldea") ||  (pokemon.speciesForme).includes("Alola")) ){ 
        //Rotom forms include the dash in sprites repo
        //Therian forms
        //Mimikyu forms
        //Hisui forms
        //Galar forms
        //Squackabilly
        //Tatsugiri
        //Indeedee
        pokemon.speciesForme = pokemon.speciesForme.replace('-','');
    }
    let pokeIconBuf = `<span style="float:right; "><img align="right"src="` + Dex.resourcePrefix + 'sprites/gen5/' + BattleLog.escapeHTML((pokemon.speciesForme).replace(' ', '').replace('\'', '').replace('%', '')).toLowerCase() + '.png"/></span>';


    // ******************** HP Text
    let hpBuf = '<p class = "section">';
    if (pokemon.fainted) {
        hpBuf += '<small>HP:</small> (fainted)';
    } else {
        let exacthp = '';
        if (serverPokemon) {
            exacthp = ' (' + serverPokemon.hp + '/' + serverPokemon.maxhp + ')';
        } else if (pokemon.maxhp === 48) {
            exacthp = ' (' + pokemon.hp + '/' + pokemon.maxhp + ' pixels)';
        }
        let color = '';
        if (pokemon.getHPColor() === 'g') color = 'Green';
        if (pokemon.getHPColor() === 'y') color = 'Yellow';
        if (pokemon.getHPColor() === 'r') color = 'Red';
        hpBuf += '<span style="color:' + color + ';float:right">HP: ' + Pokemon.getHPText(pokemon) + exacthp + (pokemon.status ? ' <span class="status ' + pokemon.status + '">' + pokemon.status.toUpperCase() + '</span>' : '</span >');
        if (clientPokemon) {
            if (pokemon.status === 'tox') {
                if (pokemon.ability === 'Poison Heal' || pokemon.ability === 'Magic Guard') {
                    hpBuf += '</br><small>Would take if ability removed: ' + Math.floor(100 / 16 * Math.min(clientPokemon.statusData.toxicTurns + 1, 15)) + '%</small>';
                } else {
                    hpBuf += '</br><small> Next damage: ' + Math.floor(100 / 16 * Math.min(clientPokemon.statusData.toxicTurns + 1, 15)) + '%</small>';
                }
            } else if (pokemon.status === 'slp') {
                hpBuf += ' </br>Turns asleep: ' + clientPokemon.statusData.sleepTurns;
            }
        }
        hpBuf += '</p>';
    }

    //***** name text
    let nameBuf = '<b>' + BattleLog.escapeHTML(pokemon.name);
    if (pokemon.speciesForme !== pokemon.name) {
        nameBuf += '<small>(' + BattleLog.escapeHTML(pokemon.speciesForme) + ')</small>';
    }
    nameBuf += '</b>';


    //gender symbol
    let genderBuf = '';
    const gender = pokemon.gender;
    if (gender === 'M' || gender === 'F') {
        genderBuf = ` <img src="${Dex.resourcePrefix}fx/gender-${gender.toLowerCase()}.png" alt="${gender}" width="7" height="10" class="pixelated" /> `;
    }

    // ****************** Level text
    let levelBuf = (pokemon.level !== 100 ? ` <small>L${pokemon.level}</small>` : ``);



    if (!illusionIndex || illusionIndex === 1) {
        //Forme change text
        var formChangeBuf = '';
        if (clientPokemon && clientPokemon.volatiles && clientPokemon.volatiles.formechange) {
            if (clientPokemon.volatiles.transform) {
                formChangeBuf += `<p><small>(Transformed into ${clientPokemon.volatiles.formechange[1]})</small></p>`;
            } else {
                formChangeBuf += `<p><small>(Changed forme: ${clientPokemon.volatiles.formechange[1]})</small></p>`;
            }
        }
    }

    let illusionBuf = '';
    if (illusionIndex) {
        illusionBuf += `<p class="section"><strong>Possible Illusion #${illusionIndex}</strong>${levelBuf}</p>`;
    }
    //**************** Poke icon (top)**********************/ 
    
    // ***********************
    // Show type effectiveness icons
    let weaknessesbuf = `<p class = "section">`;



    const typeEff = TooltipPlus.getTypeEff(types);
    const multiplierKeys = [4, 2, .5, .25, 0];
    weaknessesbuf += '<small><b>Weaknesses: </b><br />';
    multiplierKeys.forEach((multiplierKey) => {
        if (typeEff[multiplierKey].length > 0) {
            const weakTypes = typeEff[multiplierKey].map(effect => effect ? Dex.getTypeIcon(effect) : '').join(' ');
            weaknessesbuf += `<p>${multiplierKey}x: ${weakTypes}</p>`;
        }
    });
    weaknessesbuf += '</p>'; //line


    const supportsAbilities = this.battle.gen > 2 && !this.battle.tier.includes("Let's Go");

    let abilityBuf = '';
    if (supportsAbilities) {//************************************************************************* Ability text and desc

        const abilityData = this.getPokemonAbilityData(clientPokemon, serverPokemon);
        const ability = abilityData.baseAbility || abilityData.ability;
        if (ability) abilityBuf += '<p><small>Ability: ' + Dex.abilities.get(ability).name + ' (' + Dex.abilities.get(ability).shortDesc + ')</small></p>';
        //**** Add abilities to enemy pokemon in non random games
        if (!(format.includes('random')) && clientPokemon) { //my pokemon?
            if (abilityData.ability) {
                let abilityBuf = '<div style="border-top: 1px solid #888; background: #dedede">';
                const ability = abilityData.baseAbility || abilityData.ability;
                if (ability) abilityBuf += '<p><small>Ability: ' + Dex.abilities.get(ability).name + ' (' + Dex.abilities.get(ability).shortDesc + ')</small></p>';
                const baseAbilityName = Dex.abilities.get(abilityData.baseAbility).name;
                if (baseAbilityName && baseAbilityName !== Dex.abilities.get(ability).name) abilityBuf += '<p><small> (base: ' + baseAbilityName + ')</small></p>';
            }
            else if (abilityData.possibilities.length && !illusionIndex) {
                abilityBuf = `<p><small>Possible abilities: <br/> &#8226;` + abilityData.possibilities.map(p => Dex.abilities.get(p).name + ' (' + Dex.abilities.get(p).shortDesc + ')').join(`<br/> &#8226;`);
            }

            abilityBuf += '</small></p>';
        }
        
    }

    let itemBuf = '';
    if (serverPokemon && serverPokemon.item) { //*****************************item text
        itemBuf = '<p><small>Item: ' + '<span class="itemicon" style="' + Dex.getItemIcon(serverPokemon.item) + '"></span>'; 
        
        itemBuf += '</p>';
    } else if (clientPokemon) {
        let item = '';
        let itemEffect = clientPokemon.itemEffect || '';
        if (clientPokemon.prevItem) {
            item = '<p>None</p>';
            if (itemEffect) itemEffect += '; ';
            let prevItem = Dex.items.get(clientPokemon.prevItem).name;
            itemEffect += '<p><small>' + clientPokemon.prevItemEffect ? prevItem + '<span class="itemicon" style="' + Dex.getItemIcon(clientPokemon.prevItem) + '"></span>' + ' was ' + clientPokemon.prevItemEffect : 'was ' + prevItem + '<span class="itemicon" style="' + Dex.getItemIcon(clientPokemon.prevItem) + '"></span>' + '</small></p>';
        }
        if (pokemon.item) item = Dex.items.get(pokemon.item).name;
        if (itemEffect) itemEffect = ' (' + itemEffect + ')';
        if (item) itemBuf = '<p><small>Item: ' + item + '<span class="itemicon" style="' + Dex.getItemIcon(clientPokemon.item) + '"></span>' + itemEffect + '</small></p>';
    }


    //Stat/speed at top ******************
    let statsBuf  = '<div style = "clear:none;">'
    statsBuf+= this.renderStats(clientPokemon, serverPokemon, isActive);
    statsBuf = statsBuf.replace("to ", 'to <span style= color:green"><b>')
    statsBuf= statsBuf.replace("/ Spe", "/ Spe<b>");

    statsBuf = statsBuf.replace('(', '</b></span>(');
    statsBuf += '</b></div>';


    var moveListBuf = `<p class="section"><small>`;
    if (serverPokemon && !isActive) {
        // move list
        const battlePokemon = clientPokemon || this.battle.findCorrespondingPokemon(pokemon);
        for (const moveid of serverPokemon.moves) {
            const move = Dex.moves.get(moveid);
            let moveName = `&#8226; ${move.name}`;
            if (battlePokemon && battlePokemon.moveTrack) {
                for (const row of battlePokemon.moveTrack) {
                    if (moveName === row[0]) {
                        moveName = this.getPPUseText(row, true);
                        break;
                    }
                }
            }
            // ***************
            let moveStr = 1;
            if (_this3.battle.farSide.active[0]) {
                
                let defTypes = (this.battle.dex.species.get(_this3.battle.farSide.active[0].speciesForme).types);

                moveStr = moveStr * TooltipPlus.BattleTypeChart[defTypes[0]].damageGiven[move.type];
                if (defTypes.length === 2) {
                    moveStr = moveStr * TooltipPlus.BattleTypeChart[defTypes[1]].damageGiven[move.type];
                }
               
            }


            // Show move base power
            moveListBuf += moveName + ', Base power: ' + move.basePower + ' ' +
                Dex.getTypeIcon(move.type) + ' ' +
                `<img src="${Dex.resourcePrefix}sprites/categories/${move.category}.png" alt="${move.category}" />` +
                (move.category === "Status" ? '' : (moveStr > 1 ? ` <b> (x${moveStr})</b>` : `(x${moveStr})`)) +
                '<br/>';

            // *********************
        }
        moveListBuf += '</small></p>';
    } else if (!this.battle.hardcoreMode && clientPokemon && clientPokemon.moveTrack.length) {
        // move list (guessed)
        moveListBuf = `<p class="section"><small>`;
        for (const row of clientPokemon.moveTrack) {
            // *****************
            // Show move base power
            var move = Dex.moves.get(row[0]);
            moveListBuf += this.getPPUseText(row) + ' Base power: ' + move.basePower + ' ' +
                Dex.getTypeIcon(move.type) + ' ' +
                `<img src="${Dex.resourcePrefix}sprites/categories/${move.category}.png" alt="${move.category}" />` +
                '<br />';
            // *******************
        }
        if (this.battle.gen < 8 && clientPokemon.moveTrack.filter(([moveName]) => {
            if (moveName.charAt(0) === '*') return false;
            const move = this.battle.dex.moves.get(moveName);
            return !move.isZ && !move.isMax;
        }).length > 4) {
            moveListBuf += `(More than 4 moves is usually a sign of Illusion Zoroark/Zorua.) `;
        }
        if (this.battle.gen === 3) {
            moveListBuf += `(Pressure is not visible in Gen 3, so in certain situations, more PP may have been lost than shown here.) `;
        }
        if (this.pokemonHasClones(clientPokemon)) {
            moveListBuf += `(Your opponent has two indistinguishable Pokémon, making it impossible for you to tell which one has which moves/ability/item.) `;
        }
        moveListBuf += `</p>`;
    }
    //******************************************************************** Random battle moves items and abilities
    //************ pulls data from https://pkmn.github.io/randbats/
    //** repo: https://github.com/pkmn/randbats/releases/, rewritten to be slightly less shitty

    
    var randBatBuf = '';
    if (format && format.includes('random') && clientPokemon && !serverPokemon) {
        var species = Dex.species.get(clientPokemon.speciesForme);
        let data;
        if (species) {
            randBatBuf += '<div style="border-top: 1px solid #888; background: #dedede">';
            var gen = Number(format.charAt(3));
            var letsgo = format.includes('letsgo');
            var gameType = this.battle.gameType;

            if (!['singles', 'doubles'].includes(gameType)) {
                format = 'gen' + gen + 'randomdoublesbattle';
            } else if (format.includes('monotype') || format.includes('unrated')) {
                format = 'gen' + gen + 'randombattle';
            }
            format = format.replace('blitz', '');


            if (Random_Battle_Data[format]) {

                data = Random_Battle_Data[format][species.name === 'Zoroark' ? 0 : pokemon.level];
                if (data) {

                    var cosmetic = species.cosmeticFormes && species.cosmeticFormes.includes(species.name);
                    var id = toID((species.forme === 'Gmax' || cosmetic)
                        ? species.baseSpecies : species.battleOnly || species.name);
                    if (id.startsWith('pikachu')) id = id.endsWith('gmax') ? 'pikachugmax' : 'pikachu';
                    var forme = cosmetic ? species.baseSpecies : pokemon.speciesForme;
                    if (forme.startsWith('Pikachu')) forme = forme.endsWith('Gmax') ? 'Pikachu-Gmax' : 'Pikachu';
                    
                    data = data[id]
                    if (data) {
                            
                        var roleArray = Object.keys(data[0].roles);
                        var confirmedRoleIndex = -1;
                        //************Auto resolve which set is being ran****************************
                        if(gen === 9){
                            var usedMoves = pokemon.moveTrack;     
                            var numRoles = Object.keys(data[0].roles).length;    
                            // ***************************** FIX HERE************************************************************************************************************************* FIX
                            for(var i = 0; i < usedMoves.length; i++){
                                var move = usedMoves[i][0];
                                if (numRoles === 2){
                                    console.log((data[0].roles[roleArray[0]].moves).includes(move) && !(data[0].roles[roleArray[1]].moves.includes(move)))
                                    if((data[0].roles[roleArray[0]].moves).includes(move) && !(data[0].roles[roleArray[1]].moves.includes(move))){
                                        //role 1 is correct role
                                        confirmedRoleIndex = 0;
                                    }
                                    if(data[0].roles[roleArray[1]].moves.includes(move) && !(data[0].roles[roleArray[0]].moves.includes(move))){
                                        //role 2 is correct role
                                        confirmedRoleIndex = 1;
                                    }
                                }
                                if (numRoles === 3){
                                    if(data[0].roles[roleArray[0]].moves.includes(move) && !(data[0].roles[roleArray[1]].moves.includes(move)) && !(data[0].roles[roleArray[2]].moves.includes(move))){
                                        //role 1 is correct role
                                        confirmedRoleIndex = 0;
                                    }
                                    if(data[0].roles[roleArray[1]].moves.includes(move) && !(data[0].roles[roleArray[0]].moves.includes(move)) && !(data[0].roles[roleArray[2]].moves.includes(move))){
                                        //role 2 is correct role
                                        confirmedRoleIndex = 1;
                                    }
                                    if(data[0].roles[roleArray[2]].moves.includes(move) && !(data[0].roles[roleArray[0]].moves.includes(move)) && !(data[0].roles[roleArray[1]].moves.includes(move))){
                                        //role 3 is correct role
                                        confirmedRoleIndex = 2;
                                    }
                                }
                            }
                            if (pokemon.item){
                                if (numRoles === 2){
                                    if(data[0].roles[roleArray[0]].items.includes(pokemon.item) && !(data[0].roles[roleArray[1]].items.includes(pokemon.item))){
                                        //role 1 is correct role
                                        confirmedRoleIndex = 0;
                                    }
                                    if(data[0].roles[roleArray[1]].items.includes(pokemon.item) && !(data[0].roles[roleArray[0]].items.includes(pokemon.item))){
                                        //role 2 is correct role
                                        confirmedRoleIndex = 1;
                                    }
                                }
                                
                                if (numRoles === 3){
                                    if(data[0].roles[roleArray[0]].items.includes(pokemon.item) && !(data[0].roles[roleArray[1]].items.includes(pokemon.item)) && !(data[0].roles[roleArray[2]].items.includes(pokemon.item))){
                                        //role 1 is correct role
                                        confirmedRoleIndex = 0;
                                    }
                                    if(data[0].roles[roleArray[1]].items.includes(pokemon.item) && !(data[0].roles[roleArray[0]].items.includes(pokemon.item)) && !(data[0].roles[roleArray[2]].items.includes(pokemon.item))){
                                        //role 2 is correct role
                                        confirmedRoleIndex = 1;
                                    }
                                    if(data[0].roles[roleArray[2]].items.includes(pokemon.item) && !(data[0].roles[roleArray[0]].items.includes(pokemon.item)) && !(data[0].roles[roleArray[1]].items.includes(pokemon.item))){
                                        //role 3 is correct role
                                        confirmedRoleIndex = 2;
                                    }
                                }
                            }      
                            if(pokemon.ability){
                                if (numRoles === 2){
                                    console.log(data[0].roles[roleArray[0]]);
                                    if(data[0].roles[roleArray[0]].abilities.includes(pokemon.ability) && !(data[0].roles[roleArray[1]].abilities.includes(pokemon.ability))){
                                        //role 1 is correct role
                                        confirmedRoleIndex = 0;
                                    }
                                    if(data[0].roles[roleArray[1]].abilities.includes(pokemon.ability) && !(data[0].roles[roleArray[0]].abilities.includes(pokemon.ability))){
                                        //role 2 is correct role
                                        confirmedRoleIndex = 1;
                                    }
                                }
                                
                                if (numRoles === 3){
                                    if(data[0].roles[roleArray[0]].abilities.includes(pokemon.ability) && !(data[0].roles[roleArray[1]].abilities.includes(pokemon.ability)) && !(data[0].roles[roleArray[2]].abilities.includes(pokemon.ability))){
                                        //role 1 is correct role
                                        confirmedRoleIndex = 0;
                                    }
                                    if(data[0].roles[roleArray[1]].abilities.includes(pokemon.ability) && !(data[0].roles[roleArray[0]].abilities.includes(pokemon.ability)) && !(data[0].roles[roleArray[2]].abilities.includes(pokemon.ability))){
                                        //role 2 is correct role
                                        confirmedRoleIndex = 1;
                                    }
                                    if(data[0].roles[roleArray[2]].abilities.includes(pokemon.ability) && !(data[0].roles[roleArray[0]].abilities.includes(pokemon.ability)) && !(data[0].roles[roleArray[1]].abilities.includes(pokemon.ability))){
                                        //role 3 is correct role
                                        confirmedRoleIndex = 2;
                                    }
                                }
                            }
                            console.log(pokemon);
                            if (pokemon.terastallized){
                                if (numRoles === 2){
                                    console.log(data[0].roles[roleArray[0]].abilities);
                                    if(data[0].roles[roleArray[0]].teraTypes.includes(pokemon.terastallized) && !(data[0].roles[roleArray[1]].teraTypes.includes(pokemon.terastallized))){
                                        //role 1 is correct role
                                        confirmedRoleIndex = 0;
                                    }
                                    if(data[0].roles[roleArray[1]].teraTypes.includes(pokemon.terastallized) && !(data[0].roles[roleArray[0]].teraTypes.includes(pokemon.terastallized))){
                                        //role 2 is correct role
                                        confirmedRoleIndex = 1;
                                    }
                                }
                                
                                if (numRoles === 3){
                                    if(data[0].roles[roleArray[0]].teraTypes.includes(pokemon.terastallized) && !(data[0].roles[roleArray[1]].teraTypes.includes(pokemon.terastallized)) && !(data[0].roles[roleArray[2]].teraTypes.includes(pokemon.terastallized))){
                                        //role 1 is correct role
                                        confirmedRoleIndex = 0;
                                    }
                                    if(data[0].roles[roleArray[1]].teraTypes.includes(pokemon.terastallized) && !(data[0].roles[roleArray[0]].teraTypes.includes(pokemon.terastallized)) && !(data[0].roles[roleArray[2]].teraTypes.includes(pokemon.terastallized))){
                                        //role 2 is correct role
                                        confirmedRoleIndex = 1;
                                    }
                                    if(data[0].roles[roleArray[2]].teraTypes.includes(pokemon.terastallized) && !(data[0].roles[roleArray[0]].teraTypes.includes(pokemon.terastallized)) && !(data[0].roles[roleArray[1]].teraTypes.includes(pokemon.terastallized))){
                                        //role 3 is correct role
                                        confirmedRoleIndex = 2;
                                    }
                                }
                            }
                        } //end gen 9 if
                        


                        if (data.length === 1) {
                            data[0].level = pokemon.level;
                            data[0].confirmedRole = confirmedRoleIndex;
                            randBatBuf += TooltipPlus.displaySet(gen, gameType, letsgo, species, data[0], data[0].name);
                        }
                        else if (toID(forme) !== id) {

                            var match = [];
                            for (var set of data) {
                                set.level = clientPokemon.level;
                                if (set.name === forme){
                                    set.confirmedRole = confirmedRoleIndex;
                                    match.push(TooltipPlus.displaySet(gen, gameType, letsgo, species, set));

                                }
                                if (match.length === 1) randBatBuf += match[0];
                            }
                        }
                    }
                }
            }
        }
    }

    // ***********
    // Show base stats
    var baseStatBuf = '';

    var template = clientPokemon ? clientPokemon.getSpecies() : null;
    if (TooltipPlus.Settings.showBaseStats === "ON" && template) {
        baseStatBuf += '<p><small>Base stats:' + '<br />';
        baseStatBuf += 'HP: ' + template.baseStats.hp + ' ';
        baseStatBuf += 'Atk: ' + template.baseStats.atk + ' ';
        baseStatBuf += 'Def: ' + template.baseStats.def + ' ';
        baseStatBuf += 'SpA: ' + template.baseStats.spa + ' ';
        baseStatBuf += 'SpD: ' + template.baseStats.spd + ' ';
        baseStatBuf += 'Spe: ' + template.baseStats.spe + '</small></p>';
    }

    // Show height
    let heightBuf = '';
    if (clientPokemon && pokemon.getSpecies(pokemon).heightm) {
        heightBuf += '<small>' + ' ' + pokemon.getSpecies(pokemon).heightm.toFixed(2) + 'm' + '</small>';
    }

    // Show weight
    let weightBuf = '';
    if (clientPokemon && pokemon.getSpecies(pokemon).weightkg) {
        weightBuf += '<small>' + ' ' + pokemon.getSpecies(pokemon).weightkg + 'kg' + '</small>';
    }

    let smogonBuf = '';
    /*if (!this.battle.tier.includes("random")) {
        var req = new XMLHttpRequest();
        req.open("GET", `https://smogon-usage-stats.herokuapp.com/${format}/${BattleLog.escapeHTML(pokemon.name)}`);
        req.send();
        var json;
        req.addEventListener('load', function () {
            if (req.status === 200 || req.status === 201) {
                json = JSON.parse(req.responseText);
        smogonBuf += '<p class="section"><small></br>';
        smogonBuf += `Rank: #${json.rank}</small></p>`;

            }
        });
    }*/


    text += typeBuf + hpBuf +
        nameBuf +

        formChangeBuf +
        genderBuf +
        illusionBuf +
        levelBuf +
        statsBuf +

        pokeIconBuf+
        weaknessesbuf +
        '<small>' +
        abilityBuf +
        itemBuf +

        '</small>' +
        smogonBuf +
        randBatBuf +
        moveListBuf +

        baseStatBuf +
        '<p>' +
        heightBuf +
        weightBuf +
        '</p>';

    return text;

};

TooltipPlus.getTypeEff = function (types) {
    if (types.length == 1) {
        var damage = TooltipPlus.BattleTypeChart[types[0]].damageGiven;
    } else {
        var damage = {
            "Bug": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Bug * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Bug,
            "Dark": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Dark * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Dark,
            "Dragon": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Dragon * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Dragon,
            "Electric": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Electric * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Electric,
            "Fairy": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Fairy * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Fairy,
            "Fighting": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Fighting * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Fighting,
            "Fire": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Fire * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Fire,
            "Flying": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Flying * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Flying,
            "Ghost": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Ghost * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Ghost,
            "Grass": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Grass * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Grass,
            "Ground": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Ground * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Ground,
            "Ice": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Ice * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Ice,
            "Normal": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Normal * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Normal,
            "Poison": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Poison * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Poison,
            "Psychic": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Psychic * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Psychic,
            "Rock": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Rock * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Rock,
            "Steel": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Steel * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Steel,
            "Water": TooltipPlus.BattleTypeChart[types[0]].damageGiven.Water * TooltipPlus.BattleTypeChart[types[1]].damageGiven.Water,
        }
    }

    var typeEff = {
        "4": [],
        "2": [],
        "1": [],
        "0.5": [],
        "0.25": [],
        "0": []
    };

    for (var index in damage) {
        var eff = damage[index];
        typeEff[eff].push(index);
    }

    return typeEff;
};


TooltipPlus.getMoveEff = function (type) {
    var moveEff = {
        "4": [],
        "2": [],
        "1": [],
        "0.5": [],
        "0.25": [],
        "0": []
    };


    Object.entries(TooltipPlus.BattleTypeChart).forEach(defType => {
        const [dType, obj] = defType;
        Object.entries(obj.damageGiven).forEach(offType => {
            const [atype, strength] = offType;
            if (atype === type) {
                moveEff[strength].push(dType);
            }
        });
    });

    return moveEff;
};

TooltipPlus.showMoveTooltip = function (move, isZOrMax, pokemon, serverPokemon, gmaxMove) {
    let text = '';

    let zEffect = '';
    let foeActive = pokemon.side.foe.active;
    if (this.battle.gameType === 'freeforall') {
        foeActive = [...foeActive, ...pokemon.side.active].filter(active => active !== pokemon);
    }
    // TODO: move this somewhere it makes more sense
    if (pokemon.ability === '(suppressed)') serverPokemon.ability = '(suppressed)';
    let ability = toID(serverPokemon.ability || pokemon.ability || serverPokemon.baseAbility);
    let item = this.battle.dex.items.get(serverPokemon.item);

    let value = new ModifiableValue(this.battle, pokemon, serverPokemon);
    let [moveType, category] = this.getMoveType(move, value, gmaxMove || isZOrMax === 'maxmove');

    if (isZOrMax === 'zmove') {
        if (item.zMoveFrom === move.name) {
            move = this.battle.dex.moves.get(item.zMove);
        } else if (move.category === 'Status') {
            move = new Move(move.id, "", {
                ...move,
                name: 'Z-' + move.name,
            });
            zEffect = this.getStatusZMoveEffect(move);
        } else {
            let moveName = BattleTooltips.zMoveTable[item.zMoveType];
            let zMove = this.battle.dex.moves.get(moveName);
            let movePower = move.zMove.basePower;
            // the different Hidden Power types don't have a Z power set, fall back on base move
            if (!movePower && move.id.startsWith('hiddenpower')) {
                movePower = this.battle.dex.moves.get('hiddenpower').zMove.basePower;
            }
            if (move.id === 'weatherball') {
                switch (this.battle.weather) {
                    case 'sunnyday':
                    case 'desolateland':
                        zMove = this.battle.dex.moves.get(BattleTooltips.zMoveTable['Fire']);
                        break;
                    case 'raindance':
                    case 'primordialsea':
                        zMove = this.battle.dex.moves.get(BattleTooltips.zMoveTable['Water']);
                        break;
                    case 'sandstorm':
                        zMove = this.battle.dex.moves.get(BattleTooltips.zMoveTable['Rock']);
                        break;
                    case 'hail':
                        zMove = this.battle.dex.moves.get(BattleTooltips.zMoveTable['Ice']);
                        break;
                }
            }
            move = new Move(zMove.id, zMove.name, {
                ...zMove,
                category: move.category,
                basePower: movePower,
            });
        }
    } else if (isZOrMax === 'maxmove') {
        if (move.category === 'Status') {
            move = this.battle.dex.moves.get('Max Guard');
        } else {
            let maxMove = this.getMaxMoveFromType(moveType, gmaxMove);
            const basePower = ['gmaxdrumsolo', 'gmaxfireball', 'gmaxhydrosnipe'].includes(maxMove.id) ?
                maxMove.basePower : move.maxMove.basePower;
            move = new Move(maxMove.id, maxMove.name, {
                ...maxMove,
                category: move.category,
                basePower,
            });
        }
    }



    let moveStr = 1;
    if (this.battle.farSide.active[0]) {

        let defTypes = (this.battle.dex.species.get(this.battle.farSide.active[0].speciesForme).types);

        moveStr = moveStr * TooltipPlus.BattleTypeChart[defTypes[0]].damageGiven[move.type];
        if (defTypes.length === 2) {
            moveStr = moveStr * TooltipPlus.BattleTypeChart[defTypes[1]].damageGiven[move.type];
        }

    }



    text += '<h2>';

    text += move.name + (category === 'Status' ? '' : ' (x ' + moveStr + ')') + '</span><br />';

    text += Dex.getTypeIcon(moveType);
    text += ` ${Dex.getCategoryIcon(category)}</h2>`;



    // ***********************
    // Show type effectiveness icons

    if (category !== 'Status') {




        const moveEff = TooltipPlus.getMoveEff(moveType);
        const multiplierKeys = [2, .5, 0];

        text += '<p>Effectiveness: <br />';

        multiplierKeys.forEach((multiplierKey) => {
            if (moveEff[multiplierKey].length > 0) {
                const weakTypes = moveEff[multiplierKey].map(dTypes => dTypes ? Dex.getTypeIcon(dTypes) : '').join(' ');
                text += `<p>${multiplierKey}x: ${weakTypes}</p>`;
            }
        });

        text += '</p><h2></h2>';
    }
    // ********************

    // Check if there are more than one active Pokémon to check for multiple possible BPs.
    let showingMultipleBasePowers = false;
    if (category !== 'Status' && foeActive.length > 1) {
        // We check if there is a difference in base powers to note it.
        // Otherwise, it is just shown as in singles.
        // The trick is that we need to calculate it first for each Pokémon to see if it changes.
        let prevBasePower = null;
        let basePower = '';
        let difference = false;
        let basePowers = [];
        for (const active of foeActive) {
            if (!active) continue;
            value = this.getMoveBasePower(move, moveType, value, active);
            basePower = '' + value;
            if (prevBasePower === null) prevBasePower = basePower;
            if (prevBasePower !== basePower) difference = true;
            basePowers.push('Base power vs ' + active.name + ': ' + basePower);
        }
        if (difference) {
            text += '<p>' + basePowers.join('<br />') + '</p>';
            showingMultipleBasePowers = true;
        }
        // Falls through to not to repeat code on showing the base power.
    }
    if (!showingMultipleBasePowers && category !== 'Status') {
        let activeTarget = foeActive[0] || foeActive[1] || foeActive[2];
        value = this.getMoveBasePower(move, moveType, value, activeTarget);
        text += '<p>Base power: ' + value + '</p>';
    }



    //Deal with Nature Power special case, indicating which move it calls.
    if (move.id === 'naturepower') {
        let calls;
        if (this.battle.gen > 5) {
            if (this.battle.hasPseudoWeather('Electric Terrain')) {
                calls = 'Thunderbolt';
            } else if (this.battle.hasPseudoWeather('Grassy Terrain')) {
                calls = 'Energy Ball';
            } else if (this.battle.hasPseudoWeather('Misty Terrain')) {
                calls = 'Moonblast';
            } else if (this.battle.hasPseudoWeather('Psychic Terrain')) {
                calls = 'Psychic';
            } else {
                calls = 'Tri Attack';
            }
        } else if (this.battle.gen > 3) {
            // In gens 4 and 5 it calls Earthquake.
            calls = 'Earthquake';
        } else {
            // In gen 3 it calls Swift, so it retains its normal typing.
            calls = 'Swift';
        }
        let calledMove = this.battle.dex.moves.get(calls);
        text += 'Calls ' + Dex.getTypeIcon(this.getMoveType(calledMove, value)[0]) + ' ' + calledMove.name;
    }

    let accuracy = this.getMoveAccuracy(move, value);
    text += '<p>Accuracy: ' + accuracy + '</p>';

    if (zEffect) text += '<p>Z-Effect: ' + zEffect + '</p>';

    if (this.battle.hardcoreMode) {
        text += '<p class="section">' + move.shortDesc + '</p>';
    } else {
        text += '<p class="section">';
        if (move.priority > 1) {
            text += 'Nearly always moves first <em>(priority +' + move.priority + ')</em>.</p><p>';
        } else if (move.priority <= -1) {
            text += 'Nearly always moves last <em>(priority &minus;' + (-move.priority) + ')</em>.</p><p>';
        } else if (move.priority === 1) {
            text += 'Usually moves first <em>(priority +' + move.priority + ')</em>.</p><p>';
        } else {
            if (move.id === 'grassyglide' && this.battle.hasPseudoWeather('Grassy Terrain')) {
                text += 'Usually moves first <em>(priority +1)</em>.</p><p>';
            }
        }

        text += '' + (move.desc || move.shortDesc || '') + '</p>';

        if (this.battle.gameType === 'doubles' || this.battle.gameType === 'multi') {
            if (move.target === 'allAdjacent') {
                text += '<p>&#x25ce; Hits both foes and ally.</p>';
            } else if (move.target === 'allAdjacentFoes') {
                text += '<p>&#x25ce; Hits both foes.</p>';
            }
        } else if (this.battle.gameType === 'triples') {
            if (move.target === 'allAdjacent') {
                text += '<p>&#x25ce; Hits adjacent foes and allies.</p>';
            } else if (move.target === 'allAdjacentFoes') {
                text += '<p>&#x25ce; Hits adjacent foes.</p>';
            } else if (move.target === 'any') {
                text += '<p>&#x25ce; Can target distant Pok&eacute;mon in Triples.</p>';
            }
        } else if (this.battle.gameType === 'freeforall') {
            if (move.target === 'allAdjacent' || move.target === 'allAdjacentFoes') {
                text += '<p>&#x25ce; Hits all foes.</p>';
            } else if (move.target === 'adjacentAlly') {
                text += '<p>&#x25ce; Can target any foe in Free-For-All.</p>';
            }
        }

        if (move.flags.defrost) {
            text += `<p class="movetag">The user thaws out if it is frozen.</p>`;
        }
        if (!move.flags.protect && !['self', 'allySide'].includes(move.target)) {
            text += `<p class="movetag">Not blocked by Protect <small>(and Detect, King's Shield, Spiky Shield)</small></p>`;
        }
        if (move.flags.bypasssub) {
            text += `<p class="movetag">Bypasses Substitute <small>(but does not break it)</small></p>`;
        }
        if (!move.flags.reflectable && !['self', 'allySide'].includes(move.target) && move.category === 'Status') {
            text += `<p class="movetag">&#x2713; Not bounceable <small>(can't be bounced by Magic Coat/Bounce)</small></p>`;
        }

        if (move.flags.contact) {
            text += `<p class="movetag">&#x2713; Contact <small>(triggers Iron Barbs, Spiky Shield, etc)</small></p>`;
        }
        if (move.flags.sound) {
            text += `<p class="movetag">&#x2713; Sound <small>(doesn't affect Soundproof pokemon)</small></p>`;
        }
        if (move.flags.powder && this.battle.gen > 5) {
            text += `<p class="movetag">&#x2713; Powder <small>(doesn't affect Grass, Overcoat, Safety Goggles)</small></p>`;
        }
        if (move.flags.punch && ability === 'ironfist') {
            text += `<p class="movetag">&#x2713; Fist <small>(boosted by Iron Fist)</small></p>`;
        }
        if (move.flags.pulse && ability === 'megalauncher') {
            text += `<p class="movetag">&#x2713; Pulse <small>(boosted by Mega Launcher)</small></p>`;
        }
        if (move.flags.bite && ability === 'strongjaw') {
            text += `<p class="movetag">&#x2713; Bite <small>(boosted by Strong Jaw)</small></p>`;
        }
        if ((move.recoil || move.hasCrashDamage) && ability === 'reckless') {
            text += `<p class="movetag">&#x2713; Recoil <small>(boosted by Reckless)</small></p>`;
        }
        if (move.flags.bullet) {
            text += `<p class="movetag">&#x2713; Bullet-like <small>(doesn't affect Bulletproof pokemon)</small></p>`;
        }
    }

    return text;


};


// Overwrite client tooltip method with enhanced tooltip method
PokemonSprite.prototype.getStatbarHTML = TooltipPlus.getStatbarHTML;
BattleTooltips.prototype.showPokemonTooltip = TooltipPlus.showPokemonTooltip;

BattleTooltips.prototype.showMoveTooltip = TooltipPlus.showMoveTooltip;

TooltipPlus.getRandBatsData();
//******************************************************************************************************************************
