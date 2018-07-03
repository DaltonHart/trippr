import axios from 'axios'

class PostModel {
  static all(){
    let request = axios.get('http://localhost:3090/api/posts')
    return request
  }
}

export default PostModel
