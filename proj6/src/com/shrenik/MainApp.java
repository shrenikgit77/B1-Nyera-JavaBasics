package com.shrenik;

import com.shrenik.example.Message;

public class MainApp {

	public static void main(String[] args) {
		
		Message m = String::new;
		
		char charArray[] = {'s','h','r','e','n','i','k'};
		
		String ans = m.showMessage(charArray);
		System.out.println(ans);
				
			

	}

}
