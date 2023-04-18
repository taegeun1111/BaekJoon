import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String num = br.readLine();

        for (int i = 1; i < 10; i++) {
            System.out.println(num+" * "+i+ " = "+Integer.parseInt(num)*i);
        }
    }
}

