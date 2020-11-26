package dao;

import java.sql.*;

import data.UserInfoBean;


public class inputDAO {
	
	private static inputDAO dao;
	
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;
		
	// getInstance메소드
	public static inputDAO getInstance() {
		
		if(dao == null) {
			dao = new inputDAO();
		}
		
		return dao;
	}
	
	// setConnection 메소드
	public void setConnection(Connection con) {
		this.con = con;
	}

	public int Join(UserInfoBean uib) {
		String sql = "INSERT INTO USERINFO VALUES(?,?,?,TO_DATE(?,'YYYY-MM-DD'),?,?)";
		int daoResult = 0;
		
		try {
			// sql문 작성
			pstmt = con.prepareStatement(sql);
			
			// ?에 값 입력

			pstmt.setString(1, uib.getUserID());
			pstmt.setString(2, uib.getUserPWD());
			pstmt.setString(3, uib.getUsername());
			pstmt.setString(4, uib.getUserbirth());
			pstmt.setString(5, uib.getUsergender());
			pstmt.setString(6, uib.getUseremail());			
			// db실행 => 결과를 daoResult에 담기
			daoResult = pstmt.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return daoResult;
	}
	public int LogIn(UserInfoBean uib) {
		int result = 0;

		String sql = "{call RSHLOGIN(?,?,?,?,?)}";
		
		try {
			CallableStatement cs = con.prepareCall(sql);
			
			cs.setNString(1, uib.getUserID());
			cs.setNString(2, uib.getUserPWD());
			cs.registerOutParameter(3, Types.NVARCHAR);
			cs.registerOutParameter(4, Types.NVARCHAR);
			cs.registerOutParameter(5, Types.NVARCHAR);


			cs.execute();
			
			
			uib.setUsername(cs.getString(3));
			uib.setUsergender(cs.getString(4));
			uib.setUseremail(cs.getString(5));
			
			result = uib.getUsername()!=null?1:0;
			
		} catch (SQLException e) {

			e.printStackTrace();
		}
		
		return result;
		
	}

}
