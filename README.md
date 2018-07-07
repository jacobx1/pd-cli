# pd-cli

[![npm version](https://badge.fury.io/js/pd-cli.svg)](https://badge.fury.io/js/pd-cli)

Productive CLI for Mac - create items in Things3, Apple Notes, and Bear right from the command line!

## Install

`npm install -g pd-cli`

## Usage

`pd --help`

```
➜  pd-cli git:(master) pd --help
pd [command]

Commands:
  index.ts note [text]         make a note
  index.ts task [name] [note]  make a task!
  index.ts bear [text]         make a bear note!

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

Omit command params to create with vim
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
