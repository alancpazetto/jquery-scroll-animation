
var Example = (function(){
	
	var settings = {};
	var defaults = {
		maxScroll : 900,
		speed : 5,
		elementScroll : '#container'
	}
	
	// OBJECT OF ANIMATION AND TRANSITIONS RULES
	// MUST BE THIS FORMAT:
	// {
	//    element : 'TRANSITION ELEMENT',
	//    startAt : (INIT OF SCROLL TOP INDEX),
	//    endAt : (END OF SCROLL TOP INDEX),
	//    properties : {	ARRAY OF PROPERTIES
	//        property : {	//THIS IS PROPERTY (EX. x, y, opacity, scale, ETC). MUST BE COMPATIBLE WITH Transit (http://ricostacruz.com/jquery.transit/) SUPORTED PROPERTIES.
	//            start : (START VALUE OF PROPERTY),
	//            end : (END VALUE OF PROPERTY)
	//        }
	//    }
	// }
	var largura = -window.innerWidth;
	var altura = window.innerHeight;
	var animations = [
		
		{
			element : '#item1',
			startAt : 0,
			endAt : 300,
			properties : {
				y : { start : 0, end : -300 },
				opacity : { start : 1, end : -1 }
			}
		},
		{
			element : '#item1 h1',
			startAt : 0,
			endAt : 200,
			properties : {
				y : { start : 0, end : -1000 },
				opacity : { start : 1, end : -1 }
			}
		},
		{
			element : '#item1 .icon',
			startAt : 0,
			endAt : 200,
			properties : {
				y : { start : 0, end : -300 },
				opacity : { start : 1, end : -1 }
			}
		},
		{
			element : '#item2 .icon',
			startAt : 200,
			endAt : 500,
			properties : {
				rotate : { start : 0, end : 360 }
			}
		},
		{
			element : '#item2',
			startAt : 300,
			endAt : 500,
			properties : {
				opacity : { start : 1, end : -1 }
			}
		},
		{
			element : '#item3 .icon',
			startAt : 400,
			endAt : 450,
			properties : {
				opacity : { start : 1, end : 0.8 },
				scale : { start : 1, end : 1.8 },
				rotate : { start : 0, end : 20 }
			}
		},
		{
			element : '#item3 .icon',
			startAt : 450,
			endAt : 500,
			properties : {
				opacity : { start : 0.8, end : 1 },
				scale : { start : 1.8, end : 1 },
				rotate : { start : 20, end : 0 }
			}
		},
		{
			element : '#item3 .icon',
			startAt : 500,
			endAt : 550,
			properties : {
				opacity : { start : 1, end : 0.8 },
				scale : { start : 1, end : 1.8 },
				rotate : { start : 0, end : 20 }
			}
		},
		{
			element : '#item3 .icon',
			startAt : 650,
			endAt : 700,
			properties : {
				opacity : { start : 0.8, end : 1 },
				scale : { start : 1.8, end : 1 },
				rotate : { start : 20, end : 0 }
			}
		},
		{
			element : '#item3',
			startAt : 700,
			endAt : 900,
			properties : {
				opacity : { start : 1, end : -1 },
				y : { start : 0, end : -300 }
			}
		}
		
	];
	
	var init = function( param ){
		
		settings = $.extend( defaults, param );
		
		ScrollAnimator = ScrollAnimator();
		ScrollAnimator.init({
			
			anim : animations,
			
			maxScroll : settings.maxScroll,
			speed : settings.speed,
			elementScroll : settings.elementScroll
			
		});
		
	}
	
	return {
		init : init
	};
	
})();

$(document).ready(function(e) {
	Example.init();
});