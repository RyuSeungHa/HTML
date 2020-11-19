package service;

import java.sql.Connection;

import dao.InputDAO;
import data.SchoolInfoBean;
import db.JdbcUtil;


public class InputService {

	public boolean inputDB(SchoolInfoBean sib) {
		InputDAO dao = InputDAO.getInstance();
		Connection con = JdbcUtil.getConnection();
		dao.setConnection(con);

		boolean svcResult = false;
		SchoolInfoBean result = dao.InputDB(sib);
		if(result.getPriv()!=null) {
			svcResult = true;
		}else {svcResult = false;}
		return svcResult;
	}

}
