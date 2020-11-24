package service;

import java.sql.Connection;
import java.util.ArrayList;

import dao.BoardDAO;
import db.JdbcUtil;
import dto.BoardDTO;

public class ListService {

	public ArrayList<BoardDTO> BoardList() {
		BoardDAO dao = BoardDAO.getInstance();
		Connection con = JdbcUtil.getConnection();
		dao.setConnection(con);
		
		ArrayList<BoardDTO> boardlist = dao.BoardList();
		return boardlist;
	}

}
