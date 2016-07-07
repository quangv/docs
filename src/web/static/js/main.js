var clicked_classname = "";
var previous_ul = null;

var ImagePreloader = function(arr) {
    var images = arr, count = 0, maxNum = images.length, onSuccess = null;

    ImagePreloader.prototype.add = function(arr) {
      images = images.concat(arr);
    };

    ImagePreloader.prototype.load = function(callback){
        onSuccess = callback;
        _load(count);
    };

    var _load = function(count) {
        var image = new Image();
        //_image.src = _array[_count] + '?' + new Date().getTime();
        image.src = images[count];

        image.onload = function() {
            count++;

            if(maxNum > count) {
                _load(count);
            } else {
                if(typeof onSuccess === 'function') {
                    onSuccess();
                }
            }
        };
    }
};


$(function(){

  new ImagePreloader(["/static/img/common/btn_top.png", "/static/img/common/btn_top_hover.png", "/static/img/common/btn_top_active.png"]).load();

  var highlight = {};
  //Initialize the document version
  $('#v_selector').val(VERSION);

  $(".fancybox").fancybox({
    closeBtn: false,
    openEffect: 'elastic',
    modal: false
    });



  var tweakdocs = function() {
    $("a.external").each(function() {
        if ($(this).attr("href").indexOf("http") != -1) {
          $(this).attr("target", "_blank").addClass("internet-link");
       }
       });
    $(".section img").each(function() {
        if ($(this).css("width") !== "0px") {
          var parent = $(this).parent().get(0);
          if (parent.tagName.toUpperCase() === "A") {
            if (parent.href.indexOf(".png") > 0 || parent.href.indexOf(".jpg") > 0) {
              parent.className += " fancybox";
            }
          }
        }
      });
  };
  tweakdocs();

  var highlighter = function() {
    //console.log(highlight[clicked_classname]);
    if(jQuery.isEmptyObject(highlight)) return;
    var highlight_text = highlight[clicked_classname];
    var keywords = [];
    var index = 0;
    while(true){
       var startIndex = highlight_text.indexOf("<em>", index);
       if(startIndex != -1 ){
        index = startIndex + 1;
        var endIndex = highlight_text.indexOf("</em>", index);
        if(endIndex != -1){
          index = endIndex + 1;
          var word = highlight_text.substring(startIndex + 4, endIndex);
          keywords.push(word);
        }
        else break;
       }
       else break;
    }

    for(var i=0; i<keywords.length; i++)
      $(".body").highlight(keywords[i]);
  }

  var loadLocalTocs = function() {
    var contents_element_aside = document.getElementsByClassName('aside-main')[0];
    var contents_element_main = document.getElementsByClassName('main')[0];
    if (contents_element_aside) {
      var contents_height = contents_element_aside.offsetTop + contents_element_aside.offsetHeight;
      var contents_left = contents_element_main.offsetWidth;
      var see_also_element = document.getElementsByClassName('admonition seealso')[0];
      if(see_also_element) {
        see_also_element.style.top = contents_height - 45 + 'px';
        see_also_element.style.left = contents_left + 'px';
      }
    }
  }

  // remove breadcrumb in top page
  // var RemoveBreadcrumb = function(){
  //   var current_url = document.URL;
  //   if (current_url.endsWith('en/') || current_url.endsWith('ja/')) {
  //     $('.breadcrumb').remove();
  //   }
    
  // }

  //RemoveBreadcrumb();

  var setNavCurrent = function(url) {
    var parser = document.createElement('a');
    parser.href = url;
    url = parser.pathname;

    // Global menu
    var $items = $("nav.global > div > ul > li");
    $items.removeClass("current");
    $items.each(function() {
      var itemUrl = $("a", this).attr("href");
      if (url.indexOf(itemUrl) != -1) {
        $(this).addClass("current");
      }
    })

    // Side menu
    var $items = $(".aside-main ul li");
    $items.removeClass("current");
    $items.each(function() {
      var itemUrl = $("a", this).attr("href");
      if (url == itemUrl) {
        $(this).addClass("current");
        //$(this).parent().show();
        //console.log(this)
      }
    })
  }

  loadLocalTocs();
  setNavCurrent(location.href);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
  });

  setInterval(function() { observeSearchValue($('#searchbox').val()); }, 100);

  var request;
  var search = function(query){
    var data = {
      q: query,
      lang: LANG,
      version: VERSION
    };
    if(request){
      //Cancel the previous search request.
      request.abort();
    }
    //Show spinner and hide tree

    var spinner_time = setTimeout(function(){
      $("#spinner").show();
      $('ul.level1').hide();
    }, 300);

    request = $.getJSON("/", data)
    .done(function(data, textStatus, jqXHR) {
      $("nav.aside-main li").each(function() {
        $(this).hide();
      });
      highlight = {};
      clearTimeout(spinner_time);
      // Find matching LIs
     //console.log(data);
     var length = Object.keys(data).length;
     for (url in data) {
        highlight[data[url].classname] = data[url].content[0];
        var el = document.querySelector('.' + data[url].classname);
        if (el) {
          el.style.display = 'block';
          var pe = el.parentElement;
          while (true) {
            if (pe && pe.nodeName.toLowerCase() == "li") {
              pe.style.display = "block";
              pe = pe.parentElement;
            } else if (pe && pe.nodeName.toLowerCase() == "ul") {
              var cl = pe.getAttribute("data-cl");
              show(cl, true);
              pe = pe.parentElement;
            } else {
              break;
            }
          }
        } else {   
          console.log("Element not found " + data[url].classname); 
          length = length - 1;
        }
      }
      //Hide spinner and show tree
      $("#spinner").hide();
      $('ul.level1').show();

     //var length = Object.keys(data).length; 
      var suffix = (LANG === "ja") ? "件の検索結果が見つかりました" : " pages found from Monaca Docs";

      $(".aside-search-result-info").text(length + suffix).slideDown();
    })
    .fail(function(xhr, textStatus) {
      if(textStatus !== 'abort'){
        alert("Search failed!" + textStatus + "-" + xhr);
      }
    })
    .always(function(){
      request = null;
    });
  }

  var timeout;
  $('#searchbox').on('keyup', function(e) {
    var that = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      if ($(that).val() === "") {
        $("nav.aside-main li").each(function() {
          $(this).show();
        });
        return;
      }
      query = $(that).val().trim();
      search(query);
    }, 500);
  });

  $(document).on('click','ul.level2 > li', function(ev) {
    close_expand_side_menu($(this).attr('class'), '2', ev);
    clicked_classname = $(this).attr('class');
  });
  
  $(document).on('click','ul.level3 > li', function(ev) {
  //$('ul.level3 > li').live('click', function(ev) {
    close_expand_side_menu($(this).attr('class'), '3', ev);
    clicked_classname = $(this).attr('class');
  });
  
  $(document).on('click','ul.level4 > li', function(ev) {
  //$('ul.level4 > li').live('click', function(ev) {
    close_expand_side_menu($(this).attr('class'), '4', ev);
    clicked_classname = $(this).attr('class');
  });

  $('#v_selector').on('change', function () {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    window.location.href = window.location.origin +"/" + valueSelected + "/" + LANG;
  });

  $('ul.global-submenu li').on('click', function(){
    if(previous_ul !== null) previous_ul.hide();
    var $ul = $("ul.level2 li." + $(this).attr('data-cl') + " ul");

    if(typeof $ul[0] !== 'undefined'){
      if ($ul.css("display") == "none") {
        show($ul.attr('data-cl'));
      } else {
        close($ul.attr('data-cl'));
      }
      previous_ul = $ul;
      $ul[0].parentNode.scrollIntoView();
    }
    else{
      previous_ul = null;
      $("li." + $(this).attr('data-cl'))[0].parentElement.scrollIntoView();
    }

  });

  $("#aside-search-clear").on("click", function() {
    $("#searchbox").val("");
    $("nav.aside-main li").each(function() {
      $(this).show();
    });
    $(".aside-search-result-info").slideUp();
    highlight = {};
  });
});

