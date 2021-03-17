
import { reactive } from 'vue'

export function User() {
    const person = reactive({
        username: 'admin'
    })
    const setPerson = () => {
        person.username = 'admin_super'
    }
    return { person, setPerson }
}