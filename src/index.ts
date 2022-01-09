class Sorter {
  collection: number[] | string;

  constructor(collection: number[] | string){
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for(let i=0; i< length; i++) {
      for(let j=0; j< length-i-1; j++) {
        // This logic is going to work only if collection
        // is array of number
        if(this.collection instanceof Array) {
          // collection === number[]
          if (this.collection[j] > this.collection[j + 1]) {
						const temp = this.collection[j];
						this.collection[j] = this.collection[j + 1];
						this.collection[j + 1] = temp;
					}
        }

        // This logic is only going to work if the collection is string
         if(typeof this.collection === 'string') {
          //  this.collection
         }
        
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();

console.log(sorter.collection);
