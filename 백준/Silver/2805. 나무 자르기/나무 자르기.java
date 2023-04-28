import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        String A = sc.nextLine();
        String[] splitA = A.split(" ");
        int N = Integer.parseInt(splitA[0]);
        int M = Integer.parseInt(splitA[1]);

        String B = sc.nextLine();
        String[] s = B.split(" ");
        int[] tree = new int[N];
        for (int i = 0; i < tree.length; i++) {
            tree[i] = Integer.parseInt(s[i]);
        }

        int max = Arrays.stream(tree).max().getAsInt();
        int left = 1;
        int right = max;
        int answer = 0;
        while (left <= right) {
            int mid = (left + right) / 2;
            long sum = 0;
            for (int i = 0; i < N; i++) {
                if (tree[i] > mid) {
                    sum += tree[i] - mid;
                }
            }
            if (sum >= M) {
                left = mid + 1;
                answer = mid;
            } else {
                right = mid - 1;
            }
        }
        System.out.println(answer);
    }
}