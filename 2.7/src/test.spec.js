describe("YouTube Api", function () {
  it("API results length is as expected", function () {
    return fetchVideos("React").then(function (result) {
      expect(result.length).toEqual(15);
    });
  });
});
