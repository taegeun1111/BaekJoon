import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String num = br.readLine();
        StringTokenizer st = new StringTokenizer(num);
        Double num1 = Double.valueOf(st.nextToken());
        Double num2 = Double.valueOf(st.nextToken());
        System.out.println(num1/num2);
    }
}