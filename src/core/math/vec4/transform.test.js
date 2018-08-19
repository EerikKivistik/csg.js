const test = require('ava')
const {transformMat4, fromValues, toString} = require('./index')

test('vec4: transformMat4() called with two paramerters should return a vec4 with correct values', t => {
  const identityMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]

  const obs1 = transformMat4(identityMatrix, [0, 0, 0, 0])
  const exp1 = fromValues(0, 0, 0, 0)
  t.deepEqual(obs1, exp1)

  const obs2 = transformMat4(identityMatrix, [3, 2, 1, 0])
  const exp2 = fromValues(3, 2, 1, 0)
  t.deepEqual(obs2, exp2)

  let x = 1
  let y = 5
  let z = 7
  const translationMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1
  ]

  const obs3 = transformMat4(translationMatrix, [-1, -2, -3, 1])
  const exp3 = fromValues(0, 3, 4, 1)
  t.deepEqual(obs3, exp3)

  let w = 1
  let h = 3
  let d = 5
  const scaleMatrix = [
    w,    0,    0,   0,
    0,    h,    0,   0,
    0,    0,    d,   0,
    0,    0,    0,   1
  ]

  const obs4 = transformMat4(scaleMatrix, [1, 2, 3, 1])
  const exp4 = fromValues(1, 6, 15, 1)
  t.deepEqual(obs4, exp4)

  const r = (90 * 0.017453292519943295)
  const rotateZMatrix = [
    Math.cos(r), -Math.sin(r),    0,    0,
    Math.sin(r),  Math.cos(r),    0,    0,
              0,            0,    1,    0,
              0,            0,    0,    1
  ]

  const obs5 = transformMat4(rotateZMatrix, [1, 2, 3, 1])
  const exp5 = fromValues(2, -1, 3, 1)
  t.deepEqual(obs5, exp5)
})

test('vec4: transformMat4() called with three paramerters should update a vec4 with correct values', t => {
  const identityMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]

  let obs1 = fromValues(0, 0, 0, 0)
  const ret1 = transformMat4(obs1, identityMatrix, [0, 0, 0, 0])
  const exp1 = fromValues(0, 0, 0, 0)
  t.deepEqual(obs1, exp1)
  t.deepEqual(ret1, exp1)

  let obs2 = fromValues(0, 0, 0, 0)
  const ret2 = transformMat4(obs2, identityMatrix, [3, 2, 1, 0])
  const exp2 = fromValues(3, 2, 1, 0)
  t.deepEqual(obs2, exp2)
  t.deepEqual(ret2, exp2)

  let x = 1
  let y = 5
  let z = 7
  const translationMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1
  ]

  let obs3 = fromValues(0, 0, 0, 0)
  const ret3 = transformMat4(obs3, translationMatrix, [-1, -2, -3, 1])
  const exp3 = fromValues(0, 3, 4, 1)
  t.deepEqual(obs3, exp3)
  t.deepEqual(ret3, exp3)

  let w = 1
  let h = 3
  let d = 5
  const scaleMatrix = [
    w,    0,    0,   0,
    0,    h,    0,   0,
    0,    0,    d,   0,
    0,    0,    0,   1
  ]

  let obs4 = fromValues(0, 0, 0, 0)
  const ret4 = transformMat4(obs4, scaleMatrix, [1, 2, 3, 1])
  const exp4 = fromValues(1, 6, 15, 1)
  t.deepEqual(obs4, exp4)
  t.deepEqual(ret4, exp4)

  const r = (90 * 0.017453292519943295)
  const rotateZMatrix = [
    Math.cos(r), -Math.sin(r),    0,    0,
    Math.sin(r),  Math.cos(r),    0,    0,
              0,            0,    1,    0,
              0,            0,    0,    1
  ]

  let obs5 = fromValues(0, 0, 0, 0)
  const ret5 = transformMat4(obs5, rotateZMatrix, [1, 2, 3, 1])
  const exp5 = fromValues(2, -1, 3, 1)
  t.deepEqual(obs5, exp5)
  t.deepEqual(ret5, exp5)
})
