module.exports = (pageName) => ({
  content: `.${pageName.toLowerCase()}-page {
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  background: var(--grams-background);
  align-items: center;
  text-align: center;
}

.${pageName.toLowerCase()}-content {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
  max-width: 450px;
}
`,
  extension: `.css`
});
