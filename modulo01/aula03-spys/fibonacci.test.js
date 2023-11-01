
const assert = require('assert')
const { createSandbox } = require('sinon');
const Fibonacci = require('./src/fibonacci');

const sinon = createSandbox()

  const fibonacci = new Fibonacci()
  ;(async () => {
    const spy = sinon.spy(
      fibonacci,
      fibonacci.execute.name
    )
    for (const data of fibonacci.execute(5)){}
    const expectedCallCount = 6
    assert.strictEqual(spy.callCount, expectedCallCount)
    const { args } = spy.getCall(2)
    const expectedParams = [3,1,2]
    assert.deepStrictEqual(args, expectedParams) 
  })()