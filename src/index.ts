import { RuleItem, RuleResultItem, ValueItem } from "./Rule.mdl";

/**
 * 根据页面需要筛选的控件的值和与之相关的规则，匹配出满足条件的控件的规则
 * @param rules 所有的规则
 * @param values 当前选中的控件和值
 */
export function getMatchedRules(rules: Array<RuleItem>, values: Array<ValueItem>): Array<RuleResultItem> {
    // 0.对于每一个规则都应该能匹配出一个唯一结果,对于undefined按空字符串处理
    const ctrlNameValMapping = {};
    values.forEach((valItem) => {
        ctrlNameValMapping[valItem.id] = valItem.value;
    });
    const rtRules:Array<RuleResultItem> = rules.map((ruleItem) => {
        const subjects = ruleItem.subjects;
        const subjectVals = subjects.map((subjectId) => {
            // 对于undefined处理成空字符串
            return ctrlNameValMapping[subjectId] == undefined ? '': ctrlNameValMapping[subjectId];
        }).join(',');
        
        if(!ruleItem[subjectVals]) {
            console.log(subjects.join(' ') + "组合下没有匹配到规则!");
            return ;
        }

        return {
            observer: ruleItem.observer,
            result: ruleItem[subjectVals],
        }
    });

    return rtRules;
}
