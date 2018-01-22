class Submit {
    constructor(form) {
        this.form = form;
        this.button = document.querySelector('button')

        this.input = this.form.querySelector('input, textarea, select')

        this.collector = this.collector.bind(this)
        this.init()
    }

    init() {
        this.handlers()
    }

    handlers() {
        this.button.addEventListener('submit', this.collector, true)
    }

    collector() {
        if(this.input.value == '') {
            submit.preventDefault();
            return false
        } else {
            console.log('tcnm')
        }
        // console.log(this.input.value)
        // this.button.preventDefault()
    }

    onButton() {

        // if(this.input.getAttribute('data-yes') == 'true') {
        //     this.button.style.backgroundColor = '#1a991a'
        //     this.button.removeAttribute('disabled')
        // }else{
        //     this.button.style.backgroundColor = '#9e9e9e'
        //     this.button.addAttribute('disabled')
        // }
    }

}

let form = document.querySelectorAll('.input-wrap, .document-download__wrap, .radio-controller');

form.forEach(element => {
    let formElem = new Submit(element);
})

