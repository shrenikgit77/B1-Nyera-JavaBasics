package proj1;

import java.util.Collections;
import java.util.List;

public interface MyInterface {
	
	default public List<Student> sortStudents (List<Student> studList)
	{
		Collections.sort(studList);
		return studList;
	}
	
	public static void ShowMessage(String username)
	{
		System.out.println("Hello " + username);
	}
	
	public abstract int getMinAge(List<Integer> intCollection);
}
