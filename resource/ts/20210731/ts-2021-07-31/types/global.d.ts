import type {
    ComponentRenderProxy,
    VNode,
    VNodeChild,
    ComponentPublicInstance,
    FunctionalComponent,
    PropType as VuePropType,
} from 'vue';

declare global {
    declare type Recordable<T = any> = Record<string, T>;
}