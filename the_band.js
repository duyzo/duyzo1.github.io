function init () {
 var none = document.querySelector('.jsTest')
 var head = document.querySelectorAll('#title li a[href*="#"]')
 var header = document.getElementById('header');
 var menu = document.getElementById('menu')
 var height = header.clientHeight
 var slide = head[4]
 slide.onclick = test
 menu.onclick = meme
 for (var i = 0;i<head.length;i++) {
    var click = head[i]
    if (i===4) continue;
    click.onclick = function() {

        header.style.height = null
    }
}
function meme() {
    
    var checkmenu = header.clientHeight === height
    if (checkmenu) {
        header.style.height = 'auto'

    }  
    else {
        header.style.height = null
        none.classList.remove('on')
    }
    
    }
    function test(next) {
        next.preventDefault()
        none.classList.add('on')
        for (var i = 0;i<head.length;i++) {
            var click = head[i]
            if (i===4) continue;
            click.onclick = function()  {
        none.classList.remove('on')
        header.style.height = null
        }

    }
}
}
window.onload = init