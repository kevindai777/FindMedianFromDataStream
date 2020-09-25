//Java Solution

class MedianFinder {

    /** initialize your data structure here. */
    List<Integer> result;
    public MedianFinder() {
        result = new ArrayList<>();
    }
    
    public void addNum(int num) {
        int low = 0;
        int high = result.size() - 1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            
            if (result.get(mid) > num) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        result.add(low, num);
    }
    
    public double findMedian() {
        if (result.size() % 2 == 0) {
            int mid = result.size() / 2;
            return (double) (result.get(mid) + result.get(mid - 1)) / 2;
        } else {
            int mid = result.size() / 2;
            return result.get(mid);
        }
    }
}
