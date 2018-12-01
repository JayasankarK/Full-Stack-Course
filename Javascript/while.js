
function Reverse(num)
{
    var rev =0;
    while(num>0)
    {
        
        rem=num%10;
        num=parseInt(num/10);
        rev=rev*10+rem;

    }
    return rev;
}
console.log(Reverse(2001));