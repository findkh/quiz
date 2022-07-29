package polymorphism;

//@Component("apple")
public class AppleSpeaker implements Speaker {
	
	public AppleSpeaker() {
		System.out.println("=== AppleSpeaker 객체 생성");
	}

	@Override
	public void volumnUp() {
		System.out.println("AppleSpeaker --- 소리를 올린다.");
	}

	@Override
	public void volumeDown() {
		System.out.println("AppleSpeaker --- 소리를 내린다.");
	}
	
}
