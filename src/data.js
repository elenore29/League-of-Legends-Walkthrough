window.lol = {
  //Funcion que recorre un objeto que contiene los indicadores y se convierte en un arreglo
  showData: (lolData) => {
    let newArrayInfo = [];
    let champsInfo = {};
    for (const key in lolData) {
      if (lolData.hasOwnProperty(key)) {
        const element = lolData[key];
        champsInfo = {
          splash: element.splash,
          name: element.name,
          primaryRol: element.tags[0],
          secondaryRol: element.tags[1],
          attack: element.info.attack,
          defense: element.info.defense,
          magic: element.info.magic,
          id: element.id,
          difficulty: element.info.difficulty,
          hp: element.stats.hp, 
          mp: element.stats.mp,
          armor: element.stats.armor,
          crit: element.stats.crit,
          attackdamage: element.stats.attackdamage,
          movespeed: element.stats.movespeed,
          title: element.title,
          graphic: [element.info.attack, element.info.defense, element.info.magic, element.info.difficulty],
        }
        if (!element.tags[1]) {
          champsInfo.secondaryRol = "";
        }
      }
      newArrayInfo.push(champsInfo);
    }
    return newArrayInfo;
  },

  filterByRol: (newArrayChamp, rolId) => {
    const filtering = newArrayChamp.filter(element => element.primaryRol == rolId || element.secondaryRol == rolId);
    return filtering;
  },

  //Aquí inicia la función para ordenar por ataque descendente
  sorterByAttack: (newArrayChamp, order) => {
    const attackSorter = newArrayChamp.sort((a, b) => {
      //-1*order Para que una sola funcion ordene de forma ascendente y descendente
      if (a.attack > b.attack) {
        return 1*order;
      }
      if (a.attack < b.attack) {
        return -1*order;
      } else {
        return 0;
      }
    });
    return attackSorter;
  },

  sorterByMagic: (newArrayChamp) => {
    const magicSorter = newArrayChamp.sort((a, b) => {
      if (b.magic > a.magic) {
        return 1;
      }
      if (b.magic < a.magic) {
        return -1;
      } else {
        return 0;
      }
    });
    return magicSorter;
  },

  sorterByDefense: (newArrayChamp) => {
    const defenseSorter = newArrayChamp.sort((a, b) => {
      if (b.defense > a.defense) {
        return 1;
      }
      if (b.defense < a.defense) {
        return -1;
      } else {
        return 0;
      }
    });
    return defenseSorter;
  },

  filterByName: (newArrayChamp, name2) => {
    const filteringName = newArrayChamp.filter(element => (element.id.toLowerCase().match(name2.toLowerCase())));
    return filteringName;
  },

  toModal: (newArrayChamp, champSelect) => {
    let champ = {};
    for (const key in newArrayChamp) {
      if (newArrayChamp.hasOwnProperty(key)) {
        const element = newArrayChamp[key];
        if (element.id === champSelect) {
          champ = element;
          return element;
        }
      }
    }
    return champ;
  },

  //Aquí inicia la función matemática
  toReduce: (difficultyArray) => {
    const champDifficulty = difficultyArray.reduce((total, newArrayInfo) => {
      return total += newArrayInfo.difficulty;
    }, 0);
    return champDifficulty;
  },

  //esta llave cierra window.lol
}
