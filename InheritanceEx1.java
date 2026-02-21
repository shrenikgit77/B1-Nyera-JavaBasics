/* Inheritance Demo */

class User
{
	protected String name;
	protected int age;
}

class Student extends User
{
	public String branch;
}

class Teacher extends User
{
	public String role;
}

class InheritanceEx1
{
		public static void main(String []args)
		{
			Student s1 = new Student();
			s1.name="Smith Devid";
			s1.age=27;
			s1.branch="Science";

			System.out.println(s1.name + "\t" + s1.age + "\t" + s1.branch);
		}
}