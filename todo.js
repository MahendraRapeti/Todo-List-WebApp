
var btn=document.getElementById("btn");
var list=document.getElementById("list");

var value="";
var x=0;
var input=document.getElementById("input");
input.addEventListener('input',function(e){
    
    value=e.target.value;
});
function createimage()
{
    var image=document.createElement("img");
    image.src="data:image/png;base64,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";
   image.width=30;
   image.height=30;
    return image;
}


function createbtn()
{
    var btn=document.createElement("button");
    btn.width=50;
    btn.height=50;
   
    x=x+1;
   btn.className="btn1";
   
   
  
    return btn;
}

function createicon()
{
    var icon=document.createElement("i");
    icon.className="fas fa-trash";
 
    console.log(icon);
    return icon;
}

function create()
{
    var newlist=document.createElement('li');
    newlist.id="item";
    return newlist;
    
    
}

btn.addEventListener('click',function(){
    if(value!="")
    {
        var newnode=create();
       
        newnode.innerHTML=value;
      
        list.appendChild(newnode);
        var newbtn=createbtn();
       
       
      //  var newimg=createimage();
        var newicon=createicon();
        newbtn.appendChild(newicon);
        console.log(newbtn);
        newnode.appendChild(newbtn);
        input.value="";
        value="";
        var del=newbtn;
        del.addEventListener('click',function(){
            console.log(newnode);
           list.removeChild(newnode);
        });
       
        
    }
    else
    {
        alert("please enetr valid todo");
    }
});






