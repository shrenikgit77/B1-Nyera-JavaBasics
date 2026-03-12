package com.shrenik;

import com.shrenik.example.Chess;
import com.shrenik.example.Player;



public class MainApp {

	public static void main(String[] args) {
		Chess chess = new Chess();
		chess.start();
		chess.exit();
		
		chess.getScore(null);
		Player.create();

		
		
	}
}
