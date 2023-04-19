import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));


        //반복횟수
        int inputIter = Integer.parseInt(br.readLine());
        for (int i = 0; i < inputIter; i++) {
            //반복입력받기
            int amount = 0;
            int result = 0;
            String oxQuiz = br.readLine();
            for (int j = 0; j < oxQuiz.length(); j++) {
                if (oxQuiz.charAt(j) == 'O') {
                    amount++;
                    result += amount;
                } else if (oxQuiz.charAt(j) == 'X') {
                    amount = 0;
                }
            }
            System.out.println(result);
        }

    }
}

