import fs from 'fs'
import path from 'path'

const result = []

const isFolder = (file: any) => { return true }

function findAllFiles(root) {
    const files = fs.readdirSync(root)
    files.forEach(name => {
        const file = path.resolve(root, name)
        if (isFolder(file)) {
            findAllFiles(file)
        } else {
            result.push({
                path: file,
                check: false,
                content: fs.readFileSync(file)
            })
        }
    })
}