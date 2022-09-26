export function ClipBoard(src: any){
    // src.select()
    // src.setSelectionRange(0, 99999); // For mobile devices
   // Copy the text inside the text field
  if(src.value){
      navigator.clipboard.writeText(src.value);
  }
  else{
      navigator.clipboard.writeText(src.innerHTML);
  }
}