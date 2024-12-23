const navToggle = document.getElementById('nav_toggle');  
const navLi = document.getElementById('nav_li');  

navToggle.addEventListener('click', () => {  
  navLi.classList.toggle('active'); // افزودن یا حذف کلاس فعال  
});
// *//////////////////////////


let currentSlide = 0; // ایندکس اسلاید فعلی
const slides = document.querySelectorAll('.slide'); // همه اسلایدها را انتخاب می‌کند
const totalSlides = slides.length; // تعداد کل اسلایدها

// تابع نمایش اسلاید
function showSlide(index) {
    // اطمینان از اینکه ایندکس در محدوده معتبر باشد
    currentSlide = (index + totalSlides) % totalSlides;

    // محاسبه موقعیت افقی
    const slider = document.querySelector('.slider');
    const offset = -currentSlide * (300 + 20); // عرض هر اسلاید (300px) + margin (20px)
    slider.style.transform = `translateX(${offset}px)`;
}

// تابع برای حرکت به جلو یا عقب
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// راه‌اندازی اولیه
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});



// inja


// 


// انتخاب تمامی لینک‌های منو  
// document.querySelectorAll('ul li a').forEach(function(anchor) {  
//     anchor.addEventListener('click', function(e) {  
//         e.preventDefault(); // جلوگیری از عمل پیش‌فرض  

//         const targetId = this.getAttribute('href'); // دریافت شناسه هدف  
//         const targetElement = document.querySelector(targetId); // گرفتن عنصر مربوط به شناسه هدف  

//         if (targetElement) {  
//             // پیمایش به سمت هدف  
//             targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });  

//             // بعد از 3 ثانیه به همان بخش می‌رویم  
//             setTimeout(function() {  
//                 // اینجا می‌توانید هر عملی انجام دهید که بعد از 3 ثانیه می‌خواهید  
//                 console.log('کاربر 3 ثانیه در آن بخش ماند');  
//                 // برای مثال اسکرول به ابتدای صفحه   
//                 window.scrollTo({ top: 0, behavior: 'smooth' });  
//             }, 3000);  
//         }  
//     });  
// });


document.querySelector('.dropbtn').addEventListener('click', function(e) {  
    e.preventDefault(); // جلوگیری از عمل پیش‌فرض  
    const targetElement = document.querySelector('.shop-section'); // انتخاب بخش هدف  

    if (targetElement) {  
        // پیمایش به سمت بخش هدف با انیمیشن آرام  
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });  
    }  
});  


// گرفتن همه دکمه‌های دسته‌بندی  
const buttons = document.querySelectorAll('.btn-shop');  
    
// تعریف یک تابع برای فیلتر کردن محصولات  
buttons.forEach(button => {  
    button.addEventListener('click', function() {  
        const category = this.innerText; // دریافت متن دکمه  
        const products = document.querySelectorAll('.menu-card'); // گرفتن همه محصولات  
        
        products.forEach(product => {  
            // اگر دکمه "همه" کلیک شود، همه محصولات نمایش داده می‌شوند  
            if (category === 'همه') {  
                product.style.display = 'block'; // نمایش محصول  
            } else {  
                // بررسی اینکه آیا کلاس محصول با دسته انتخابی مطابقت دارد یا نه  
                const kindOf = product.querySelector('.kind-of').innerText.trim();  
                if (kindOf.includes(category)) {  
                    product.style.display = 'block'; // نمایش محصول  
                } else {  
                    product.style.display = 'none'; // پنهان کردن محصول  
                }  
            }  
        });  
    });  
});  










// انتخاب دکمه  
const scrollTopBtn = document.getElementById("scrollTopBtn");  

// هنگام اسکرول صفحه  
window.onscroll = function() {  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {  
        scrollTopBtn.style.display = "block"; // نمایش دکمه  
    } else {  
        scrollTopBtn.style.display = "none"; // پنهان کردن دکمه  
    }  
};  

// هنگام کلیک بر روی دکمه  
scrollTopBtn.onclick = function() {  
    document.body.scrollTop = 0; // برای Safari  
    document.documentElement.scrollTop = 0; // برای Chrome، Firefox、IE و Opera  
};


