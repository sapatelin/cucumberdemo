$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("oddeven.feature");
formatter.feature({
  "line": 1,
  "name": "Odd Even feature",
  "description": "",
  "id": "odd-even-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Odd Even Scenario",
  "description": "",
  "id": "odd-even-feature;odd-even-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "OddEven Service is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter 10",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Get result Even",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter 9",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Get result Odd",
  "keyword": "Then "
});
formatter.match({
  "location": "OddEvenStepDef.oddevenServiceIsAvailable()"
});
formatter.result({
  "duration": 194936044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "OddEvenStepDef.iEnter(int)"
});
formatter.result({
  "duration": 2700832,
  "status": "passed"
});
formatter.match({
  "location": "OddEvenStepDef.iGetResultEven()"
});
formatter.result({
  "duration": 2624561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 8
    }
  ],
  "location": "OddEvenStepDef.iEnter(int)"
});
formatter.result({
  "duration": 169533,
  "status": "passed"
});
formatter.match({
  "location": "OddEvenStepDef.iGetResultOdd()"
});
formatter.result({
  "duration": 31339,
  "status": "passed"
});
formatter.uri("offer.feature");
formatter.feature({
  "line": 1,
  "name": "Evaluate percentage",
  "description": "",
  "id": "evaluate-percentage",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify 10% offer",
  "description": "",
  "id": "evaluate-percentage;verify-10%-offer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Execute DiscountService Business",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "if i will enter 5001",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "we should get ten percentage discount",
  "keyword": "Then "
});
formatter.match({
  "location": "DiscountServiceTest.execute_DiscountService_Business()"
});
formatter.result({
  "duration": 107233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5001",
      "offset": 16
    }
  ],
  "location": "DiscountServiceTest.if_i_will_enter(int)"
});
formatter.result({
  "duration": 188790,
  "status": "passed"
});
formatter.match({
  "location": "DiscountServiceTest.we_should_get_ten_percentage_discount()"
});
formatter.result({
  "duration": 41911,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify 15% offer",
  "description": "",
  "id": "evaluate-percentage;verify-15%-offer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Execute DiscountService Business",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "if i will enter 11000",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "we should get fifteen percentage discount",
  "keyword": "Then "
});
formatter.match({
  "location": "DiscountServiceTest.execute_DiscountService_Business()"
});
formatter.result({
  "duration": 40779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11000",
      "offset": 16
    }
  ],
  "location": "DiscountServiceTest.if_i_will_enter(int)"
});
formatter.result({
  "duration": 117427,
  "status": "passed"
});
formatter.match({
  "location": "DiscountServiceTest.we_should_get_fifteen_percentage_discount()"
});
formatter.result({
  "duration": 43422,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify No offer",
  "description": "",
  "id": "evaluate-percentage;verify-no-offer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Execute DiscountService Business",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "if i will enter 4000",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "we shouldn\u0027t get any percentage",
  "keyword": "Then "
});
formatter.match({
  "location": "DiscountServiceTest.execute_DiscountService_Business()"
});
formatter.result({
  "duration": 44932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 16
    }
  ],
  "location": "DiscountServiceTest.if_i_will_enter(int)"
});
formatter.result({
  "duration": 105723,
  "status": "passed"
});
formatter.match({
  "location": "DiscountServiceTest.we_shouldn_t_get_any_percentage()"
});
formatter.result({
  "duration": 66077,
  "status": "passed"
});
formatter.uri("trade.feature");
formatter.feature({
  "line": 1,
  "name": "Trade Verification",
  "description": "",
  "id": "trade-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Trade Allowed Scenario",
  "description": "",
  "id": "trade-verification;trade-allowed-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Execute TradeService Business",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Trade is placed using following  attributes",
  "rows": [
    {
      "cells": [
        "tradeId",
        "tradeAmount",
        "tradeType",
        "userLocation"
      ],
      "line": 6
    },
    {
      "cells": [
        "tradeId1",
        "1000.00",
        "EQ",
        "NY"
      ],
      "line": 7
    },
    {
      "cells": [
        "tradeId2",
        "5000.00",
        "EQ",
        "MU"
      ],
      "line": 8
    },
    {
      "cells": [
        "tradeId3",
        "7500.00",
        "EQ",
        "LND"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "System should be allow this trade",
  "keyword": "Then "
});
formatter.match({
  "location": "TradeStepDef.executeTradeServiceBusiness()"
});
formatter.result({
  "duration": 95906,
  "status": "passed"
});
formatter.match({
  "location": "TradeStepDef.trade_is_placed_using_following_attributes(Trade\u003e)"
});
formatter.result({
  "duration": 30389176,
  "status": "passed"
});
formatter.match({
  "location": "TradeStepDef.system_should_be_allow_this_trade()"
});
formatter.result({
  "duration": 1802946,
  "status": "passed"
});
});