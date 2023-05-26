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
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'generators/templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'generators/templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/index.ts',
        templateFile: 'generators/templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'generators/templates/testing.tsx.hbs',
      },
    ],
  })
}
