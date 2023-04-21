import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Scanner;
import java.util.StringTokenizer;


public class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int inputNum = sc.nextInt();

        for (int i = 0; i <inputNum ; i++) {
            System.out.println(inputNum-i);

        }

    }
}

