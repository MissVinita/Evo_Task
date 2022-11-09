# Evolution Home Task
##### version: 1.0.0

## How to install
Run `yarn install` to install all dependencies.  
Run `yarn test` to check test command output.

## Test console output example
```
yarn test 
yarn run v1.22.19
$ jest
  console.log
    The perimeter of a rectangle is 300 and the area is 5000

      at log (js/rectangle.js:12:20)

  console.log
    The perimeter of a rectangle is 300 and the area is 5000

      at Object.log (tests/rectangle.test.js:15:37)

 PASS  tests/rectangle.test.js
  ✓ should properly output rectangle area (1 ms)
  ✓ should properly output rectangle perimeter
  ✓ should properly output rectangle info (16 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.449 s, estimated 1 s
Ran all test suites.
✨  Done in 1.15s.
```