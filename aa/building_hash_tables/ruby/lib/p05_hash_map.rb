require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    list = bucket(key)
    list.include?(key)
  end

  def set(key, val)
    if @count >= @store.length - 1
      resize!
    end

    list = bucket(key)
    if list.include?(key)
      list.update(key, val)
    else
      list.append(key, val)
      @count += 1
    end
  end

  def get(key)
    list = bucket(key)
    list.get(key)
  end

  def delete(key)
    list = bucket(key)
    if list.include?(key)
      list.remove(key)
      @count -= 1
    end
  end

  def each
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store
    new_store = Array.new(num_buckets * 2) { LinkedList.new }
    @store = new_store
    old_store.each do |bucket|
      bucket.each do |node|
        set(node.key, node.val)
      end
    end
  end

  def bucket(key)
    num = key.hash
    bucket = @store[num % num_buckets]
  end
end
