module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/index.tsx',
        templateFile: 'generators/templates/index.tsx.hbs',
      },
    ],
  })
}
