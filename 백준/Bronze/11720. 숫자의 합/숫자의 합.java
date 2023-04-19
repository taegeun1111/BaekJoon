import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int iter = Integer.parseInt(br.readLine());
        String inputNum = br.readLine();
        String[] arr = inputNum.split("");
        int amount =0;

        for (int i = 0; i < iter; i++) {
                int parseInt = Integer.parseInt(arr[i]);
                amount+=parseInt;
        }

        System.out.println(amount);

    }
}

