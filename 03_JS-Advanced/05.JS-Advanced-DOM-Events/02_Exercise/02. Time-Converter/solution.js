function attachEventsListeners() {
    const convertBtns = document.querySelectorAll('div input[type="button"]');


    Array.from(convertBtns).forEach(btn => btn.addEventListener('click', convert));

    function convert(e) {
        // e.currentTarget - pressed 'CONVERT' button
        const secondsPerUnit = {
            seconds: 1,
            minutes: 60,
            hours: 3600,
            days: 86400
        }

        // extract current input fld unit type. "id" examples: secondsBtn, minutesBtn => split by 'Btn' give array with 1st element our unit
        const currentUnitType = e.currentTarget.id.split('Btn')[0]; // result => seconds, minutes, hours, days
        const currentInputValue = e.currentTarget.parentNode.querySelector(`input#${currentUnitType}`).value; // take the input value for the unit type convert button was pressed
        const valueInSeconds = Number(currentInputValue) * secondsPerUnit[currentUnitType];

        // take all input fields
        const inputFlds = document.querySelectorAll('input[type="text"]');
        Array.from(inputFlds).forEach(field => {
            // fld.id - takes current HTML element and extract it's id attribute value, e.g.: seconds, minutes, hours, days
            const fieldUnitType = field.id;
            // update the field value
            field.value = valueInSeconds / secondsPerUnit[fieldUnitType];
        });
    }
}