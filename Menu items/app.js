//items

const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "item-1.jpeg",
        desc: `Delicious and fluffy buttermilk pancakes, topped with fresh fruit and whipped cream`,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "item-2.jpeg",
        desc: `Premium beef cheeseburger, served with homemade french fries, fresh vegetables and our dressing`,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "item-3.jpeg",
        desc: `Strawberry ice cream milkshake, served with a donut, whipped cream and sprinkles on top`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "item-4.jpeg",
        desc: `Sunny side eggs served with a delicious homemade toast and a side of beans with cheese`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "item-5.jpeg",
        desc: `Premium beef burger served with a fried egg and fresh vegetables`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 1.99,
        img: "item-6.jpeg",
        desc: `Creamy Oreo milkshake, served with 3 cookies and topped with a fresh strawberry`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "item-7.jpeg",
        desc: `Fried egg, crispy bacon, american cheese and fresh veggies, all served between two delicious and warm english muffins`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "item-8.jpeg",
        desc: `Classic cheeseburger, served with fresh veggies and delicious homemade french fries`,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "item-10.jpeg",
        desc: `Prime beef juicy steak, topped with creamy gravy and and served with sauteéd asparagus`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div> 
      </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
if(!values.includes(item.category)){
    values.push(item.category);
}
return values;
    },["all"]
    );
    const categoryBtns = categories.map(function(category){
        return `
        <button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join("");

    container.innerHTML = categoryBtns; 
    const filterBtns = document.querySelectorAll(".filter-btn");
    console.log(filterBtns);


//filter items

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }

    });
});
}


