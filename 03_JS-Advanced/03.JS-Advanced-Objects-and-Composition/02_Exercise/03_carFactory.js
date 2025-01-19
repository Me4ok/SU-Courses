function carFactory(input) {
    let orderedCar = {};
    const order = JSON.parse(JSON.stringify(input));

    // Set car model
    orderedCar.model = order.model;

    // Set car engine properties
    if (order.power <= 90) {
        orderedCar.engine = {
            'power': 90,
            'volume': 1800
        }
    } else if (order.power <= 120) {
        orderedCar.engine = {
            'power': 120,
            'volume': 2400
        }
    } else if (order.power <= 200) {
        orderedCar.engine = {
            'power': 200,
            'volume': 3500
        }
    }

    // Set car coupe type
    switch (order.carriage) {
        case 'hatchback': {
            orderedCar.carriage = {
                type: 'hatchback',
                color: order.color
            }
        };
            break;
        case 'coupe': {
            orderedCar.carriage = {
                type: 'coupe',
                color: order.color
            }
        };
            break;
        default: {
            // nothing to do
        };
            break;
    }

    // Set car wheels size
    let wheel = 0;
    if (order.wheelsize % 2 == 0) {
        wheel = order.wheelsize - 1;
    } else {
        wheel = order.wheelsize;
    }
    orderedCar.wheels = [wheel, wheel, wheel, wheel];

    return orderedCar;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
/*
{
  model: 'VW Golf II',
  engine: { power: 90,
            volume: 1800 },
  carriage: { type: 'hatchback',
              color: 'blue' },
  wheels: [13, 13, 13, 13]
}
*/
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
/*
{
  model: 'Opel Vectra',
  engine: { power: 120,
            volume: 2400 },
  carriage: { type: 'coupe',
              color: 'grey' },
  wheels: [17, 17, 17, 17]
}
*/