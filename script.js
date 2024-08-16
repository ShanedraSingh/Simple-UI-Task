const numberInput = document.getElementById('numberInput');
        const output = document.getElementById('output');

        numberInput.addEventListener('input', () => {
            const value = parseInt(numberInput.value);
            if (isNaN(value)) {
                output.textContent = '';
                return;
            }

            if (value < 0) {
                output.textContent = 'Enter a positive value';
            } else if (value % 2 === 0) {
                output.textContent = `Next even numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
            } else {
                output.textContent = `Next odd numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
            }
        });