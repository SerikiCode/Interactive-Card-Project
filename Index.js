const form = document.querySelector(".form");
  const expiration = document.querySelector('#expiration');
  const dateError = document.querySelector('.date-error');
  const year = document.querySelector('.yr');
  const month = document.querySelector('.mo');
  const cvc = document.querySelector('#cvc-num');
  const cvcError = document.querySelector('.cvc-error')
  const cardholder = document.querySelector('#cardholder');

  const cardnumber = document.querySelector('#cardnumber');

  const cardnumberError = document.querySelector('.cardnumber-error');

  const cardnum = document.querySelector('.cardnum');
  
  const cardowner = document.querySelector('.cardowner');

const button = document.querySelector('.btn');  
  
  button.onclick = e => {
    const errorCvc = [];
    const errorDate = [];
    if(month.value === '' || year.value === ''){
      errorDate.push("Can't be blank");
    }
    if(cvc.value === ''){
      errorCvc.push("Can't be blank")
    }
    
    if(errorCvc.length > 0){
      e.preventDefault();
      cvcError.innerHTML = errorCvc.join()

      if(cvc.value === ''){
        cvc.style.borderColor = 'red';
      }
    }     

    if(errorDate.length > 0){
      e.preventDefault();
      dateError.innerHTML = errorDate.join(); 
      
      if(month.value === ''){
        month.style.borderColor ='red'
      } 
      if(year.value === ''){
        year.style.borderColor = 'red';
      }

      
      }
      if(cardholder.value.length < 5 || cardnumber.value === ""){
        e.preventDefault()
        if(cardholder.value.length < 5)
        {cardholder.style.borderColor = 'red';
      }

        if(cardnumber.value === ""){
          cardnumber.style.borderColor = 'red';
        }
      }
     var pattern = /[A-Z]/;
     if(pattern.test(cardnumber.value)){
      e.preventDefault();
      cardnumber.style.borderColor = 'red'
      cardnumberError.innerHTML = 'Wrong format, numbers only';

     }
     
     if(cardnumber.value.length < 19 && pattern.test(cardnumber.value) === false){
      e.preventDefault;
      cardnumberError.
      innerHTML = 'Input (complete) card number';
      cardnumber.style.borderColor = 'red'
     }

     if(month.value.length > 0 && year.value.length > 0 && cvc.value.length > 0 && cardholder.value.length >= 5 && pattern.test(cardnumber.value) === false && cardnumber.value.length === 19){
    
    form.submit();
    window.location.replace("IndexII.html");
    localStorage.setItem("cardowner", cardholder
.value.toUpperCase());
    localStorage.setItem("cardnumber", cardnumber.value)
    
    localStorage.setItem("month", month.value)

    localStorage.setItem("year", year.value)

    localStorage.setItem("cvc", cvc.value)



    };
  }
      
    
    
  year.oninput = () => {
    if(year.value.length > 0){
      year.style.borderColor = 'hsl(270, 3%, 87%)'
    }
    else if(month.value.length === 0) {month.style.borderColor = 'red'};

    if(month.value.length > 0 && year.value.length > 0){
      dateError.innerHTML = "";

    }

    year.value = year.value.replace(/[^\d]/g, "");

    year.maxLength = 2;
    
    document.querySelector('#yr').innerHTML = year.value;

    if(year.value === ''){
      document.querySelector('#yr').innerHTML = '00'
    }
  }

  month.oninput = () => {
    if(month.value.length > 0){
      month.style.borderColor = 'hsl(270, 3%, 87%)'
    }
    else if(month.value.length === 0) {month.style.borderColor = 'red'}

    if(month.value.length > 0 && year.value.length > 0){
      dateError.innerHTML = "";

    }
    month.maxLength = 2;
    month.value = month.value.replace(/[^\d]/g, "");

    document.querySelector('#mo').innerHTML = month.value
    if(month.value === ''){
      document.querySelector('#mo').innerHTML = '00'
    } 

  }  

      

  cvc.oninput = () => {
    if(cvc.value.length > 0){
      cvc.style.borderColor = 'hsl(270, 3%, 87%)';
      if(cvcError.innerHTML === "Can't be blank"){
        cvcError.innerHTML = ""
      }
      }
    cvc.value = cvc.value.replace(/[^\d]/g, "");
    cvc.maxLength = 3;

    document.querySelector('.cvc').innerHTML = cvc.value;
    
    if(cvc.value === ""){
      document.querySelector('.cvc').innerHTML = '000'
    }
  }
  
  cardnumber.addEventListener('input', function (e) {
  var target = e.target; 
  var position = target.selectionEnd, length = target.value.length;
  
  target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

  
  target.selectionEnd = position += ((target.value.charAt(length - 1) === ' ')? 1 : 0);
  target.maxLength = '19';
  var pattern = /[A-Z]/;
  if(pattern.test(cardnumber.value) === false && cardnumber.value.length === 19){
    cardnumber.style.borderColor = 'hsl(270, 3%, 87%)';
    cardnumberError.innerHTML = '';
    
  }
  cardnum.innerHTML = cardnumber.value;
  if(cardnumber.value === ''){
    cardnum.innerHTML = '0000 0000 0000 0000' 
  }
  });

  cardholder.addEventListener('input', function(){ 
    cardholder.value = cardholder.value.replace(/[0-9]/, "").replace(/[,\.\(\)\[\]\*\&\^\%\$!~`><]/, "");
    if(cardholder.value.length >= 5){
      cardholder.style.borderColor = 'hsl(270, 3%, 87%)'
    }
    
    cardholder.maxLength = 28;

    cardowner.innerHTML = cardholder.value.toUpperCase();

    if(cardholder.value === ''){
      cardowner.innerHTML = 'JOHN DOE'
    }
})

