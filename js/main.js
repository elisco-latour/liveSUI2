$(document).ready(function () {
    

    
    for (i = 0; i < 40; i++) {
        $('#coursList').append('<li>M120' + i + '</li>');
    }
    
    var courseList = $('#coursList');
    courseWrapperChild = courseList.children();
    var singleListHeight = $('#coursList li:first').innerHeight();
    listWrapperHeight = courseList.parent().innerHeight( singleListHeight  * (courseWrapperChild.length) );
    console.log( );
    
    $('#marquee-horizontal').marquee({direction: 'horizontal', delay: 0, timing: 15});
    $('#coursList').marquee({
        direction: 'vertical', //运动Direction.  vertical : horizontal
        itemSelecter: 'li', //Item selector
        delay: 3000, //动画 Délai de rendu 迟时间
        timing: 1 //动画Vitesse de rendu
    });
}
);
