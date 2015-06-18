$(document).ready(function(){
var s=window.screen;
q.width  = window.innerWidth;
q.height = window.innerHeight;
var lengths = [];
for (var i=0; i<q.height/2; i++) {
    lengths.push(Math.round(Math.random() * q.height))
}
var ctx=q.getContext('2d');
var i = 0;
var bang = '\u0021'; var text;
var x, y=0, rand, p, rain;
var color='#0F0', disp= bang;
var sp = document.getElementById("speed");
 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
var draw = function() {
    ctx.fillStyle='rgba(0,0,0,0.1)';
    ctx.fillRect(0,0,q.width,q.height);
    ctx.fillStyle=color;
    ctx.font='12pt Times';
    
    color=document.getElementById("rain-color").value;
    for(i = 0;i<q.height/2;i++)
    {
        text = String.fromCharCode(1e2+Math.random()*33);
        x = i*10+10;
        if(rain==true)
            disp=bang;
        else
            disp=text;
        ctx.fillText(disp, x,lengths[i]);
        if(lengths[i] > Math.random()*1e4) {
            lengths[i] = 0;
        } else {
            lengths[i] = lengths[i] + 10;
        }
    }
};

run();
function run()
{
    if(typeof Game_Interval != "undefined")
        clearInterval(Game_Interval);
    Game_Interval = setInterval(draw, 40);
    sp.value = 30;
}
function stop()
{
    clearInterval(Game_Interval);
}

sp.addEventListener('change', function() {
    var speed = sp.value *10;
    clearInterval(Game_Interval);
    Game_Interval = setInterval(draw, 1001-speed);
});

$("button#text").click(function() {
    rain=false;
});
$("button#rain").click(function() {
    rain=true;
});
$("button#pause").click(function(){
stop();
});
$("button#play").click(function(){
run();});
})