function show(cl, quick) {
  if (quick) {
    $("ul[data-cl=" + cl + "]").show();
  } else {
    $("ul[data-cl=" + cl + "]").slideDown();
  }
  $("img[data-cl=" + cl +"]").attr("src", "/static/img/common/ico_tree_tri_downward_9px.png");
}

function close(cl) {
  $("ul[data-cl=" + cl + "]").slideUp();
  $("img[data-cl=" + cl + "]").attr("src", "/static/img/common/ico_tree_tri_rightward_9px.png");
}

function close_expand_side_menu(class_name, level, event){
 //when clicking on the current selected list item
  if (class_name.includes('current')){
    class_name = class_name.replace(' current', ''); 
  }

  var $ul;
  if((class_name == 'en_sampleapp_samples' || class_name == 'ja_sampleapp_samples') && level == 2)
      $ul = $("li." + class_name + " > ul > li." + class_name + " > ul");
  else $ul = $("li." + class_name + " > ul");

  if( typeof $ul[0] !== 'undefined')
  {
    if ($ul.css("display") == "none") {
      show($ul.attr('data-cl'));
    } else {
      close($ul.attr('data-cl'));
    }
  }
  event.stopPropagation();
}

function observeSearchValue(val) {
  if (val == "") {
    $("#aside-search-clear").fadeOut();
    $(".aside-search-result-info").slideUp();
    $('ul.level1').fadeIn();
    highlight = {};
  } else {
    $("#aside-search-clear").fadeIn();
  }
}
