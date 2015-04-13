/**
*  MOBILE COLLAPSE MENU @TODO - There is a LOT I can clean up in this...but this will work for now. - Sean

  $('#[TRIGGER ID]').mobileMenuCollapse({
    breakpoint  : "[BREAKPOINT TO ACTIVE MENU]",
    navMenu     : "[NAV MENU CLASS]",
    navMenuItem : "[NAV ITEM CLASS]"
  });

**/
(function($) {
    var clientWidth = document.documentElement.clientWidth;
    var menuOpenClose = function (mobileMenu, trigger) {
        if ( mobileMenu.hasClass('ui-expanded') ) {
            mobileMenu.removeClass('ui-expanded');
            mobileMenu.addClass('ui-closed');
        } else {
            mobileMenu.addClass('ui-expanded');
            if ( mobileMenu.hasClass('ui-closed') ) {
                mobileMenu.removeClass('ui-closed');
            }
        }
        if ( trigger == 'close' ) {
            mobileMenu.removeClass('ui-expanded');
            mobileMenu.addClass('ui-closed');
        }

    };
    $.fn.mobileMenuCollapse = function (options) {
        var defaults = {
            breakpoint  : 800,
            navMenu     : 'nav.alpha',
            navMenuItem : '.nav-item'
        };
        options         = $.extend(defaults, options);
        var trigger     = $(this);
        var breakpoint  = options.breakpoint;
        var mobileMenu  = $(options.navMenu);
        var menuItem    = mobileMenu.find(options.navMenuItem);
        trigger.click(function() {
            menuOpenClose(mobileMenu, trigger);
        });
        $('.nav-item a').click(function() {
            if ( breakpoint >= clientWidth ) {
                menuOpenClose(mobileMenu, 'close');
            }
        });
        $('.main').click(function() {
            if ( breakpoint >= clientWidth ) {
                menuOpenClose(mobileMenu, 'close');
            }
        });
    };
})(jQuery);