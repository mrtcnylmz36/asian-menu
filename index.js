import data from "./data.js";

// val
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = data.map((items) => {
  return items.category;
});
let reduceBtn = categories.reduce(
  (acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  },
  ["All"]
);

//console.log(reduceBtn);


function categoryList () {
  const categoryBtns = reduceBtn.map((category) => {
    return `<button type="button" class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
  }).join("");   // array to string
  
  //console.log(categoryBtns);
  btnContainer.innerHTML = categoryBtns;

  // filter menu
  const filerBtns = document.querySelectorAll(".btn-item");
  filerBtns.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
      const category = e.target.dataset.id;
      console.log(category)
      const menuCategory = data.filter((menuItem) => {
        if(menuItem.category === category) {
          return menuItem
        }
      });
      if(category === "All") {
        menuList(data);
      }else {
        menuList(menuCategory);
      }
    })
  })
}

const menuList = (menuItems) => {
  let displayMenu = menuItems.map(item => {
    return `<div class="menu-items col-lg-6 col-sm-12">
    <img
      src=${item.img}
      alt=${item.title}
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </div>
      <div class="menu-text">
        ${item.desc}
      </div>
    </div>
  </div>
`;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
}

menuList(data);
categoryList();