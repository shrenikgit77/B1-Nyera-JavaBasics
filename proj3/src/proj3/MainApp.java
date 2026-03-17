package proj3;

public class MainApp {

	public static void main(String[] args) {
		
		SingleParameterInterface sp = (int number)->{System.out.println("Number is " + number);};
			
		sp.printInteger(100);
		
		TwoParameterInterface tp = (String unm, String pwd) -> {
			System.out.println("Username  : " + unm + " and Password : " + pwd);
		};
		
		tp.printUser("admin", "123456");
		
		CustomObjectInterface ci = (User user) -> {
			System.out.println("User Id : " + user.getUserid());
			System.out.println("First Name : " + user.getFname());
			System.out.println("Last Name :" + user.getLname());
			System.out.println("Age : " + user.getAge());
		};
		
		ci.printUser(new User(103,"Ashish","Kapoor","Male",21));
	}
}
