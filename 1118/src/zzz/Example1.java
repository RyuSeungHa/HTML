package zzz;

class Parent {
	int a = 1000;
}
class Child extends Parent{
	int b = 2000;
}
public class Example1{
	public static void main(String[] args) {
		Child ob = new Child();
		System.out.println(ob.a);
		System.out.println(ob.b);
	}
}