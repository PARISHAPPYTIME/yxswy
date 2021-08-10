export interface ConfigScheme {
    prot: number
    mongodb: {
        host: string
        port: number
        db: string
    }
}

export const devConfig: ConfigScheme = {
    prot: 3001,
    mongodb: {
        host: "localhost",
        port: 3004,
        db: "string"
    }
}
