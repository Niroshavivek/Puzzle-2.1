$(document).ready(function(){
    $(".class").keyup(function(){
        var a=+ $("#n5").val();
        var b=+ $("#n1").val();
        var c=+ $("#n2").val();
        var d=+ $("#n3").val();
        var e=+ $("#n4").val();
           var z;
           var y;
             var x;
        if(b!=""&&c!=""&&d!=""){
         z=b+c+d;
         y=a-z;
         x=y;
         $("#n4").val(x)
        }
        else if(b!=""&&c!=""&&e!=""){
        z=b+c+e;
         y=a-z;
         x=y;
         $("#n3").val(x)	
        }
        else if(b!=""&&e!=""&&d!=""){
        z=b+e+d;
         y=a-z;
         x=y;
         $("#n2").val(x)	
        }
        else if(e!=""&&c!=""&&d!=""){
        z=e+c+d;
         y=a-z;
         x=y;
         $("#n1").val(x)	
        }
    });
});
        