#!/usr/bin/env node
import * as YARGS from 'yargs';
import { makeNote } from './applenotes';
import { createNote } from './bear';
import { makeTodo } from './things';
import { getParsedVimData } from './util/vim';

const createNoteCommand = async argv => {
  let body = argv.text;
  let name = 'Quick note';
  if (!body) {
    const vimData = await getParsedVimData();
    body = vimData.body;
    name = vimData.subject;
  }

  await makeNote('Notes', { body, name });
};

const createTodoCommand = async argv => {
  let name = argv.name;
  let notes = argv.note;
  if (!name) {
    const vimData = await getParsedVimData();
    name = vimData.subject;
    notes = vimData.body;
  }

  await makeTodo({ name, notes });
};

const createBearNote = async argv => {
  let text = argv.text;
  let title = 'Quick note';
  if (!text) {
    const vimData = await getParsedVimData();
    title = vimData.subject;
    text = vimData.body;
  }
  createNote({ text, title });
};

// tslint:disable-next-line:no-unused-expression
YARGS.command(
  'note [text]',
  'make a note',
  (ygs: YARGS.Argv): YARGS.Argv => {
    return ygs.positional('text', {
      describe: 'Note text',
    });
  },
  createNoteCommand
)
  .command(
    'task [name] [note]',
    'make a task!',
    (ygs: YARGS.Argv): YARGS.Argv => {
      return ygs
        .positional('name', {
          describe: 'Name of Things task',
        })
        .positional('note', {
          describe: 'Note for task',
        });
    },
    createTodoCommand
  )
  .command(
    'bear [text]',
    'make a bear note!',
    (ygs: YARGS.Argv): YARGS.Argv => {
      return ygs.positional('text', {
        describe: 'bear note text',
      });
    },
    createBearNote
  )
  .epilog('Omit command params to create with vim').argv;
