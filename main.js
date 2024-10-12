// function header_text()
// {
//     document.getElementById('header_p').innerText = "دنیای شگفت‌انگیز وسایل آشپزخانه و لوازم ضروری برای هر خانه! از ابزارهای کاربردی گرفته تا تجهیزات مدرن، همه آنچه برای تهیه غذاهای خوشمزه و تجربه آشپزی لذت‌بخش نیاز دارید، در اینجا پیدا کنید. با ما همراه باشید تا هنر آشپزی را به سطح بالاتری ببریم!"
//     document.getElementById('header_button').style.visibility = "visible"
//     document.getElementById('header_button').innerText = "خرید"
//     document.getElementById('header_p').style.transition = "transform 1.5s ease-in-out"
// }
// function header_text1()
// {
//     document.getElementById('header_p').innerText = ""
//     document.getElementById('header_button').style.visibility = "hidden"
//     document.getElementById('header_p').style.animation = "transform 1.5s ease-in-out"
// }


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