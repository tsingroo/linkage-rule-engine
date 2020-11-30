import { RuleItem, ValueItem } from "./Rule.mdl";

export function getMatchedRules(rules: Array<RuleItem>, values: Array<ValueItem>): Array<RuleItem> {
    // 1.对既有值进行id的字母升序排序,并对id进行join连接,记为字符串 subjects_join_id_field.
    // 2.对rules的subjects并进行join连接,并过滤前缀为 subjects_join_field 的规则组
    // 3.对rules的 subjectsJoin(对subjects字段的值的join连接) 和 values数组的value项进行 正则匹配
    // 4.将过滤后的结果返回. (每一项的observer即为匹配到的项，而RuleItem的subjectsJoin为过滤后的取值结果)
    const sortedVals = values.sort((a, b) => {
        return (a.id < b.id) ? 1 : -1;
    });

    return [];
}
