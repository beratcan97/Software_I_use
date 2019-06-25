# JAVA

## Commands

### Main methods
> public: So that JVM can execute the method from anywhere.

> static: Main method is to be called without object. 
The modifiers public and static can be written in either order.

> void: The main method doesn't return anything.

> main(): Name configured in the JVM.

> String[]: The main method accepts a single argument: 
          an array of elements of type String.

### Console log
> System.out.println("Hello, World");

### Compile
> javac exampleClass.java

### Data types
> boolean
> byte
> example value: -128 to 127
> char
> short
> int
> example -2,-1,0,1,2
> long
> example -2L,-1L,0L,1L,2L
> float
> double

### example
> public class hello {
>	public static void main(String[] args) {
>		// TODO Auto-generated method stub
>		int firstNumber = 0;		
>		while (firstNumber < 100) {
>			System.out.println(firstNumber);
>			firstNumber++;
>		}		
>   }
>}
