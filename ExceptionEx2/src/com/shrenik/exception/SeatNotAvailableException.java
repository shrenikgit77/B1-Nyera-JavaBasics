package com.shrenik.exception;

public class SeatNotAvailableException extends Exception{
	public SeatNotAvailableException() {
		super();
	}
	
	public SeatNotAvailableException(String errorMessage) {
		super(errorMessage);
	}
}
