function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        // take input
        const inputEl = document.querySelector('#inputs textArea');
        const restaurantsInfo = JSON.parse(inputEl.value);
        let restaurants = {};

        // read input for each restaurant
        for (let data of restaurantsInfo) {
            let [restaurantName, employees] = data.split(' - ');
            // add restaurant to the restaurants object
            if (restaurants.hasOwnProperty(restaurantName) == false) {
                restaurants[restaurantName] = {
                    avgSalary: 0,
                    bestSalary: 0,
                    totalSalaries: 0,
                    workers: {}
                }
            }
            
            // read employees info and add it to the restaurant information
            let employeesData = employees.split(', ');
            for (let info of employeesData) {
                let [name, salary] = info.split(' ');
                salary = Number(salary);

                // add employee in the restaurant workers list if doesn't exist
                if (restaurants[restaurantName].workers.hasOwnProperty(name) == false) {
                    restaurants[restaurantName].workers[name] = salary;
                    restaurants[restaurantName].totalSalaries += salary;
                }
                // update best salary if current worker salary is greater
                if (salary > restaurants[restaurantName].bestSalary) {
                    restaurants[restaurantName].bestSalary = salary;
                }
            }
            
            // update avg restaurant salary
            const workersCount = Object.keys(restaurants[restaurantName].workers).length;
            restaurants[restaurantName].avgSalary = restaurants[restaurantName].totalSalaries / workersCount;
        }

        // sort restaurants by restaurant avgSalary in desc order - 1st will be the best
        const sorted = Object.entries(restaurants).sort((r1, r2) => r2[1].avgSalary - r1[1].avgSalary);
        // take best restaurant
        const bestRestaurant = sorted[0];
        const bestRestaurantName = bestRestaurant[0];
        const bestRestaurantInfo = bestRestaurant[1];

        const bestROutput = document.querySelector('#outputs #bestRestaurant p');
        bestROutput.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantInfo.avgSalary.toFixed(2)} Best Salary: ${bestRestaurantInfo.bestSalary.toFixed(2)}`;
        
        const bestRWorkersoutput = document.querySelector('#workers p');
        const workersInfo = bestRestaurantInfo.workers;
        const workersSorted = Object.entries(workersInfo).sort((a, b) => b[1] - a[1]);
        let workersToPrint = [];
        console.log(Object.entries(workersInfo));

        workersSorted.forEach(([name, salary]) => {
            workersToPrint.push(`Name: ${name} With Salary: ${salary}`);
        });

        bestRWorkersoutput.textContent = workersToPrint.join(' ');
    }
}