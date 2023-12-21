declare global {
  interface PromiseConstructor {
    allLimitted<T>(promises: Promise<T>[], limit?: number): Promise<T[]>;
  }
}

export const MAX_CONCURRENCY_LIMIT = 5;

Promise.allLimitted = function <T>(
  promises: Promise<T>[],
  limit = MAX_CONCURRENCY_LIMIT
) {
  return new Promise((resolve, reject) => {
    let activePromises = 0;
    let finishedPromises = 0;

    const results: T[] = [];
    const promiseNo = promises.length;

    function next() {
      if (!promises.length) {
        if (finishedPromises === promiseNo) {
          resolve(results as any);
        }
        return;
      }

      activePromises++;
      const promise = promises.shift()!;

      promise
        .then((result) => {
          results.push(result);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          activePromises--;
          finishedPromises++;

          next();
        });
    }

    for (let i = 0; i < limit && i < promises.length; i++) {
      next();
    }
  });
};

export { };
