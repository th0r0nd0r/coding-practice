require 'byebug'

class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = []
    @prc = prc || Proc.new {|a, b| a <=> b}
  end

  def count
    @store.length
  end

  def extract
  end

  def peek
    @store[0]
  end

  def push(val)
    @store.push(val)
    self.class.heapify_up(@store, count - 1, count)
  end

  
  public
  def self.swap!(array, i1, i2)
    array[i1], array[i2] = array[i2], array[i1]
  end

  def self.child_indices(len, parent_index)
    indices = []
    for i in (1..2)
      child = parent_index * 2 + i
      if child < len
        indices << child
      end
    end

    indices
  end

  def self.parent_index(child_index)
    if child_index == 0
      raise "root has no parent"
    end

    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new {|a, b| a <=> b}
    child_idcs = child_indices(len, parent_idx)
    if !child_idcs.empty?
      left_child = array[child_idcs[0]]
      right_child = array[child_idcs[1]]

      if left_child <= right_child
        min_child_idx = child_idcs[0]
      else
        min_child_idx = child_Idcs[1]
      end

      
      # if prc.call(array[min_child_idx], array[min_child_idx - 1]) > 0
      #   min_child_idx -= 1
      # end
        
      min_child = array[min_child_idx]
      parent = array[parent_idx]
      # byebug

      if prc.call(min_child, parent) < 0
        swap!(array, min_child_idx, parent_idx)
        heapify_down(array, min_child_idx, len, &prc)
      end
    end
      
    array
  end
  
  def self.heapify_up(array, child_idx, len = array.length, &prc)
    if child_idx != 0
      prc ||= Proc.new {|a, b| a <=> b}
      parent_idx = parent_index(child_idx)
      parent = array[parent_idx]
      child = array[child_idx]

      if prc.call(child, parent) < 0
        self.swap!(array, child_idx, parent_idx)
        if parent_idx != 0
          heapify_up(array, parent_idx, len, &prc)
        end
      end
    end

    array
  end

end