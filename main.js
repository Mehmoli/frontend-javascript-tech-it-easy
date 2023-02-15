// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// **----------  OPDRACHT 1A ----------**

const typeTvAndNames = inventory.map ((stockTv)=>{
  return stockTv.type +" "+ stockTv.name;
})
 console.log(typeTvAndNames);


// **----------  OPDRACHT 1B ----------**

const soldOutTvs = inventory.filter ((stockTv)=>{
  return (stockTv.originalStock - stockTv.sold) === 0;
})
console.log(soldOutTvs);


// **----------  OPDRACHT 1C ----------**

const ambilightTvs = inventory.filter ((stockTv) => stockTv.options.ambiLight === true);
console.log(ambilightTvs);

// **----------  OPDRACHT 1D ----------**

inventory.sort((a, b) => a.price - b.price);
console.log(inventory);

// **----------  OPDRACHT 2 ----------** //Elementen in de DOM plaatsen

// **----------  OPDRACHT 2A ----------**

let soldTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].sold;
}
console.log(soldTvs);
//*****************************************//

// **----------  OPDRACHT 2B ----------**

const resultSoldTvsElement = document.getElementById('root-div');
console.log(resultSoldTvsElement);
resultSoldTvsElement.innerHTML = `
    <h1 id="headerTitle">Tech It Easy Dashboard</h1>
    <div id="container">
	<div id="sold_tvs">Het aantal verkochte Tv's = <span>${soldTvs}</span></div>
	<div id="stock-tvs"></div>
	</div>
`;
const boxes = document.getElementById('container');
boxes.style.display = "flex";
boxes.style.flexDirection = "row";
boxes.style.justifyContent = "space-evenly";
boxes.style.width = "100%";

const divIdsoldTtvs = document.getElementById('sold_tvs').getElementsByTagName('span');
divIdsoldTtvs.item(0).style.color = "green";
const divIdSold = document.getElementById('sold_tvs');
divIdSold.style.border = "4px solid grey";
divIdSold.style.backgroundColor = "lightgrey";
divIdSold.style.padding = "10px"
divIdSold.style.margin = "10px";

// **----------  OPDRACHT 2C ----------**

let boughtTvs = 0;
for (let i = 0; i < inventory.length; i++) {
  boughtTvs += inventory[i].originalStock;
}
console.log(boughtTvs);

// **----------  OPDRACHT 2D ----------**

const resultBoughtTvs = document.getElementById('stock-tvs');
  resultBoughtTvs.innerHTML = `
    Het aantal gekochte Tv's = <span>${boughtTvs}</span>
  `;
  const spanResultBoughtTvs = document.getElementById('stock-tvs').getElementsByTagName('span');
  spanResultBoughtTvs.item(0).style.color = "blue";
  const resultBought = document.getElementById('stock-tvs');
  resultBought.style.border = "4px solid grey";
  resultBought.style.backgroundColor = "lightgrey";
  resultBought.style.padding = "10px";
  resultBought.style.margin = "10px";

// **----------  OPDRACHT 2E ----------**

let toSellTvs = 0;
for (let i = 0; i < inventory.length; i++) {
  toSellTvs += inventory[i].originalStock - inventory[i].sold;
}
console.log(toSellTvs);

const divElement = document.createElement('div');
divElement.innerHTML = `Het aantal te verkopen Tv's = <span>${toSellTvs}</span> `;
divElement.setAttribute('id', 'to-sell-tvs');
const insideRootDiv = document.getElementById('container');
insideRootDiv.appendChild(divElement);
const spanToSellTvs = document.getElementById('to-sell-tvs').getElementsByTagName("span");
spanToSellTvs.item(0).style.color = "red";
const toSelldiv = document.getElementById('to-sell-tvs');
toSelldiv.style.border = "4px solid grey";
toSelldiv.style.backgroundColor = "lightgrey";
toSelldiv.style.padding = "10px";
toSelldiv.style.margin = "10px";

// **----------  OPDRACHT 3 ----------**// Array methoden en functies

// **----------  OPDRACHT 3A ----------**

const brandTvs = inventory.map ((brandTv)=>{
  return brandTv.brand
})
console.log(brandTvs);


// CREATE UL IN DiV LIST-BRAND //

const listDiv = document.createElement('div');
const inRootDiv = document.getElementById('root-div');
inRootDiv.appendChild(listDiv);
listDiv.setAttribute('id', 'list-container');

