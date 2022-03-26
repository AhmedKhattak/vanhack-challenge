/* eslint-disable import/no-anonymous-default-export */
module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("components", {
    description: "React component using Typescript",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name: ",
      },
      {
        type: "input",
        name: "atomic",
        message: "Atomic classification: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{atomic}}/{{name}}",
        base: "plopTemplates",
        templateFiles: "plopTemplates/*.hbs",
      },
    ],
  });
};
