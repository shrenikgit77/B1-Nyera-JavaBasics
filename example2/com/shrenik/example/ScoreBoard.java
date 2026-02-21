package com.shrenik.example;

public class ScoreBoard extends Player
{
    public int year;

    public ScoreBoard()
    {
        super(); //parent class default constructor
        this.year = 2026;
    }

    public ScoreBoard(int year)
    {
        this.year = year;
    }

    @Override
    public String toString()
    {
        return super.toString() + "\t" + this.year;
    }
}