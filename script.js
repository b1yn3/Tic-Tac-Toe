const buttons = document.querySelectorAll('.parent button');
let count = 1

buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.disabled = true;
        if(count % 2 === 0){
            this.textContent = 'O';
            this.style.color = "#2a9daf";
        } else{
            this.textContent = 'X';
            this.style.color = "#e76f51";
        }
        count++;
    });

});


