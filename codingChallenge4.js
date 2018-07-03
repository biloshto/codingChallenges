// CODING CHALLENGE 4

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/hyge. If the size is unknown, the default is normal.

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameteres, maps, arrow functions, destrucutring, etc.
*/

class Town {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Town {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  // Tree density of each park in the town
  treeDensity() {
    let density = this.numTrees/this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`)
  }
}

class Street extends Town {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}

const allParks = [
  new Park("Green Park", 1976, 1.3, 624),
  new Park("National Park", 1952, 3.4, 1807),
  new Park("Oak Park", 2007, 0.78, 219)
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.2, 4),
  new Street("Evergreen Street", 2008, 0.2, 2),
  new Street("4th Street", 2015, 624),
  new Street("Sunset Boulevard", 1982, 1.9, 5)
];

function calc(arr) {
  // reduce loops through an array to accumulate all the values into a single value; for example if we have an arr=[3, 5, 6], prev value would be 0 in the beggining, then 0+3, then 3+5, then 8+6, so the final value would be 14

  const sum = arr.reduce((prev, current, index) => prev + current, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("-----PARKS REPORT-----");
  
  // Average age
  let thisYear = new Date().getFullYear();
  const ages = p.map(el => thisYear - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average age of ${avgAge} years.`)
  
  // Density
  p.forEach(el => el.treeDensity());

  // Which park has more than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log("-----STREETS REPORT-----");

  // Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

  // Classify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);