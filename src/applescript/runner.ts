import * as applescript from 'applescript';

export const promiseExec = (str: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    applescript.execString(str, (err, rtn) => {
      if (err) {
        return reject(err);
      }
      return resolve(rtn);
    });
  });
};
