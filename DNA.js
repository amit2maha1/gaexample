//get a random character

function newChar() {
  let c = floor(random(63, 122));
  if (c === 63) c = 32;
  if (c === 64) c = 46;

  return String.fromCharCode(c);
}

class DNA {
  //constructor makes random DNA (here DNA means a random sentence of length equal to the actual sentence)
  constructor(num) {
    this.genes = [];
    this.fitness = 0;

    for (let i = 0; i < num; i++) {
      this.genes[i] = newChar();
    }
  }

  //join the array of characters into a string
  getPhrase() {
    return this.genes.join("");
  }
  //if char of DNA === char of "target" we do ++ and finally divide to get float point %
  calcFitness(target) {
    let score = 0;

    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] == target.charAt(i)) {
        score++;
      }
    }

    this.fitness = score / target.length;
  }

  crossover(partner) {
    // "this.genes" is the obj that called this crossover function
    let child = new DNA(this.genes.length); //create a new DNA object/placeholder for offspring

    let midpoint = floor(random(this.genes.length)); //pick random midpoint

    //some parts from the DNA obj that called this method and some parts from partner DNA obj
    for (let i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }

    return child;
  }

  //mutationRate ranges from 0 to 1
  mutate(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      let mrate = random(mutationRate);

      if (random(1) < mrate) {
        this.genes[i] = newChar();
      }
    }
  }
}
