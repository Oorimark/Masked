let flag = true;
export function toggleParameters (params__1: string, params__2: string): string{
   if (flag){
        flag = false
        return (params__1)
   }
   flag = true
   return (params__2)
}