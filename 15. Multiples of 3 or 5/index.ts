//  Day 3
//  Multiples of 3 or 5
//  https://www.codewars.com/kata/514b92a657cdc65150000006

export class Challenge {
  static solution(number: number): number {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
}
