package com.shrenik;

import java.util.Stack;

public class MainApp {

	public static void main(String[] args) {
		Stack<String> students = new Stack<String>();
		
		students.push("smith");
		students.push("james");
		students.push("harray");
		students.push("john");
		students.push("peter");
		
		students.pop();
		students.pop();
		
		System.out.println(students);
		System.out.println(students.size());
		System.out.println(students.peek());

	}

}
