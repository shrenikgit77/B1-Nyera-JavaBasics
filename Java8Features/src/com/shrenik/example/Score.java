package com.shrenik.example;

public interface Score<T> {
	public T getScore(T obj)throws NullObjectException;
}
