<%@page import="com.springbook.biz.board.impl.BoardDAO"%>
<%@page import="com.springbook.biz.board.BoardVO"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
						"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html"; chartset="EUC-KR">
<title>새글 등록</title>
</head>
<body>
<center>
<h1>새글 등록</h1>
<a href="logout_proc.jsp">Log-out</a></h3>
<hr>
<form action="insertBoard_proc.jsp" method="post">
	<table border="1" cellpadding="0" cellspacing="0">
		<tr>
			<td bgcolor="orange" width="70">제목</td>
			<td align="left"><input name="title" type="text" /></td>
		</tr>
		<tr>
			<td bgcolor="orange">작성자</td>
			<td align="left"><input name="writer" type="text" size="10"/></td>
		</tr>
		<tr>
			<td bgcolor="orange">내용</td>
			<td align="left"><textarea rows="10" cols="40" name="content"></textarea></td>
		</tr>
		<tr>
			<td colspan="1" align="center"><input type="submit" value="새글 등록" /></td>
		</tr>
	</table>
</form>
<hr>
<a href="getBoardList.jsp">글 목록 가기</a>
</center>
</body>
</html>