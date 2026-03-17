package proj4;

import java.util.ArrayList;
import java.util.List;

public class MainApp {

	public static void main(String[] args) {
		
		List <Student>studRecrods = new ArrayList();	
		
		studRecrods.add(new Student(101,"Smith",90.09f));
		studRecrods.add(new Student(102,"John",89.34f));
		studRecrods.add(new Student(103,"Peter",84.43f));
		
		studRecrods.forEach(s->System.out.println(s));
		
		studRecrods.forEach(System.out::println);

	}
}
