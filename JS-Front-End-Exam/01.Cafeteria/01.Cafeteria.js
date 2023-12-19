function solve(input) {
    const baristas = {};

    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const [name, shift, ...coffee] = input.shift().split(' ');
        const coffeeTypes = coffee.join(' ').split(',').map(t => t.trim());
        baristas[name] = { shift, coffeeTypes };
    }

    while (input.length > 0) {
        const command = input.shift();

        if (command === 'Closed') {
            break;
        }

        const [commands, ...data] = command.split(' / ');

        switch (commands) {
            case 'Prepare':
                const [prepareName, prepareShift, prepareCoffeeType] = data;
                if (baristas[prepareName].shift === prepareShift && baristas[prepareName].coffeeTypes.includes(prepareCoffeeType)) {
                    console.log(`${prepareName} has prepared a ${prepareCoffeeType} for you!`);
                } else {
                    console.log(`${prepareName} is not available to prepare a ${prepareCoffeeType}.`);
                }
                break;

            case 'Change Shift':
                const [changeShiftName, newShift] = data;
                if (baristas[changeShiftName]) {
                    baristas[changeShiftName].shift = newShift;
                    console.log(`${changeShiftName} has updated his shift to: ${newShift}`);
                }
                break;

            case 'Learn':
                const [learnName, newCoffeeType] = data;
                if (baristas[learnName]) {
                    if (!baristas[learnName].coffeeTypes.includes(newCoffeeType)) {
                        baristas[learnName].coffeeTypes.push(newCoffeeType);
                        console.log(`${learnName} has learned a new coffee type: ${newCoffeeType}.`);
                    } else {
                        console.log(`${learnName} knows how to make ${newCoffeeType}.`);
                    }
                }
                break;

            default:
                break;
        }
    }

    Object.entries(baristas).forEach(([name, { shift, coffeeTypes }]) => {
        console.log(`Barista: ${name}, Shift: ${shift}, Drinks: ${coffeeTypes.join(", ")}`);
    });
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed'
]);
