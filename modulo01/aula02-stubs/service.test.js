
const assert = require('assert')
const Service = require('./src/service')
const mocks = {
  alderann: require('./mocks/alreraan.json'),
  tatooine: require('./mocks/tatooine.json')
}
const { createSandbox } = require('sinon')

const sinon = createSandbox()

const BASE_URL_1 = 'https://swapi.dev/api/planets/1/'
const BASE_URL_2 = 'https://swapi.dev/api/planets/2/'



  ; (async () => {
    const service = new Service()
    const stub = sinon.stub(
      service,
      service.makeRequest.name
    )

    stub
    .withArgs(BASE_URL_2)
    .resolves(mocks.tatooine)

    stub
    .withArgs(BASE_URL_1)
    .resolves(mocks.alderann)

    //Stub via prototype
    {
      Service.prototype.makeRequest = function(){
        return mocks.alderann
      }
      const service = new Service()
      const data = await service.makeRequest(BASE_URL_1) 

    }


    //Stub via sinon
    {
      const expected = {
        name: 'Alderaan',
        surfaceWater: '20',
        apperdIn: 1
      }

      const result = await service.getPlanets(BASE_URL_1)
      assert.deepStrictEqual(result, expected) 

    }

     //Stub via sinon, Defina uma função e irá substituir o comportamento da função
     {
      const expected = {
        name: 'Tatooine',
        surfaceWater: '3',
        apperdIn: 1

      }
      const result = await service.getPlanets(BASE_URL_2)
      assert.deepStrictEqual(result, expected)

    }



  })()