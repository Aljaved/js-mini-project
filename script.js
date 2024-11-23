function bmi(){
    const h = document.getElementById('height').value;
    const w = document.getElementById('weight').value;
    const result = document.getElementById('result');
    const error = document.getElementById('error');
    if(h===''|| h<0 || isNaN(h)){
        result.innerHTML = ''
        error.innerHTML = 'please enter valid height'
 }

 else if(w===''|| w<0 || isNaN(w)){
        result.innerHTML = ''
        error.innerHTML = 'please enter valid weight'
 }

 else{
    error.innerHTML ='';
    const bmi = (w / (h / 100 * h / 100)).toFixed(2);
    document.getElementById('result').innerHTML = `your bmi is ${bmi}`

 }
    

}