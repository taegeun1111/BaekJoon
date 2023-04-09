import java.math.BigInteger;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        BigInteger m = scanner.nextBigInteger();
        BigInteger n = scanner.nextBigInteger();

        System.out.println(m.divide(n));
        System.out.println(m.mod(n));
    }
}