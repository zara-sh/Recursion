var htmlStrings = [
  '<p></p>',
  '<div><div class="testing"></div></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><button class="targetClassName"></button></div><div class="classname"></div>',
  '<div><p class="targetClassName"><b>asdfasdf</b></p></div><div class="classname"><span></span></div>',
  '<div><p class="targetClassName"><b>asdfasdf</b></p></div><div class="classname"><span class="span test"></span></div>',
  '<div class="a"><p class="targetClassName asdf"><b>aasdfasdfsdfasdf</b></p></div><div class="classname"><span class="span test"></span></div>'
];

describe('getElementsByClassName', function(){

  beforeEach(function () {
    $('body').addClass('targetClassName');
  });

  afterEach(function () {
    $('body').removeClass('targetClassName');
  });

  for(var i = 0; i < htmlStrings.length; i++) {
    testHTMLStrings(htmlStrings[i], i);
  }

  function testHTMLStrings (htmlString, index) {
    it('should match the results of calling the getElementsByClassName method, htmlStrings index: ' + index, function(){
      $('body').addClass('targetClassName');
      var $rootElement = $(htmlString);
      $('body').append($rootElement);
      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      expect(result).toEqual(expectedArray);
      $rootElement.remove();
    });
  };
});