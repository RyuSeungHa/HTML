<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <% int num = 0; %>
    <%@page import="java.util.Date" %>
    
    <%
    //자바코드 작성
    //hour, nin, sec
    
    //1번 방법
    Date now = new Date();
    
    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
    String aaa;
    String aaaa = sdf.format(now);
	String a = aaaa.substring(8,10);
	int time = Integer.parseInt(a);
	if(time>12) {
		time = time-12;
		aaa = "오후";}
	else {aaa="오전";}
	String b = aaaa.substring(10,12);
	String c = aaaa.substring(12);
	
    //2번 방법

	String state;
    int hour = now.getHours();
    int min = now.getMinutes();
    int sec = now.getSeconds();
    if(hour>12){
    	state = "오후";
    }
    else{state = "오전";}
    if(hour>12){
    	hour = hour-12;
    }
    
    String aa = hour + "";
    String bb = min + "";
    String cc = sec + "";
    if(aa.length()<2){
    	aa="0"+aa;
    }
    if(bb.length()<2){
    	bb="0"+bb;
    }
    if(cc.length()<2){
    	cc="0"+cc;
    }
    

    
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>test</title>
</head>
<body>
	현재시간 : <%=aaa %> <%= a %>시 <%=b %>분 <%=c %>초<br/>
	현재시간 : <%=state %> <%= aa %>시 <%=bb %>분 <%=cc %>초<br/>
	
	JSP/Servlet<br/>
	num : <%= num %><br/><br/>
	
</body>
</html>