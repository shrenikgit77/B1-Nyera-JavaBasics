package com.shrenik.example;

public class Student {
	public int id;
	public String name;
	public float marks;
	
	public Student() {}
	
	public Student(int id, String name, float marks) {
		super();
		this.id = id;
		this.name = name;
		this.marks = marks;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", marks=" + marks + "]";
	}
	
	
}
