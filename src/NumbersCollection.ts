export class NumbersCollection {
  constructor(public data: number[]) {}

  // get the length of the data
  get length(): number {
    return this.data.length;
  }
  // compare method to compare if left number is greater than right number.
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  // swap method swap the number
  swap(leftIndex: number, rightIndex: number):void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}