import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;


public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int inputNum1 = Integer.parseInt(br.readLine());
        int inputNum2 = Integer.parseInt(br.readLine());
        int inputNum3 = Integer.parseInt(br.readLine());

        int[] numArr = new int[10];

        int amount = inputNum1*inputNum2*inputNum3;
        String amountString = String.valueOf(amount);

        String[] strArray = amountString.split("");

        //한글자씩 분리해서 비교
        for (int i = 0; i < strArray.length; i++) {
            for (int j = 0; j < 10; j++) {
                if (strArray[i].equals(String.valueOf(j))) numArr[j]++;

            }
        }

        for (int i = 0; i < numArr.length; i++) {
            System.out.println(numArr[i]);
        }


    }
}

