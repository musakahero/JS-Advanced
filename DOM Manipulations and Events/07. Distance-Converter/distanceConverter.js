function attachEventsListeners() {

    document.getElementById('convert').addEventListener('click', onConvert);

    function onConvert() { 
        let inputNum = document.getElementById('inputDistance').value;
        let allUnits = Array.from(document.querySelectorAll('#inputUnits option')).map(e => e.value);

        //conversions can be hardcoded instead, if we know the exact order of the units and conv rates. Here the conversions come in dynamically, according to units order of appearance in the HTML code

        let conversions = [];
        for (const unit of allUnits) {
            switch (unit) {
                case 'km':
                    conversions.push(1000);
                    break;
                case 'm':
                    conversions.push(1);
                    break;
                case 'cm':
                    conversions.push(0.01);
                    break;
                case 'mm':
                    conversions.push(0.001);
                    break;
                case 'mi':
                    conversions.push(1609.34);
                    break;
                case 'yrd':
                    conversions.push(0.9144);
                    break;
                case 'ft':
                    conversions.push(0.3048);
                    break;
                case 'in':
                    conversions.push(0.0254);
            }
        }
        
        
        let indexOfInputUnit = document.getElementById('inputUnits').selectedIndex; 

        let resultInMeters = conversions[indexOfInputUnit] * inputNum; 
        
        let indexOfOutputUnit = document.getElementById('outputUnits').selectedIndex;
        
        let result = resultInMeters / conversions[indexOfOutputUnit];
       
        let outputNum = document.getElementById('outputDistance');

        outputNum.value = result; 

    }

}