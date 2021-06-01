package controle.gasto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/controle-gasto")
@CrossOrigin(originPatterns = "*")
public class Usuario {
	
	@Value("${login.ok}")
	String loginOK;
	
	@Value("${login.erro}")
	String loginErro;
	
	@Autowired
	private UsuarioRepository usuarioRepo = null;
	
	private static final Logger logger = LoggerFactory.getLogger(Usuario.class);
	
	@RequestMapping(path = "/usuario", method = RequestMethod.POST)
	public String criarUsuario(@RequestBody UsuarioBean novoUsuario) {
				
		logger.debug(novoUsuario.getUsername());
		logger.debug(novoUsuario.getSenha());
		logger.debug("Meta = " + novoUsuario.getMeta());
		
		usuarioRepo.save(novoUsuario);
		
		return "Usuario criado!";
		
	}
	
	// POST /login – efetua o login com o JSON: {"username": "jsilva", "senha": "123"}. O retorno será {"valido": true OU false}
	
	@RequestMapping("/login/{username}/{senha}")
	public ResponseEntity<String> login(@PathVariable("username") String username,
										@PathVariable("senha") String senha) {
		
		logger.debug("username = " + username);
		
		if (username.equals("teste") && senha.equals("123"))
			return new ResponseEntity<String>(loginOK, HttpStatus.OK);
		else
			return new ResponseEntity<String>(loginErro, HttpStatus.UNAUTHORIZED);
	}
		
		
}
