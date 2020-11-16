package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class stuInfo
 */
@WebServlet({"/stuInfo"})
public class StuInfo extends HttpServlet {
   private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StuInfo() {
        super();
        // TODO Auto-generated constructor stub
    }

   /**
    * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
    */
   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      request.setCharacterEncoding("UTF-8");
      response.setCharacterEncoding("text/html, charset=UTF-8");
      System.out.println("doGet!");
      doProcess(request, response);
      
   }
   
   
   protected void doProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      request.setCharacterEncoding("UTF-8");
      response.setContentType("text/html; charset=UTF-8");
      
      String sName = request.getParameter("sName");
       String sid = request.getParameter("sid");
       System.out.println("sName is "+ sName);
       System.out.println("sid is "+ sid);
       

       PrintWriter out = response.getWriter();
//       html의 body 부분이라고 생각하면 된다.
       
       out.println("<h1>학생정보 받아오기</h1>");
       
       out.println("<h3>이름 :"+ sName+ "</h3>");
       
       out.println("<h1>아이디 :"+ sid +" </h1>");
       
       out.println();
       out.println();
       out.println();
//       <h1>학생정보 받아오기</h1>
//       <h3>이름 : <%= sName %> </h3>       
//       <h1>아이디 :<%= sid %> </h1>
       
   }
   /**
    * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
    */
   protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      request.setCharacterEncoding("UTF-8");
      response.setCharacterEncoding("text/html, charset=UTF-8");
      System.out.println("doPost!");
      doProcess(request, response);
   }

}