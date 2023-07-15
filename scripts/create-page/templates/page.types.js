module.exports = (pageName) => ({
  content: `export interface ${pageName}Props {
    foo: string;
}
`,
  extension: `.types.ts`
});