// CREATE li IN ul //

const selectListDiv = document.getElementById('list-container');
const createUl = document.createElement('ul');
selectListDiv.appendChild(createUl);
createUl.setAttribute('id', 'list-ul');

for (let i = 0; i < brandTvs.length; i++) {
  const ul = document.getElementById("list-ul");
  const li = document.createElement("li");
  const text = document.createTextNode(brandTvs[i]);
  li.appendChild(text);
  ul.appendChild(li);
  li.style.listStyle = "none";
  li.style.border = "2px solid lightblue";
  li.style.width = "80px";
  li.style.margin = "2px";
  li.style.display = "inline-block";
}

// // **----------  OPDRACHT 3B ----------**

function tvBrandList() {
  for (let i = 0; i < brandTvs.length; i++) {
    const ul = document.getElementById("list-ul");
    const li = document.createElement("li");
    const text = document.createTextNode(brandTvs[i]);
    li.appendChild(text);
    ul.appendChild(li);
    li.style.listStyle = "none";
    li.style.border = "2px solid grey";
    li.style.width = "80px";
    li.style.margin = "2px";
    li.style.display = "inline-block";

  }
}
tvBrandList();

//**#### Opdracht 4  Functies ###**/
let tvCard = `${inventory[4].brand}  ${inventory[4].type} - ${inventory[4].name}
€${inventory[4].price},-
${inventory[4].availableSizes[0]} inch (109 cm) | ${inventory[4].availableSizes[1]} inch (127 cm) | ${inventory[4].availableSizes[2]} inch (149 cm)
`;
console.log(tvCard);

// **----------  OPDRACHT 4A ----------**

const tvBrandTypeName = inventory.map((tvs) => {
  return `${tvs.brand}  ${tvs.type} - ${tvs.name}`;
})
console.log(tvBrandTypeName);

// **----------  OPDRACHT 4B ----------**

const tvPrices = inventory.map((tvPrice) => {
  return `€${tvPrice.price},-`;
})
console.log(tvPrices);

// **----------  OPDRACHT 4C ----------**

const tvSizes = inventory.map((tvSize) => {
  return `${tvSize.availableSizes} `
})
console.log('// **----------  OPDRACHT 4C ----------**');
console.log(tvSizes);

//*****BEREKENEN VAN INCH NAAR CENTIMETERS ******//

// const inchTvs = [24,32,43,50,55,58,65,70];
// for (let i = 0; i < inchTvs.length; i++) {
//     const naarCm = Math.round(inchTvs[i] * 2.54);
//     console.log(`${inchTvs[i]} inch (${naarCm} cm) |`);
// }
console.log('************OPDRACHT 4C*****************');

function generateTvString(inventory) {
  let output = " ";
  for (let i = 0; i < inventory.length; i++) {
    const toCm = Math.round(inventory[i] * 2.54);
    output = output + `${inventory[i]} inch (${toCm} cm) |`;
  }
  return output;
}
console.log(generateTvString(inventory[5].availableSizes));

/////////////////////////////////////////////////////////////

console.log('************OPDRACHT 4D*****************');

const tvCardDiv = document.createElement('div');
const RootDiv = document.getElementById('root-div');
RootDiv.appendChild(tvCardDiv);
tvCardDiv.setAttribute('id', 'tvCard');

const selectDiv = document.getElementById('tvCard');
// const createP = document.createElement('p');
// createP.setAttribute('id', 'pTvCard');

function tv_Card() {
  for (let i = 0; i < tvBrandTypeName.length; i++) {
    const ptv = document.getElementById("tvCard");
    const p = document.createElement("p");
    selectDiv.appendChild(p);
    const text = document.createTextNode(`${tvBrandTypeName[i]}
        ${tvPrices[i]}
        ${(generateTvString(inventory[i].availableSizes))}`);
    // const text1 = document.createTextNode(` ${tvPrices[i]} `)
    // const text2 = document.createTextNode(generateTvString(inventory[i].availableSizes));
    p.appendChild(text);
    // p.appendChild(text1);
    // p.appendChild(text2);
    ptv.appendChild(p);
    p.style.border = "4px solid steelblue";
    p.style.width = "350px";
    p.style.height = "150px";
    p.style.margin = "20px";
    p.style.padding = "10px";
  }
}
tv_Card();
