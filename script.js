function display(){
    var a=document.getElementById("input").value
    const str =a.toString();
    const resul=[str[0]];
    for(let x=1;x<str.length;x++)
    {
        if((str[x-1]%2==0)&&(str[x]%2==0))
        {
            resul.push('-',str[x]);
        }
        else{
            resul.push(str[x]);
        }
    }
    
    document.getElementById("result").value=resul.join("");
};