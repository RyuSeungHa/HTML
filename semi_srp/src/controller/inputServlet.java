package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import data.SchoolInfoBean;
import service.InputService;

/**
 * Servlet implementation class inputServlet
 */
@WebServlet("/inputServlet")
public class inputServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public inputServlet() {
        super();
        // TODO Auto-generated constructor stub
    }protected void doProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
    	SchoolInfoBean sib = new SchoolInfoBean();
		sib.setTecode(request.getParameter("ID"));
		sib.setTepwd(request.getParameter("PWD"));
		InputService isv = new InputService();
		boolean inputResult = isv.inputDB(sib);
//		request.setAttribute("name", sib.getTename());
//		request.setAttribute("sucode", sib.getSucode());
//		switch ((String)request.getAttribute("sucode")) {
//		case "K01":
//			request.setAttribute("sucode","국어");
//			break;
//		case "E01":
//			request.setAttribute("sucode","영어");
//			break;
//		case "P01":
//			request.setAttribute("sucode","체육");
//			break;
//		case "S01":
//			request.setAttribute("sucode","사회");
//			break;
//		case "S02":
//			request.setAttribute("sucode","과학");
//			break;
//		case "M01":
//			request.setAttribute("sucode","수학");
//			break;
//
//		default:
//			break;
//		}
//		request.setAttribute("priv", sib.getPriv());
//		switch ((String)request.getAttribute("priv")) {
//		case "M":
//			request.setAttribute("priv","교장선생님");
//			break;
//		case "P":
//			request.setAttribute("priv","교감선생님");
//			break;
//		case "T":
//			request.setAttribute("priv","일반선생님");
//			break;
//
//		default:
//			break;
//		}
//		request.setAttribute("grade", sib.getGrade());
//		request.setAttribute("class", sib.getCl());
//		request.setAttribute("student", sib.getStudents());
//
//		
		if (inputResult) {
			RequestDispatcher dispatcher = request.getRequestDispatcher("inputsuccess.jsp");
			dispatcher.forward(request, response);
		}else {
			RequestDispatcher dispatcher = request.getRequestDispatcher("input.jsp");
			dispatcher.forward(request, response);

		}
	}	

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doProcess(request, response);
	}

}
