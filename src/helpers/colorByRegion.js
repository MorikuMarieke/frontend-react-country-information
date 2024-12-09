// to assign classNames for color by region.

function colorByRegion(region) {
    switch (region) {
        case ('Americas'):
            return 'green';
        case 'Europe':
            return 'yellow';
        case 'Africa':
            return 'blue';
        case 'Asia':
            return 'red'
        case 'Oceania':
            return 'purple'
        default:
            return 'default-color'
    }
}

export default colorByRegion;