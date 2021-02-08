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
        
        const mergedValRange = _getMergedValRange(ruleItem);
        const subjectVals = subjects.map((subjectId) => {
            // 对于undefined处理成空字符串
            return ctrlNameValMapping[subjectId] == undefined ? '': ctrlNameValMapping[subjectId];
        });
        const matchedValJoinKey = _getMatchedRange(mergedValRange, subjectVals);

        return {
            observer: ruleItem.observer,
            result: ruleItem[matchedValJoinKey]
        }
    });

    return rtRules;
}

/**
 * 获取归并后的值范围
 * @param ruleItem 
 * @return 返回类型
 * subRangeMap = {
 *  sub0: {
 *     "1-18": 1,
 *     "19-40": 1,
 *  },
 *  sub1: {
 *      "A": 1,
 *      "B": 1
 *  }
 * }
 */
function _getMergedValRange(ruleItem :RuleItem) {
    const ruleImtemKeys = JSON.parse(JSON.stringify(ruleItem));
    delete ruleImtemKeys['subjects'];
    delete ruleImtemKeys['observer'];
    const valJoinKeys = Object.keys(ruleImtemKeys);

    const subRangeMap = {};
    valJoinKeys.forEach((valJoinItem) => {
       const subValsArr = valJoinItem.split(',');
       subValsArr.forEach((subValItem, subValIndex) => {
           const subValMap = subRangeMap['sub' + subValIndex] ? subRangeMap['sub' + subValIndex]: {};
           subValMap[subValItem] = 1;
           subRangeMap['sub' + subValIndex] = subValMap;
       });
    });

    return subRangeMap;
}


function _getMatchedRange(valRange: any, vals: Array<string>) {
    const matchedRange = [];
    vals.forEach((val, _i) => {
        const subI = valRange['sub' + _i];
        if(!subI) {
            return;
        }
        const subValRangeArr = Object.keys(subI);
        subValRangeArr.forEach((subValRangeItem) => {
            if(subValRangeItem.indexOf('->') < 0) {
                if(subValRangeItem === val) {
                    matchedRange.push(subValRangeItem);
                }
                return;
            }
            // subValRangeItem 包含->，可能是0->18,也可能是2000/01/01->2021/01/01
            // 两种情况都可以作为字符串通过ASCII序进行比较
            const itemArr = subValRangeItem.split('->');
            if(itemArr[0] < val && itemArr[1] > val) {
                matchedRange.push(subValRangeItem);
            }
            return;
        });
    });
    return matchedRange.join(',');
}
