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
  end

  public
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
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
  end
end