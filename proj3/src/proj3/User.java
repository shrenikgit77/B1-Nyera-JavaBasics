package proj3;

public class User {
	private int userid;
	private String fname;
	private String lname;
	private String gender;
	private int age;
	
	public User() {}
	
	public User(int userid, String fname, String lname, String gender, int age) {
		super();
		this.userid = userid;
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.age = age;
	}
	
	

	public int getUserid() {
		return userid;
	}

	public String getFname() {
		return fname;
	}

	public String getLname() {
		return lname;
	}

	public String getGender() {
		return gender;
	}

	public int getAge() {
		return age;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", fname=" + fname + ", lname=" + lname + ", gender=" + gender + ", age="
				+ age + "]";
	}	
}
