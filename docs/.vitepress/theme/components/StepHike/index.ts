
import StepHike from './StepHike.vue';
import Step from './Step.vue';
import StepDetails from './StepDetails.vue';
import StepCode from './StepCode.vue';

// 添加子组件到StepHike
StepHike.Step = Step;
StepHike.Details = StepDetails;
StepHike.Code = StepCode;

export default StepHike;
export { Step, StepDetails, StepCode };
