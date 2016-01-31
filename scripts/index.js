window.onload=function(){
//-------------------------------jQuery API------------------------------------------------
$('.secNav').hover(function(){
	$(this).find('.hidden').show();
},function(){
	$(this).find('.hidden').hide();

})

$('.banner-border').hover(function(){
	$(this).find('img').animate({marginLeft:"-5px"})
},function(){
	$(this).find('img').animate({marginLeft:"0px"},1)
})
// $('.nav-name').click(function(){
// 	var i=$('.nav-name').index(this);
// 	var arr=[1210,1663,2126,2693,3146,3599,4176,4629,5092,5659,6112,6565];
// 	$('body').stop().animate({scrollTop:arr[i]},'slow')
// })
// var timeID=setInterval(function(){
// 	if(document.body.scrollTop>=387&&document.body.scrollTop<7000){
// 		$('.header-show').show();	
// 	}else{
// 		$('.header-show').hide();	
// 	}
	

// },500)
var colors=['#ffd1dc','#fed44c','#f2f7fd','#345171','#dc2e63','#fbad17','#d2fbf5','#a5856e','#d70609','#ffe957','#ffc6d5','#29a6ff','#e4e2e3','#ffd5d6','#30c4ff','#c9e0b2'];
var color=['#ffd1dc','#f9f389','#dbdbdd','#64c5a4','#e2e2e2','#b90af9'];
//----------------------lunbo------------------------------------
  var index = 0;
  $($('.hidden-right')[0]).show();
  var lunbo  =  function(){

    $('.banner-item').hide();
    var el = $('.banner-item')[index];
    $(el).show();
    $('.banner').css({background:color[index]});
    $('.quan').removeClass('red');
    $($('.quan')[index]).addClass('red');

    index += 1;
    if( index === $('.quan').length ){
      index = 0;
    }
  }
  $('.quan').each(function(i){
    $(this).data('index',i)
  });

  $('.quan').hover(function(){
	    clearInterval(timerId);
	    $('.quan').removeClass('red');  
	    $(this).addClass('red');
	    var i = $(this).data('index');
	    $('.banner-item').hide();
	    $('.banner').css({background:color[i]});
	    $( $('.banner-item')[i] ).show();
	    index = i;
	 	 },function(){
	    // clearInterval(timerId);
	    timerId = setInterval(lunbo,1000);
  });
  var timerId = setInterval(lunbo,1000);

 //--------------------------------精选市场----------------------------------------------
 $('.item-h').each(function(i){$(this).data('index',i)});
 $('.item-h').hover(function(){
 	clearInterval(timerId);
 	var i=$(this).data('index');
 	if(i==0){
 		// setInterval(lunbo,1000);
 		timerId=setInterval(lunbo,1000);
 		// $('.banner').css({backgroundColor:color[index]});
 		// $($('.hidden-right')[0]).show();
 	}else{
 		clearInterval(timerId)
 		$('.banner-item').hide();
 	
 		$($('.hidden-middle')[i-1]).show();
 	
 		$('.banner').css({backgroundColor:colors[i]})
 	}
 	$('.hidden-right').hide();
	$($('.hidden-right')[i]).show();	
 },function(){
 	var i=$(this).data('index');
 	$($('.hidden-right')[i]).show(); 
 	// $($('.hidden-middle')[i]).hide();
 	$('.banner').css({backgroundColor:colors[i]});


 })
$('.rightNav').hover(function(){
	$(this).find('.tip').show();
	$(this).find('.tip').animate({marginLeft:"-90px"},500)
},function(){
	$(this).find('.tip').hide();
	$(this).find('.tip').animate({marginLeft:"-100px"})
})
$('.small-banner-item').hover(function(){
	$(this).animate({marginLeft:"-10px"},1000)
},function(){
	$(this).animate({marginLeft:"0px"})
})
//---------------------------------------------------------------------
var index1=0;
var lunbo1=function(){'..'
	$('.f-floor').hide();
	var el=$('.f-floor')[index1];
	$(el).show();
	index1+=1;
	if(index1==3){
		index1=0;

	}
}
var timerIdone=setInterval(lunbo1,1000);
$('.next-1').click(function(){
	clearInterval(timerIdone);
	$('.f-floor').hide()
	index1+=1;
	if(index1==3){
		index1=0;
	}
	$($('.f-floor')[index1]).show()
	timerIdone=setInterval(lunbo1,1000);
});
$('.pre-1').click(function(){
	clearInterval(timerIdone);
	$('.f-floor').hide()
	index1-=1;
	if(index1==-1){
		index1=2;
	}
	$($('.f-floor')[index1]).show()
	timerIdone=setInterval(lunbo1,1000);

});
//-------------------------------------------------------------------------------------
var index2=0;
var lunbo2=function(){
	$('.s-floor').hide();
	var el=$('.s-floor')[index2];
	$(el).show();
	index2+=1;
	if(index2==3){
		index2=0;

	}
}
var timeIdtow=setInterval(lunbo2,1000);
$('.next-2').click(function(){
	clearInterval(timeIdtow);
	$('.f-floor').hide()
	index2+=1;
	if(index2==3){
		index2=0;
	}
	$($('.s-floor')[index2]).show()
	timeIdtow=setInterval(lunbo2,1000);
});
$('.pre-2').click(function(){
	clearInterval(timeIdtow);
	$('.s-floor').hide()
	index2-=1;
	if(index2==-1){
		index2=2;
	}
	$($('.s-floor')[index2]).show()
	timeIdtow=setInterval(lunbo2,1000);

});
//---------------------------------------------------------------------------------
var index3=0;
var lunbo3=function(){
	$('.t-floor').hide();
	var el=$('.t-floor')[index3];
	$(el).show();
	index3+=1;
	if(index3==3){ 
		index3=0;

	}
}
var timeIdthree=setInterval(lunbo3,1000);
$('.next-3').click(function(){
	clearInterval(timeIdthree);
	$('.t-floor').hide()
	index3+=1;
	if(index3==3){
		index3=0;
	}
	$($('.t-floor')[index3]).show()
	timeIdthree=setInterval(lunbo3,1000);
});
$('.pre-3').click(function(){
	clearInterval(timeIdthree);
	$('.t-floor').hide()
	index3-=1;
	if(index3==-1){
		index3=2;
	}
	$($('.t-floor')[index3]).show()
	timeIdthree=setInterval(lunbo3,1000);

});

//--------------------------------------------------------------------------
var index4=0;
var lunbo4=function(){
	$('.fo-floor').hide();
	var el=$('.fo-floor')[index4];
	$(el).show();
	index4+=1;
	if(index4==3){
		index4=0;

	}
}
var timeIdfour=setInterval(lunbo4,1000);
$('.next-4').click(function(){
	clearInterval(timeIdfour);
	$('.fo-floor').hide()
	index4+=1;
	if(index4==3){
		index4=0;
	}
	$($('.fo-floor')[index4]).show()
	timeIdfour=setInterval(lunbo4,1000);
});
$('.pre-4').click(function(){
	clearInterval(timeIdfour);
	$('.fo-floor').hide()
	index4-=1;
	if(index4==-1){
		index4=2;
	}
	$($('.fo-floor')[index4]).show()
	timeIdfour=setInterval(lunbo4,1000);

});
//---------------------------------------------------------------------------
var index5=0;
var lunbo5=function(){
	$('.fi-floor').hide();
	var el=$('.fi-floor')[index5];
	$(el).show();
	index5+=1;
	if(index5==3){
		index5=0;

	}
}
var timerIdfive=setInterval(lunbo5,1000);
$('.next-5').click(function(){
	clearInterval(timerIdfive);
	$('.fi-floor').hide()
	index5+=1;
	if(index5==3){
		index5=0;
	}
	$($('.fi-floor')[index5]).show()
	timerIdfive=setInterval(lunbo5,1000);
});
$('.pre-5').click(function(){
	clearInterval(timerIdfive);
	$('.fi-floor').hide()
	index5-=1;
	if(index5==-1){
		index5=2;
	}
	$($('.fi-floor')[index5]).show()
	timerIdfive=setInterval(lunbo5,1000);

});
//-----------------------------------------------------------------------------
var indexe=0;
var lunbo6=function(){
	$('.e-floor').hide();
	var el=$('.e-floor')[indexe];
	$(el).show();
	indexe+=1;
	if(indexe==3){
		indexe=0;

	}
}
var timerIdeight=setInterval(lunbo6,1000);
$('.next-8').click(function(){
	clearInterval(timerIdeight);
	$('.e-floor').hide()
	indexe+=1;
	if(indexe==3){
		indexe=0;
	}
	$($('.e-floor')[indexe]).show()
	timerIdeight=setInterval(lunbo6,1000);
});
$('.pre-8').click(function(){
	clearInterval(timerIdeight);
	$('.e-floor').hide()
	indexe-=1;
	if(indexe==-1){
		indexe=2;
	}
	$($('.e-floor')[indexe]).show()
	timerIdeight=setInterval(lunbo6,1000);

});
//-----------------------------------------换一批--------------------------------------------
$('.anniu').each(function(i){$(this).data('num',i)})
$($('.asd')[0]).css({borderBottom: "2px solid black"})
$('.anniu').click(function(){
	var i=$(this).data('num');
	$('.asd').css({borderBottom:"none"});
	$($('.asd')[i]).css({borderBottom: "2px solid black"})
	$('.xml-show').removeClass('show');
	$($('.xml-show')[i]).addClass('show');
})
$('.trigger-next').click(function(){
	var dict={},arr=[],rad;
	$('.show').find('img').each(function(i){
		arr.push($(this).attr('src'));
	})
	$('.show').find('img').each(function(i){
		rad=Math.floor(Math.random()*24);
		while(dict[rad]){
			rad=Math.floor(Math.random()*24);
		}
		dict[rad]=true;
		$(this).attr({src:arr[rad]});
	})
	dict={};

})

$('.m-top').click(function(){
  	$({t:$(window).scrollTop()}).animate({t:0},{
  		duration:700,
  		step:function(){
  			$(window).scrollTop(this.t);
  		}
  	})
})
//---------------------------------fixed-----------------------------------
	var ti,tt;
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			clearTimeout(ti);
			ti=setTimeout(function(){
				$('.header-show').show();
			},500);
		}else{
			clearTimeout(ti);
			$('.header-show').hide();
		}
		if($(window).scrollTop()>850){
			clearTimeout(tt);
			tt=setTimeout(function(){
				$('#sn-nav-wrapper').show();
			},500);
		}else{
			clearTimeout(tt);
			$('#sn-nav-wrapper').hide();
		}
		$('.fp-floor').each(function(i){
			if(i==11&&$(window).scrollTop()>=$($('.fp-floor')[i]).offset().top-150){
				$($('.nav-name')[i]).find('.f-name').show();
				return;
			}else{
				$($('.nav-name')[i]).find('.f-name').hide();
			}
			if(i!=11 && $(window).scrollTop()>=$($('.fp-floor')[i]).offset().top-150 && $(window).scrollTop()<=$($('.fp-floor')[i+1]).offset().top-150){
				$($('.nav-name')[i]).find('.f-name').show();
			}else{
				$($('.nav-name')[i]).find('.f-name').hide();
			}
		});
	});

// ------------左侧导航hover--------
	$('.nav-name').each(function(i){
		$(this).data('index',i);
	});
	$('.nav-name').hover(
		function(){
			$(this).find('.f-name').show();
		},function(){
			var i=$(this).data('index');
			if($(window).scrollTop()>=$($('.fp-floor')[i]).offset().top-150&&$(window).scrollTop()<=$($('.fp-floor')[i+1]).offset().top-150){
				$(this).find('.f-name').show();
			}else{
				$(this).find('.f-name').hide();
			}
		}
	);
// ------------定位楼层-------------
	// 取下标  $('.nav-name').index(this);
	$('.nav-name').click(function(){
		var i=$(this).data('index');
		$('.nav-name').find('f-name').hide();
		$(this).find('.f-name').show();
		var newtop=$($('.fp-floor')[i]).offset().top-50;
		$(this).find('.f-name').show();
		$({top:$(window).scrollTop()}).animate(
			{top:newtop},
			{	duration:700,
				step:function(){
					$(window).scrollTop(this.top);
				}
			});
		return false;
	});

}
