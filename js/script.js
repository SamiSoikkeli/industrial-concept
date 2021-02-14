$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['#141414', '#141414', '#141414', '#141414'],
        navigation: {
            'position': 'right',
               'tooltips': ['Home', 'Products', 'Applications', 'Contact']
           },
           afterRender: function(){
            //playing the video
            $('video').get(0).play();
        }
    });
});

