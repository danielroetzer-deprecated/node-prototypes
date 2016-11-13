describe("Spy", function () {

    var buffer;

    beforeEach(function () {
        buffer = new Buffer('Hello World');
    });

    it("should track calls to 'toString'", function () {
        spyOn(buffer, 'toString');

        buffer.toString();

        expect(buffer.toString).toHaveBeenCalled();
    });

    it("should return a different result", function () {
        spyOn(buffer, 'toString').andReturn('Hello Node.js');

        var result = buffer.toString();

        expect(buffer.toString).toHaveBeenCalled();
        expect(result).toEqual('Hello Node.js');
    });
});
