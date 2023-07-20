module.exports = (pageName) => ({
  content: `export interface ${pageName}Props {
    className?: string;
}
`,
  extension: `.types.ts`
});
