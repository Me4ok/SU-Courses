function attachEventsListeners() {
    const unitsToM = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };
    const convertBtn = document.querySelector('input[type="button"]');
    
    convertBtn.addEventListener('click', convert);

    function convert(e) {
        const inputFld = document.querySelector('input#inputDistance');
        const outputFld = document.querySelector('input#outputDistance');
        const inputUnit = document.querySelector('#inputUnits').value;
        const outputUnit = document.querySelector('#outputUnits').value;
        
        const inputToM = Number(inputFld.value) * unitsToM[inputUnit];
        outputFld.value = inputToM / unitsToM[outputUnit];
    }
}

/*
1 km	1000 m
1 m	    1 m
1 cm	0.01 m
1 mm	0.001 m
1 mi	1609.34 m
1 yrd	0.9144 m
1 ft	0.3048 m
1 in	0.0254 m
*/