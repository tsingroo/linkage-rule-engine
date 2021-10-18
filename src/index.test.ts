import { getMatchedRules } from ".";
import { ArrayRule, RuleItem, RuleResultItem, ValueItem } from "./Rule.mdl";



test('Array Rule: single subject rule', ()=> {
  const ruleItems: Array<RuleItem> = [{
    subjects: ['duties.0'],
    observer: 'duties.1',
    '500000': {
      type: 'ARRAY',
      options: [{
        val: '500000',
        text: '50万'
      }]
    },
    '800000': {
      type: 'ARRAY',
      options: [{
        val: '800000',
        text: '80万'
      }]
    }
  }, {
    subjects: ['duties.0'],
    observer: 'duties.2',
    '500000': {
      type: 'ARRAY',
      options: [{
        val: '50000',
        text: '5万'
      }]
    },
    '800000': {
      type: 'ARRAY',
      options: [{
        val: '80000',
        text: '8万'
      }]
    }
  }];
  const valItems: Array<ValueItem> = [{
    id: 'duties.0',
    value: '800000'
  }];
  const matchedRules: Array<RuleResultItem> = getMatchedRules(ruleItems, valItems)
  const matchedOne = matchedRules[0];
  const matchedTwo = matchedRules[1];
  expect((matchedOne.result as ArrayRule).options[0].val).toBe('800000');
});

test('Array Rule: single subject rule', ()=> {
  const ruleItems: Array<RuleItem> = [{
    subjects: ['duties.0'],
    observer: 'duties.1',
    '500000': {
      type: 'ARRAY',
      options: [{
        val: '500000',
        text: '50万'
      }]
    },
    '800000': {
      type: 'ARRAY',
      options: [{
        val: '800000',
        text: '80万'
      }]
    }
  }, {
    subjects: ['duties.0'],
    observer: 'duties.2',
    '500000': {
      type: 'ARRAY',
      options: [{
        val: '50000',
        text: '5万'
      }]
    },
    '800000': {
      type: 'ARRAY',
      options: [{
        val: '80000',
        text: '8万'
      }]
    }
  }];
  const valItems: Array<ValueItem> = [{
    id: 'duties.0',
    value: '500000'
  }];
  const matchedRules: Array<RuleResultItem> = getMatchedRules(ruleItems, valItems)
  const matchedOne = matchedRules[0];
  const matchedTwo = matchedRules[1];
  expect((matchedTwo.result as ArrayRule).options[0].text).toBe('5万');
})
