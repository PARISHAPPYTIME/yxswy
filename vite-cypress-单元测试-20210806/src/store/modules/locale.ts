export interface LocaleSetting {
    showPicker: number;
}

import { defineStore } from 'pinia';

interface LocaleState {
    localInfo: LocaleSetting;
}

export const localeSetting: LocaleSetting = {
    showPicker: 0,
};

const lsLocaleSetting = localeSetting;

export const useLocaleStore = defineStore({
    id: 'app-locale',
    state: (): LocaleState => ({
        localInfo: lsLocaleSetting
    }),
    getters: {
        getShowPicker(): number {
            return this.localInfo.showPicker
        }
    },
    actions: {
        setLocaleInfo(info: Partial<LocaleSetting>) {
            this.localInfo = { ...this.localInfo, ...info }
        }
    }
})
