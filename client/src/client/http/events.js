import { parseError } from './utils'

export default (client) => ({
    events () {
        const query = `
        {
          listAllEvents(max: $max, offset: $offset) {
            id
            name
            description
          }
        }
        `
        const data = {
            query,
            variables: {
                max: 10,
                offset: 1
            }
        }

        return client
            .post('', data)
            .then(resp => resp.data.getIn(['data', 'listEvents']))
            .catch(parseError)
    }
})
