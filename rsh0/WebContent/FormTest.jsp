<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%request.setCharacterEncoding("UTF-8"); %>
<%
String sName = request.getParameter("sName");
String sid = request.getParameter("sid");
System.out.print("sName : "+ sName +"\n"+"sid : "+sid);
if(sid.equals("hoonzzang")){sName = "훈짱";}
else{sName = "훈짱아님";}

%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>학생정보 받아오기</h1>
	<h3>이름 : <%=sName%></h3>
	<h3>아이디 : <%=sid%></h3>
</body>
</html>