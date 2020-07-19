package com.javatechie.bdd_example;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={"oddeven.feature","offer.feature","trade.feature"} ,format = {"pretty", "html:target/Destination"})
public class TestRunner {

}
