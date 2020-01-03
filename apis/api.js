import resources from '@/apis/api.resources'

// eslint-disable-next-line prettier/prettier
export default ({
  $axios
}, inject) => {
  const client = $axios

  const functions = {
    async get(type) {
      const response = await client.get(resources[type])
      return response
    },
    async getById(type, id) {
      const response = await client.get(
        `${resources[type]}/${parseInt(id, 10)}`
      )
      return response
    },
    async post(type, payload = {}) {
      const response = await client.post(resources[type], payload)
      return response
    },
    async put(type, payload = {}) {
      const response = await client.put(resources[type], payload)
      return response
    },
    async patch(type, payload = {}) {
      const response = await client.patch(resources[type], payload)
      return response
    },
    async delete(type, id) {
      const response = await client.delete(
        `${resources[type]}/${parseInt(id, 10)}`
      )
      return response
    }
  }
  inject('api', functions)
}
