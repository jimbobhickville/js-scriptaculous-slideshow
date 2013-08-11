test("Local Slideshow", 34, function () {
  var visibleFrameCheck = function (total, visible) {
    for (var i=1; i<=total; i++) {
      if (i == visible) {
        equal($('frame'+i).visible(), true, "Frame " + i + " is visible");
      }
      else {
        equal($('frame'+i).visible(), false, "Frame " + i + " is hidden");
      }
    }
  };

  var frames = [
    '<div id="frame1">Slide 1</div>',
    '<div id="frame2">Slide 2</div>',
    '<div id="frame3">Slide 3</div>',
    '<div id="frame4">Slide 4</div>'
  ];
  var totalFrames = frames.length;

  var slideShow = new Slideshow.Local('qunit-fixture', frames, {
    hideEffect: Element.hide,
    showEffect: Element.show,
    delay: 30,
    repeat: false,
    randomize: false
  });
  slideShow.pause();

  visibleFrameCheck(1, 1);

  for (var i=2; i<=totalFrames; i++) {
    slideShow.goForward();
    visibleFrameCheck(i, i);
  }

  slideShow.goBack();
  visibleFrameCheck(totalFrames, totalFrames - 1);

  slideShow.goForward();
  visibleFrameCheck(totalFrames, totalFrames);

  /* last one is still visible since repeat is off */
  slideShow.goForward();
  visibleFrameCheck(totalFrames, totalFrames);

  slideShow.repeat();
  slideShow.goForward();
  visibleFrameCheck(totalFrames, 1);

  slideShow.goBack();
  visibleFrameCheck(totalFrames, totalFrames);

  slideShow.stopRepeating();
  slideShow.goForward();
  visibleFrameCheck(totalFrames, totalFrames);

});
