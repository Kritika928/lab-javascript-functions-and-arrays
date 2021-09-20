// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(x,y)
{
  if(x>y)
  {
    return x;
  }
  else{
    return y;
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words)
{ let high=-1;
  var val;
  if(words.length==0)
  {
    return null;
  }
  for (let i=0;i<words.length;i++) {
    if(words[i].length>high)
    {
      maxval=words[i].length;
      val=words[i];
    }

  }
  return val;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(prices)
{
  let n=0;
  for(let i=0;i<prices.length;i++)
  {
    n=n+prices[i];
  }
  return n;
}
function add(prices)
{
  let n=0;
  for(let i=0;i<prices.length;i++)
  {
    if(typeof(prices[i])==="number")
    {
      n=n+prices[i];
    }
    else if(typeof(prices[i])==="string")
    {
      n=n+prices[i].length;
    }
    else if((prices[i])===true)
    {
      n=n+1;
    }
    else if(prices[i]===false)
    {
      n=n+0;
    }
    else{
      throw new Error("Unsupported data type");
    }
  }
  return n;
}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr)
{
  var n=netPrice(arr);
  if(arr.length===0)
  {
    return null;
  }
  else
  {
    var avg=n/arr.length;
  return avg;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr)
{  if(arr.length===0)
  {
    return null;
  }
  else
  {
    var n=0;
    for(let i=0;i<arr.length;i++)
    {
      n=n+arr[i].length;
    }
    var avg=n/arr.length;
  return avg;
  }
}
function avg(arr)
{

  if(arr.length===0)
  {
    return null;
  }
  else
  {
    var n=0;

    for(let i=0;i<arr.length;i++)
    {
      if(typeof(arr[i])==="number")
      {
        n=n+arr[i];
      }
      else if(typeof(arr[i])==="string")
      {
        n=n+arr[i].length;
      }
      else if((arr[i])===true)
      {
        n=n+1;
      }
      else if(arr[i]===false)
      {
        n=n+0;
      }
      else{
        throw new Error("Unsupported data type");
      }
    }
    var avg=n/arr.length;
    avg=parseFloat(avg.toFixed(2));
  return avg;
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'flour'
];

function uniqueArray(arr)
{
  if(arr.length===0)
  {
    return null;
  }
  else{
    for(let i=0;i<arr.length;i++)
    {
      for(let j=i+1;j<arr.length;j++)
      {
        if(arr[i]===arr[j])
        {
          arr.splice(j,j);
        }
      }
    }
    return arr;
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr,word)
{

  if(arr.length===0)
  {
    return null;
  }
else{
  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]===word)
      {
        return true;
      }
  }
  return false;
}

}

// Progression #7: Count repetition
const wordsCount = [
  'matter'
];
function howManyTimesElementRepeated(arr,word)
{
  let n=0;
  if(arr.length===0)
  {
    return 0;
  }
else{
  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]===word)
      {
        n=n+1;
      }
  }
  return n;
}
}

// Progression #8: Bonus

const matrix = [[24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix)
{
  let row=0;
  let col=0;
  let max=-1;
  for(let i=0;i<=(matrix.length-4);i++)
  {
    row=0;
    col=0;
    for(let j=0;j<=(matrix[i].length-4);j++)
    {
      row=matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3];
      col=matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j];

    if(row>col)
    {
      if(row>max)
      {
        max=row;
      }
    }
    else{
      if(col>max)
      {
        max=col;
      }
    }
  }
  }
  return max;
}
