package controle.gasto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/controle-gasto")
public class Gasto {
	
	@RequestMapping("/gasto/{username}")
	public ResponseEntity<List<GastoBean>> getGastos(@PathVariable String username) {
		
		GastoBean g1 = new GastoBean();
		g1.setCategoria("Alimentacao");
		g1.setValor(50.0f);
		
		GastoBean g2 = new GastoBean();
		g2.setCategoria("Saude");
		g2.setValor(150.0f);
		
		List<GastoBean> gastos = new ArrayList<GastoBean>();
		gastos.add(g1);
		gastos.add(g2);
		
		return new ResponseEntity<List<GastoBean>>(gastos, HttpStatus.OK);
		
	}

}
