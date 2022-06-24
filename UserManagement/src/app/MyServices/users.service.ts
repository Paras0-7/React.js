import { Injectable } from '@angular/core';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getData() {
    const data: User[] = [
      {
        id: '1',
        firstName: 'One',
        lastName: 'User',
        age: 30,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '2',
        firstName: 'Two',
        lastName: 'User',
        age: 21,
        login: 'yes',
        password: '12345',
        isDeleted: true,
      },
      {
        id: '3',
        firstName: 'Three',
        lastName: 'User',
        age: 26,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '4',
        firstName: 'Four',
        lastName: 'User',
        age: 22,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '5',
        firstName: 'Five',
        lastName: 'User',
        age: 24,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '6',
        firstName: 'Six',
        lastName: 'User',
        age: 15,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '7',
        firstName: 'Seven',
        lastName: 'User',
        age: 10,
        login: 'yes',
        password: '12345',
        isDeleted: true,
      },
      {
        id: '8',
        firstName: 'Ewight',
        lastName: 'User',
        age: 20,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
    ];
    return data;
  }
}
