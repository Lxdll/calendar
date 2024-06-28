import { it, expect, describe, test } from 'vitest'
import { getDaysCount } from '../utils'

test('January days count', () => {
  expect(getDaysCount(2024, 1)).toMatchInlineSnapshot(`31`)
})

test('February days count', () => {
  expect(getDaysCount(2024, 2)).toMatchInlineSnapshot(`29`)
})