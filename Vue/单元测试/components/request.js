import axios from 'axios'

export function fetchData() {
  return axios({
      url: 'https://jsonplaceholder.typicode.com/todos/1'
    })
}
