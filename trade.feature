Feature: Trade Verification

  Scenario: Trade Allowed Scenario
    Given Execute TradeService Business
    When Trade is placed using following  attributes
      | tradeId   | tradeAmount | tradeType | userLocation |
      | tradeId1   | 1000.00 | EQ | NY |
      | tradeId2   | 5000.00 | EQ | MU |
      | tradeId3   | 7500.00 | EQ | LND |
    Then System should be allow this trade
