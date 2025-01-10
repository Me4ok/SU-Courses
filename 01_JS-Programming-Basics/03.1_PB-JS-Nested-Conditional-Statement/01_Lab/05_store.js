function store(product, city, qty) {
    let price = 0;

    switch (city) {
        case 'Sofia': {
            switch (product) {
                case 'coffee': {
                    price = Number(qty) * 0.5;
                };
                    break;
                case 'water': {
                    price = Number(qty) * 0.8;
                };
                    break;
                case 'beer': {
                    price = Number(qty) * 1.2;
                };
                    break;
                case 'sweets': {
                    price = Number(qty) * 1.45;
                };
                    break;
                case 'peanuts': {
                    price = Number(qty) * 1.6;
                };
                    break;
            }
        };
            break;
        case 'Plovdiv': {
            switch (product) {
                case 'coffee': {
                    price = Number(qty) * 0.4;
                };
                    break;
                case 'water': {
                    price = Number(qty) * 0.7;
                };
                    break;
                case 'beer': {
                    price = Number(qty) * 1.15;
                };
                    break;
                case 'sweets': {
                    price = Number(qty) * 1.3;
                };
                    break;
                case 'peanuts': {
                    price = Number(qty) * 1.5;
                };
                    break;
            }
        };
            break;
        case 'Varna': {
            switch (product) {
                case 'coffee': {
                    price = Number(qty) * 0.45;
                };
                    break;
                case 'water': {
                    price = Number(qty) * 0.7;
                };
                    break;
                case 'beer': {
                    price = Number(qty) * 1.1;
                };
                    break;
                case 'sweets': {
                    price = Number(qty) * 1.35;
                };
                    break;
                case 'peanuts': {
                    price = Number(qty) * 1.55;
                };
                    break;
            }
        };
            break;
    }

    console.log(price);
}

store("coffee", "Varna", 2);
store("peanuts", "Plovdiv", 1);
store("beer", "Sofia", 2);
store("water", "Plovdiv", 2);
store("sweets", "Sofia", 2.23);

/*
град        coffee	water	beer	sweets	peanuts
Sofia	    0.50	0.80	1.20	1.45	1.60
Plovdiv	    0.40	0.70	1.15	1.30	1.50
Varna	    0.45	0.70	1.10	1.35	1.55
*/