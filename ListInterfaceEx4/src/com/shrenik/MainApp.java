package com.shrenik;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.shrenik.example.Student;

public class MainApp {

	public static void main(String[] args) {
		List <Student> students = new ArrayList<Student>(Arrays.asList(
				new Student(824, "Smith", 90.42f),
				new Student(891, "Peter", 15.90f),
				new Student(894, "James", 81.44f),
				new Student(874, "Harray", 89.52f),
				new Student(982, "John", 71.53f)
				));
		
		Comparator <Student> c = new Comparator<Student>() {
			public int compare(Student s1, Student s2)
			{
				if(s1.marks>s2.marks)
					return +1;
				else if(s1.marks<s2.marks)
					return -1;
				else
					return 0;
			}

		}; 
		
		Collections.sort(students,c);
		
		for(Student item:students)
		{
			System.out.println(item);
		}
		
		Student key = new Student(874, "Harray", 89.52f);
		
		int index = Collections.binarySearch(students, key, c);
		System.out.println("index = " + index);

	}

}
