describe("Buffer", function () {
    it("should return the String representation if toString is called", function () {
        var myBuffer = new Buffer('Hello World');

        var result = myBuffer.toString();

        expect(result).toEqual('Hello World');
    });
});
