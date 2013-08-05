test("Local Slideshow", function () {
  var slideShow = new Slideshow.Local('qunit-fixture', [
    '<div>Slide 1</div>',
    '<div>Slide 2</div>',
    '<div>Slide 3</div>',
    '<div>Slide 4</div>'
  ], { delay: 0.05, repeat: false, randomize: false });
});
