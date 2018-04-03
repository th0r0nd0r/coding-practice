require_relative "heap"
require 'byebug'

class Array
  def heap_sort!
    self[1..-1].each_with_index do |el, i|
      # byebug
      if el < self[i]
        heap = BinaryMinHeap.new
        self.each do |el|
          heap.push(el)
        end

        sorted_arr = []
        # byebug
        while heap.store.length > 0
          sorted_arr << heap.extract
        end

        return sorted_arr
      end

    end

    return self
  end
end