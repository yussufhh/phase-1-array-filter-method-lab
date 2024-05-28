// Code your solution here
function findMatching(){
    const drivers =[ 'Bobby', 'bobby' ]
return drivers;
}
function findMatching(names, query) {
    const matches = names.filter(name => name.toLowerCase() === query.toLowerCase());
    return matches.length > 0 ? matches : []; 
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}
function matchName(drivers, name){
    return drivers.filter(driver => driver.name=== name)
}


