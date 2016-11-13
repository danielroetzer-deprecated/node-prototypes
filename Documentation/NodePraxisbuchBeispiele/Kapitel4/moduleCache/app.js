require('./myModule');
delete(require.cache[require.resolve('./myModule')]);
require('./myModule');