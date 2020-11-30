

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
  type: 'DATE' | 'AGE' | 'ARRAY';
}

export interface RuleItem {
  subjects: Array<string>;
  observer: string;
  [subjectsJoin: string]: DateRule | AgeRule | ArrayRule | Array<string> | string;
}



