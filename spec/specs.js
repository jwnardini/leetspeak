describe('turnLeet', function() {
  it("will replace the letter e with the number 3", function() {
    expect(turnLeet("Ionosphere")).to.equal("Ionosph3r3");
  });

  it("will replace the letter o with the number 0", function() {
    expect(turnLeet("Ionosphere")).to.equal("I0n0sph3r3");
  });
});
