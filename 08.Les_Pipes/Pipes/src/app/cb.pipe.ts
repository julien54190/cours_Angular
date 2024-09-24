import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cb'
})
export class CbPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
    // transform(value: any): string {
  //   return `${ value.slice(0, 4)} xxxx xxxx ${ value.slice(-4, value.length)}`
  // }
  transform(value: string, n: number = 4): string {
    return `${ value.slice(0, n)} ${ new Array(17 - 2 * n).join('x')} ${ value.slice(-n, value.length)}`
  }

}
