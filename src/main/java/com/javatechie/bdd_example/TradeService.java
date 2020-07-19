package com.javatechie.bdd_example;

public class TradeService {

    public Boolean verifyTrade(Trade trade){

        if(trade!=null){
            if(trade.getTradeType().equalsIgnoreCase("EQ")) {
                if(trade.getUserLocation().equalsIgnoreCase("NY") && trade.getTradeAmount()<=1000){
                    return true;
                }
                else if(trade.getUserLocation().equalsIgnoreCase("MU") && trade.getTradeAmount()<=5000){
                    return true;
                }
                else if(trade.getUserLocation().equalsIgnoreCase("LND") && trade.getTradeAmount()<=7500){
                    return true;
                }
            }

        }
        return false;
    }
}
