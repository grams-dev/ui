module.exports = (componentName) => ({
  content: 
`/**
  * The props used by ${componentName}
  */
export interface ${componentName}Props {
}
`,
  extension: `.types.ts`
});
