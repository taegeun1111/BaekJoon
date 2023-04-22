import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Scanner;
import java.util.StringTokenizer;


public class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        String next = sc.nextLine();
        String[] split = next.split(" ");

        String[] newS = new String[2];
        newS[0] = "";
        newS[1] = "";

        for (int k = 2; k > -1; k--) {
            for (int i = 0; i<2; i++) {
                newS[i] += String.valueOf(split[i].charAt(k));
            }
        }

        int A = Integer.parseInt(newS[0]);
        int B = Integer.parseInt(newS[1]);


        if (A>B){
            System.out.println(A);
        } else if (A<B) {
            System.out.println(B);
        }


    }
}

