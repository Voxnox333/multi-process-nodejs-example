const Router = require('koa-router');
const userRoutes = require('./user');

const router = new Router();

router.use(userRoutes.routes());

// default
router.all('/', (ctx, next) => {
  ctx.body = {
    error: 0,
    flash: 'welcome...',
    data: null,
  };
  next();
});

module.exports = router;
