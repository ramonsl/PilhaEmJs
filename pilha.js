class myStack {
    constructor(){
        this.pilha = new Array();
        this.topo = -1;
        this.tam=3;
    }
    pushStack(value){
    if(!this.isFull()){
        this.topo++;
        this.pilha[this.topo] = value;
        return true
    }else{
        return false;
    }
    }
    popStack(){
        if(!this.isEmpty()){
            this.topo--;
            return true;
        }else{
            return false;
        } 
    }
    isEmpty(){
        if (this.topo==-1){
            return true;
        }else{
            return false;
        }
    }
    isFull(){
        if (this.topo==this.tam-1){
            return true;
        }else{
            return false;
        }
    }
    peak(){
        console.log(this.pilha[this.topo]);
    }
    lista(){
        for(var i=0;i<=this.topo;i++){
            console.log(this.pilha[i])
        }
    }
    getSize(){
        return this.topo+1;
    }
}


 var pilha= new myStack();
 var menu=" ";
 menu=menu.concat("Digite 1 - para empilhar");
 menu=menu.concat("Digite 2 - para remover");
 menu=menu.concat("Digite 3 - para listar");
 menu=menu.concat("Digite 4 - para peak");
 menu=menu.concat("Digite 5 - ver tamanho");
 menu=menu.concat("Digite 99 - Bye");
 var op=0;

console.log("-------------------");
console.log("-------------------");
console.log("-------------------");
console.log("-------------------");
console.log("-------------------");
console.log("-------------------");
console.log("-------------------");
console.log("-------------------");
console.log("-------------------");
 
do{

 op=parseInt(prompt(menu));

switch(op){
    case 1:{
        value=prompt("Digite valor");
        if(pilha.pushStack(value)){
            console.log("Sucesso ao adcionar "+value);
        }else{
            console.log("Deu treta ao adicionar "+value);
        }
        break;
    }
    case 2:{
        if(pilha.popStack()){
            console.log("Sucesso ao remover");
        }else{
            console.log("Deu Treta");
        }
        break;
    }   
    case 3:{
        console.log("Lista");
        pilha.lista();
        break;
    }
    case 4:{

        pilha.peak();
        break;
    }
    case 5:{
        console.log(pilha.getSize());
        break;
    }
}

}while(op!=99)




 