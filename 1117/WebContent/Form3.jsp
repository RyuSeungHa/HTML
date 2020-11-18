<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP1117</title>
</head>
<body>
   <form action="Login1" method="POST">
      <table>
         <caption>Log-in</caption>
         <tr>
            <td>Identity Code :</td>
            <td><input type="text" name="sID"></td>
         </Tr>
         <tr>
            <td>Private Code :</td>
            <td><input type="password" name="sPW"></td>
         </Tr>
      </table>
      <input type="submit" value="제출">
   </form>
</body>
</html>