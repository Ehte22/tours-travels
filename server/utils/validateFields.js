const validator = require('validator')

const isEmpty = (value) => {
    return value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0);
}

exports.validateFields = (data) => {
    let isError = false
    let errors = []

    for (const key in data) {
        if (isEmpty(data[key])) {
            isError = true
            errors.push(`*Field ${key} is required`)
        }

        if (key === 'itinerary' || key === 'faqs') {

            data[key].forEach((item, index) => {
                Object.keys(item).forEach(subKey => {
                    if (isEmpty(item[subKey])) {
                        isError = true;
                        errors.push(`*Field ${key} ${index + 1} ${subKey} is required`);
                    }
                });
            });
        }
    }

    if (data.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
        isError = true
        errors.push('Please enter a valid email address')
    }

    if (data.phone && !/^[3-9]\d{4,10}$/i.test(data.phone)) {
        isError = true
        errors.push('Please Enter a valid phone number')
    }

    return { isError, errors }

}