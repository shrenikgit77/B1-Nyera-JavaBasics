package com.shrenik;

import com.shrenik.example.Player;
import com.shrenik.example.ScoreBoard;


public class MainApp
{
    public static void main(String []args)
    {
        Player p1 = new Player();
        System.out.println(p1);

        Player p2 = new Player(8471, "Eliz Kang", 8900);
        System.out.println(p2);

        ScoreBoard s1 = new ScoreBoard();
        System.out.println(s1);

        
    }
}