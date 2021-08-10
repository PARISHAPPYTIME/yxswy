import { devConfig } from './dev'
import { prodConfig } from './prod'
import type { ProdConfigScheme } from './prod'

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig

const { logRoot } = config as ProdConfigScheme;

export default config
