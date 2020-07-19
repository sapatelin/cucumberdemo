Feature: Odd Even feature

  Scenario: Odd Even Scenario
    Given OddEven Service is available
    When I enter 10
    Then I Get result Even

    When I enter 9
    Then I Get result Odd

