$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("component/PruebaComponent.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I want to write a step with precondition component",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "some other precondition component",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I complete action component",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "some other action component",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "yet another action component",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I validate the outcomes component",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "check more outcomes component",
  "keyword": "And "
});
formatter.match({
  "location": "PruebaComponentDefinition.i_want_to_write_a_step_with_precondition_component()"
});
formatter.result({
  "duration": 108247512,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat cl.scotiabank.automation.sgo.definition.Components.PruebaComponentDefinition.i_want_to_write_a_step_with_precondition_component(PruebaComponentDefinition.java:13)\n\tat ✽.Given I want to write a step with precondition component(component/PruebaComponent.feature:25)\n",
  "status": "pending"
});
formatter.match({
  "location": "PruebaComponentDefinition.some_other_precondition_component()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaComponentDefinition.i_complete_action_component()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaComponentDefinition.some_other_action_component()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaComponentDefinition.yet_another_action_component()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaComponentDefinition.i_validate_the_outcomes_component()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaComponentDefinition.check_more_outcomes_component()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I want to write a step with component\u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I check for the \u003cvalue\u003e in step component",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I verify the \u003cstatus\u003e in step component",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 40,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 41,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 42,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 33,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I want to write a step with componentname1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I check for the 5 in step component",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I verify the success in step component",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    }
  ],
  "location": "PruebaComponentDefinition.i_want_to_write_a_step_with_componentname(int)"
});
formatter.result({
  "duration": 1777440,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat cl.scotiabank.automation.sgo.definition.Components.PruebaComponentDefinition.i_want_to_write_a_step_with_componentname(PruebaComponentDefinition.java:55)\n\tat ✽.Given I want to write a step with componentname1(component/PruebaComponent.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "PruebaComponentDefinition.i_check_for_the_in_step_component(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaComponentDefinition.i_verify_the_success_in_step_component()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 42,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 33,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I want to write a step with componentname2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I check for the 7 in step component",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I verify the Fail in step component",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    }
  ],
  "location": "PruebaComponentDefinition.i_want_to_write_a_step_with_componentname(int)"
});
formatter.result({
  "duration": 281108,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat cl.scotiabank.automation.sgo.definition.Components.PruebaComponentDefinition.i_want_to_write_a_step_with_componentname(PruebaComponentDefinition.java:55)\n\tat ✽.Given I want to write a step with componentname2(component/PruebaComponent.feature:35)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "PruebaComponentDefinition.i_check_for_the_in_step_component(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaComponentDefinition.i_verify_the_Fail_in_step_component()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("steps/PruebaSteps.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "some other precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "some other action",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "yet another action",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({
  "location": "PruebaStepsDefinition.some_other_precondition()"
});
formatter.result({
  "duration": 179589,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat cl.scotiabank.automation.sgo.definition.steps.PruebaStepsDefinition.some_other_precondition(PruebaStepsDefinition.java:14)\n\tat ✽.Given some other precondition(steps/PruebaSteps.feature:25)\n",
  "status": "pending"
});
formatter.match({
  "location": "PruebaStepsDefinition.i_complete_action()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaStepsDefinition.some_other_action()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaStepsDefinition.yet_another_action()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaStepsDefinition.i_validate_the_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaStepsDefinition.check_more_outcomes()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I want to write a step with \u003cname\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify the \u003cstatus\u003e in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 39,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 40,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 41,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 32,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I want to write a step with name1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I check for the 5 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify the success in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "PruebaStepsDefinition.i_want_to_write_a_step_with_name(int)"
});
formatter.result({
  "duration": 330334,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat cl.scotiabank.automation.sgo.definition.steps.PruebaStepsDefinition.i_want_to_write_a_step_with_name(PruebaStepsDefinition.java:50)\n\tat ✽.Given I want to write a step with name1(steps/PruebaSteps.feature:34)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "PruebaStepsDefinition.i_check_for_the_in_step(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaStepsDefinition.i_verify_the_success_in_step()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 32,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I want to write a step with name2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I check for the 7 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify the Fail in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "PruebaStepsDefinition.i_want_to_write_a_step_with_name(int)"
});
formatter.result({
  "duration": 390197,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat cl.scotiabank.automation.sgo.definition.steps.PruebaStepsDefinition.i_want_to_write_a_step_with_name(PruebaStepsDefinition.java:50)\n\tat ✽.Given I want to write a step with name2(steps/PruebaSteps.feature:34)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "PruebaStepsDefinition.i_check_for_the_in_step(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PruebaStepsDefinition.i_verify_the_Fail_in_step()"
});
formatter.result({
  "status": "skipped"
});
});