import "./css/style.css";
import * as $ from "jquery";

//спойлер 

$(document).ready(function() {
	$('.spoiler_title').click(function(event) {
		if ($('.spoiler_container').hasClass('one')) {
			$('.spoiler_title').not($(this)).removeClass('active');
			$('.spoiler_text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

//Меню бургер
$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header_list').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//Инициализация свайпера
let swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true, //Бесконечно листать
	autoplay: {
		delay: 6000, //Скорость
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


!function(){
	"use strict";document.addEventListener("click",function(t){const e=t.target.closest("[data-easy-toggle]");if(e){t.preventDefault();let a=e.getAttribute("data-easy-toggle"),s=e.getAttribute("data-easy-class");try{document.querySelectorAll("[data-easy-toggle]").forEach(t=>{t.hasAttribute("data-easy-parallel")||t===e||document.querySelector(t.getAttribute("data-easy-toggle")).classList.remove(t.getAttribute("data-easy-class"))}),document.querySelector(a).classList.toggle(s)}catch(t){console.warn("EasyToggler.js : Блок "+a+" не существует")}}if(!e){let e=document.querySelectorAll("[data-easy-rcoe]");Array.from(e).forEach.call(e,function(e){let a=e.getAttribute("data-easy-toggle"),s=e.getAttribute("data-easy-class");if(!t.target.closest(a))try{document.querySelector(a).classList.remove(s)}catch(t){console.warn("EasyToggler.js : Блок "+a+" не существует")}})}})}();