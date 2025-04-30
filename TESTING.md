# Testing in Todo Angular App

This project supports testing with both Jest and Karma (Jasmine). Here's how to use each testing framework.

## Jest Testing

Jest is configured as the primary test runner for this project.

### Commands

- Run all Jest tests: `npm test`
- Run Jest tests in watch mode: `npm run test:watch`
- Run Jest tests with coverage: `npm run test:coverage`

### File Naming Convention

Jest test files should use the following naming convention:
- `*.jest-spec.ts` (e.g., `component-name.jest-spec.ts`)

## Karma/Jasmine Testing

Karma with Jasmine is retained for compatibility with existing Angular test infrastructure.

### Commands

- Run all Karma tests: `npm run test:karma`
- Run Karma tests with watch mode: `npm run test:karma -- --watch`
- Run Karma tests without watch mode: `npm run test:karma -- --watch=false`

### File Naming Convention

Karma test files should use the standard Angular spec naming convention:
- `*.spec.ts` (e.g., `component-name.spec.ts`)

## Writing Tests for Both Frameworks

If you need to maintain tests for both frameworks, create two separate test files:
1. `component-name.spec.ts` for Karma/Jasmine
2. `component-name.jest-spec.ts` for Jest

The key differences between the frameworks are:
1. Jest uses `jest.spyOn()` and `.mockReturnValue()` for spying
2. Karma/Jasmine uses `spyOn()` and `.and.returnValue()` for spying

Example:
```typescript
// In Jest (component-name.jest-spec.ts)
jest.spyOn(service, 'method').mockReturnValue(value);

// In Jasmine (component-name.spec.ts)
spyOn(service, 'method').and.returnValue(value);
```

## Test Coverage

- Jest coverage reports are generated in `coverage/`
- Karma coverage reports are generated in `coverage/karma/` 