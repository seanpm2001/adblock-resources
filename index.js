const fs = require('fs')
const path = require('path')

const metadata = require('./metadata.json')

const readResources = (() => {
    return metadata.map(item => ({
        name: item.name,
        aliases: item.aliases,
        kind: item.kind,
        content: fs.readFileSync(path.join(__dirname, 'resources', item.resourcePath)).toString('base64')
    }))
})

const listCatalog = require('./filter_lists/list_catalog.json')

module.exports = { listCatalog, readResources }
