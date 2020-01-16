import test from 'ava'
import { px, pt } from '../source'

test('px', t => {
  t.is(px('42'), '42px')
  t.is(px(42), '42px')
})

test('pt', t => {
  t.is(pt('42'), '42pt')
  t.is(pt(42), '42pt')
})
