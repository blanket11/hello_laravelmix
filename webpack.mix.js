const src = process.env.SRC_ENV || 'default';
require(`./webpack.mix.config/${src}.mix.js`);