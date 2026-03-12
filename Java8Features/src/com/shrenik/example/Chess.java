package com.shrenik.example;

public class Chess implements Game, Score<Chess>{

	@Override
	public Chess getScore(Chess obj) {
		if(obj==null)
			throw new NullObjectException("Score Object must be initialized");
		
		return obj;
	}

	@Override
	public void start() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void exit() {
		// TODO Auto-generated method stub
		
	}

}
