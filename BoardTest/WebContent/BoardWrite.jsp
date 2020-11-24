<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
   input{
   width:97.5%;
   }
</style>

</head>
<body>
	<form action="boardWrite" name="boardWriteForm" method="get">
		<table border="1px solid black">
			<h1>게시글 작성</h1>
			<tr >
				<td>제목 :</td>
				<td><input type="text" name="bTitle"></td>
			</tr>
			<tr>
				<td>이름 :</td>
				<td><input type="text" name="bWriter"></td>
			</tr>
			<tr>
				<td>비번 :</td>
				<td><input type="password" name="bPassword"></td>
			</tr>
			<tr>
				<td>내용 :</td>
				<td><textarea rows="20" cols="40" name="bContent"></textarea></td>
			</tr>
			<tr>
		</table>
	</form>
	<button onclick="boardWrite()">글 작성</button>
	<button onclick="boardList()">목록보기</button>
</body>
<script>
	function boardWrite() {
		location.href = "boardWrite"
	}
	function boardList() {
		location.href = "bList"
	}
</script>
</html>