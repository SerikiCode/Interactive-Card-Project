

window.addEventListener('load', function(){

    document.querySelector('.cardnum').innerHTML = this.localStorage.getItem('cardnumber')

    document.querySelector('.cardowner').innerHTML = this.localStorage.getItem('cardowner')

    document.querySelector('#mo').innerHTML = this.localStorage.getItem('month')

    document.querySelector('#yr').innerHTML = this.localStorage.getItem('year')

    document.querySelector('.cvc').innerHTML = this.localStorage.getItem('cvc')
})

document.querySelector('.btn').onclick = () => {
    window.location.replace('Index.html')
    localStorage.setItem('cardnumber', '0000 0000 0000 0000');
    localStorage.setItem('cardowner', "JOHN DOE");
    localStorage.setItem('month', "00");
    localStorage.setItem('year', "00");
    localStorage.setItem('cvc', "000");
}