const calculatefibonaci(n,a,b)=>{
    if (n<=0) return a;
    return calculatefibonaci(n-1,b,a+b);
}