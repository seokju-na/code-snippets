import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { CodeSnippet } from './CodeSnippet';

const codesDir = path.join(process.cwd(), 'code-snippets/');

/** Server-side only */
export async function fetchCodeSnippets() {
  const filenames = await readdir(codesDir);
  const snippets: CodeSnippet[] = [];

  for (const name of filenames) {
    const filepath = path.join(codesDir, name);
    const extname = path.extname(filepath);
    const lang = determineLangByExtension(extname);

    const snippet: CodeSnippet = {
      name,
      lang,
      code: await readFile(filepath, 'utf8'),
    };
    snippets.push(snippet);
  }
  return snippets;
}

function determineLangByExtension(extension: string): string {
  switch (extension) {
    case '.ts':
    case '.cts':
    case '.mts':
      return 'ts';
    case '.tsx':
    case '.ctsx':
    case '.mtsx':
      return 'tsx';
    case '.js':
    case '.cjs':
    case '.mjs':
      return 'js';
    case '.jsx':
    case '.cjsx':
    case '.mjsx':
      return 'jsx';
    case '.css':
      return 'css';
    case '.html':
      return 'html';
    case '.sh':
      return 'bash';
    case '.md':
      return 'markdown';
    case '.xml':
      return 'xml';
    case '.yaml':
    case '.yml':
      return 'yml';
    case '.toml':
      return 'toml';
    default:
      return 'plain';
  }
}
