import koaRouter from 'koa-router';
import { healthCheckController } from '../controllers/koa/common.controller';

const router = new koaRouter();

router.get('/health', healthCheckController);

export const healthRoutes: koaRouter.IMiddleware = router.routes();
