import type { ConfigScheme } from './dev'

export interface ProdConfigScheme extends ConfigScheme {
    logRoot: string
}

export const prodConfig: ProdConfigScheme = {
    logRoot: "testRoot",
    prot: 3001,
    mongodb: {
        host: "localhost",
        port: 3004,
        db: "string"
    }
}