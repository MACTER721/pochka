class ValidRadio {
    constructor(wrapper) {
        this.wrapper = wrapper;

        this.input = this.wrapper.querySelector('input')
        this.button = document.querySelector('button')

        this.onInput = this.onInput.bind(this)
        this.init()
    }

    init() {
        this.handlers()
    }

    handlers() {
        this.input.addEventListener('click', this.onInput, true)
    }

    onInput() {

        if(this.input.getAttribute('data-yes') == 'true') {
            this.button.style.backgroundColor = '#1a991a'
            this.button.disabled = false;
        }else{
            this.button.style.backgroundColor = '#9e9e9e'
            this.button.disabled = true;
        }

    }

}

let wrapRadio = document.querySelectorAll('.radio-controller');

wrapRadio.forEach(element => {
    let radio = new ValidRadio(element);
})

