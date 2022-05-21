// @ts-nocheck
import { ExtractDefaultPropTypes, ExtractPropTypes } from 'vue';
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type GetPropType<T> = Optional<ExtractPropTypes<T>, keyof ExtractDefaultPropTypes<T>>;
export default GetPropType;