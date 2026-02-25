/* Enhanced For Loop Demo */

class Book
{
	public int id;
	public String bookName;

	public Book(){}

	public Book(int id, String bookName)
	{
		this.id = id;
		this.bookName = bookName;
	}

	@Override
	public String toString()
	{
		return this.id + "\t" + this.bookName;
	}
}

class EnhancedForLoopEx1
{
	public static void main(String []args)
	{
			Book books[] = {
					new Book(9104, "HTML"),
					new Book(1481, "SQL"),
					new Book(1451, "Swift UI"),
					new Book(9114, "Kotlin"),
					new Book(8135, "Flutter")
			};

			/* For loop : you have full control over where to start and end */
			for(int i=0;i<books.length;i++)
			{
				System.out.println(books[i]);
			}

			/* Enhanced For Loop : Always starts at first item and ends only at the end of collection */
			for(Book item:books)
			{
				System.out.println(item);
			}








	}
}