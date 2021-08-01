import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal'
import { isString } from '/@/utils/is';

import { Modal, message as Message, notification } from 'ant-design-vue';
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons-vue';

export interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'>{
    iconType: 'warning' | 'success' | 'error' | 'info';
}

export type ModalOptionsPartial = Partial<ModalOptionsEx> & Pick<ModalOptionsEx, 'content'>;

const getBaseOptions = () => {
    return {
        okText: 'OK',
        centered: true
    }
}

function renderContent({ content }: Pick<ModalOptionsEx, 'content'>) {
    if (isString(content)) {
        return <div innerHTML={`<div>${content as string}</div>`}></div>;
    } else {
        return content;
    }
}

function getIcon(iconType: string) {
  if (iconType === 'warning') {
    return <InfoCircleFilled class="modal-icon-warning" />;
  } else if (iconType === 'success') {
    return <CheckCircleFilled class="modal-icon-success" />;
  } else if (iconType === 'info') {
    return <InfoCircleFilled class="modal-icon-info" />;
  } else {
    return <CloseCircleFilled class="modal-icon-error" />;
  }
}

function createModalOptions(
    options: ModalOptionsPartial, icon: string
): ModalOptionsPartial {
    return {
        ...getBaseOptions(),
        ...options,
        content: renderContent(options),
        icon: getIcon(icon),
    }
}

function createErrorModal(options: ModalOptionsPartial) {
    return Modal.error(createModalOptions(options, 'close'))
}

export function useMessage() {
    return {
        createErrorModal,
        createMessage: Message,
    };
}