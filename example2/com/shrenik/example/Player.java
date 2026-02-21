package com.shrenik.example;

public class Player
{
    public int id;
    public String playerName;
    public double runs;

    //1. default constructor
    public Player()
    {
        this.id = 8141;
        this.playerName = "Smith Devid";
        this.runs = 7500;
    }

    //2. parameterized constructor
    public Player(int id, String name,double runs)
    {
        this.id = id;
        this.playerName = name;
        this.runs = runs;
    }

    @Override
    public String toString()
    {
        return this.id + "\t" + this.playerName + "\t" + this.runs;
    } 
}