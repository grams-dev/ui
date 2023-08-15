require("colors");
const fs = require("fs");
const path = require("path");
const templates = require("./templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = path.join(__dirname, '..', '..', 'src', 'components', componentName);

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content
  );
});

fs.writeFileSync(`${componentDirectory}/index.ts`, `export { default } from "./${componentName}";
`);

console.log(
  "Successfully created component in: " + componentDirectory.green
);