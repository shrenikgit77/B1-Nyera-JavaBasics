
package com.shrenik;

import com.shrenik.example.UserAccount;

class Demo extends UserAccount
{
    public void changeName()
    {
        name="John";
    }
}

class MainApp
{
    public static void main(String []args)
    {
        UserAccount u1 = new UserAccount();   
        
        Demo d1 = new Demo();
        d1.changeName();
        
        System.out.println(d1.name);

        
    }
}
