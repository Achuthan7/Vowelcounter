function checker(ch)
{
    var vowels=["a","e","i","o","u"];
    return vowels.includes(ch);
}
function vow()
{
    var txt=document.getElementById("intext").value;
    let count=0;
    txt=txt.toLowerCase();
    for(var i=0;i< txt.length; i++)
    {
        var ch=txt.charAt(i);
        if(checker(ch))
            count++

    }
    var reslult = document.getElementById("res");
    reslult.textContent="Total Vowels: "+ count;
}