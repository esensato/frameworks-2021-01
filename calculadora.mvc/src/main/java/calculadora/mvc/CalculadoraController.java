package calculadora.mvc;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CalculadoraController {
 
	@RequestMapping("/resultado")
	public ModelAndView helloWorld(@RequestParam("operacao") String operacao,
			@RequestParam("n1") int n1,
			@RequestParam("n2") int n2) {
		
		// Spring context
		ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("bean.xml");
		Operacao calculo = ctx.getBean(operacao, Operacao.class);
		int resultado = calculo.executar(n1, n2);
		ctx.close();
 
		return new ModelAndView("resultado", "resultado", resultado);
	}
}