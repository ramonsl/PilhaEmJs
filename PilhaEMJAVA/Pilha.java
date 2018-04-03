/**
 * Created by ramon on 06/09/16.
 *
 * Crie um programa em JAVA,
 * baseada na struct abaixo,
 * o programa deve  realizar as operações básicas
 * de uma pilha. INIT ,empilhar (push), desempilhar (pop),
 * mostrar o topo(top); pull: altera
 * o elememto posicionado no topo da pilha;
 * verificar se a pilha está vazia (isEmpty);
 * verificar se a pilha está cheia
 * (isFull - implementação sequencial - vetor).
 */
public class Pilha {
    int[] vetor;
    int topo;


    public void init(int t){
        topo=-1;
        vetor = new int[t];
    }


    /* criar o init via construtor;
    public Pilha (int t){
        qtd =t;
        topo=-1;
        vetor = new int[t];
    }
    */
    public boolean isFull(){
        if(this.topo==this.vetor.length){
            return true;
        }else {
            return false;
        }
    }
    public boolean isEmpty(){
        if(topo==-1){
            return true;
        }else{
            return false;
        }
    }

    public boolean push(int a){
        if (isFull()){
            System.out.println("Opa! pilha cheia");
            return false;
        }else {
            this.topo++;
            this.vetor[this.topo] = a;
            System.out.println("Elemento adicionando na pilha");
            return true;
        }
    }

    public boolean pop(){
        if(isEmpty()){
            System.out.println("Pilha vazia");
            return false;
        }else{
            this.topo--;
            System.out.println("Removido com sucesso");
            return true;
        }
    }

    public void top(){
        if(isEmpty()){
            System.out.println("Pilha vazia");

        }else{
            System.out.println(this.vetor[this.topo]);

        }
    }

    public void pull(int a){
        if(isEmpty()){
            System.out.println("Pilha vazia");
        }else{
            this.vetor[this.topo]=a;
            System.out.println("UPDADE com sucesso");
        }
    }

}
