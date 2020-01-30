import test from 'ava'
import { px, pt, pct, cm, mm, em, rem } from '../source'

test('px', t => {
  t.is(px('42'), '42px')
  t.is(px(42), '42px')
})

test('pt', t => {
  t.is(pt('42'), '42pt')
  t.is(pt(42), '42pt')
})

test('pct', t => {
  t.is(pct('42'), '42%')
  t.is(pct(42), '42%')
})

test('cm', t => {
  t.is(cm('42'), '42cm')
  t.is(cm(42), '42cm')
})

test('mm', t => {
  t.is(mm('42'), '42mm')
  t.is(mm(42), '42mm')
})

test('em', t => {
  t.is(em('42'), '42em')
  t.is(em(42), '42em')
})

test('rem', t => {
  t.is(rem('42'), '42rem')
  t.is(rem(42), '42rem')
})
