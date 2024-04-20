/*
Use .ts for pure TypeScript files.

Use .tsx for files which contain JSX.

For example, a React component would be .tsx, but a file containing helper functions would be .ts.
Just like you were doing React without TypeScript, you would use .js and .jsx for pure javascript vs JSX javascript files.
*/
// tsx extension is used when we want to embed JSX elements inside the files while .ts is used for plain Typescript files and do not support adding JSX Elements.

/*
+ Interfaces VS Types
- Interfaces create a new, distinct type whereas a type alias is just that: an alias.

- Both can be used to describe the shape of an object or a function signature. But the syntax differs. 
(So theyre both like classes in JS which are blueprints to create obj from??)
(Interfaces have shape of an Dictionary/JS Object, so non primitive types etc…)

- Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples.
*/ 

export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};