/* SignUp a user for banking Application */


class SignUp
{
	public int id=1;
	public String firstName="Smith";
	public String lastName="Devid";
	protected String emailId="smithdevid@gmail.com";
	private String password="secret@1234";
	boolean status=true;
}

class NewUser extends SignUp
{
	public void readEmail()
	{
		System.out.println(emailId);
	}
}

class ClassAndObjectEx5
{
	public static void main(String []args)
	{
		SignUp s1 = new SignUp();

		System.out.println("(public) firstName = " + s1.firstName);
		System.out.println("(default) status = " + s1.status);
		//System.out.println("(private)  = password" + s1.password);
		System.out.println("(protected) emailId = " + s1.emailId);

		NewUser n1 = new NewUser();
		n1.readEmail();


	}
}





/*
				in same package		sub-class (in same package)		outside package 	sub-class(outside package)
	default		yes					yes								no					no
	public		yes					yes								yes					yes
	protected	yes					yes								no					yes
	private		no					no								no					no


*/