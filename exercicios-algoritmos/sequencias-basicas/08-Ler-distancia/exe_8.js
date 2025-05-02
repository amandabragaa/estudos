
const metros = Number(prompt("Digite uma distância em metros:"));
const km = metros / 1000;
const hm = metros / 100;
const dam = metros / 10;
const dm = metros * 10;
const cm = metros * 100;
const mm =  metros * 1000;

alert(`A distancia entre ${metros} correspondem a:
\n${km}km\n${hm}hm\n${dam}dam\n${dm}dm\n${cm.toFixed(1)}cm\n${mm.toFixed(1)}mm`);
