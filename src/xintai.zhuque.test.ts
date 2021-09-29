import { RuleItem } from "./Rule.mdl";

const amountMax6W = [
  { val: '5000000', text: '5万' },
  { val: '6000000', text: '6万' }
];
const amountMax10W = [
  { val: '5000000', text: '5万' },
  { val: '10000000', text: '10万' }
];
const amountMax20W = [
  { val: '5000000', text: '5万' },
  { val: '10000000', text: '10万' },
  { val: '15000000', text: '15万' },
  { val: '20000000', text: '20万' }
];
const amountMax30W = [
  { val: '5000000', text: '5万' },
  { val: '10000000', text: '10万' },
  { val: '15000000', text: '15万' },
  { val: '20000000', text: '20万' },
  { val: '25000000', text: '25万' },
  { val: '30000000', text: '30万' }
];
const amountMax33W = [
  { val: '5000000', text: '5万' },
  { val: '10000000', text: '10万' },
  { val: '15000000', text: '15万' },
  { val: '20000000', text: '20万' },
  { val: '25000000', text: '25万' },
  { val: '30000000', text: '30万' },
  { val: '31000000', text: '31万' },
  { val: '32000000', text: '32万' },
  { val: '33000000', text: '33万' }
];
const amountMax46W = [
  { val: '5000000', text: '5万' },
  { val: '10000000', text: '10万' },
  { val: '15000000', text: '15万' },
  { val: '20000000', text: '20万' },
  { val: '25000000', text: '25万' },
  { val: '30000000', text: '30万' },
  { val: '35000000', text: '35万' },
  { val: '40000000', text: '40万' },
  { val: '45000000', text: '45万' },
  { val: '46000000', text: '46万' }
];
const amountMax50W = [
  { val: '5000000', text: '5万' },
  { val: '10000000', text: '10万' },
  { val: '15000000', text: '15万' },
  { val: '20000000', text: '20万' },
  { val: '25000000', text: '25万' },
  { val: '30000000', text: '30万' },
  { val: '35000000', text: '35万' },
  { val: '40000000', text: '40万' },
  { val: '45000000', text: '45万' },
  { val: '50000000', text: '50万' }
];
const amountMax70W = [
  { val: '5000000', text: '5万' },
  { val: '10000000', text: '10万' },
  { val: '15000000', text: '15万' },
  { val: '20000000', text: '20万' },
  { val: '25000000', text: '25万' },
  { val: '30000000', text: '30万' },
  { val: '35000000', text: '35万' },
  { val: '40000000', text: '40万' },
  { val: '45000000', text: '45万' },
  { val: '50000000', text: '50万' },
  { val: '55000000', text: '55万' },
  { val: '60000000', text: '60万' },
  { val: '65000000', text: '65万' },
  { val: '70000000', text: '70万' },
];

const amountRuleItems: Array<RuleItem> = [{
  observer: 'amount',
  subjects: ['age', 'area', 'duties.0'],
  '0->17,,N': {
    type: 'ARRAY',
    options: amountMax50W
  },
  '0->17,,Y': {
    type: 'ARRAY',
    options: amountMax33W
  },
  '18->40,A,N': {
    type: 'ARRAY',
    options: amountMax70W
  },
  '18->40,A,Y': {
    type: 'ARRAY',
    options: amountMax46W
  },
  '18->40,B,N': {
    type: 'ARRAY',
    options: amountMax50W
  },
  '18->40,B,Y': {
    type: 'ARRAY',
    options: amountMax33W
  },
  '41->50,A,N': {
    type: 'ARRAY',
    options: amountMax50W
  },
  '41->50,A,Y': {
    type: 'ARRAY',
    options: amountMax33W
  },
  '41->50,B,N': {
    type: 'ARRAY',
    options: amountMax30W
  },
  '41->50,B,Y': {
    type: 'ARRAY',
    options: amountMax20W
  },
  '51->55,A,N': {
    type: 'ARRAY',
    options: amountMax30W
  },
  '51->55,A,Y': {
    type: 'ARRAY',
    options: amountMax20W
  },
  '51->55,B,N': {
    type: 'ARRAY',
    options: amountMax10W
  },
  '51->55,B,Y': {
    type: 'ARRAY',
    options: amountMax6W
  }
}];


const payPeriodMaxY5 = [
  { val: 'SP', text: '一次性缴纳' },
  { val: 'Y5', text: '5年交' }
];
const payPeriodMaxY10 = [
  { val: 'SP', text: '一次性缴纳' },
  { val: 'Y5', text: '5年交' },
  { val: 'Y10', text: '10年交' }
];
const payPeriodMaxY15 = [
  { val: 'SP', text: '一次性缴纳' },
  { val: 'Y5', text: '5年交' },
  { val: 'Y10', text: '10年交' },
  { val: 'Y15', text: '15年交' }
];
const payPeriodMaxY20 = [
  { val: 'SP', text: '一次性缴纳' },
  { val: 'Y5', text: '5年交' },
  { val: 'Y10', text: '10年交' },
  { val: 'Y15', text: '15年交' },
  { val: 'Y20', text: '20年交' }
];
const payPeriodMaxY25 = [
  { val: 'SP', text: '一次性缴纳' },
  { val: 'Y5', text: '5年交' },
  { val: 'Y10', text: '10年交' },
  { val: 'Y15', text: '15年交' },
  { val: 'Y20', text: '20年交' },
  { val: 'Y25', text: '25年交' }
];
const payPeriodMaxY30 = [
  { val: 'SP', text: '一次性缴纳' },
  { val: 'Y5', text: '5年交' },
  { val: 'Y10', text: '10年交' },
  { val: 'Y15', text: '15年交' },
  { val: 'Y20', text: '20年交' },
  { val: 'Y25', text: '25年交' },
  { val: 'Y30', text: '30年交' }
];

const payPeriodRuleItems: Array<RuleItem> = [{
  observer: 'payPeriod',
  subjects: ['age', 'insPeriod'],
  '0->30,': {
    type: 'ARRAY',
    options: []
  },
  '31->35,A70': {
    type: 'ARRAY',
    options: []
  },
  '31->35,O': {
    type: 'ARRAY',
    options: []
  },
  '36->40,': {
    type: 'ARRAY',
    options: []
  },
  '41->45,A70': {
    type: 'ARRAY',
    options: []
  },
  '41->45,O': {
    type: 'ARRAY',
    options: []
  },
  '46->50,A70': {
    type: 'ARRAY',
    options: []
  },
  '46->50,O': {
    type: 'ARRAY',
    options: []
  },
  '50->55,A70': {
    type: 'ARRAY',
    options: []
  },
  '50->55,O': {
    type: 'ARRAY',
    options: []
  }
}];