module.exports = (componentName) => ({
  content: `.${componentName.toLowerCase()}-component {
    text-align: center;
}
`,
  extension: `.css`
});
