export const MISSING_VALUE = 'missing value';
export const DATE = 'date';

export interface IThingsTodo {
  status: string;
  ['tag names']: string;
  ['cancellation date']: string;
  ['due date']: string;
  class: string;
  ['modification date']: string;
  contact: string;
  project: string;
  area: string;
  notes: string;
  id: string;
  ['completion date']: string;
  name: string;
  ['creation date']: string;
}

export interface IAppleNote {
  name: string;
  body: string;
}
