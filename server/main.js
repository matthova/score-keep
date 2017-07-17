import Util from './../imports/utils';
import add from './../imports/math';

async function startup() {
  console.log('Log from /server/main.js');
  console.log(await add(10, 12));
  console.log('done', Util);
}

startup();