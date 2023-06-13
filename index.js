function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(whatever = '*') {
    return (adjective = 'special') => `You are ${whatever}${adjective}${whatever}!`;
}