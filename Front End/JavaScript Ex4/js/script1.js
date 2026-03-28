

function printNumbers()
{
    no=1;
    while(no<=1000)
    {
        console.log(no);

        no++;
    }
}


function printNumbersOnWebPage()
{

    var container = document.getElementById("container");

    no=1;
    while(no<=1000)
    {
        var p = document.createElement("p");
        p.innerHTML = no;
        p.style = "border:1px solid black;padding:8px;margin:10px;width:50px;text-align:center";

        container.append(p);

        no++;
    }
}