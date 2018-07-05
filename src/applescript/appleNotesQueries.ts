import { formatAppleScriptProperties } from '../util/format';
import { IAppleNote } from './types';

const ROOT_TELL_WRAP = query => `
tell application "Notes"
  tell account "iCloud"
    ${query}
  end tell
end tell
`;

const BASIC_TELL_WRAP = query => `
tell application "Notes"
  ${query}
end tell
`;

export const makeNote = (folder: string, params: IAppleNote) =>
  ROOT_TELL_WRAP(
    `make new note at folder "${folder}" with properties ${formatAppleScriptProperties(
      params
    )}`
  );

export const getNotes = (folder: string) =>
  ROOT_TELL_WRAP(`get notes of folder "${folder}"`);

export const getNote = (ref: string, properties: string[]) =>
  BASIC_TELL_WRAP(`return {${properties.join(',')}} of ${ref}`);
