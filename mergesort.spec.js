describe("Split Array function", function () {
  it("is able to split an array into two halves", function () {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });
});

describe("merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    // expect(merge([1, 3, 7], [2, 4, 6])).toEqual([1, 2, 3, 4, 6, 7]);
    // expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([1], [2])).toEqual([1, 2]);
  });
});

describe("merge sort", function () {
  it("test1", function () {
    expect(mergeSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("test2", function () {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("test3", function () {
    expect(mergeSort([4, 4, 1, 1])).toEqual([1, 1, 4, 4]);
  });
});
