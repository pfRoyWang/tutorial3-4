var bgtext =document.getElementById("bgtext");
var prevDiv =document.getElementById("preview");
var c1 =document.getElementById("choice1");
var c2 =document.getElementById("choice2");
var c3 =document.getElementById("choice3");
var picChooser = document.getElementById("picChooser");
var numUse =0;

bgtext.addEventListener("keyup", function(ev){
    //console.log(ev.keyCode);
    console.log(c1.checked, c2.checked, c3.checked);
    if (ev.keyCode == 13){        
        if(c1.checked){
            //document.body.style.backgroundColor =bgtext.value;
            if(bgtext.value=="img1"){
                document.body.style.backgroundImage="url(img/img1.jpg)";
            } else if(bgtext.value=="img2"){
                document.body.style.backgroundImage="url(img/img2.jpg)";
            } else if(bgtext.value=="img3"){
                document.body.style.backgroundImage="url(img/img3.jpg)";
            } else{
                document.body.style.backgroundColor = bgtext.value;
            }
            
        } else if(c2.checked){
            //prevDiv.style.backgroundColor = bgtext.value;
            if(bgtext.value=="img1"){
                prevDiv.style.backgroundImage="url(img/img1.jpg)";
            } else if(bgtext.value=="img2"){
                prevDiv.style.backgroundImage="url(img/img2.jpg)";
            } else if(bgtext.value=="img3"){
                prevDiv.style.backgroundImage="url(img/img3.jpg)";
            } else{
                prevDiv.style.backgroundColor = bgtext.value;
            }
        } else if (c3.checked){
            //menu.style.backgroundColor=bgtext.value;
            if(bgtext.value=="img1"){
                menu.style.backgroundImage="url(img/img1.jpg)";
            } else if(bgtext.value=="img2"){
                menu.style.backgroundImage="url(img/img2.jpg)";
            } else if(bgtext.value=="img3"){
                menu.style.backgroundImage="url(img/img3.jpg)";
            } else{
                menu.style.backgroundColor = bgtext.value;
            }
        } else{
            alert("Choose a option")
        }
        bgtext.value ="";
        numUse ++;
        console.log(numUse);
        if(numUse >5){
            alert("You've reached the limit.Please pay to use more!");
            document.getElementById("display").innerHTML ="You've reached the limit.Please pay to use more!";
        }

    }
    
});

picChooser.addEventListener("change",function(){
    var picNum = parseInt(picChooser.value);
    if(picNum>3){
        picChooser.value = 1;
    }
    if(picNum<1){
        picChooser.value =3;
    }
    prevDiv.style.backgroundImage ="url(img/img"+picChooser.value+".jpg)";
});