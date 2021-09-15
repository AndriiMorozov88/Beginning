let continentBeforePandemic = [];
let continentAfterPandemic = [];
let oceanPosition = [];
let oceanCount = 0;
let infectedBefore = 0;
let map = prompt (' Введите конфигурацию карты ');

for (firstCounter = 0; firstCounter < map.length; firstCounter++) {
    if (map[firstCounter] !=='X') {
        if (map[firstCounter] !=='1') {
            if (map[firstCounter] !=='0') {location.reload()
            }
        }
    }
    continentBeforePandemic[firstCounter] = map[firstCounter];
    if (continentBeforePandemic[firstCounter] == 'X') {
        oceanPosition[oceanCount] = firstCounter;
        oceanCount = oceanCount + 1;
        continentAfterPandemic[firstCounter] = "X";
    }
    if (continentBeforePandemic[firstCounter] == '1') {
        infectedBefore = infectedBefore + 1;
    }
}

let continentsCount = map.length - oceanCount;
console.log('Начало пандемии', map);
let percentBefore = (infectedBefore * 100) / continentsCount;
console.log('Всего =', continentsCount, 'Заражено = ', infectedBefore, ", что составляет", percentBefore, '%');

if (oceanCount === 0) {
    for (firstCounter = 0; firstCounter < map.length; firstCounter++) {
        continentAfterPandemic[firstCounter] = continentBeforePandemic[firstCounter];
        if (continentBeforePandemic[firstCounter] == 1) {
            withoutOceans();
        }
    }
}

for (firstCounter = 0; firstCounter < oceanPosition[0]; firstCounter++) {
    continentAfterPandemic[firstCounter] = continentBeforePandemic[firstCounter];
    if (continentBeforePandemic[firstCounter] == 1) {
        beforeFirstOcean();
    }
}

for (secondCounter = 0; secondCounter < oceanCount; secondCounter++) {
    for (firstCounter = (oceanPosition[secondCounter] + 1); firstCounter < oceanPosition[secondCounter + 1]; firstCounter++) {
        continentAfterPandemic[firstCounter] = continentBeforePandemic[firstCounter];
        if (continentBeforePandemic[firstCounter] == 1) {
            betweenOceans();
        }
    }
}

for (firstCounter = oceanPosition[oceanCount - 1] + 1; firstCounter < map.length; firstCounter++) {
    continentAfterPandemic[firstCounter] = continentBeforePandemic[firstCounter];
    if (continentBeforePandemic[firstCounter] == 1) {
        afterLastOcean();
    }
}

function beforeFirstOcean() {
    for (firstCounter = 0; firstCounter < oceanPosition[0]; firstCounter++) {
        continentAfterPandemic[firstCounter] = 1;
    }
}

function betweenOceans() {
    for (firstCounter = (oceanPosition[secondCounter] + 1); firstCounter < oceanPosition[secondCounter + 1]; firstCounter++) {
        continentAfterPandemic[firstCounter] = 1;
    }
}

function afterLastOcean() {
    for (firstCounter = oceanPosition[oceanCount - 1] + 1; firstCounter < map.length; firstCounter++) {
        continentAfterPandemic[firstCounter] = 1;
    }
}

function withoutOceans() {
    for (firstCounter = 0; firstCounter < map.length; firstCounter++) {
        continentAfterPandemic[firstCounter] = 1;
    }
}

let infectedAfter = 0;
let mapAfterPandemic = "";

for (firstCounter = 0; firstCounter < map.length; firstCounter++) {
    mapAfterPandemic = mapAfterPandemic + continentAfterPandemic[firstCounter];
    if (continentAfterPandemic[firstCounter] == '1') {
        infectedAfter = infectedAfter + 1;
    }
}

console.log('Конец  пандемии', mapAfterPandemic);
let percentAfter = ( infectedAfter * 100) / continentsCount;
console.log('Всего =', continentsCount, 'Заражено = ', infectedAfter, ", что составляет", percentAfter, '%');


function outputContinents (continents) {
    for (firstCounter = 0; firstCounter < map.length; firstCounter++) {
        let div = document.createElement('div');
        if (continents[firstCounter] == 'X') {
            div.className = "ocean";}
        if (continents[firstCounter] == '0') {
            div.className = "uninfected";}
        if (continents[firstCounter] == '1') {
            div.className = "infected";}
        document.body.append(div); }}

function outputResults (total, infected, percent) {
    let result = document.createElement('div');
    result.innerHTML = "TOTAL = " + total + ",   INFECTED = " + infected + ",  PERCENT = " + percent + " %";
    document.body.append(result);
    result.className = 'main';
}
let pandemicStart = document.getElementById('pandemicStart');
document.body.append(pandemicStart);
outputContinents(continentBeforePandemic);
outputResults(continentsCount, infectedBefore, percentBefore);
let pandemicFinish = document.getElementById('pandemicFinish');
document.body.append(pandemicFinish);
outputContinents(continentAfterPandemic);
outputResults(continentsCount, infectedAfter, percentAfter);
