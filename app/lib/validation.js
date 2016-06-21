import moment from 'moment';

const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0 /* first error */ ];

export function email(value) {
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

export function dateOfBirth(value) {
  if(isEmpty(value)) return false;

  if(!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2}$/.test(value)){
    var birthday = moment(value, 'DD/MM/YYYY');
    var oneHundretThirtyYearsAgo = moment().subtract(130, "years");

    if (!birthday.isValid()) {
      return "Invalid birthday date";
    }
    else if (oneHundretThirtyYearsAgo.isAfter(birthday)) {
      return "You must be the oldest man in the world!";
    }
  } else {
    return "Invalid date";
  }
}

export function dateAndTime(value) {
  if(isEmpty(value)) return false;

  var today = new Date();
  var dateObject = createDateFromString(value);

  if (dateObject === null) return "Your date and time format doesn't look right";

  var date = new Date(dateObject.year,dateObject.month,dateObject.day,dateObject.hour,dateObject.minute);
  if (date.getFullYear() !== dateObject.year
    || date.getMonth() != dateObject.month
    || date.getDate() !== dateObject.day
    || date.getHours() !== dateObject.hour
    || date.getMinutes() !== dateObject.minute
  ) {
    return "Your date and time format doesn't look right";
  }
  if (date < today) {
    return "Please choose a date in future"
  }
}

function createDateFromString(value) {
  if(isEmpty(value)) return false;
  var matches = value.match(/^(\d{2}).(\d{2}).(\d{4}) (\d{2}):(\d{2})$/);

  if (matches === null) return null;
  var date = new Object();

  date['year']  = parseInt(matches[3], 10);
  date['month']  = parseInt(matches[2], 10) - 1; // months are 0-11
  date['day']  = parseInt(matches[1], 10);
  date['hour'] = parseInt(matches[4], 10);
  date['minute'] = parseInt(matches[5], 10);
  return date;
}

export function laterThan(field) {
  return (value, data) => {
    if (data) {
      if(isEmpty(value)) return false;
      var start = createDateFromString(data[field]);
      if (start === null) return false;
      var startDate = new Date(start.year,start.month,start.day,start.hour,start.minute);

      var end = createDateFromString(value);
      if (end === null) return false;
      var endDate = new Date(end.year,end.month,end.day,end.hour,end.minute);

      if (endDate < startDate) {
        return "The end date must be after start date";
      }
    }
  };
}

export function required(value) {
  if (isEmpty(value)) {
    return 'Required';
  }
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
  };
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
  };
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer';
  } else {
    return 'Something went wrong.';
  }
}

export function oneOf(enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
  };
}

export function atLeastOneSymbol(value) {
  var re = /[\!\@\#\$\%\^\&\*]/i;
  if (!re.test(value)) {
    return 'Use at least one of these symbols: !, @, #, $, %, ^, &, *;';
  }
}

export function atLeastOneNumber(value) {
  var re = /[0-9]/g;
  if(!re.test(value)) {
    return 'Use at least one number';
  }
}

export function atLeastOneLowercase(value) {
  var re = /[a-z]/g;
  if(!re.test(value)) {
    return 'Use at least one lowercase letter';
  }
}

export function atLeastOneUppercase(value) {
  var re = /[A-Z]/g;
  if(!re.test(value)) {
    return 'Use at least one uppercase letter';
  }
}

export function illegalCharacter(value) {
  let re = /[^A-z0-9\!\@\#\$\%\^\&\*]/g;
  if (re.test(value)) {
    return 'It cannot contain illegal characters';
  }
}


export function match(field) {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key]));
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
