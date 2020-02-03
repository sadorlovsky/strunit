import test from 'ava'
import {
  px, pt, pct, cm, mm, em, rem, inch, pc, Q, vw, vh, vmin, vmax, ex, ch
} from '../source'

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

test('inch', t => {
  t.is(inch('42'), '42in')
  t.is(inch(42), '42in')
})

test('pc', t => {
  t.is(pc('42'), '42pc')
  t.is(pc(42), '42pc')
})

test('Q', t => {
  t.is(Q('42'), '42Q')
  t.is(Q(42), '42Q')
})

test('vw', t => {
  t.is(vw('42'), '42vw')
  t.is(vw(42), '42vw')
})

test('vh', t => {
  t.is(vh('42'), '42vh')
  t.is(vh(42), '42vh')
})

test('vmin', t => {
  t.is(vmin('42'), '42vmin')
  t.is(vmin(42), '42vmin')
})

test('vmax', t => {
  t.is(vmax('42'), '42vmax')
  t.is(vmax(42), '42vmax')
})

test('ex', t => {
  t.is(ex('42'), '42ex')
  t.is(ex(42), '42ex')
})

test('ch', t => {
  t.is(ch('42'), '42ch')
  t.is(ch(42), '42ch')
})
