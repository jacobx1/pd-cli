import { DATE, IThingsTodo, MISSING_VALUE } from '../applescript/types';

export const extractKeyValue = (val: string) => {
  return val ? val.split(/(.*?):(.*)/).slice(1, 3) : [];
};

export const getStringLiteral = (val: string) => {
  if (val === MISSING_VALUE) {
    return null;
  }

  const idx1 = val.indexOf('"');
  const idx2 = val.lastIndexOf('"');
  if (idx1 === 0 && idx2 !== idx1) {
    return val.split(/"(.*)"/)[1];
  }
  return val;
};

export function parseDate(date: string[]) {
  const [start, ...rest] = date;
  return [start.substr(6), ...rest].filter(val => !!val).join(', ');
}

export function* extractProperties(todo: string[]) {
  const todoIterator = todo[Symbol.iterator]();
  while (true) {
    const { value, done } = todoIterator.next();
    if (done) {
      break;
    }
    const [key, val] = extractKeyValue(value);
    if (key && val) {
      if (val.startsWith(DATE)) {
        const dateArray = [
          { value: val },
          todoIterator.next(),
          todoIterator.next(),
        ].map(obj => obj.value);
        yield {
          key,
          val: parseDate(dateArray),
        };
      } else {
        yield { key, val: getStringLiteral(val) };
      }
    }
  }
}

export const parseTodoProperties = (todo: string[]): Partial<IThingsTodo> =>
  [...extractProperties(todo)].reduce(
    (prev, curr) => ({
      ...prev,
      [curr.key]: curr.val,
    }),
    {}
  );
