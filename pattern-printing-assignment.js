for(let row=0;row<=3;row++)
{
    let res = ""
    for(let col=0;col<=6;col++)
    {
        
        if(Math.abs(3-col)===row || (3+col)===row)
            res+="* "
        else
            res+= " "
        
    }
    console.log(res)
}
