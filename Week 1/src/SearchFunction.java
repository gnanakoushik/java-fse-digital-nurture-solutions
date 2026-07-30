import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class SearchFunction {

    // Linear Search - O(N)
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search - O(log N)
    public static Product binarySearch(Product[] products, String targetName) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int res = targetName.compareToIgnoreCase(products[mid].productName);
            if (res == 0) return products[mid];
            if (res > 0) low = mid + 1;
            else high = mid - 1;
        }
        return null;
    }
}