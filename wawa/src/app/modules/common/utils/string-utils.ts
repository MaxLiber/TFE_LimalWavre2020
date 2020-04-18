
export class StringUtils {

  static titleCase(str: string) 
  {
    return str.toLowerCase().split(' ').map( (word) => {
      if( word[0]=== undefined )
      {
          return '';
      }
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
}
