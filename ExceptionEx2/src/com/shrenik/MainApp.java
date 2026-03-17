package com.shrenik;

import com.shrenik.example.BookTicket;
import com.shrenik.exception.SeatNotAvailableException;

public class MainApp {

	public static void main(String[] args) {
		
		
		BookTicket b1 = new BookTicket("Smith Devid", 22);
		b1.reserveSeat();
		
		try
		{
			b1.confirmBooking(1.4f);
		}
		catch(SeatNotAvailableException ex)
		{
			System.out.println(ex);
		}

	}
}
