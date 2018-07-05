import * as YARGS from 'yargs';
import { getNote, getNotes, makeNote } from './applenotes';
import { createNote } from './bear';
import { makeTodo } from './things';

// tslint:disable-next-line:no-unused-expression
YARGS.command(
  'note <text>',
  'make a note',
  (ygs: YARGS.Argv): YARGS.Argv => {
    return ygs.positional('text', {
      describe: 'Note text',
    });
  },
  async argv => {
    await makeNote('Notes', {
      body: argv.text,
      name: 'Quick note',
    });
  }
)
  .command(
    'task <name> [note]',
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
    async argv => {
      await makeTodo({
        name: argv.name,
        notes: argv.note,
      });
    }
  )
  .command(
    'bear <text>',
    'make a task!',
    (ygs: YARGS.Argv): YARGS.Argv => {
      return ygs.positional('text', {
        describe: 'bear note text',
      });
    },
    argv => {
      createNote({
        text: argv.text,
        title: 'Quick note',
      });
    }
  )
  .option('verbose', {
    alias: 'v',
    default: false,
  }).argv;
