# Seneca Example

This project is an example of how Seneca.js works

### Patterns

```
role: first-app
role: seconde-app
```

### Service Dependency

- SecondApp

### Package Dependency

- [Seneca](https://github.com/senecajs/seneca)

### Installing

```bash
$ npm i
```

### Starting

```bash
$ npm run start-first-app
$ npm run start-second-app
```

### Environment Variables

```
LOG_LEVEL
```

### Useful Scripts

- Start SecondApp in background:

```bash
$ npm run start-second-app-background
```

- Stop SecondApp in background:

```bash
$ npm run stop-second-app-background
```

### Tests

```bash
$ npm test
```

Run tests with Node debugger:

```bash
$ npm run test-debugger
```
