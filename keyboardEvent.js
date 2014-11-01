document.onkeydown = function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode == 27){ // Esc 
        document.write("Esc");
    }
    else if(e && e.keyCode == 113){ // F2 
        document.write("F2");
    }            
    else if(e && e.keyCode == 13){ // 键
        document.write("Enter");
    }
    else{

    }
}; 