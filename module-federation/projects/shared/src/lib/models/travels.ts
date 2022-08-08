export interface Travels {
  id: number,
  city: string,
  name: string,
  deadline: string,
  passengers: Passengers
}

export interface Passengers {
  name: string,
  id: number,
  checked: boolean
}
