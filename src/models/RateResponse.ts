export default interface RateResponse {
  includedKilometers: number,
  includedMinutes: number,
  includedParking: number,
  kilometerPrice: number,
  minutePrice: number,
  name: string,
  parkingPrice: number,
  price: number,
  id: number,
  [key: string]: number | string
}
