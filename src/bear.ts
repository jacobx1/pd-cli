import * as openurl from 'openurl';
import { buildUrl } from './util/urlbuilder';

interface IBearCreate {
  title?: string;
  text?: string;
  tags?: string[];
  pin?: boolean;
  file?: string;
  filename?: string;
  open_note?: boolean;
  new_window?: boolean;
  show_window?: boolean;
}

const buildBearUrl = (action: string, params: object) =>
  buildUrl('bear://x-callback-url', `/${action}`, params);

const boolAdapter = (val: boolean) => (val ? 'yes' : 'no');

export const createNote = (params: IBearCreate) => {
  const {
    tags = [],
    pin = false,
    open_note = false,
    new_window = false,
    show_window = false,
    ...rest
  } = params;
  const url = buildBearUrl('create', {
    new_window: boolAdapter(new_window),
    open_note: boolAdapter(open_note),
    pin: boolAdapter(pin),
    show_window: boolAdapter(show_window),
    tags: tags.join(', '),
    ...rest,
  });
  openurl.open(url);
};
