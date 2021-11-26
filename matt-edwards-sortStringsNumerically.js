function sortStringsNumerically(list){
  // Convert the array of strings to an array of numbers
  let numbers = convertToNumbers(list);
  
  // Sort the array Numerically
  numbers.sort((a, b) => a - b);
  
  // Convert array of numbers back into an array of strings.  
  const sortedList = convertToStrings(numbers);

  return sortedList;
}

// remove the "M", convert to float and return array
function convertToNumbers(list){
  return list.map(listItem => {
    return parseFloat(listItem.replace('m', ''));
  })
}

// return the "M" (thereform converting back to string) and return
function convertToStrings(list){
  return list.map(listItem => {
    return listItem + "m";
  })
}

const initialList = ["1m", "1.5m", "10m", "2m", "2.5m", "3m"];

const sortedList = sortStringsNumerically(initialList);

console.log(sortedList);