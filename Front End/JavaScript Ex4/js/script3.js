var numbers = [74,53,64,26,75,34,93,19,44];

for(var item of numbers)
{
    console.log(item);
}

var useraccount = {
    name:"smith devid",
    age:28,
    email:"smith@gmail.com",
    location:"london",
    weight:55.23,
    height:5.2
};

for(var key in useraccount)
{
    console.log(key + " => " + useraccount[key]);
}

for(var [key,value] of Object.entries(useraccount))
{
    console.log(key + " => " + value);
}