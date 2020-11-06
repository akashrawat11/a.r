const ele = document.querySelectorAll('.links li a');
for (let i = 0; i < ele.length; i++){
    const string = ele[i].innerText;
    const newstring = string.replace("_","");
    ele[i].addEventListener("mouseover",function(){
        ele[i].innerText = newstring;
    });
    ele[i].addEventListener("mouseout",function(){
        ele[i].innerText = string;
    });
}
