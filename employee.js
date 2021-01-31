class employee{
    name;
    tasklist=[];
    des=[];
    constructor(name, tasklist,des){
        this.name=name;
        this.tasklist=tasklist
        this.des=des;
    }
    displayInfo(){
        console.log(this.name)
        if (this.des.length!=0){
            for (let de of this.des){ 
                console.log(de)           
            }
        }
        console.log(this.tasklist)
    }
}