const Axios = require("axios");

class Network {
    constructor() {
        this.nodes = [];
        this.currentNodeUrl = process.env.CURRENT_NODE_URL;
    }

    join(address) {
        if (!this.nodes.includes(address) && address != this.currentNodeUrl) {
            this.nodes.push(address)
            this.connectNodes(address)
        }
    }

    connectNodes(address) {
        this.nodes.forEach(addressNode => {
            axios.post(`${addressNode}/network/join`, { address });
        });
    }
}

module.exports = new Network();
