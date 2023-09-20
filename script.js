function bucketSort(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const bucketSize = 5; // Choose an appropriate bucket size

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  // Initialize buckets
  for (let i = 0; i < bucketCount; i++) {
      buckets[i] = [];
  }

  // Place elements into buckets
  for (let i = 0; i < arr.length; i++) {
      const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
      buckets[bucketIndex].push(arr[i]);
  }

  // Sort each bucket and concatenate them
  let sortedArray = [];
  for (let i = 0; i < bucketCount; i++) {
      buckets[i].sort((a, b) => a - b); // Use any sorting algorithm here
      sortedArray = sortedArray.concat(buckets[i]);
  }

  return sortedArray;
}

// Example usage:
const unsortedArray = [80, 10, 90, 50, 30, 60, 40, 20, 70];
const sortedArray = bucketSort(unsortedArray);
console.log(sortedArray);



/* paliwanag sa code paano Gumagana

Magsimula ka muna tignan ang Code line na ito const unsortedArray = [80, 10, 90, 50, 30, 60, 40, 20, 70];
sa code nayan yan ang ating Array na tinawag na unsortedArray o Hindi maayos na pagkaka-sunod sunod ng 
Elements.

#step Procedures:
Step1: Ngayon gumawa ka ng function na function bucketSort(arr) { , sa javaScript ito yung way para maka-buo
       ng Bucket Algorithm pinangalanan mo ito ng bucketSort na may parameter na arr na ito yung mga array value
       na gusto mo i-Sort. 

Step2: Sa part na ito kinuha mo ang pinakamababa at pinakamataas na value na meron si Array sa pamamagitan na
       const min = Math.min(...arr); at const max = Math.max(...arr); ganito nagana ang code nayan, Ang 
       Math.min at Math.max tinatawag na build in function sa Js, ginamit natin para ma-Calculate ang pinaka-
       mababa at mataas na numeric values sa iyong Array at ang (...) ay tinatawag
       na Spread Operator para mabasa at maikalat ang mga Element na meron ang ating Array "arr" kaya magkasama
       sila (...arr) kaya ang ipapasa nila ito na individual Argument kung saan mahahati ito sa:
       (arr[0], arr[1], arr[2], ...) at ang ire-return nila na value ay ang 10 at 90.

Step3: Sa part nato ay nag set tayo ng variable na ang value ay 5 const bucketSize = 5; ang value ay represents
       ng size of each buckets sa Bucket Sorting Algorithm, dito malalaman kung gaano kalawak ang ating bucket.
       kapag naman ang value ng bucketSize ay mas mababa ang result ay mas accurate na sorting, at kapag mataas
       naman ay mag lead ito sa less accurate sorting.
       
Step4: Sa part naman na ito ay Calculate ang number of buckets para sa Bucket Sorting Algorithm, gamit ang code
       na const bucketCount = Math.floor((max - min) / bucketSize) + 1; nagdeclare tayo ng variable na ang value 
       ay formula, i-calculate using Math.floor ang ginagawa nito ay para ang value ay gawing whole number,
       sa loob ng  Math.floor() ay merong formula na (max - min) / bucketSize) +1,
       ang value ng max ay 90 at ang value ng min ay 10, 
       
       Formula: ((90 - 10) ÷ 5) + 1; 
       Solution:
       so 90 - 10 = 80, 
       and 80 ÷ 5 = 16, 
       and 16 + 1 = 17,

       17 is whole number at yan ang ating number of bucket.

Step5: Sa part nato ay nag declare tayo ng variable na buckets at ang value nito ay ang initialize 
       new array(bucketCount) that means ay gumawa tayo ng panibagong array with specific number of slots
       or sa tawag na bucket. ang mangyayari ay mag-create siya ng 17 na empty Array slots na naka-set 
       Undefined that means hindi pwede maglagay ng value.

Step6: Sa part na ito ay ang code na: for (let i = 0; i < bucketCount; i++) { buckets[i] = []; }
       ang ginagawa ang code na ito ay para initialize ang Element ng bucket kahit ito ay naka empty
       dahil ito yung way para allow malagyan ng value ang mga 17 undefined Array na value ni bucketCount.

Step7: Sa part na ito ay ang code na for (let i = 0; i < arr.length; i++) {
      const bucketIndex = Math.floor((arr[i] - min) / bucketSize); buckets[bucketIndex].push(arr[i]); }
      Ang arr.length; ay ang 9 elements na [80, 10, 90, 50, 30, 60, 40, 20, 70]; so i = 0:
      0 less than 9 ay true so mag-execute ito ng Math.floor((arr[i] - min) / bucketSize); until 0 to 8 so 9times 
      siya mag execute, ang value ng arr[i] ay ang mga elements value na meron si unsortedArray 
      [80, 10, 90, 50, 30, 60, 40, 20, 70];
      ang formula ay by index ang pag calculate since ang ating 17 empty buckets sa variable na "buckets"
      ay pwede na lagyan ng value. solution:

      So ang uunahing I calculate ay ang unang elements na si 80 based sa [80, 10, 90, 50, 30, 60, 40, 20, 70];.
       Elements 80: formula Math.floor((80 - 10) / 5);
                     80 - 10 = 70
                     and 70 ÷ 5 = 14.
                     so ang element value na si 80 ay malalagay sa ika-14 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.
       
       Elements 10: formula Math.floor((10 - 10) / 5);
                     10 - 10 = 0
                     and 0 ÷ 5 = 0.
                     so ang element value na si 10 ay malalagay sa 0 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.

       Elements 90: formula Math.floor((90 - 10) / 5);
                     90 - 10 = 80
                     and 80 ÷ 5 = 16.
                     so ang element value na si 90 ay malalagay sa 16 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.
       Elements 50: formula Math.floor((50 - 10) / 5);
                     50 - 10 = 40
                     and 40 ÷ 5 = 8.
                     so ang element value na si 50 ay malalagay sa 8 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.

       Elements 30: formula Math.floor((30 - 10) / 5);
                     30 - 10 = 20
                     and 20 ÷ 5 = 4.
                     so ang element value na si 30 ay malalagay sa 4 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.

       Elements 60: formula Math.floor((60 - 10) / 5);
                     60 - 10 = 50
                     and 60 ÷ 5 = 10.
                     so ang element value na si 60 ay malalagay sa 10 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.

       Elements 40: formula Math.floor((40 - 10) / 5);
                     40 - 10 = 30
                     and 30 ÷ 5 = 6.
                     so ang element value na si 40 ay malalagay sa 6 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.

       Elements 20: formula Math.floor((20 - 10) / 5);
                     20 - 10 = 10
                     and 10 ÷ 5 = 2.
                     so ang element value na si 10 ay malalagay sa 2 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.

       Elements 70: formula Math.floor((70 - 10) / 5);
                     70 - 10 = 60
                     and 60 ÷ 5 = 12.
                     so ang element value na si 70 ay malalagay sa 12 na Empty bucket
                     using buckets[bucketIndex].push(arr[i]); dahil ang buckets[] ay pwede na lagyan
                     ng value dahil sa step6.

                     ang ginagawa ng buckets[bucketIndex].push(arr[i]); ay ang buckets[bucketIndex]
                     ay nag-accesses ng Specific bucket sa 17 empty buckets based sa value na meron si
                     arr[i], ang .push(arr[i]); naman ay magpapasok ng current value nasi 90 at ilalagay
                     ito sa ika-16 sa buckets.

Step8: sa code na ito ay nag assign tayo ng new empty array na let sortedArray = [];
       tapos ay may forloop tayo na for (let i = 0; i < bucketCount; i++) { tatandaan mo na 
       ang value ni bucketCount ay yung 17 na buckets so mag iterate siya ng 17times
       everytime na mag iterate or mag-loop ay ma-execute ang code na: 

       (Timsort algorithm is a hybrid sorting algorithm that combines the strengths of two
       other sortingalgorithms: Insertion Sort and Merge Sort. buckets[i].sort((a, b) => a - b);)

       buckets[i].sort((a, b) => a - b); tandaan mo na value ng buckets[i] ay ang
       [80, 10, 90, 50, 30, 60, 40, 20, 70]; using .sort ang ginawa nan ay I-arrange ang
       mga elements sa array gamit ang comparison function na (a, b) => a - b.

       The comparison function (a, b) => a - b computes the difference between a and b. 
       Here's how it works for sorting:

       *If the result is negative, it means a should come before b.
       *If the result is positive, it means b should come before a.
       *If the result is zero, it means a and b are equal and their order doesn't change.

       [80, 10, 90, 50, 30, 60, 40, 20, 70];

       1. formula: (a=80, b=10) => a=80 - b=10 solution:
       80 - 10 = 70 is positive our array become this [10, 80, 90, 50, 30, 60, 40, 20, 70]

       2. formula: (a=80, b=90) => a=80 - b=90 solution:
       80 - 90 = -10 is negative our array nothing change [10, 80, 90, 50, 30, 60, 40, 20, 70]

       3. formula: (a=90, b=50) => a=90 - b=50 solution:
       90 - 50 = 40 is positive our array become this [10, 80, 50, 90, 30, 60, 40, 20, 70]

       4. formula: (a=90, b=30) => a=90 - b=30 solution:
       90 - 30 = 60 is positive our array become this [10, 80, 50, 30, 90, 60, 40, 20, 70]

       5. formula: (a=90, b=60) => a=90 - b=60 solution:
       90 - 60 = 40 is positive our array become this [10, 80, 50, 30, 60, 90, 40, 20, 70]
       
       6. formula: (a=90, b=40) => a=90 - b=40 solution:
       90 - 40 = 50 is positive our array become this [10, 80, 50, 30, 60, 40, 90, 20, 70]

       7. formula: (a=90, b=20) => a=90 - b=20 solution:
       90 - 20 = 70 is positive our array become this [10, 80, 50, 30, 60, 40, 20, 90, 70]

       8. formula: (a=90, b=70) => a=90 - b=70 solution:
       90 - 70 = 20 is positive our array become this [10, 80, 50, 30, 60, 40, 20, 70, 90]

       9. formula: (a=80, b=50) => a=80 - b=50 solution:
       80 - 50 = 30 is positive our array become this [10, 50, 80, 30, 60, 40, 20, 70, 90]

       10. formula: (a=80, b=30) => a=80 - b=30 solution:
       80 - 30 = 50 is positive our array become this [10, 50, 30, 80, 60, 40, 20, 70, 90]

       11. formula: (a=80, b=60) => a=80 - b=60 solution:
       80 - 60 = 20 is positive our array become this [10, 50, 30, 60, 80, 40, 20, 70, 90]

       12. formula: (a=80, b=40) => a=80 - b=40 solution:
       80 - 40 = 40 is positive our array become this [10, 50, 30, 60, 40, 80, 20, 70, 90]

       13. formula: (a=80, b=20) => a=80 - b=20 solution:
       80 - 20 = 60 is positive our array become this [10, 50, 30, 60, 40, 20, 80, 70, 90]
       
       14. formula: (a=80, b=70) => a=80 - b=70 solution:
       80 - 70 = 10 is positive our array become this [10, 50, 30, 60, 40, 20, 70, 80, 90]

       15. formula: (a=50, b=30) => a=50 - b=30 solution:
       50 - 30 = 20 is positive our array become this [10, 30, 50, 60, 40, 20, 70, 80, 90]

       16. formula: (a=50, b=30) => a=50 - b=30 solution:
       50 - 30 = 20 is positive our array become this [10, 30, 50, 60, 40, 20, 70, 80, 90]

       17. formula: (a=30, b=40) => a=30 - b=40 solution:
       30 - 40 = -10 is is negative our array nothing change [10, 30, 50, 60, 40, 20, 70, 80, 90]

       18. formula: (a=40, b=20) => a=40 - b=20 solution:
       40 - 20 = 20 is is negative our array nothing change [10, 30, 50, 60, 20, 40, 70, 80, 90]
       
       19. formula: (a=40, b=20) => a=40 - b=20 solution:
       40 - 20 = 20 is is negative our array nothing change [10, 30, 50, 60, 20, 40, 70, 80, 90]




*/
