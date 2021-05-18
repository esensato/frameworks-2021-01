package calculadora.mvc;

public class Subtrair implements Operacao{

	@Override
	public int executar(int n1, int n2) {
		return n1 - n2;
	}

}
