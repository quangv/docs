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

  var changeTitle = function(url) {
    var h1 = $("h1").text();
    var suffix = " | Monaca";
      if (url.split("en/quick_start/").pop()==="") {
        h1 ="Monaca Quick Start Guide";
      } else if (url.split("en/quick_start/overview/").pop()==="") {
        h1 = "Monaca Quick Start Guide - Overview";
      } else if (url.indexOf("en/quick_start/overview/") > -1) {
        h1 = "Monaca Overview - " + h1;
      } else if (url.split("en/quick_start/tutorials/").pop()==="") {
        h1 ="Monaca Quick Start Guide - Tutorials";
      } else if (url.indexOf("en/quick_start/tutorials/cloud_ide/") > -1) {
        if (url.split("en/quick_start/tutorials/cloud_ide/").pop()==="") {
          h1 ="Monaca Tutorials - Online IDE";
        } else {
          h1 ="Online IDE - " + h1.split(": ").pop();
        }
      } else if (url.indexOf("en/quick_start/tutorials/localkit/") > -1) {
        if (url.split("en/quick_start/tutorials/localkit/").pop()==="") {
          h1 ="Monaca Tutorials - " + h1;
        } else {
          h1 ="Monaca Localkit - " + h1.split(": ").pop();
        }
      } else if (url.split("en/sampleapp/samples/").pop()==="") {
        h1 = "Monaca Sample Apps";
      } else if (url.split("en/sampleapp/").pop()==="") {
        h1 = "Monaca Samples & Development Tips";
      } else if (url.indexOf("en/sampleapp/samples/") > -1) {
          h1 = "Monaca Sample Apps - " + h1;
      } else if (url.split("en/sampleapp/tips/").pop()==="") {
        h1 = "Monaca Tips & Tricks";
      } else if (url.indexOf("en/sampleapp/tips/") > -1) {
        h1 = "Monaca Tips & Tricks - " + h1;
      } else if (url.split("en/manual/").pop()==="") {
        h1 = "Monaca Development Manual";
      } else if (url.split("en/manual/development/").pop()==="") {                                                                   
        h1 = "Monaca Development Manual - Development Environment"; 
      } else if (url.indexOf("en/manual/development/monaca_ide/") > -1) {
        if (url.split("en/manual/development/monaca_ide/").pop()==="") {
          h1 ="Monaca Development Manual - Online IDE";
        } else {
          h1 ="Monaca Development Manual - Online IDE - " + h1;
        }
      } else if (url.split("en/manual/development/monaca_localkit/").pop()==="") {                                                       
        h1 = "Monaca Localkit Documentation";
      } else if (url.split("en/manual/development/monaca_cli/").pop()==="") {
        h1 = "Monaca CLI Documentation";
      } else if (url.indexOf("en/manual/development/monaca_vs/") > -1) {
        if (url.split("en/manual/development/monaca_vs/").pop()==="") {
          h1 ="Monaca for Visual Studio Documentation";
        } else {
          h1 ="Monaca for Visual Studio Documentation - " + h1;
        }  
      } else if (url.indexOf("en/manual/debugger/") > -1) {
        if (url.split("en/manual/debugger/").pop()==="") {
          h1 ="Monaca Development Manual - Debugger";
        } else {
          h1 ="Monaca Development Manual - Debugger - " + h1;
        }
      } else if (url.indexOf("en/manual/backend/") > -1) {
        if (url.split("en/manual/backend/").pop()==="") {
          h1 ="Monaca Development Manual - Backend";
        } else {
          h1 ="Monaca Development Manual - Backend - " + h1;
        }  
      } else if (url.indexOf("en/manual/dependencies/") > -1) {
        if (url.split("en/manual/dependencies/").pop()==="") {
          h1 ="Monaca Development Manual - " + h1;
        } else {
          h1 ="Monaca Development Manual - Project Dependencies - " + h1;
        }
      } else if (url.indexOf("en/manual/build/") > -1) {
        if (url.split("en/manual/build/").pop()==="") {
          h1 ="Monaca Development Manual - " + h1;
        } else {
          h1 ="Monaca Development Manual - " + h1;
        } 
      } else if (url.indexOf("en/manual/deploy/") > -1) {
        if (url.split("en/manual/deploy/").pop()==="") {
          h1 ="Monaca Development Manual - App Distribution";
        } else {
          h1 ="Monaca Development Manual - " + h1;
        } 
      } else if (url.indexOf("en/reference/") > -1) {
        if (url.split("en/reference/").pop()==="") {
          h1 ="Monaca Documentation - " + h1;
        } else if (url.indexOf("en/reference/monaca_api/") > -1) {
          if (url.split("en/reference/monaca_api/").pop()==="") {
            h1 = "API - " + h1;
          } else {
            h1 = "Monaca API - " + h1;
          }
        } else if (url.indexOf("en/reference/third_party_phonegap/") > -1) {
          if (url.split("en/reference/third_party_phonegap/").pop()==="") {
            h1 = "API - " + h1;
          } else {
            h1 = "Third-party Cordova Plugins - " + h1;
          }
         } else if (url.indexOf("en/reference/phonegap_") > -1) {
          if (url.split("en/reference/phonegap_2.9/en/").pop()==="" || url.split("en/reference/phonegap_3.5/en/").pop()==="" || url.split("en/reference/phonegap_4.1/en/").pop()==="") {
            h1 = "API - " + h1;
          } else {
            h1 = "Cordova Core Plugins - " + h1;
          }
        } else if (url.indexOf("en/reference/config/") > -1) {
          h1 = "API - " + h1 + "  File";
        
        } else if (url.split("network-information/").pop()==="") {
          h1 ="API - Network Information Plugin";
        } else {
          h1 ="API - " + h1;
        } 
      } else if (url.split("en/onsenui/").pop()==="") {
        h1 = "Monaca Documentation - Onsen";
      } else if (url.indexOf("en/faq/") > -1) {
        if (url.split("en/faq/").pop()==="") {
          h1 ="Monaca Documentation - FAQs Top";
        } else if (url.split("en/faq/environment/").pop()==="") {
          h1 = "Monaca FAQs - Online IDE";
        } else {
          h1 ="Monaca FAQs - " + h1.split(". ").pop();
        }
      } else {
        if (LANG === "ja") {
          h1 = "Monacaドキュメント";
        } else {
          h1 = "Monaca Documentation";
        }
      }
      document.title = h1 + suffix;
  }

  changeTitle(document.URL);

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

  

  var changeLangLink = function(url) {
      if (LANG === "ja") {
        url = url.replace("2.9/ja/reference/phonegap_2.9/ja", "2.9/en/reference/phonegap_2.9/en");
        url = url.replace("3.5/ja/reference/phonegap_3.5/ja", "3.5/en/reference/phonegap_3.5/en");    
        url = url.replace("4.1/ja/reference/phonegap_4.1/ja", "4.1/en/reference/phonegap_4.1/en");    
        url = url.replace("cur/ja/reference/phonegap_5.2/ja", "cur/en/reference/phonegap_5.2/en");    
        url = url.replace("/ja/", "/en/");
      } else {
        url = url.replace("2.9/en/reference/phonegap_2.9/en", "2.9/ja/reference/phonegap_2.9/ja");
        url = url.replace("3.5/en/reference/phonegap_3.5/en", "3.5/ja/reference/phonegap_3.5/ja");
        url = url.replace("4.1/en/reference/phonegap_4.1/en", "4.1/ja/reference/phonegap_4.1/ja");
        url = url.replace("cur/en/reference/phonegap_5.2/en", "cur/ja/reference/phonegap_5.2/ja");
        url = url.replace("/en/", "/ja/");
      }

      $("#footer-nav-feedback").attr("href", url);
  }

  var loadLocalTocs = function() {
    //Javascript code for the right menus (See Also & Table of Contents)
    var contents_element = document.getElementsByClassName('contents local right-menu topic')[0];
    // when there is Table of Content insides a page
    if (contents_element) {
      var contents_height = contents_element.offsetTop + contents_element.offsetHeight;
      var see_also_element = document.getElementsByClassName('admonition seealso')[0];
      if(see_also_element)
        see_also_element.style.top = contents_height - 10 + 'px';

    }
    else {
      var see_also_element = document.getElementsByClassName('admonition seealso')[0];
      if(see_also_element != null )
        see_also_element.style.top = '172px';
    }
  }

  var setNavCurrent = function(url) {
    var $items = $(".aside-main ul li");
    $items.removeClass("current");
    $items.each(function() {
      var itemUrl = document.domain + $("a", this).attr("href");
      if (itemUrl === url.replace(/^(http:\/\/|https:\/\/)|(#.*)$/, "")) {
        $(this).addClass("current");
        $(this).parent().show();
      }
    })

    var $items = $("nav.global > ul > li");
    $items.removeClass("current");
    $items.each(function() {
      var path = $(this).children("a").attr("href");
      if (url.indexOf(path) >= 0) {
        $(this).addClass("current");
      }
    })
  }

  loadLocalTocs();
  setNavCurrent(location.href);

  $(document).pjax('[data-pjax] a:not(.image-reference, .download, .fancybox)', '#body-container');
  $(document).on('pjax:complete', function(e, xhr, status, options) {
    tweakdocs();
    highlighter();
    changeTitle(e.currentTarget.URL);
    changeLangLink(e.currentTarget.URL);
    loadLocalTocs();
    setNavCurrent(options.url);
  });

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
        alert("Search failed!");
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
