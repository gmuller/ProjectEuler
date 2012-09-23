import scala.collection.mutable.HashMap

val numberMap = new HashMap[Int, (Int, Int)]

for (i <- 20 to 1 by -1) { 
     var temp = i
     var max = i
     var steps = 0
     val stepMap = new HashMap[Int, (Int, Int)]
     while(temp != 1) {
     	steps += 1
     	if (temp % 2 == 0) { 
     		temp = temp/2 
     	} else { 
     		temp = 3 * temp + 1 
     	}
     	if (temp > max) { 
     		max = temp 
     	}
     	
     	if (numberMap.contains(temp)) { 
     		steps = steps + numberMap(temp)._1
     		if (numberMap(temp)._2 > max) { max = numberMap(temp)._2 }
     		temp = 1
     	}
     }
     numberMap += i -> (steps, max)
}

numberMap.foreach {case (key, value) => 
	println(key + ": " + value._1 + ": " + value._2) }