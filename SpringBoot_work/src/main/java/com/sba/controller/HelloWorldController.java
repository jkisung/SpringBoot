package com.sba.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class HelloWorldController {
	
//	@RequestMapping("/hello")
//	@ResponseBody
//	public String pritHelloWorld() {
//		return "<h1>Hello world for Spring Boot</h1>";
//	}	
	@RequestMapping("/hello")      //REST API로 구현됨 => 데이터를 리턴할 경우
	public String pritHelloWorld() {
		return "<h1>Hello world for Spring Boot</h1>";
	}	
	
	@RequestMapping("/hello2")
	public String callHelloWorldView() {
		return "helloworld";
	}
	
}

