class MyStack {
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
          
            var x= this.pilha[this.topo];
            this.topo--;
            return x;
          
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
            var b = this.pilha[i];
        //    var c = new Box(this.pilha[i].getId(),this.pilha[i].getPeso());
            //console.log("achei:"+b);
            b.mostra();
        }
    }
    getSize(){
        return this.topo+1;
    }
}

class Box{
    constructor(id,p){
        this.id=id;
        this.peso=p;
    }
    mostra(){
        console.log("Caixa:"+ this.id+ " Peso:"+this.peso);
        
    }
    getId(){
        return this.id;
    }

    getPeso(){
        return this.peso;
    }
}


 var pilha= new MyStack();
 var caixa= new Box(1,3);
 pilha.pushStack(caixa);
 var caixa= new Box(3,100);
 pilha.pushStack(caixa);
 console.log(pilha.getSize());
 //pilha.mostra();
pilha.lista();
console.log(pilha);

 


 