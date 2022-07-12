import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crypt'
})
export class CryptPipe implements PipeTransform {
  // bufferString:string[] = [];
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  cipher_text : string [] = [];
  new_position : number;
  position : number;
  // countalpha
  transform(str : string, key : number): unknown {
    for (var char of str) {

      // for (var char1 of this.alphabet){
      //     if (char == char1){
      //       this.new_position = char + key;
      //       console.log(char);
      //     }
      // }
      
       }

   
    return null;
  }

}
