import { ICharacter, IPeople } from '../models/people';

const BASE_URL = 'https://swapi.dev/api/people/';

class People {
  static getCharcater(id: number): Promise<ICharacter> {
    const url = `${BASE_URL}/${id}`;

    return fetch(url).then(
      (res) => res.json(),
      (err) => console.error(err)
    );
  }

  static async getPeople(search: string | null): Promise<IPeople> {
    const url = search ? `${BASE_URL}/?search=${search}&page=1` : BASE_URL;

    return fetch(url).then(
      (res) => res.json(),
      (err) => console.error(err)
    );
  }
}

export default People;
