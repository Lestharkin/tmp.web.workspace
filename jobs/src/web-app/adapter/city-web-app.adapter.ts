import CityController from '../../app/controller/city.controller'
import City from '../../domain/city.domain'
import CityAdapterWebAppPort from '../port/city-adapter-web-app.port'

export default class CityWebAppAdapter implements CityAdapterWebAppPort {
  constructor (private readonly cityController: CityController) { }

  getDefaultCities = (): City[] => []
}
