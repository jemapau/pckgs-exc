
const expect = require('chai').expect
const pckgs = require('..').default

describe('#pckgs', function() {
  it('If the word ends with "ar", then the two letters of the word are remove.', function (){
    const translation = pckgs("common")
    expect(translation).to.equal("comm")
  })

  it('If the word begins with the letter "a", it will be add "aa" at the end.', function (){
    const translation = pckgs("aclarar")
    expect(translation).to.equal("aclararaa")
  })

  it('If the word has more than ten letters, slice and join with - ', function (){
    const translation = pckgs("onomatopeya")
    expect(translation).to.equal("onomat-opeya")
  })

  it('If the original word is a palindrome. Capitalize and lower Case', function (){
    const translation = pckgs("level")
    expect(translation).to.equal("LeVeL")
  })
})
