function fiboseries(n:number):void
{
    let a:number=0;
    let b:number=1;
    let c:number;
    console.log(a);
    console.log(b);
    for(let i=3;i<=n;i++)
    {
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
console.log(fiboseries(5))