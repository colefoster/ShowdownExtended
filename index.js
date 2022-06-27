'use strict';
let TooltipPlus = {};

TooltipPlus.Settings = {
    showBaseStats: 'ON',
};

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
var DATA = {};

TooltipPlus.getRandBatsData = function getRandBatsData() {


    var SUPPORTED = [
        'gen1randombattle', 'gen2randombattle', 'gen3randombattle',
        'gen4randombattle', 'gen5randombattle', 'gen6randombattle',
        'gen7randombattle', 'gen7letsgorandombattle', 'gen7randomdoublesbattle',
        'gen8bdsprandombattle', 'gen8randombattle', 'gen8randombattleblitz',
        'gen8randombattlenodmax', 'gen8randomdoublesbattle',
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
                DATA[f] = data;
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

    var moves = data.moves;
    var noHP = true;
    var multi = !['singles', 'doubles'].includes(gameType);
    var ms = [];
    for (var move of moves) {
        if (move.startsWith('Hidden Power')) noHP = false;
        if (!(multi && move === 'Ally Switch')) ms.push(move);
    }

    var buf = '';
    if (name) buf += '<p><b>' + name + '</b></p>';
    if (gen >= 3 && !letsgo) {
        buf += '<p><small>Abilities: ' + data.abilities.map(a => a += ' (' + Dex.abilities.get(a).shortDesc + ')').join(', ') + '</small></p>';
    }
    if (gen >= 2 && !(letsgo && !data.items)) {
        buf +=
            '<p><small>Items: ' + (data.items ? data.items.map(i => i = '<span class="itemicon" style = "' + Dex.getItemIcon(i) + '" ></span >' + ' ' + Dex.items.get(i).name + ' (' + Dex.items.get(i).shortDesc + ')').join('<br/>') : '(No Item)') + '</small></p>';
    }
    let tempMove = '<p class="section"><small>Moves: <br/>' + moves.join(', ') + '</p>';
    buf += tempMove;



    buf += '</p><p><small>';
    for (var statName of Dex.statNamesExceptHP) {
        if (gen === 1 && statName === 'spd') continue;
        var known = gen === 1 || (gen === 2 && noHP) ||
            ('ivs' in data && statName in data.ivs) || ('evs' in data && statName in data.evs);
        var statLabel = gen === 1 && statName === 'spa' ? 'spc' : statName;
        buf += statName === 'atk' ? '<small>' : '<small> / ';
        buf += '' + BattleText[statLabel].statShortName + '&nbsp;</small>';
        var italic = !known && (statName === 'atk' || statName === 'spe');
        buf += (italic ? '<i>' : '') + stats[statName] + (italic ? '</i>' : '');
    }
    buf += '</small></p>';

    buf += '</div>';
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
    var _this3 = this;
    const pokemon = clientPokemon || serverPokemon;
    let text = '';


    //**************** Poke icon (top)
    //let pokeIconBuf = '<p><span class="picon" style="' + Dex.getPokemonIcon(pokemon) + '"></span>';
    let pokeIconBuf = '<img src="' + Dex.resourcePrefix + 'sprites/gen5/' + BattleLog.escapeHTML((pokemon.speciesForme).replace(' ', '').replace('\'', '').replace('%', '')).toLowerCase() + '.png"/>';


    //*********************Type icons
    var types = this.getPokemonTypes(pokemon);
    var typeBuf = '';

    if (clientPokemon && (clientPokemon.volatiles.typechange || clientPokemon.volatiles.typeadd)) {
        typeBuf += `<p><small>(Type changed)</small></p>`;
    }
    typeBuf += types.map(type => Dex.getTypeIcon(type)).join(' ');


    // ******************** HP Text
    let hpBuf = '<p>';
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
    let nameBuf = BattleLog.escapeHTML(pokemon.name);
    if (pokemon.speciesForme !== pokemon.name) {
        nameBuf += '<small>(' + BattleLog.escapeHTML(pokemon.speciesForme) + ')</small>';
    }


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

    // ***********************
    // Show type effectiveness icons
    let weaknessesbuf = '<p class="section">';



    const typeEff = TooltipPlus.getTypeEff(types);
    const multiplierKeys = [4, 2, .5, .25, 0];
    weaknessesbuf += '<small>Weaknesses: <br />';
    multiplierKeys.forEach((multiplierKey) => {
        if (typeEff[multiplierKey].length > 0) {
            const weakTypes = typeEff[multiplierKey].map(effect => effect ? Dex.getTypeIcon(effect) : '').join(' ');
            weaknessesbuf += `<p>${multiplierKey}x: ${weakTypes}</p>`;
        }
    });
    weaknessesbuf += '</p>'; //line


    const supportsAbilities = this.battle.gen > 2 && !this.battle.tier.includes("Let's Go");

    let abilityBuf = '<div style="border-top: 1px solid #888; background: #dedede">';
    if (supportsAbilities) {//************************************************************************* Ability text and desc
        const abilityData = this.getPokemonAbilityData(clientPokemon, serverPokemon);
        if (!isActive) {
            // for switch tooltips, only show the original ability
            const ability = abilityData.baseAbility || abilityData.ability; //switchable pokes
            if (ability) abilityBuf += '<p><small>Ability: ' + Dex.abilities.get(ability).name + ' (' + Dex.abilities.get(ability).shortDesc + ')</small></p>';
        } else {
            if (abilityData.ability) {
                const ability = abilityData.baseAbility || abilityData.ability; //active poke
                if (ability) abilityBuf += '<p><small>Ability: ' + Dex.abilities.get(ability).name + ' (' + Dex.abilities.get(ability).shortDesc + ')</small></p>';
                const baseAbilityName = Dex.abilities.get(abilityData.baseAbility).name;
                if (baseAbilityName && baseAbilityName !== Dex.abilities.get(ability).name) abilityBuf += '<p><small> (base: ' + baseAbilityName + ')</small></p>';
            }
        }
        if (abilityData.possibilities.length && !illusionIndex) {
            abilityBuf = '<p><small>Possible abilities: ' + abilityData.possibilities.map(p => Dex.abilities.get(p).name + ' (' + Dex.abilities.get(p).shortDesc + ')').join('<br/>');
        }
    }
    abilityBuf += '</small></p>';

    let itemBuf = '';
    if (serverPokemon && serverPokemon.item) {
        itemBuf = '<p><small>Item: ' + '<span class="itemicon" style="' + Dex.getItemIcon(serverPokemon.item) + '"></span>' + ' ' + Dex.items.get(serverPokemon.item).name + ' (' + Dex.items.get(serverPokemon.item).shortDesc + ')</small></p>';
    } else if (clientPokemon) {
        abilityBuf = '';
        let item = '';
        let itemEffect = clientPokemon.itemEffect || '';
        if (clientPokemon.prevItem) {
            item = '<p><small>None</small></p>';
            if (itemEffect) itemEffect += '; ';
            let prevItem = Dex.items.get(clientPokemon.prevItem).name;
            itemEffect += '<p><small>' + clientPokemon.prevItemEffect ? prevItem + '<span class="itemicon" style="' + Dex.getItemIcon(clientPokemon.prevItem) + '"></span>' + ' was ' + clientPokemon.prevItemEffect : 'was ' + prevItem + '<span class="itemicon" style="' + Dex.getItemIcon(clientPokemon.prevItem) + '"></span>' + '</small></p>';
        }
        if (pokemon.item) item = Dex.items.get(pokemon.item).name;
        if (itemEffect) itemEffect = ' (' + itemEffect + ')';
        if (item) itemBuf = '<p><small>Item: ' + item + '<span class="itemicon" style="' + Dex.getItemIcon(clientPokemon.item) + '"></span>' + itemEffect + '</small></p>';
    }


    let lines = '<hr>';
    let statsBuf = this.renderStats(clientPokemon, serverPokemon, !isActive);
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
                console.log(defTypes);
                
                for (var types in defTypes) {
                    moveStr = TooltipPlus.BattleTypeChart[defTypes[0]].damageGiven[move.type] * TooltipPlus.BattleTypeChart[defTypes[1]].damageGiven[move.type]
                    console.log(moveStr);
                };
            }


            // Show move base power
            moveListBuf += moveName + ', Base power: ' + move.basePower + ' ' +
                Dex.getTypeIcon(move.type) + ' ' +
                `<img src="${Dex.resourcePrefix}sprites/categories/${move.category}.png" alt="${move.category}" />` +
                (move.category === "Status" ? '' : (moveStr > 1 ? ` <b> (x${moveStr})</b>` : `(x${moveStr} )`)) +
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
                '</small><br />';
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

    var format = toID(this.battle.tier);
    var randBatBuf = '';
    if (format && format.includes('random') && clientPokemon && !serverPokemon) {
        var species = Dex.species.get(clientPokemon.speciesForme);
        if (species) {
            randBatBuf += '<div style="border-top: 1px solid #888; background: #dedede">';
            randBatBuf += '<p><small><b>Random Battle Set:</small></b></p>';
            var gen = Number(format.charAt(3));
            var letsgo = format.includes('letsgo');
            var gameType = this.battle.gameType;

            if (!['singles', 'doubles'].includes(gameType)) {
                format = 'gen' + gen + 'randomdoublesbattle';
            } else if (format.includes('monotype') || format.includes('unrated')) {
                format = 'gen' + gen + 'randombattle';
            }

            if (DATA[format]) {

                var data = DATA[format][species.name === 'Zoroark' ? 0 : pokemon.level];
                if (data) {

                    var cosmetic = species.cosmeticFormes && species.cosmeticFormes.includes(species.name);
                    var id = toID((species.forme === 'Gmax' || cosmetic)
                        ? species.baseSpecies : species.battleOnly || species.name);
                    if (id.startsWith('pikachu')) id = id.endsWith('gmax') ? 'pikachugmax' : 'pikachu';
                    var forme = cosmetic ? species.baseSpecies : pokemon.speciesForme;
                    if (forme.startsWith('Pikachu')) forme = forme.endsWith('Gmax') ? 'Pikachu-Gmax' : 'Pikachu';

                    data = data[id]

                    if (data) {

                        if (data.length === 1) {
                            data[0].level = pokemon.level;
                            randBatBuf += TooltipPlus.displaySet(gen, gameType, letsgo, species, data[0]);
                        }
                        else if (toID(forme) !== id) {

                            var match = [];
                            for (var set of data) {
                                set.level = clientPokemon.level;
                                if (set.name === forme) match.push(TooltipPlus.displaySet(gen, gameType, letsgo, species, set));
                            }
                            if (match.length === 1) randBatBuf += match[0];
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
                console.log(json);
        smogonBuf += '<p class="section"><small></br>';
        smogonBuf += `Rank: #${json.rank}</small></p>`;

            }
        });
        console.log(smogonBuf)
    }*/


    text += pokeIconBuf + typeBuf + hpBuf +
        nameBuf +

        formChangeBuf +
        genderBuf +
        illusionBuf +
        levelBuf +
        statsBuf +

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



    let defTypes = (this.battle.dex.species.get(foeActive[0].speciesForme).types);

    let moveStr = 1;
    for (var types in defTypes) {
        moveStr = TooltipPlus.BattleTypeChart[defTypes[0]].damageGiven[moveType] * TooltipPlus.BattleTypeChart[defTypes[1]].damageGiven[moveType]
    };



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


}


// Overwrite client tooltip method with enhanced tooltip method

PokemonSprite.prototype.getStatbarHTML = TooltipPlus.getStatbarHTML;
BattleTooltips.prototype.showPokemonTooltip = TooltipPlus.showPokemonTooltip;

BattleTooltips.prototype.showMoveTooltip = TooltipPlus.showMoveTooltip;

TooltipPlus.getRandBatsData();
//******************************************************************************************************************************