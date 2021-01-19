

export interface DateRule {
  type: 'DATE';
  minDate: string;
  maxDate: string;
}

export interface AgeRule {
  type: 'AGE';
  minAge: string;
  maxAge: string;
}

export interface ArrayRule {
  type: 'ARRAY';
  options: Array<{ title: string; label: string; value: string; }>;
}

export interface ValueItem {
  id: string; 
  value: string;
}

type Expr = string

export interface RuleItem {
  subjects: Array<string>;
  // 被影响控件的ID
  observer: string;
  // subjectsJoin 规则: 值范围或值使用英文逗号拼接,如果【18->40,A】或者【1,3,5】或者【1,,5】
  [subjectsJoin: string]: DateRule | AgeRule | ArrayRule | Array<string> | Expr;
}

export interface RuleResultItem {
  // 被影响控件的ID
  observer: string;
  result: DateRule | AgeRule | ArrayRule | Array<string> | Expr;
}



