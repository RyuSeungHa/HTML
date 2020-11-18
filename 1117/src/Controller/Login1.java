package Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Login1")
public class Login1 extends HttpServlet {
   private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login1() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       request.setCharacterEncoding("UTF-8");
       response.setContentType("text/html; charset=UTF-8");
       
       //(1) 이동할 JSP를 설정해주는 dispatcher 방식
       RequestDispatcher dispatcher = request.getRequestDispatcher("FormResult.jsp");
       
       String ID=request.getParameter("sID");
       String PW=request.getParameter("sPW");
       
       System.out.println("ID : " + ID);
       System.out.println("PW : " + PW);
       
       //(2)정보를 저장
       request.setAttribute("sID", ID); //Attribute : String 외에 Object, Array 등 다양한 데이터 타입 입력 가능
       request.setAttribute("sPW", PW);
       request.setAttribute("sName", "류승하");
       
       //(3)실제로 정보를 담아서 jsp파일로 이동하는 구간
       dispatcher.forward(request, response);
       
//       PrintWriter out = response.getWriter();   //html의 바디 부분이라고 생각하면 된다.
    //
//       out.println("<h1>학생 정보 받아오기</h1>");
//       out.println("<h3>이름 : " + Name + "</h3>");
//       out.println("<h3>아이디 : " + ID +"</h3>");

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//       response.getWriter().append("Served at: ").append(request.getContextPath());
       System.out.println("doGet");
       doProcess(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       // TODO Auto-generated method stub
       System.out.println("doPost");
       doProcess(request, response);

    }
}





