import { formatAppleScriptProperties } from '../util/format';
import { ThingsTodo } from './types';

const ROOT_TELL = 'tell application "Things3" to';

export const getTodos = `${ROOT_TELL} get to dos`;
export const getTodosOfList = (list: string) =>
  `${ROOT_TELL} get to dos of list "${list}"`;
export const getTodosOfProject = (project: string) =>
  `${ROOT_TELL} get to dos of project "${project}"`;
export const getTodosOfArea = (area: string) =>
  `${ROOT_TELL} get to dos of area "${area}"`;

export const getTodoByRefQuery = (ref: string) =>
  `${ROOT_TELL} get properties of ${ref}`;
export const getTodoProperty = (ref: string, property: string) =>
  `${ROOT_TELL} get ${property} of ${ref}`;

export const makeTodoWithProperties = (props: Partial<ThingsTodo>) =>
  `${ROOT_TELL} make new to do with properties ${formatAppleScriptProperties(
    props
  )}`;
export const makeTodo = (name: string, notes: string) =>
  makeTodoWithProperties({
    name,
    notes,
  });
