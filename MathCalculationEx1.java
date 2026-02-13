/* WAP to input any 5 digit integer number. replace its last digit with product of first and last digit */

import java.util.Scanner;

class MathCalculationEx1
{
	public static void main(String []args)
	{
		Scanner scan = new Scanner(System.in);

		int no;
		System.out.print("\n Enter a number = ");
		no = scan.nextInt(); //78479

		//Expected output = 784763

		int fd = no/10000;  //7
		int ld = no%10;		//9
		int ans = (no/10)*100 + (fd*ld);  //784763

		System.out.print("Output = " + ans);

	}
}


/* Q1) WAP to input any 5 digit number from user. replace 3rd digit with its square.
       no = 94818   then output = 946418

   Q2) WAP to input a name of user. validate whether name has special characters or not?
       (any symbol or space is a special character). print "true" if exist. ow print "false"

   Q3) WAP to input three intgers each of exactly two digits from user. and merge them with addition of first and last digit
       to form a new number.
       Enter a = 87
       Enter b = 13
       Enter c = 91

       (15+4+10)
       output = 15410

  Q4) John and his three friends went on trip. for go and fro they travelled 200 Kilometer. a vehicle
      has mielage of 15 kilometer per liters of a fuel. fuel cost per liter RS.90.

      calculate and show how much will be the share amount to be paid.

      input
      ----------------------------
      total distance = 200
      fuel per lit = 90
      mielage = 15

      output
      ---------------------------
      fuel required = ?
      total cost = ?
      per person cost = ?


*/




