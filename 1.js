window.onload = function () {
    function scrollFunc(e) {
        //记录滚动的次数
        let AddTimes = 0;

        // 滑轮位置
        let scop1 = document.getElementsByClassName("box1");
        let scop2 = document.getElementsByClassName("box2");
        let scop3 = document.getElementsByClassName("box3");
        e = e || window.event;

        // let arr = {scop1,scop2,scop3};

        if (e.wheelDelta) { //IE/Opera/Chrome/Safari
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                scop2[0].style.top = "100%";
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                scop2[0].style.top = "0";
            }
        }

        // console.log(arr);
    }


    /* Firefox */
    //   if (document.addEventListener) { 
    //     document.addEventListener('DOMMouseScroll', scrollFunc, false); 
    //   }//W3C  
    window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome/Safari 
}