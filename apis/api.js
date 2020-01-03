import resources from '@/apis/api.resources'
import handlers from '@/apis/api.handlers'

// eslint-disable-next-line prettier/prettier
export default ({
  $axios
}, inject) => {
  const client = $axios

  const functions = {
    async get(type) {
      try {
        const response = await client.get(resources[type])
        return response
      } catch (err) {
        return handlers.error(err)
      }
    },
    async getById(type, id) {
      try {
        const response = await client.get(
          `${resources[type]}/${parseInt(id, 10)}`
        )
        return response
      } catch (err) {
        return handlers.error(err)
      }
    },
    async post(type, payload = {}) {
      try {
        const response = await client.post(resources[type], payload)
        return response
      } catch (err) {
        return handlers.error(err)
      }
    },
    async put(type, payload = {}) {
      try {
        const response = await client.put(resources[type], payload)
        return response
      } catch (err) {
        return handlers.error(err)
      }
    },
    async patch(type, payload = {}) {
      try {
        const response = await client.patch(resources[type], payload)
        return response
      } catch (err) {
        return handlers.error(err)
      }
    },
    async delete(type, id) {
      try {
        const response = await client.delete(
          `${resources[type]}/${parseInt(id, 10)}`
        )
        return response
      } catch (err) {
        return handlers.error(err)
      }
    }
  }
  inject('api', functions)
}
