package com.shrenik;

import java.util.Vector;

public class MainApp {

	public static void main(String[] args) {
		Vector<String> cities = new Vector<String>();
		
		cities.addElement("Hyderabad");
		cities.addElement("Bengaluru");
		cities.addElement("Pune");
		cities.addElement("Delhi");
		cities.addElement("Surat");
		
		System.out.println(cities);
	}

}
