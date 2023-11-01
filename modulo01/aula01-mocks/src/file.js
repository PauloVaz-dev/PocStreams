const { readFile } = require('fs/promises')
const { error } = require('../constants')
const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ['id', 'name', 'profession', 'age']
}
class File {
    static async csvToJson(filePath) {
        const content = await readFile(filePath, 'utf-8')
        const validation = this.isValid(content)
        if (!validation.valid) throw new Error(validation.error)
        return this.parseCSVToJSON(content)
    }
    static isValid(csvString, options = DEFAULT_OPTION) {
        const [header, ...rows] = csvString.split(/\r?\n/)
        if (header.split(',').toString() !== options.fields.toString()) {
            return {
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }
        }
        if (!rows.length || rows.length > options.maxLines) {
            return {
                error: error.FILE_LENTH_ERROR_MESSAGE,
                valid: false
            }
        }

        return { valid: true }
    }

    static parseCSVToJSON(content) {
        const lines = content.split(/\r?\n/)
        const firstLine = lines.shift()
        const header = firstLine.split(',')
       
        const users = lines.map(line => {
            const columns = line.split(',')
            const user = {}
            for (const index in columns) {
                user[header[index]] = columns[index].trim()
            }
            return user
        })
        return users
    }
}

module.exports = File