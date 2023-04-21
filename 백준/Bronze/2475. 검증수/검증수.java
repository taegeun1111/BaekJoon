import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String inputNum = br.readLine();
        StringTokenizer st = new StringTokenizer(inputNum, " ");
        int[] num = new int[st.countTokens()];

        int amount = 0;

        for (int i = 0; i < num.length; i++) {
            num[i] = Integer.parseInt(st.nextToken());
        }

        for (int resultNum : num) {
            amount += resultNum * resultNum;
        }
        System.out.println(amount%10);


    }
}

