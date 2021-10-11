const http = require("http");
const Context = require("./context");
const Request = require("./request");
const Response = require("./response");

class Application {
	constructor() {
		this.context = Object.create(Context);
		this.request = Object.create(Request);
		this.response = Object.create(Response);
	}
    createContext = (req, res) => {
        const ctx = Object.create(this.context);
        const request = Object.create(this.request);
        const response = Object.create(this.response);
        ctx.app = request.app = response.app = this
        ctx.request = request;
        ctx.request.req = ctx.req = req;

        ctx.response = response;
        ctx.response.res = ctx.res = res;
        ctx.originalUrl = request.originalUrl = req.url
        ctx.state = {}
        return ctx
    }
	callback = (req, res) => {
        let ctx = this.createContext(req, res)
		this.fn(ctx);
	};
	use(fn) {
		this.fn = fn;
	}
	listen() {
		const server = http.createServer(this.callback);
		server.listen(...arguments);
	}
}

module.exports = Application;
