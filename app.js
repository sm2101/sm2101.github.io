$(document).ready(function(){
    var q = Math.floor(Math.random() * 3); 
    var s = ["images/fsociety.png","images/geass.png","images/aw-1.png","images/westworld.png","images/L-1.png","images/light.png"]
    $("#imgdis").attr("src",s[q]);
    $("#next").click(function(){
        if(q == s.length-1){
            q = -1
        }
        q++;
        $("#imgdis").attr("src",s[q]);
    })
    $("#prev").click(function(){
        if(q == 0){
            q = s.length
        }
        q--;
        $("#imgdis").attr("src",s[q]);
    })
})
