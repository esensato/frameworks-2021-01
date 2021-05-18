<html>
<head>
<title>Calculadora Sem MVC</title>
</head>

<%

	String op = request.getParameter("operacao");
	String n1 = request.getParameter("n1");
	String n2 = request.getParameter("n2");
	
	if (op != null && !op.equals("")) {
		int v1 = Integer.parseInt(n1);
		int v2 = Integer.parseInt(n2);

		int resultado = 0;
		if (op.equals("somar")) {
			resultado = v1 + v2;
		} else if (op.equals("subtrair")) {
			resultado = v1 - v2;
		} else if (op.equals("multiplicar")) {
			resultado = v1 * v2;
		}
%>

Resultado: <%=resultado %>

<% } %>

<body>

	<div style="text-align: center">

		<form action="#">
		
		<input type="text" name="n1" id="n1" />
		<input type="text" name="n2" id="n2" />
		<select name="operacao">
			<option value="somar">Somar</option>
			<option value="subtrair">Subtrair</option>
			<option value="multiplicar">Multiplicar</option>
		</select>
		
		<input type="submit" value=" Calcular " />
		
		</form>


	</div>
	
</body>
</html>