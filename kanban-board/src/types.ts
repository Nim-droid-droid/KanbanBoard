/*
Use .ts for pure TypeScript files.

Use .tsx for files which contain JSX.

For example, a React component would be .tsx, but a file containing helper functions would be .ts.
Just like you were doing React without TypeScript, you would use .js and .jsx for pure javascript vs JSX javascript files.
*/
// tsx extension is used when we want to embed JSX elements inside the files while .ts is used for plain Typescript files and do not support adding JSX Elements.

export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};