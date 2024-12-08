(function (){
    const dayNightSwitch = {
        divTumblerWrapperElt: document.querySelector('.tumbler__wrapper'),
        divTumblerElt: document.querySelector('.tumbler'),
        postElements: document.querySelectorAll('.post'),
        init() {
            document.documentElement.classList.add('js-enabled');
            this.addEventListeners();
        },
        addEventListeners() {
            this.divTumblerWrapperElt.addEventListener('click', (evt) => {
                this.switchDayNight();
            });
        },
        switchDayNight() {
            document.body.classList.toggle('body--night-mode');
            this.divTumblerElt.classList.toggle('tumbler--night-mode');
            this.postElements.forEach(postElement => {
                postElement.classList.toggle('post--night-mode');
            });
        }
    }
    dayNightSwitch.init();
})()