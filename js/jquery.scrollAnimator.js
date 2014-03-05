var ScrollAnimator = function(){
	
	var settings = {};
	var defaults = {
		anim : [],
		maxScroll : 300,
		speed : 15,
		elementScroll : '#tela',
		enableDebug : true
	}
	
	var scrollTop = 0;
	
	var debug = function(message){
		if(settings.enableDebug)
			console.log(message);
	}
	
	var getPasso = function( startAt, endAt, propStart, propEnd ){
		
		passo = ( 
			( 
				(scrollTop - startAt) / (endAt - startAt) 
			) * 
			(propEnd - propStart)
		) + propStart;
		
		debug(passo);
		
		return passo;
		
	}
	
	var Move = function(elem){
		
		var move = {};
		
		$.each( elem.properties, function(index, prop){
			
			move[index] = getPasso( elem.startAt, elem.endAt, prop.start, prop.end );
			
		});
		
		debug(move);
		
		$( elem.element ).stop(true, true).transition( move , 0.5);
		
	}
	
	//MOVE SPECIFIC ELEMENT BY SCROLLTOP VALUE
	var onScroll = function(){
		
		$.each(settings.anim, function(key, elem){
			
			if( elem.startAt <= scrollTop && scrollTop <= elem.endAt ){
				
				Move(elem);
				
			}
			
		});
		
	}
	
	//LOOP AT ALL ANIMATIONS AND SET A START POSITION
	var Start = function(){
		
		$.each(settings.anim, function(key, elem){
			//SET SCROLLTOP WITH ELEM.STARTAT VALUE TO SIMULATE ELEMENT POSITION
			if(elem.startAt == 0){
				scrollTop = elem.startAt;
				Move(elem);
			}
		});
		
		scrollTop = 0;
		
	}
	
	var init = function( param ){
		
		settings = $.extend( defaults, param );
		
		Start();
		
		$( settings.elementScroll ).bind('mousewheel', function(event, delta, deltaX, deltaY) {
			
			scrollTop -= delta * settings.speed; //VELOCIDADE DO SCROLL
			if(scrollTop < 0) scrollTop = 0;
			
			if(scrollTop > settings.maxScroll) scrollTop = settings.maxScroll;
			
			debug( 'Scroll Top: ' + scrollTop );
			
			onScroll();
			
		});
		
	}
	
	return {
		init : init
	};
	
}