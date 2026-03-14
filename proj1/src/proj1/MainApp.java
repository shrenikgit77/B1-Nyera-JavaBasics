package proj1;

import java.util.LinkedList;
import java.util.List;


public class MainApp {

	public static void main(String[] args) {
		
		List <Student>studlist = new LinkedList();
		
		studlist.add(new Student("Smith",23));
		studlist.add(new Student("John",24));
		studlist.add(new Student("Yash",34));
		studlist.add(new Student("Nitin",41));
		studlist.add(new Student("Peter",19));
		
		MyInterface test = new MyClass();
		
		List<Student> sortedStudents = test.sortStudents(studlist);
		
		System.out.println(sortedStudents);
		MyInterface.ShowMessage("Shrenik");
		
		
		

	}

}
