import City from '../../domain/city.domain'

export default interface CityAdapterWebAppPort {
  getDefaultCities: () => City[]
}
