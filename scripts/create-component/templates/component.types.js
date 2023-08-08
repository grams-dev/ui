module.exports = (componentName) => ({
  content: `export interface ${componentName}Props {
    className?: string;
}
`,
  extension: `.types.ts`
});
