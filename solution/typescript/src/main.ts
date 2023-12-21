import './promise';
import { AsyncEventEmitter } from './event';

async function main() {
  const eventEmitter = new AsyncEventEmitter();

  await eventEmitter.on('test', (a: number, b: number) => {
    return [a, b];
  });

  const promises = [...Array(10).keys()].map((i) =>
    eventEmitter.emit('test', i + 1, i + 2)
  );

  const results = await Promise.allLimitted(promises);
  console.log(results);
}

main();
