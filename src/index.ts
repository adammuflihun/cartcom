// import { greetUser } from '$utils/greet';
import { gsap } from 'gsap';

console.log('oke');
window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Adam';
  // greetUser(name);
});

console.log('oke');

$('.accordion').click(function () {
  let g = gsap.utils.selector(this); // or use selector text like ".class"

  $('.accordion .text-content-slide-landing ').hide();
  $('.accordion .vertical-text ').show();
  $(this).find('.image-arrow-down').hide();
  $(this).find('.text-content-slide-landing ').show();
  $(this).find('.vertical-text ').hide();

  gsap.fromTo(
    g('.text-content-slide-landing'),
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 0.6 }
  );
});
