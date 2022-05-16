/* ---------- START (Header Section JS) ---------- */

// get All MegaMenu in ArrayList
var find_MegaMenu = document.querySelectorAll(".mega-menu");

find_MegaMenu.forEach(ul=>{
    // get How Many tag a child is in MegaMenu Parent
    get_countOfList = ul.querySelectorAll("li > a").length;

    // first tag a innerHtML length of All MegaMenus inseart in maxOfLength
    var maxOfLength = ul.querySelectorAll("li > a")[0].innerHTML.length
    for(var i=1 ; i<get_countOfList ; i++){
        var check_length = ul.querySelectorAll("li > a")[i].innerHTML.length;
        // cheack if others tag a innerHTML are bigger inseart in MaxOfLength
        if(check_length > maxOfLength){
            maxOfLength = check_length;
        }
    }

    if(10<=maxOfLength && maxOfLength<15){
        ul.style.width = "140px"
    }else if(maxOfLength>= 15 && maxOfLength < 20){
        ul.style.width = "180px"
    }else if(maxOfLength >= 20){
        ul.style.width = "240px"
    }else if(maxOfLength >= 30){
        us.style.width = "300px"
    }
    //print maxOfLength of tag a innerHTML in Each MegaMenu
    // console.log(maxOfLength);
})

/* ---------- END (Header Section JS) ---------- */