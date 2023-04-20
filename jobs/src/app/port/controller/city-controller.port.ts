import City from '../../../domain/city.domain'

export default interface CityControllerPort {
  getDefaultCities: () => City[]
}
