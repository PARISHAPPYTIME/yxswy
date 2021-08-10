export const getConfigFileName = (env: Record<string, any>) => {
    return `_PRODUCTION_${env.VITE_GLOB_APP_SHORT_NAME || '__APP'}__CONF__`
        .toUpperCase()
        .replace(/\s/g, '')
}