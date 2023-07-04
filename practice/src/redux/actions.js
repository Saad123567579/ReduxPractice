

export const INC = "increment";
export const DEC = "decrement";
export const INC10 = "increment10";
export const DEC10 = "decrement10";

export function increment(){
   return ({type:INC})
}
export function decrement(){
    return ({type:DEC})
 }
 export function increment10(){
    return ({type:INC10})
 }
 export function decrement10(){
    return ({type:DEC10})
 }