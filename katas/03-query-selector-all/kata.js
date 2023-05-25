export function kata() {
  const allSections = document.querySelectorAll("section");

  for (let i = 0; i < allSections.length; i++) {
    const h2 = allSections[i].querySelectorAll("h2");

    for (let j = 0; j < h2.length; j++) {
      h2[j].classList.add("title");
    }
  }
}