// myoffer = document.getElementsByClassName('offer');
// mycard = document.getElementsByClassName('menu-card');


// function card_hover()
// {
//     myoffer.style.borderradius = "10px"; 
//     myoffer.style.backgroundcolor = "blue";
// }


// وثیقه: گرفتن عنصر سبد خرید و تعداد آنها  
// const bagNumber = document.getElementById("bag_number");  
// let cart = JSON.parse(localStorage.getItem("cart")) || [];  

// // به‌روزرسانی تعداد آیکن سبد خرید  
// function updateBagNumber() {  
//     const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);  
//     bagNumber.textContent = totalItems;  
// }  

// // اضافه کردن به سبد خرید  
// function addToCart(product) {  
//     const existingProduct = cart.find(item => item.id === product.id);  
//     if (existingProduct) {  
//         existingProduct.quantity += 1; // اگر محصول وجود دارد، تعداد آن را افزایش می‌دهد  
//     } else {  
//         cart.push({ ...product, quantity: 1 }); // اگر وجود ندارد، محصول جدید اضافه می‌شود  
//     }  
//     localStorage.setItem("cart", JSON.stringify(cart)); // سبد خرید را در localStorage ذخیره کنید  
//     updateBagNumber(); // به‌روزرسانی تعداد سبد خرید  
// }  

// // محاسبه قیمت کل سبد خرید  
// function getTotalPrice() {  
//     return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);  
// }  

// // در رویداد کلیک دکمه‌های خرید  
// const purchaseButtons = document.querySelectorAll(".buttonshop");  

// purchaseButtons.forEach((button, index) => {  
//   button.addEventListener("click", () => {  
//     const productDetails = {  
//       id: index + 1, // شماره شناسه برای محصول (با توجه به موقعیت دکمه)  
//       name: button.parentElement.previousElementSibling.textContent, // نام محصول  
//       price: parseInt(button.parentElement.parentElement.querySelector(".pricing").textContent.replace(/\D/g, '')), // قیمت محصول از متن  
//     };  
//     addToCart(productDetails); // اضافه کردن به سبد خرید  
//     alert(`محصول ${productDetails.name} به سبد خرید اضافه شد!`);  
//   });  
// });  

// // به‌روزرسانی تعداد و قیمت هنگام بارگذاری صفحه  
// updateBagNumber();





// وثیقه: گرفتن عنصر سبد خرید و تعداد آنها  
const bagNumber = document.getElementById("bag_number");  
let cart = JSON.parse(localStorage.getItem("cart")) || [];  

// به‌روزرسانی تعداد آیکن سبد خرید  
function updateBagNumber() {  
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);  
    bagNumber.textContent = totalItems;  
}  

// اضافه کردن به سبد خرید  
function addToCart(product) {  
    const existingProduct = cart.find(item => item.id === product.id);  
    if (existingProduct) {  
        existingProduct.quantity += 1; // اگر محصول وجود دارد، تعداد آن را افزایش می‌دهد  
    } else {  
        cart.push({ ...product, quantity: 1 }); // اگر وجود ندارد، محصول جدید اضافه می‌شود  
    }  
    localStorage.setItem("cart", JSON.stringify(cart)); // سبد خرید را در localStorage ذخیره کنید  
    updateBagNumber(); // به‌روزرسانی تعداد سبد خرید  
}  

// محاسبه قیمت کل سبد خرید  
function getTotalPrice() {  
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);  
}  

// نمایش محتویات سبد خرید  
function showCart() {  
    const cartItemsDiv = document.getElementById("cartItems");  
    cartItemsDiv.innerHTML = ''; // پاک کردن محتوای قبلی   
    cart.forEach(item => {  
        const itemDiv = document.createElement("div");  
        itemDiv.textContent = `${item.name} - تعداد: ${item.quantity} - قیمت: ${item.price * item.quantity} تومان`;  
        cartItemsDiv.appendChild(itemDiv);  
    });  
    document.getElementById("totalPrice").textContent = `جمع کل: ${getTotalPrice()} تومان`;  
    document.getElementById("shoppingCart").style.display = 'block'; // نمایش دیو سبد خرید  
}  

