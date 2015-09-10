$(document).ready(function () {
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 16; j++) {
            $('.grid').append("<div class='box white'></div>");
        }
    }
    $('.box').css({
        'width': '58px',
        'height': '58px'
    });
    $('.grid').on('mouseenter', '.box.white', function () {
 		$(this).addClass('highlight');
    });
    
    $('.grid').on('mouseenter', '.box.color', function () {
 		$(this).css('background-color', getRandomColor);
    });
    
    $('#standard').on('click', function () {
        $('.box').remove();
        var gridSize = prompt("How many rows would you like? (1-100)");
        var boxSize = (960 - ((gridSize - 1) * 2 + 2)) / gridSize;
        for (var i = 0; i < gridSize; i++) {
            for (var j = 0; j < gridSize; j++) {
                $('.grid').append("<div class='box white'></div>");
            }
        }
        $('.box').css({
            'width': boxSize + 'px',
            'height': boxSize + 'px'
        });
    });
    
    $('#color').on('click', function () {
        $('.box').remove();
        var gridSize = prompt("How many rows would you like? (1-100)");
        var boxSize = (960 - ((gridSize - 1) * 2 + 2)) / gridSize;
        for (var i = 0; i < gridSize; i++) {
            for (var j = 0; j < gridSize; j++) {
                $('.grid').append("<div class='box color'></div>");
            }
        }
        $('.box').css({
            'width': boxSize + 'px',
            'height': boxSize + 'px'
        });
    });
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});