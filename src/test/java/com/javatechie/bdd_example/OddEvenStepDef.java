package com.javatechie.bdd_example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class OddEvenStepDef {
    OddEvenService oddEvenService ;
    String result=null;

    @Given("^OddEven Service is available$")
    public void oddevenServiceIsAvailable() throws Throwable {
        oddEvenService = new OddEvenService();
    }

    @When("^I enter (\\d+)$")
    public void iEnter(int number) throws Throwable {
        result=oddEvenService.getOddEven(number);
    }

    @Then("^I Get result Even$")
    public void iGetResultEven() throws Throwable {
        Assert.assertEquals("EVEN",result);
    }

    @Then("^I Get result Odd$")
    public void iGetResultOdd() throws Throwable {
        Assert.assertEquals("ODD",result);
    }
}