// بستن سبد خرید  
function closeCart() {  
    document.getElementById("shoppingCart").style.display = 'none'; // مخفی کردن دیو سبد خرید  
}  

// پاک کردن سبد خرید  
function clearCart() {  
    cart = [];  
    localStorage.removeItem("cart");  
    updateBagNumber();  
    closeCart();  
}  

// در رویداد کلیک دکمه‌های خرید  
const purchaseButtons = document.querySelectorAll(".buttonshop");  

purchaseButtons.forEach((button, index) => {  
    button.addEventListener("click", () => {  
        const productDetails = {  
            id: index + 1, // شماره شناسه برای محصول (با توجه به موقعیت دکمه)  
            name: button.parentElement.previousElementSibling.textContent, // نام محصول  
            price: parseInt(button.parentElement.parentElement.querySelector(".pricing").textContent.replace(/\D/g, '')), // قیمت محصول از متن  
        };  
        addToCart(productDetails); // اضافه کردن به سبد خرید  
        // alert(`محصول ${productDetails.name} به سبد خرید اضافه شد!`); // این را حذف می‌کنیم  
    });  
});  

// به‌روزرسانی تعداد و قیمت هنگام بارگذاری صفحه  
updateBagNumber();  

// اضافه کردن رویداد کلیک به آیکن سبد خرید  
const bagIcon = document.getElementById("bagIcon"); // آیکن سبد خرید  
bagIcon.addEventListener("click", (e) => {  
    e.preventDefault(); // جلوگیری از حالت پیش‌فرض لینک  
    showCart(); // نمایش سبد خرید  
});
// نمایش محتویات سبد خرید
function showCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = ''; // پاک کردن محتوای قبلی

    // ایجاد جدول
    const table = document.createElement("table");
    table.style.width = "100%"; // عرض جدول به 100% کل فضای موجود
    table.innerHTML = `
        <thead>
            <tr>
                <th>نام محصول</th>
                <th>تعداد</th>
                <th>قیمت واحد (تومان)</th>
                <th>جمع (تومان)</th>
                <th>تخفیف (%)</th>
                <th>قیمت نهایی (تومان)</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = table.querySelector("tbody");

    cart.forEach(item => {
        const itemDiscount = item.discount || 0; // تخفیف
        const subtotal = item.price * item.quantity; // جمع کل
        const discountAmount = (subtotal * itemDiscount) / 100; // مقدار تخفیف
        const finalPrice = subtotal - discountAmount; // قیمت نهایی

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name || 'نام نامشخص'}</td> <!-- بررسی نام محصول -->
            <td>${item.quantity}</td>
            <td>${item.price.toLocaleString()}</td>
            <td>${subtotal.toLocaleString()}</td>
            <td>${itemDiscount}</td>
            <td>${finalPrice.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
    });

    // اضافه کردن جدول به div محتویات سبد خرید
    cartItemsDiv.appendChild(table);

    // به‌روزرسانی جمع کل در قسمت زیرین
    document.getElementById("totalPrice").textContent = `جمع کل: ${getTotalPrice().toLocaleString()} تومان`;
    document.getElementById("shoppingCart").style.display = 'block'; // نمایش دیو سبد خرید
}


purchaseButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productDetails = {
            id: index + 1, // شماره شناسه برای محصول (با توجه به موقعیت دکمه)
            name: button.parentElement.previousElementSibling.textContent, // نام محصول
            price: parseInt(button.parentElement.parentElement.querySelector(".pricing").textContent.replace(/\D/g, '')), // قیمت محصول از متن
            discount: parseInt(button.parentElement.parentElement.querySelector(".discount").textContent.replace(/\D/g, '')), // تخفیف محصول از متن
        };
        addToCart(productDetails); // اضافه کردن به سبد خرید
        // alert(`محصول ${productDetails.name} به سبد خرید اضافه شد!`); // این را حذف می‌کنیم
    });
});





