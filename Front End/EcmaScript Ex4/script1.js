function greet(username)
{
    return `Hello ${username}`;
}

function warn(message)
{
    return `Hey User, ${message}`;
}



            function show(target, param)           
            {
                response = target(param);
                return response; 
            }

            console.log(show(greet, "John"));
            console.log(show(warn, "Stop there!"));