import PriceResponse from "./PriceResponse";

export default interface TariffResponse {
  neededMinutes: string,
  neededKilometers: string,
  neededParkingMinutes: string,
  prices: Array<PriceResponse>
}
