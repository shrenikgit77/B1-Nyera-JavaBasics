package com.shrenik;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import com.shrenik.example.Product;

public class MainApp {

	public static void main(String[] args) {
		Map<String, Set<Product>> stock = new LinkedHashMap();
		
		Set<Product> electronics = new LinkedHashSet(Arrays.asList(
				new Product(9841, "Mouse", 899.00),
				new Product(8941, "Keyboard", 1400.00),
				new Product(5198, "Speaker", 8000.00)
				));
		
		stock.put("electronics", electronics);
		
		Set<Product> grossaries = new LinkedHashSet();
		
		grossaries.add(new Product(984, "Rice", 700.00));
		grossaries.add(new Product(418, "Oil", 1400.00));
		grossaries.add(new Product(413, "Wheate", 1300.00));
		grossaries.add(new Product(411, "Rice", 600.00));
		
		stock.put("grossaries", grossaries);
		
		for(Map.Entry<String, Set<Product>> item: stock.entrySet())
		{
			System.out.println(item.getKey());
			System.out.println(item.getValue());
		}

	}

}
