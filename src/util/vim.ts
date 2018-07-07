import * as child_process from 'child_process';
import * as fs from 'fs';
import * as tmp from 'tmp';

tmp.setGracefulCleanup();

interface IParsedVimData {
  subject: string;
  body: string;
}

const bufferFromVim = (): Promise<string> => {
  const tempFile = tmp.fileSync({
    discardDescriptor: true,
    postfix: '.txt',
    prefix: 'pd-cli-',
  }).name;

  const vim = child_process.spawn('vim', [tempFile], {
    stdio: 'inherit',
  });

  return new Promise((resolve, reject) => {
    vim.on('exit', (code, signal) => {
      process.stdin.setRawMode(false);
      const data = fs.readFileSync(tempFile, 'utf8');
      fs.unlinkSync(tempFile);
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    });
  });
};

export const getParsedVimData = async (): Promise<IParsedVimData> => {
  const rawData = await bufferFromVim();
  const [subject, ...rest] = rawData.split('\n');
  return {
    body: rest.join('\n'),
    subject,
  };
};
