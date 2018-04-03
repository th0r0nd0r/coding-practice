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
