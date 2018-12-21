import koaRouter from 'koa-router';
import graphqlController from '../controllers/koa/graphql.controller';

const router = new koaRouter();

router.all('/graphql', graphqlController);

export const graphQlRoutes: koaRouter.IMiddleware = router.routes();
