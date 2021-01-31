class cuu{
    name;
    kl;
    constructor(name,kl){
        this.name=name;
        if(kl!=0)this.kl=kl;
        else this.kl=1;
    }
}



let n=prompt("nhap so luong cuu n=")
let list_cuu=[];
for (let i = 0; i < n; i++) {
    let name=prompt("nhap ten cuu thu "+(i+1)+"=")
    let kl=Number(prompt("nhap khoi luong long cua con cuu thu "+(i+1)+"="))
    let con_cuu=new cuu(name,kl)
    list_cuu.push(con_cuu)
}

console.log(list_cuu)

function tang_kl_cuu() {
    for (let cuu of list_cuu) {
        cuu.kl+=2;
    }
}

let m=prompt("nhap so thang m=");
let kltong=0;
for (let i = 0; i < m; i++) {
    let cothecat=list_cuu[0];
    for (let cuu of list_cuu) {
        if (cuu.kl>3 && cuu.kl>cothecat.kl) cothecat=cuu; 
    }
    if (cothecat.kl>3) {
        kltong+=cothecat.kl;
        cothecat.kl=1;    
    }
    
    if(i!=m-1) tang_kl_cuu();
}
console.log("so luong long da tia la:"+kltong)

function binary_search(A, n, T) {
    let L= 0
    let R= n-1;
    while (L <= R){
        let m= Math.floor((L + R) / 2)
        if (A[m].kl < T) L= m + 1
        else if (A[m].kl > T) R= m - 1
        else return m
    }
    return -1
}

list_cuu.sort((a, b) => (a.kl > b.kl) ? 1 : -1)
let d=prompt("nhap khoi luong:")
if(binary_search(list_cuu,list_cuu.length,d)!=-1)
console.log(list_cuu[binary_search(list_cuu,list_cuu.length,d)].name)
else console.log("chang co con cuu nao")