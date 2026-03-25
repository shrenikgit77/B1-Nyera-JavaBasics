
function purchaseProduct()
{
    var amount = Number(document.getElementById("cost").value);
    var q = Number(document.getElementById("quantity").value);

    var total = amount*q;
    console.log("Total Cost = " + total);
}