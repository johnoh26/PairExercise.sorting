xdescribe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("spec1", function () {
    expect(bubbleSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("spec2", function () {
    expect(bubbleSort([2, 2, 2, 1, 1, 1])).toEqual([1, 1, 1, 2, 2, 2]);
  });
});

// beforeAll(function () {
//     spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
//   });
//   it('getting to the center of tootsiepop involves exactly three licks', function () {
//     tootsiepop.getToCenter();
//     expect(tootsiepop.lick.calls.count()).toEqual(3);
//   });
