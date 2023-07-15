require("colors");
const fs = require("fs");
const path = require("path");
const templates = require("./templates");

const pageName = process.argv[2];

if (!pageName) {
  console.error("Please supply a valid page name".red);
  process.exit(1);
}

console.log("Creating page template with name: " + pageName);

const pageDirectory = path.join(__dirname, '..', '..', 'src', 'pages', pageName);

if (fs.existsSync(pageDirectory)) {
  console.error(`Page ${pageName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(pageDirectory);

const generatedTemplates = templates.map((template) => template(pageName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${pageDirectory}/${pageName}${template.extension}`,
    template.content
  );
});

fs.writeFileSync(`${pageDirectory}/index.ts`, `export { default } from "./${pageName}";
`);

console.log(
  "Successfully created page under: " + pageDirectory.green
);
