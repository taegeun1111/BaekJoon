import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String ad = "12345678";
        String dc = "87654321";

        String s = br.readLine();
        StringTokenizer st = new StringTokenizer(s, " ");
        String result = "";
        while (st.hasMoreTokens()) {
            result += st.nextToken();
        }

        if (ad.equals(result)) {
            System.out.println("ascending");
        } else if (dc.equals(result)) {
            System.out.println("descending");
        } else {
            System.out.println("mixed");
        }


    }
}