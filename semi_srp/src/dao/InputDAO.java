package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import data.SchoolInfoBean;



public class InputDAO {

	private static InputDAO dao;

	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;


	public static InputDAO getInstance() {
		if (dao==null) {
			dao= new InputDAO();
		}

		return dao;
	}
	public void setConnection(Connection con) {


		this.con = con;
	}
	public SchoolInfoBean InputDB(SchoolInfoBean sib) {
		// TODO Auto-generated method stub
		String sql = "select te_name AS name, te_sucode AS sucode, te_level AS priv, te_grcode AS grade, te_clcode AS class, count(st_code) AS students from te inner join st on st.st_grcode = te.te_grcode where te_code = ? and te_pwd = ? group by te_name, te_sucode, te_level, te_grcode, te_clcode";

		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setNString(1, sib.getTecode());
			pstmt.setNString(2, sib.getTepwd());

			rs = pstmt.executeQuery();
			while(rs.next()) {
				sib.setTename(rs.getNString(1));
				sib.setSucode(rs.getNString(2));
				sib.setPriv(rs.getNString(3));
				sib.setGrade(rs.getInt(4));
				sib.setCl(rs.getInt(5));
				sib.setStudents(rs.getInt(6));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return sib;
	}
}