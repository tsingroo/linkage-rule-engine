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

const ruleItems: Array<RuleItem> = [{
  observer: 'amount',
  subjects: ['age', 'area', 'duties.0'],
  '': {
    type: 'ARRAY',
    options: [{ 
      val: '',
      text: '' 
    }]
  }
}];