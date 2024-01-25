/**
 * 并发执行任务
 * @param {Function[]} tasks
 * @param {Number} parallelCount
 */
function parallelTask(tasks: Function[], parallelCount: Number = 2) {
  const result: any[] = [];
  return new Promise((resolve, reject) => {
    if (tasks.length === 0) {
      resolve(result);
      return;
    }
    let nextIndex = 0;
    let finishCount = 0;

    function _run() {
      const task = tasks[nextIndex];
      const index = nextIndex;
      nextIndex++;
      task().then((_result: any) => {
        result[index] = _result;
        if (nextIndex < tasks.length) {
          _run();
        } else if (finishCount === tasks.length) {
          resolve(result);
        }
      });
    }

    for (let i = 0; i < tasks.length && i < parallelCount; i++) {
      _run();
    }
  });
}

export {parallelTask}
