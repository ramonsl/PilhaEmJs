import java.util.Scanner;

/**
 * Created by ramon on 06/09/16.
 */
public class TestaPilha {
    public static void main(String[] args) {

        Scanner tc= new Scanner(System.in);
        Pilha p = new Pilha();
        p.init(10);
        int op=99;

        do{
            System.out.println("Digite 1 pra add");
            System.out.println("Digite 2 pra remover");
            System.out.println("digite 3 pra mostrar o topo");
            op= tc.nextInt();
            switch (op){
                case 1:{
                    System.out.println("Qual o valor");
                    int valor= tc.nextInt();
                    p.push(valor);
                    break;
                }
                case 2:{
                    p.pop();
                    break;
                }
                case 3:{
                    p.top();
                    break;
                }

            }

        }while (op!=10);
    }
}