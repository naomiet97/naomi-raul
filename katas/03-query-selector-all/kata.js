export function kata() {
  const allTitles = document.querySelectorAll("section h2");

  // for (let i = 0; i < allTitles.length; i++) {
  //   allTitles[i].classList.add("title");
  // }
  
  for (const title of allTitles) {
    title.classList.add("title");
    
  }
}
