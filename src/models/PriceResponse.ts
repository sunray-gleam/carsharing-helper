import CarsharingResponse from "./CarsharingResponse";
import RateResponse from "./RateResponse";
import TariffDetails from "./TariffDetails";

export default interface PriceResponse {
  price: number,
  availableCars: Array<string>,
  carsharing: CarsharingResponse,
  details: TariffDetails,
  rate: RateResponse
}

