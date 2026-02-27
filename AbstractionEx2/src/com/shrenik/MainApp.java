package com.shrenik;

abstract class Anant
{
	public abstract void speak();
}

abstract class Yogita
{
	public abstract void walk();
	public void sing()
	{
		System.out.println("Yogita likes to sing");
	}
}

class Puneeth extends Yogita
{
	//Q1. Is speak() method is mandatory or optional to override? //mandatory
	//Q4. How many methods are mandatory to override in Puneeth class? //walk()
}


public class MainApp {
	public static void main(String []args)
	{
		//Q2. can i create object of class "Puneeth"? //yes
		//Q3. can i create object of class "Anant"? //no
	}
}


abstract class Icecream
{
	public abstract void coconut();
	public abstract void butterscotch();
}

abstract class Scoop extends Icecream
{
	public abstract void singleScoop();
	public abstract void doubleScoop();

}

class Polar extends Scoop
{
	//Q1. how many methods mandatory to override in Polar class? //4
}

Scoop s1 = new Polar();
//can s1 object call coconut() function?

Icecream c1 = new Polar();
//can c1 object call coconut() function?












