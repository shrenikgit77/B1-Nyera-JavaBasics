use university;

CREATE TABLE Product
(
	id		INT		PRIMARY KEY,
	title		VARCHAR(30)	NOT NULL,
	description	VARCHAR(300)	NULL,
	weight		DECIMAL(10,2)	NOT NULL,
	cost		DECIMAL(10,2)	NOT NULL,
	company		ENUM('A','B','C','D','E')	
);

CREATE TABLE Student
(
		rollno	INT			PRIMARY KEY,
		name	VARCHAR(30) NOT NULL,
		age 	INT			NULL,
		branch	ENUM('SCIENCE','COMMERCE','ARTS','DIPLOMA')
);

ALTER TABLE Student
MODIFY COLUMN age INT NOT NULL;

ALTER TABLE Student
CHANGE COLUMN age age_in_year INT NOT NULL;

#Remove all rows from database table
TRUNCATE Table Course;

#DELETE 
DELETE FROM Course WHERE id=2;

#DROP
DROP Table Course;







