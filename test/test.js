var assert = require("assert");
var helloworld = require('../')

describe('helloworld test', function(){
	it('return hello world message', function(){
		assert.equal('hello world', helloworld.hello("world"));
	})
})
