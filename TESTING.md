# Testing in Todo Angular App

This project uses Jest as its testing framework.

## Commands

- Run all tests: `npm test`
- Run tests in watch mode: `npm run test:watch`
- Run tests with coverage: `npm run test:coverage`

## File Naming Convention

Test files should use the following naming convention:
- `*.jest-spec.ts` (e.g., `component-name.jest-spec.ts`)

## Writing Tests

Jest provides a modern and efficient testing environment. Here's a basic example of testing a component:

```typescript
// In component-name.jest-spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourComponent } from './your.component';

describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourComponent, OtherDependencies]
    }).compileComponents();
    
    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Mocking with Jest

Jest provides powerful mocking capabilities:

```typescript
// Mocking a service
const serviceMock = {
  getData: jest.fn().mockReturnValue(of([{ id: 1, name: 'Test' }]))
};

TestBed.configureTestingModule({
  providers: [
    { provide: DataService, useValue: serviceMock }
  ]
});

// Spying on a method
jest.spyOn(service, 'method').mockReturnValue(mockValue);
```

## Test Coverage

Jest coverage reports are generated in the `coverage/` directory when you run:

```
npm run test:coverage
```

The report includes statements, branches, functions, and lines coverage information. 