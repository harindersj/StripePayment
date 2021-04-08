

export const addToCart=(name:string,amount:number)=>{
    console.log(name,amount)
    return {
        type:"addToCart",
        payload:{name:name,amount:amount}
    }
}

export const DeleteFromCart=(name:string,amount:number)=>{
    return {
        type:"DeleteFromCart",
        payload:{name:name,amount:amount}
    }
}

export const totalAmount = (preamount:number)=>{
    return {
         type:"totalamount",
         payload:{amount:preamount}
    }
}
