package proj4;

public class Student {
	private int rollno;
	private String name;
	private float pert;
	
	public Student() {
		
	}
	
	public Student(int rollno, String name, float pert) {
		super();
		this.rollno = rollno;
		this.name = name;
		this.pert = pert;
	}

	
	
	public int getRollno() {
		return rollno;
	}

	public String getName() {
		return name;
	}

	public float getPert() {
		return pert;
	}

	@Override
	public String toString() {
		return "Student [rollno=" + rollno + ", name=" + name + ", pert=" + pert + "]";
	}
	
	
	
	
}	
