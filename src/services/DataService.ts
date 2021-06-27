import { User } from './../models/DataModels';
const baseUrl = 'http://localhost:4000';
const usersUrl = baseUrl + '/users';

export class DataService {
  public async getUsers(
    authorization: string,
    nameQuery: string
  ): Promise<User[]> {
    const url = usersUrl + '?name=' + nameQuery;
    const options = {
      method: 'GET',
      headers: {
        Authorization: authorization,
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  }
}
