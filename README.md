# pd-cli

Productive CLI for Mac - create items in Things3, Apple Notes, and Bear right from the command line!

## Install

`npm install -g pd-cli`

## Usage

`pd --help`

```
➜  pd-cli git:(master) pd --help
pd [command]

Commands:
  pd note <text>         make a note
  pd task <name> [note]  make a task!
  pd bear <text>         make a bear note!

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  --verbose, -v                                                 [default: false]
```

## Build

To build locally, run the following:

```
$ yarn install
$ yarn build
```

For development, `ts-node` works great:

```
$ yarn global add ts-node
$ yarn start:ts-node
```
