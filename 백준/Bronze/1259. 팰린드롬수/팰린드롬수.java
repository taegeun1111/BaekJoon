import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Collectors;


public class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        while (true) {
            String inputString = sc.nextLine();
            String result ="";
            for (int i = 1; i <= inputString.length(); i++) {
                result += inputString.charAt(inputString.length()-i);
            }
            if (Integer.parseInt(inputString) == 0){
                break;
            }
            if (Integer.parseInt(inputString) == Integer.parseInt(result)){
                System.out.println("yes");
            }else {
                System.out.println("no");
            }
        }

    }
}


