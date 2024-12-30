# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: neglecting to handle promise rejections in asynchronous middleware or routes.  Unhandled rejections can lead to unexpected application crashes without informative error messages.

The `bug.js` file showcases the problematic code.  The `bugSolution.js` file provides a corrected version with proper error handling.

## Problem

The `someAsyncOperation` function simulates an asynchronous operation that might fail (50% chance).  The original code lacks a `.catch` block to handle this potential error, leading to an unhandled promise rejection when the operation fails.

## Solution

The solution demonstrates how to properly handle potential errors by adding a `.catch` block to the promise chain.  This prevents the application from crashing and allows for graceful error handling and logging.