package zzz1;

class Worker{
	public void 출근() { }
	public void 작업() { }
	public void 퇴근() { }

}
class 프로그래머 extends Worker{
	public void 출근() {
		System.out.println("자가용으로 출근합니다.");
	}
}



public class Example3 {
	   public static void main(String[] args) {
		Worker ob = new 프로그래머();
		ob.출근();
		ob.퇴근();
	}
}
