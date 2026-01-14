# Example Project – TypeScript Testing and Code Coverage

## Overview

This project demonstrates a clean and minimal setup for running automated tests using Jest with TypeScript, including generation and analysis of code coverage reports.

The main goals of this project are:
1. Running unit and integration tests
2. Measuring and analyzing code coverage
3. Producing a clear and actionable test report

---

## Prerequisites

Before running the tests, make sure you have:

1. Node.js version 18 or higher
2. npm installed
3. Project dependencies installed

Install dependencies:

npm install

---

## Running Tests

### Run all tests

To execute all unit and integration tests:

npm test

This command runs all test files under the tests directory and prints a summary to the terminal.

---

### Run tests in watch mode

For local development and debugging:

npm run test:watch

Watch mode listens for file changes and re-runs only affected tests.

---

### Run a specific test file

Example running only Calculator tests:

npx jest tests/unit/Calculator.test.ts

---

### Run tests by name

Run all tests that match a specific name:

npx jest -t Calculator

Or a specific test:

npx jest -t "add positive numbers"

---

## Code Coverage

### Generate coverage report

To run tests and generate a coverage report:

npm run test:coverage

This command runs all tests and collects coverage metrics.

---

### Coverage output structure

After running coverage, a new directory is created:

coverage/
index.html  
lcov-report/  
lcov.info  
coverage-final.json  

---

### Viewing the coverage report

Open the HTML report:

open coverage/index.html

The report includes:
1. Statement coverage
2. Branch coverage
3. Function coverage
4. Line coverage
5. Per-file breakdown

---

## Understanding Coverage Metrics

Statements  
Percentage of executable statements that were executed during tests.

Branches  
Percentage of conditional branches such as if and else blocks that were executed.

Functions  
Percentage of functions that were called at least once.

Lines  
Percentage of source code lines that were executed.

Example summary:

Statements: 88.88%  
Branches: 83.33%  
Functions: 100%  
Lines: 88.88%

---

## Coverage Quality Notes

1. Full 100 percent coverage is not mandatory
2. Branch coverage is usually the hardest to achieve
3. Focus should be on meaningful test scenarios
4. Uncovered branches usually indicate missing edge cases

---

## Exporting the Report

The coverage report is generated as HTML by default.

If a single file is required:
1. Open coverage/index.html
2. Print
3. Save as PDF

---

## Ignored Files

Generated artifacts such as coverage reports and build outputs are excluded from version control using gitignore.

---

## Summary

This project provides:
1. A clean Jest and TypeScript testing setup
2. Simple commands to run tests
3. Clear and actionable code coverage reporting
4. A solid baseline for CI integration

---

