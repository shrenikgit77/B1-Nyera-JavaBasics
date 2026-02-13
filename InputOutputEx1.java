
class InputOutputEx1
{
	public static void main(String []args)
	{
		System.out.println("byte = " + Byte.SIZE);
		System.out.println("short = " + Short.SIZE);
		System.out.println("int = " + Integer.SIZE);
		System.out.println("long = " + Long.SIZE);

		System.out.println("float = " + Float.SIZE);
		System.out.println("double = " + Double.SIZE);


		System.out.println("short = " + Short.MIN_VALUE + " to " + Short.MIN_VALUE);
		System.out.println("int = " + Integer.MIN_VALUE + " to " + Integer.MIN_VALUE);
	}
}


/*
	byte		-128 to +127						1 byte
	short		-32768 to +32767					2 byte		Short
	int			10 digit number (neg to pos)		4 byte
	long		19 digit number 					8 byte

	float		-3.4*e^38 to +3.4*3^38 				4 byte
				[7.6]
	double		[15.19]								8 byte

	char		-128 to +127						1 byte
	String		null								1 byte

	boolean		true/false							1 byte
*/