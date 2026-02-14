/* WAP to print numbers matching the below condition criteria between m and n
   a) number must be divisible by 5 but not by 3
   b) if number begins and ends with same digit then ignore such numbers only if number is 2 more digits		*/

import java.util.Scanner;

class LoopingEx3
{
	public static void main(String []args)
	{
		Scanner scan = new Scanner(System.in);
		int m , n;

		System.out.print("\n Enter value of m = ");
		m = scan.nextInt(); //6

		System.out.print("\n Enter value of n = ");
		n = scan.nextInt();//900

		while(m<=n)
		{
			char d1 = (m+"").charAt(0);

			if(m>9 && m%10!=Integer.parseInt(d1+"") && (m%5==0 && m%3!=0)    )
			{
				System.out.print(m+"\t");
			}

			m++;
		}
	}
}

/* Q1. WAP to input any number and check whether a number is armstrong number or not?
   eg. number=153  then 1*1*1 + 5*5*5 + 3*3*3 is again a same number.

   //first way
   no=153
   while(no>0)  153>0, 15>0, 1>0, 0>0
   {
	   rem=no%10;//1
	   sum=sum+Math.pow(rem,3);  0+27,27+125,152+1

	   no=no/10;
   }

   if(sum==no)
   	//armstrong number

   Q2. WAP to input nth value. print fibonancii series
   eg.  n=100   then output = 0 1 1 2 3 5 8 13 21 34 55 ...   so on.


   Q3. WAP to input any number and print addition of all digits         */












