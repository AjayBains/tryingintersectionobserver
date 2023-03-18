const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
console.log("hidden el", hiddenElements);
hiddenElements.forEach((el) => {
  console.log("elobserved", el);
  return observer.observe(el);
});
