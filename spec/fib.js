describe('Fibonacci', function () {
  it('should give the correct array', function () {
    expect(fib(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect(fib(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});