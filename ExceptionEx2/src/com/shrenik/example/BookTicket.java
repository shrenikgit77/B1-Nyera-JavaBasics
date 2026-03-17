package com.shrenik.example;

import com.shrenik.exception.SeatNotAvailableException;

public class BookTicket {
	public String passengerName;
	public int age;
	
	
	public BookTicket() {}
	
	public BookTicket(String passengerName, int age) {
		super();
		this.passengerName = passengerName;
		this.age = age;
	}

	public void reserveSeat()
	{
		System.out.println(this.passengerName + " selected a seat");
	}
	
	public void confirmBooking(float delay) throws SeatNotAvailableException
	{
		if(delay>1.0)
			throw new SeatNotAvailableException("You missed your seat, we request you to reserve another seat");
		else
			System.out.println("Confirmed!");
	}
}
