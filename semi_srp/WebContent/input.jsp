<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Semi_Colon_School</title>
</head>
<body>
   <form action="inputServlet" method="POST">
      <table>
         <caption>LOG-IN</caption>
         <tr>
            <td>Teacher Code :</td>
            <td><input type="text" name="ID"></td>
         </Tr>
         <tr>
            <td>Access Code :</td>
            <td><input type="password" name="PWD"></td>
         </Tr>
      </table>
      <input type="submit" value="제출">
   </form>
</body>
</html>