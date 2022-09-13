/**
 * setFadeOut - Fades a certain element out
 * @param callback 
 * @param timer 
 * 
 * description: This function fades a certain HTMLElement after
 * a certain time which is specified. When using the function, you
 * should return the ref of the element
 * 
 * Return: void
 */
export function setFadeOut(callback: Function, timer: number): void{
    const ref = callback()
    setTimeout(() => { ref.current.style.display = "none" }, timer)
}
