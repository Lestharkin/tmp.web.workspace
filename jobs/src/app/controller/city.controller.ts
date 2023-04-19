import City from '../../domain/city.domain'
import CityControllerPort from '../port/city-controller.port'

export default class CityController implements CityControllerPort {
  getDefaultCities = (): City[] => []
}
