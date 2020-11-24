package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import db.JdbcUtil;
import dto.BoardDTO;



public class BoardDAO {

	private static BoardDAO dao;

	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;


	public static BoardDAO getInstance() {
		if (dao==null) {
			dao= new BoardDAO();
		}

		return dao;
	}
	public void setConnection(Connection con) {


		this.con = con;
	}
	public boolean InputDB(BoardDTO dto) {
		// TODO Auto-generated method stub
		   boolean result = false;
		      String sql = "INSERT INTO BOARDT(BWRITER, BPASSWORD,BTITLE,BCONTENT) VALUES(?,?,?,?)";

		      try {
		         pstmt = con.prepareStatement(sql);
		         pstmt.setNString(1, dto.getbWriter());
		         pstmt.setNString(2, dto.getbPassword());
		         pstmt.setNString(3, dto.getbTitle());
		         pstmt.setNString(4, dto.getbContent());
		         
		         
		         result = pstmt.executeUpdate()==1?true:false;
		         System.out.println(result);
		         JdbcUtil.close(pstmt);
		         
		      } catch (SQLException e) {
		         e.printStackTrace();
		      }
		      
		      return result;

		   }
	public ArrayList<BoardDTO> BoardList() {
		String sql = "SELECT*FROM BOARDT";
		ArrayList<BoardDTO> boardlist = new ArrayList<BoardDTO>();
		BoardDTO board = null;
		try {
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while (rs.next()) {
				board = new BoardDTO();
				board.setbWriter(rs.getString(1));
				board.setbPassword(rs.getString(2));
				board.setbTitle(rs.getString(3));
				board.setbContent(rs.getString(4));
				board.setbTime(rs.getString(5));
				
				boardlist.add(board);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
		return boardlist;
	}
}