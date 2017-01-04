$(function(){
	//得到屏幕的宽度是否小于786
	function wsize(){
		var scwidth = $(window).width();
		var iswidth = scwidth >= 786;
		return iswidth;
	}
	function bsize(){
		var scwidth = $(window).width();
		var iswidth = scwidth <= 992;
		return iswidth;
	}
	//轮播图版块的图片切换
	function resize(){
	// 得到屏幕就的宽
	var iswidth = wsize();
	//进行图片的渲染
	var $item = $('#carousel-example-generic > .carousel-inner > .item');
	$item.each(function(i,index){
		//小于768的时候用小图,并且随页面百分比缩放
		$($item[i]).css('backgroundImage',iswidth ? "url('./img/"+(i+1)+".jpg')":"url('./img/1"+(i+1)+".jpg')");
		if(!iswidth){
					// console.log(1111);
					$($item[i]).html('<img src="./img/1'+(i+1)+'.jpg" alt="" />');
					}else {
					$($item[i]).empty();
					}
	});
	}
	$(window).on('resize',resize).trigger('resize');
	//轮播图手势识别
	var x = 0;
	$("#carousel-example-generic").on('touchstart',function(e){
			x = e.originalEvent.changedTouches[0].clientX;
	});
	$("#carousel-example-generic").on('touchend',function(e){
		    x = e.originalEvent.changedTouches[0].clientX - x;
		    //要在每次touchend的时候进行收拾处理
		    if(Math.abs(x)>50){
		    	//避免手势过敏
		    	if (x<0) {
		    		$('#carousel-example-generic').carousel('next');
		    	}else if(x>0){
		    		$('#carousel-example-generic').carousel('prev');
		    	}
		    }
	});
		

	//美食版块横向滑动
	var $deli  = $('#delitab ul');
	var deli = document.querySelector('#delitab');
	var scwidth = $(window).width();
			//设置宽度等于li之和
		var sum = 0;
		$('#delitab ul li').each(function(){
		var a =$(this).width();
		sum+=a;
	});
		console.log(sum);	    
		console.log($deli.width());
		// 如果到导航条的宽大于屏幕宽	
	if (sum>scwidth) {
		$deli.width(sum + "px");
		deli.style.overflowX = 'scroll';
	}
	
	// 新闻版块数据交互
	// 绑定元素 得到美食资讯
	var $lanmu = $('#news .lanmu');
		// console.log($lanmu);
	var $li = $('#news .nav li a');
	// 出发点击事件data()里面加后缀
	$li.on('click',function(){
		var $this = $(this);
			// console.log($this);
		$lanmu.text($this.data('text'));
	});
	//如果屏幕小于768,则变成横排显示
	function newsresize(){
		var iswidth = bsize();
		var $ul = $('#news ul');
		if(iswidth){
			$ul.removeClass('nav-stacked');
		}
	}
	newsresize();
	$(window).on('resize',newsresize);
	



});