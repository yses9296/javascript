//https://github.com/terwanerik/ScrollTrigger
const trigger = new ScrollTrigger.default({
    trigger: {
        once: true,
        /* 
        offset: {}
            element: {}
            viewport: {}
        */
        offset: {
            // element: {
            //     x: 0,
            //     y: 0.5
            // },
            viewport: {
                x: 0,
                y: (trigger, frame, direction) => {
                    return trigger.visible ? 0 : 0.3
                }
            }
        }
    },
    // toggle: {
    //     class: {
    //         in: 'animatedIn',
    //         out: 'animatedOut'
    //     }
    // },
});
trigger.add('[data-trigger]')