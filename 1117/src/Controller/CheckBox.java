package Controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CheckBox
 */
@WebServlet("/checkServlet")
public class CheckBox extends HttpServlet {
   private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckBox() {
        super();
        // TODO Auto-generated constructor stub
    }
    protected void doProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      // TODO Auto-generated method stub
      String [] skins = request.getParameterValues("pick");
      PrintWriter out = response.getWriter();
      System.out.println(skins[0]);
      out.println("<html>");
         out.println("<head>");
         out.println("<title>이미지선택 page</title>");
         out.println("<style>");
         out.println("body{background-color : orange;}");
         out.println("table{background-color : yellow;}");
         out.println("</style>");
         out.println("</head>");
         out.println("<body>");
         out.println("<table>");
         out.println("<tr>");
         for (int i = 0; i < skins.length; i++) {
            out.println("<td>");
            out.print("<img src = "+skins[i]+"  width='200px' height='230px'>");
            out.println("</td>");
         }
         out.println("</tr>");
         out.println("</table>");
         out.println("</body>");
         out.println("</html>");
   }

   /**
    * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
    */
   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      // TODO Auto-generated method stub
      doProcess(request, response);
   }

   /**
    * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
    */
   protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      // TODO Auto-generated method stub
      doProcess(request, response);
   }

}