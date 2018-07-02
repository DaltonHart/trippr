import axios from 'axios'

class CityModel {
  static all(){
    let request = axios.get('http://localhost:3090/api/cities')
    return request
  }
}

export default CityModel