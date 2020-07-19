package com.javatechie.bdd_example;

public class Trade {

    private String tradeId;

    private double tradeAmount;

    private String tradeType;

    private String userLocation;

    public Trade() {
    }

    public Trade(String tradeId, double tradeAmount, String tradeType, String userLocation) {
        this.tradeId = tradeId;
        this.tradeAmount = tradeAmount;
        this.tradeType = tradeType;
        this.userLocation = userLocation;
    }

    public String getTradeId() {
        return tradeId;
    }

    public void setTradeId(String tradeId) {
        this.tradeId = tradeId;
    }

    public double getTradeAmount() {
        return tradeAmount;
    }

    public void setTradeAmount(double tradeAmount) {
        this.tradeAmount = tradeAmount;
    }

    public String getTradeType() {
        return tradeType;
    }

    public void setTradeType(String tradeType) {
        this.tradeType = tradeType;
    }

    public String getUserLocation() {
        return userLocation;
    }

    public void setUserLocation(String userLocation) {
        this.userLocation = userLocation;
    }
}
