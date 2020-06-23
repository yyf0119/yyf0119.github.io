var i = 0;
            var timer;
            $(function(){
                $("img").eq(0).show().siblings().hide();
                start();
                $("b").hover(function(){
                    clearInterval(timer);
                    i = $(this).index();
                    change();
                }, function(){
                    start();
                });
                $(".left").click(function(){
                    i--;
                    if(i == -1){
                        i = 2;
                    }
                    change();
                });
                $(".right").click(function(){
                    i++;
                    if(i == 3){
                        i = 0;
                    }
                    change();
                });
            });
            function start(){
                timer = setInterval(function(){
                    i++;
                    if(i == 3){
                        i = 0;
                    }
                    change();
                }, 3000);
            }
            function change(){
                $("img").eq(i).fadeIn(300).siblings().stop(true, true).fadeOut(300);
                $("b").eq(i).addClass("current").siblings().removeClass("current");
            }