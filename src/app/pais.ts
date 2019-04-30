export class Pais {
  constructor () {
  }

  public name: string;
  public topLevelDomain : string[];
  public alpha2Code: string;
  public alpha3Code: string;
  public callingCodes: string[];
  public capital: string;
  public altSpellings: string[];
  public region: string;
  public subregion: string;
  public population: number;
  public latlng: number[];
  public demonym: string;
  public area: number;
  public gini: number;
  public timezones: string[];
  public borders: string[];
  public nativeName: string[];
  public numericCode: string;
  public currencies: string[];
  public languages:[];
  public translations: {  
       de: string,
       es: string,
       fr: string,
       ja: string,
       it: string
    };
  public relevance: number;
}