const File = require('./src/file')
const { error } = require('./constants')
const assert = require('assert')
    ; (async () => {
          {
            const filePath = './mocks/enptyFile.csv'
            const expected = new Error(error.FILE_LENTH_ERROR_MESSAGE)
            const result = File.csvToJson(filePath)
            await assert.rejects(result, expected)
        } 
    
        {
            const filePath = './mocks/invald-headers.csv'
            const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
            const result = File.csvToJson(filePath)
            await assert.rejects(result, expected)
        }
    
        {
            const filePath = './mocks/five-itens-invalid.csv'
            const expected = new Error(error.FILE_LENTH_ERROR_MESSAGE)
            const result = File.csvToJson(filePath)
            await assert.rejects(result, expected)
        } 

        {
            const expected = [
                { id: '1', name: 'vaz', profession: 'dev', age: '23' },
                { id: '2', name: 'tes', profession: 'dev2', age: '44' },
                { id: '3', name: 'vaz', profession: 'dev', age: '23' }
            ]
            const filePath = './mocks/three-itens-valid.csv'
            const result = await File.csvToJson(filePath)
            assert.deepEqual(result, expected)
        }


    })()