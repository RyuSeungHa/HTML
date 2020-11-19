<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Semi_Colon_School</title>
</head>
<body>
이름 : <%=request.getAttribute("name") %> / 
담당 과목 : <%=request.getAttribute("sucode") %> / 
권한 : <%=request.getAttribute("priv") %> / 
학년 : <%=request.getAttribute("grade") %>학년 / 
반 : <%=request.getAttribute("class") %>반 / 
학생 수 : <%=request.getAttribute("student") %>명
</body>
</html>