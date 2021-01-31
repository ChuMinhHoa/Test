let n=prompt("nhap n=")
let m=prompt("nhap m=")
let mang=[];
let cap=[];
for (let i = 0; i < n; i++) {
    let pt=Number(prompt("nhap phan tu thu "+(i+1)+"="))
    mang.push(pt)
}   
for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
        if(mang[i]+mang[j]==m){
            let capso={f:mang[i],s:mang[j]};
            cap.push(capso);
        }      
    }
}
if (cap.length!=0) {
    for (let capso of cap) {
        console.log("("+capso.f+","+capso.s+")")
    }
}
else{
    console.log("Khong co cap so nao")
}