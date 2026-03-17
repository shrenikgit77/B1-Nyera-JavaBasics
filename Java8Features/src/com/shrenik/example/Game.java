package com.shrenik.example;

public interface Game {
	public void start();
	public default void exit() {
		System.out.println("Game closed");
	}
}
