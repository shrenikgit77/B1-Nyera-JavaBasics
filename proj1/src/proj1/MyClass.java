package proj1;

import java.util.Collections;
import java.util.List;

public class MyClass implements MyInterface{

	@Override
	public int getMinAge(List<Integer> intCollection) {
		return Collections.min(intCollection);
		
	}

}
