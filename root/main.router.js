const { Router } = require('express')

const FrontRouterClass = require('./front/front.routes');
const ApiRouterClass = require('./api/api.routes');

const mainRouter = Router();

const apiRouter = new ApiRouterClass();
mainRouter.use('/api',apiRouter.init());

const frontRouter = new FrontRouterClass();
mainRouter.use('/',frontRouter.init());
module.exports = mainRouter;