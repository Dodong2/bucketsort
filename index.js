function bucketSort(arr,n)
{
    if (n <= 0)
            return;
  fghgfh
        // 1) Create n empty buckets      
        let buckets = new Array(n);
  
        for (let i = 0; i < n; i++)s
        {
            buckets[i] = [];
        }
  
        // 2) Put array elements in different buckets
        for (let i = 0; i < n; i++) {
            let idx = arr[i] * n;
            let flr = Math.floor(idx);
            buckets[flr].push(arr[i]);
        }
  
        // 3) Sort individual buckets
        for (let i = 0; i < n; i++) {
            buckets[i].sort(function(a,b){return a-b;});/*pwede ka gumamit ng kahit anong Algorithm 
            pero sa case mo ay JavaScript Sort Method ang gamit na Combination ng Quicksort at Insertion Sort*/
        }
  
        // 4) Concatenate all buckets into arr[]
        let index = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                arr[index++] = buckets[i][j];
            }
        }
}
 
// Driver code 
let arr = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68];
let n = arr.length;
bucketSort(arr, n);
 
document.write("Sorted array is <br>");
for (let el of arr.values()) {
   document.write(el + " ");
}

/* Ang "Bucket Sort" ay isang uri ng algoritmo sa pag-aayos ng mga elemento sa isang
 listahan o array. Ito ay nagmumula sa ideya ng paghahati ng mga elemento sa maraming
  mga "bucket" o lalagyan batay sa kanilang halaga o pagkakasunod-sunod. Pagkatapos ay
   isinasagawa ang pagsasama-sama ng mga elemento sa bawat bucket na may kasamang 
   pagsasalin-salin upang makabuo ng isang buong listahan na nakaayos na. */

/*
let index = 0;

    This line initializes a variable called index to 0. This variable
    will be used to keep track of the current position in the original
    input array arr where elements from the buckets will be placed.

for (let i = 0; i < n; i++) {

    This line starts an outer for loop. It iterates over each bucket
    in the buckets array. The loop will run for n iterations, where
    n is the number of buckets.

for (let j = 0; j < buckets[i].length; j++) {

    Within the outer loop, an inner for loop is started. This inner
    loop iterates over the elements within each individual bucket.
    buckets[i] represents the current bucket, and buckets[i].length
    is the number of elements in that bucket.

    arr[index++] = buckets[i][j];

    Inside the inner loop, this line does the following:
buckets[i][j] accesses an element within the current bucket. i represents
 the current bucket, and j is the index of the element within that bucket.
The value of buckets[i][j] is then assigned to the corresponding position in
 the original input array arr.
After the assignment, index is incremented using the post-increment operator (index++).
 This ensures that the next element from the bucket will be placed in the next position in the arr array.
This process continues for all buckets and their elements. As a result, all the elements from the buckets
 are copied one by one into the original array arr, and because the buckets are sorted, the elements will be
  in sorted order in the final array. This step completes the Bucket Sort algorithm by consolidating all the
   sorted buckets back into the original array, effectively producing a sorted version of the input array arr.






*/