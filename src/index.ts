

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
    items: Array<{ title: string; label: string; value: string; }>;
  }
  
  export interface RuleItem {
    subjectFields: Array<string>;
    observerField: string;
    [subjectsJoin: string]: DateRule | AgeRule | ArrayRule | Array<string> | string;
  }
  
  
  
