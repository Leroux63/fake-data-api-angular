export interface UserHttp {

  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  },
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    },
  },
  phone: string

}

export interface User {


  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  },
  fullname: string
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    },
  },
  fulladdress: string
  phone: string

}

export namespace User {
  export function mapperUserHttpToUser(userHttp: UserHttp): User {
    return {
      id: userHttp.id,
      email: userHttp.email,
      username: userHttp.username,
      password: userHttp.password,
      name: { firstname: userHttp.name.firstname, lastname: userHttp.name.lastname },
      fullname: `${userHttp.name.firstname} ${userHttp.name.lastname}`,
      address: { city: userHttp.address.city, number: userHttp.address.number, street: userHttp.address.street, zipcode: userHttp.address.zipcode ,geolocation:{lat: userHttp.address.geolocation.lat, long: userHttp.address.geolocation.long}},
      fulladdress: ` ${userHttp.address.number} ${userHttp.address.street} ${userHttp.address.zipcode} ${userHttp.address.city}`,
      phone: userHttp.phone,
    };
  }
}

