import assert from 'node:assert/strict';
import test from 'node:test';

import { parseSuggestions } from '../dist/llm/prompt.js';

test('keeps indented numbered body lines inside the current suggestion', () => {
  const suggestions = parseSuggestions(`1. feat: add profile export
   1. gather commits
   2. write JSON

2. fix: handle empty history
   1. show fallback text
   2. skip style hints

3. docs: clarify setup`);

  assert.deepEqual(suggestions, [
    {
      message: 'feat: add profile export',
      body: '1. gather commits\n2. write JSON',
    },
    {
      message: 'fix: handle empty history',
      body: '1. show fallback text\n2. skip style hints',
    },
    {
      message: 'docs: clarify setup',
      body: undefined,
    },
  ]);
});
