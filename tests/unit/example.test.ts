import { assertStrictEquals } from 'std/assert/mod.ts';

Deno.test('Test', async (t) => {
  await t.step('test', () => {
    assertStrictEquals(1 + 2, 3);
  });
});
