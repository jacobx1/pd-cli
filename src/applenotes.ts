import * as appleNotesQueries from './applescript/appleNotesQueries';
import { promiseExec } from './applescript/runner';
import { IAppleNote } from './applescript/types';

export const makeNote = (folder: string, params: IAppleNote) =>
  promiseExec(appleNotesQueries.makeNote(folder, params));

export const getNotes = (folder: string) =>
  promiseExec(appleNotesQueries.getNotes(folder));

export const getNote = async (ref: string): Promise<IAppleNote> => {
  const [name, body] = await promiseExec(
    appleNotesQueries.getNote(ref, ['name', 'body'])
  );
  return {
    body,
    name,
  };
};
