/**
* 输出整个jquery对象中的html代码
* hyanwang
*/
define(function(require,exports,modual){
  jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
  };
});
