package com.javatechie.bdd_example;

public class OddEvenService {

    public String getOddEven(int number) {
        if(number%2==0) return "EVEN";
        else return "ODD";
    }

}
