import { Products } from "./Products.js";
import { arr } from "./utils.js/dl.js";
import { reload } from "./utils.js/reload.js";

const place = document.querySelector(".container");
const bucketCounter = document.querySelector(".bucket");
const showFirstFiveButton = document.querySelector(".only_5");
const showAllButton = document.querySelector(".all");

let bucketCount = 0;
let filteredArr = arr; 


reload(filteredArr, Products, place);


place.onclick  = (e) => {
  if (e.target.classList.contains("into_bucket")) {
    const button = e.target;

    if (button.textContent === "В изобранное") {
        button.textContent = "Добавлено";
        button.style.backgroundColor = "blue";
        bucketCount++; 
      } else {
        button.textContent = "В изобранное";
        button.style.backgroundColor = ""; 
        bucketCount--; 
      }
  
      
      bucketCounter.textContent = bucketCount;
    }
  
};


showFirstFiveButton.onclick = () => {
  filteredArr = arr.slice(0, 5); 
  reload(filteredArr, Products, place);
};


showAllButton.onclick = () => {
  filteredArr = arr; 
  reload(filteredArr, Products, place);
};
