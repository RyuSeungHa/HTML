<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="C" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>
<body>

	<table border=1px solidblack;>
		<tr>
			<th>작성자</th>
			<th>제목</th>
			<th>내용</th>
			<th>작성 시간</th>
		</tr>
		<C:forEach items="${board}" var="info">
			<tr>
				<td>${info.bWriter}</td>
				<td>${info.bTitle}</td>
				<td>${info.bContent}</td>
				<td>${info.bTime}</td>
			</tr>

		</C:forEach>
	</table>
</body>
</html>