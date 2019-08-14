// JavaScript Document
(function  ($) {
$.fn.countTo = function (options) {
options = options || {};

return $(this).each(function () {
// set options for current element
var settings = $.extend({}, $.fn.countTo.defaults, {
from:            $(this).data('from'),
to:              $(this).data('to'),
speed:           $(this).data('speed'),
refreshInterval: $(this).data('refresh-interval'),
decimals:        $(this).data('decimals')
}, options);

// how many times to update the value, and how much to increment the value on each update
var loops = Math.ceil(settings.speed / settings.refreshInterval),
increment = (settings.to - settings.from) / loops;

// references & variables that will change with each update
var self = this,
$self = $(this),
loopCount = 0,
value = settings.from,
data = $self.data('countTo') || {};

$self.data('countTo', data);

// if an existing interval can be found, clear it first
if (data.interval) {
clearInterval(data.interval);
}
data.interval = setInterval(updateTimer, settings.refreshInterval);

// initialize the element with the starting value
render(value);

function updateTimer() {
value += increment;
loopCount++;

render(value);

if (typeof(settings.onUpdate) == 'function') {
settings.onUpdate.call(self, value);
}

if (loopCount >= loops) {
// remove the interval
$self.removeData('countTo');
clearInterval(data.interval);
value = settings.to;

if (typeof(settings.onComplete) == 'function') {
settings.onComplete.call(self, value);
}
}
}

function render(value) {
var formattedValue = settings.formatter.call(self, value, settings);
$self.html(formattedValue);
}
});
};

$.fn.countTo.defaults = {
from: 0,               // the number the element should start at
to: 0,                 // the number the element should end at
speed: 1000,           // how long it should take to count between the target numbers
refreshInterval: 100,  // how often the element should be updated
decimals: 0,           // the number of decimal places to show
formatter: formatter,  // handler for formatting the value before rendering
onUpdate: null,        // callback method for every time the element is updated
onComplete: null       // callback method for when the element finishes updating
};

function formatter(value, settings) {
return value.toFixed(settings.decimals);
}
	
	
	
}(jQuery));
jQuery(document).ready(function(){
	
	
//$('.ui-page').removeClass('ui-page-active');
//$('.ui-loader').css('display','none');
	

$('.fade-intro').animate({opacity:0},3000,function(){
$('.circle-loader').addClass('star-loader');
// custom formatting example
var timer = setTimeout(function(){

$('.count-number').data('countToOptions', {
formatter: function (value, options) {
return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, '.');
}
});

// start all the timers
$('.timer').each(count);  

function count(options) {
var $this = $(this);
options = $.extend({}, options || {}, $this.data('countToOptions') || {});
$this.countTo(options);

}
	
$('.number-val-result-dv').animate({width:"100%",marginLeft:"12%",opacity:0.6},1400,function(){
$('.circle-loader').toggleClass('load-complete');
$('.checkmark').toggle();
$('.lds-ripple').fadeIn('fast',function(){
var timer = setTimeout(function(){
$('.lds-ripple').fadeOut(1500,function(){
$('.slider-pro').animate({opacity:1},5000,sliderStart
);

});
},3000);
});
});	

$('.fade-intro').css('display','none');	
},2000);
	

});

// search functions 
$('.icon-txt').click(function(){
$('.fade-intro').css('display','block');	
$('.fade-intro').animate({opacity:1},600,function(){
$('.main').empty();
$('.main').load('resultado.html');
$('.fade-intro').animate({opacity:0},600,function(){
$('.fade-intro').css('display','none');	
});
});
});
//end search functions

// swipe menu 

$('#open-menu-lateral').click(function(){

$('.menu-lateral').animate({left:'0%'},250,function(){
$('.icons-menu-footer').css('visibility','hidden');	

});

});
$(document).on( "swipeleft",'.menu-lateral', function(){

$('.menu-lateral').animate({left:'-100%'},250,function(){
$('.icons-menu-footer').css('visibility','visible');	

});
} );	
	
//end swipe menu
		
//end code 	
});
var c =-1;
function sliderStart(){
var countDiv = $('.slider-pro .slide').length;	
//console.log(countDiv);
var myVar = setInterval(function(){ 
c++;
console.log(c);
$('.slider-'+c).animate({marginLeft:'-500px'},2000,function(){
$('.slider-'+(c+1)).css('margin-left','500px');
$('.slider-'+(c+1)).animate({marginLeft:'0px'},1000,function(){
$('.slider-'+c).css('margin-left','500px');
	
});
});


c =  c >= countDiv -1  ? -1 :c;
}
, 6000);


}

	

