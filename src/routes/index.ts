import koaRouter from 'koa-router';
import { healthRoutes } from './health-route';
import { graphQlRoutes } from './graphql-route';

export const router: koaRouter = new koaRouter();

router.use(healthRoutes);
router.use(graphQlRoutes);
