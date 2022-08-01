package com.springbook.biz.user;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;



public class UserServiceClient {
	public static void main(String[] args) {
		//1. Spring �����̳ʸ� ����
		AbstractApplicationContext container = new GenericXmlApplicationContext("applicationContext.xml");
		
		//2. Spring �����̳ʷκ��� UserServiceImpl ��ü�� Lookup
		UserService userService = (UserService) container.getBean("userService");
		
		//3. �α��� ��� test
		
		UserVO vo = new UserVO();
		
		vo.setId("test");
		vo.setPassword("test123");
		
		UserVO user = userService.getUser(vo);
		if(user != null) {
			System.out.println(user.getName() + "�� ȯ���մϴ�.");
		} else {
			System.out.println("�α��� ����");
		}
		
		
		//4. Spring �����̳� ����
		container.close();
	}
}