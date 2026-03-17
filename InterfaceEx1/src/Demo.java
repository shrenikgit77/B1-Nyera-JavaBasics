


interface A
{
	void define();
}

interface B
{
	void define();
}

public class Demo implements A, B{

	@Override
	public void define() {
		System.out.println("Hello");
	}
}

A a  = new Demo();
a.define();

B b = new Demo();
b.define();
