package com.javatechie.bdd_example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertThat;

public class TradeStepDef {
    TradeService tradeService;
    List<Boolean> listResult= new ArrayList<Boolean>();
    boolean result;
    @Given("^Execute TradeService Business$")
    public void executeTradeServiceBusiness() throws Throwable {
       tradeService = new TradeService();
    }

    @Given("^Trade is placed using following  attributes$")
    public void trade_is_placed_using_following_attributes(List<Trade> trades) throws Throwable {
        for(Trade trade: trades){
            System.out.println(trade.getTradeId());
            result=tradeService.verifyTrade(trade);
            listResult.add(Boolean.valueOf(result));
        }

    }

    @Then("^System should be allow this trade$")
    public void system_should_be_allow_this_trade() throws Throwable {
        //System.out.println(result);
        List<Boolean> expectedResults=Arrays.asList(true,true,true);
        Assert.assertArrayEquals(listResult.toArray(),expectedResults.toArray());

    }

}
