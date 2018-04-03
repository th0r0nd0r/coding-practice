# Sorting

### Quicksort 

#### Unoptimized version
- base case/exit condition: 
  + return arr if length <= 1
1. select first element as pivot
2. partition array around pivot
3. recurse on left and right
4. return concatted arrays

#### In-place version (sublinear space complexity)
- pass in the array, startIdx, and endIdx
- base case/exit condition: 
  + return arr if length <= 1
1. select a pivot (first el)
2. partition array in place around pivot
  - assign barrier index after first element
  - if  el < pivot
    + swap el with first num after barrier
    + increment barrier
  - if el > pivot, don't do anything
3. move pivot to spot directly left of barrier
4. recurse on left and right sides
  - sort left from 0...pivotIdx
  - sort right from pivotIdx + 1...arr.length
5. return array


#### Optimized version (random pivot)
- if you always choose the same el as pivot, you're vulnerable to pathological data sets (e.g. sorted arrays)
- best approach is to pick the pivot at random

#### Time Complexity

##### Unoptomized Version
- Best Case: O(n log n)
  + if you split the data in half at every recursive call, you end up with log n calls of the function
  + at each step, you you perform 2 fewer operations than on the previous stack level. The 2 can be treated as a constant, so at each level you get n operations
- Worst Case: O(n^2)
  + if every call ends up putting all elements on the same side, you have to make n calls

##### Optimized Version
- Best Case: O(n log n) (but way more often)
- Worst Case: O(n^2) (but way less often)
  + by picking a random pivot, you get closer to nlogn more often

#### Space Complexity

##### Unoptomized Version
  - not great, between O(n log n) and O(n^2)
  - each level in the stack contains an array with (basically) n elements

##### In-Place Version
  - between log n and n (stack depth)

##### Optimized Version
  - closer to O(log n)
  - the only extra complexity comes from recursive calls, and choosing a random pivot limits the # of calls in most cases

