module.exports = (pageName) => ({
  content: `.page-${pageName} {
  height: 100%;
  width: 100%;
  background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
}
`,
  extension: `.css`
});
