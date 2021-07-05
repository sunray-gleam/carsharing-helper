import TariffRequest from '@/models/TariffRequest'
import TariffResponse from '@/models/TariffResponse'
import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = 'http://carsharing.mirays.tech'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const api = {
  tariffs: {
    get: {
      rateCalculate ({ neededKilometers, neededMinutes, neededParkingMinutes }: TariffRequest): Promise<AxiosResponse<TariffResponse>> {
        return axios.get('rateCalculate', { params: { neededKilometers, neededMinutes, neededParkingMinutes} })
      }
    }
  }
}

export default api
