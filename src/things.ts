import { promiseExec } from './applescript/runner';
import * as queries from './applescript/thingsQueries';
import { IThingsTodo } from './applescript/types';
import { parseTodoProperties } from './util/parse';

export const getTodoIds = () => promiseExec(queries.getTodos);

export const getTodoProps = async (id: string) => {
  const rawProps = await promiseExec(queries.getTodoByRefQuery(id));
  return parseTodoProperties(rawProps);
};

export const makeTodo = (props: Partial<IThingsTodo>) =>
  promiseExec(queries.makeTodoWithProperties(props));
