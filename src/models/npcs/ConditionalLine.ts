import { DeclarativeConditional, SimpleConditional, ComplexConditional, OperatorConditional } from "./Enums";

export default class ConditionalLine extends Map<
        DeclarativeConditional | SimpleConditional | ComplexConditional | OperatorConditional, 
        string | string[] | number | boolean | ConditionalLine> {    
}