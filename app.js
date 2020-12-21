
const assert = require('assert')
const {SSQSign} = require('ssq-sign')
const _ = require('lodash')
module.exports = app => {
  app.addSingleton('ssqSign', async function createSSQSign(config, app) {
    assert(config.url && config.developerId && config.privateKey && config.publicKey && config.account);
    app.coreLogger.info(`[egg-ssqsign]: ${config.url} ${config.developerId} ${config.account}`)
    return new SSQSign(config.url, config.developerId, config.privateKey, config.publicKey, 
        _.pick(config, 'account', 'timeout', 'retry', 'pushUrl', 'returnUrl', 'accessKey'))
  })
}
