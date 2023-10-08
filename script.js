const btns = document.querySelectorAll('.btn')
    , display = document.querySelector('.display')

let _display = ''

const calc = n => {
    if (`${(_display || '')}`.match(/error/)) {
        _display = ''
    }

    if (n === '=') {
        try {
            _display = eval(_display) || 'error'
        } catch (e) {
            _display = 'error'
        }
    } else {
        _display += n
    }

    display.innerHTML = _display
}

btns.forEach(
    btn => 
        btn.addEventListener(
            'click', 
            () => 
                calc(btn.innerHTML)
        )
    )