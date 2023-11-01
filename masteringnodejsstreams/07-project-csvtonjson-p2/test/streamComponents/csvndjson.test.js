import { expect, describe, jest } from '@jest/globals'

import CSVToNDJSON from '../../src/streamComponents/csvtondjson.js'

describe('', () => {
  it('', () => {
    const csvString = `id,name,address\n01,erick,address01\n`
    const csvToJSON = new CSVToNDJSON({
      delimiter: ',',
      headers: ['id', 'name', 'address']
    })

    const expected = JSON.stringify({
      id: '01',
      name: 'erick',
      address: 'address01'
    })

    const fn = jest.fn()
    csvToJSON.on('data', fn)

    csvToJSON.write(csvString)
    csvToJSON.end()

    const [current] = fn.mock.lastCall
    expect(JSON.parse(current)).toStrictEqual(JSON.parse(expected))

  })
})