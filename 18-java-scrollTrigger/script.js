
// document.addEventListener('DOMContentLoaded', function(){
    const trigger = new ScrollTrigger.default();
    
    trigger.add('[data-scroll]', {
    // offset: {
    //     x:0,
    //     y:250
    // },
    toggle:{
        class: {
            in: 'animateIn',
            out: 'animateOut'
        }
    }
    // once: true
});
// })
