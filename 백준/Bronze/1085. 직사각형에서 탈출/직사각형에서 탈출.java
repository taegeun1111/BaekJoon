import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;


public class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();
        int y = sc.nextInt();
        int w = sc.nextInt();
        int h = sc.nextInt();

        int minX;
        int minY;

        minX = Math.min(w - x, x);
        minY = Math.min(h-y,y);

        System.out.println(Math.min(minY,minX));


    }
}

