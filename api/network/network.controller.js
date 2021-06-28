const Network = require('../../domain/network.js')

const joinNetwork = (ctx) => {
    const {address} = ctx.request.body;

    Network.join(address)
};

module.exports = {
    joinNetwork
}
