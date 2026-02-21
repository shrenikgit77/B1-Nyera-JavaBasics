/* Inheritance Application */

class Department
{
	private String deptName;

	public Department()
	{
		String deptName="Accounting";
	}

	public Department(String deptName)
	{
		this.deptName = deptName;
	}

	public String getDeptName()
	{
		return this.deptName;
	}
}

class Employee extends Department
{
	protected int id;
	protected String empName;
	protected double salary;
	protected double da, hra, gross;

	public Employee()
	{
		this.id = 9148;
		this.empName="Smith Devid";
		this.salary=60000;
	}

	public Employee(String deptName, int id, String empName, double salary)
	{
		super(deptName); //calling parent class constructor
		this.id=id;
		this.empName=empName;
		this.salary=salary;
	}

	@Override
	public String toString()
	{
		return this.id + "\t" + this.empName + "\t" + this.salary + "\t" + getDeptName();
	}
}

class Allowance extends Employee
{
	private Employee Emp;

	public Allowance()
	{
		this.Emp = null;
		super.da = 7.0;
		super.hra = 11.0;
	}

	public Allowance(Employee emp)
	{
		this();	//call same class default constructor
		this.Emp = emp;
	}

	public void calculateAllowance()
	{
		super.da = Emp.salary*super.da/100;
		super.hra = Emp.salary*super.hra/100;
		super.gross = Emp.salary + super.da + super.hra;

		System.out.println(Emp);
		System.out.println("Dearness Allowance = Rs." + super.da);
		System.out.println("House Rent Allowance = Rs." + super.hra);
		System.out.println("Gross Income = Rs." + super.gross);
	}
}

class InheritanceEx2
{
	public static void main(String []args)
	{
		Employee e1 = new Employee("Development", 8913, "Peter James", 78000);

		Allowance a = new Allowance(e1);

		a.calculateAllowance();
	}
}